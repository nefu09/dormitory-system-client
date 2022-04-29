<template>
  <!-- <el-button type="primary" color="#626aef">
    发布闲置<el-icon class="el-icon--right"><Upload /></el-icon>
  </el-button> -->
  <div
    style="
      width: 50px;
      height: 50px;
      position: absolute;
      right: 10px;
      top: 405px;
    "
    @click="isUpload = true"
  >
    <img src="../assets/add.png" alt="" style="width: 50px; height: 50px" />
    <span style="font-size: 12px">发布闲置</span>
  </div>
  <div style="width=1000px;height=500px;margin-top:30px;margin-left:20px">
    <el-row>
      <el-col
        v-for="item in selfGoods01.slice((nowPage - 1) * 6, nowEndNumber)"
        :key="item.id"
        :span="30"
        :offset="index > 0 ? 2 : 0"
        style="display: line-block"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          style="display: line-block; width: 350px; height: 320px"
        >
          <img
            :src="item.url"
            class="image"
            style="display: line-block; width: 350px; height: 200px"
          />
          <div style="padding: 14px">
            <time class="time" style="">{{ item.name }}</time>
            <time class="time" style="margin-left: 10px; color: orange"
              >{{ item.price }}元</time
            >
            <el-button
              type="text"
              class="button"
              @click="ToEditGoods(item)"
              style="
                margin-left: 30px;
                color: #b0a4e3;
                display: block;
                margin-left: 110px;
                font-size: 17px;
              "
              >编辑物品信息</el-button
            >
            <div style="display: block">
              <el-popconfirm
                confirm-button-text="Yes"
                cancel-button-text="No"
                :icon="InfoFilled"
                icon-color="red"
                title="确定要下架该物品吗?"
                @confirm="deleteGoods(item.id)"
                @cancel="cancelEvent"
              >
                <template #reference>
                  <el-button>下架物品</el-button>
                </template>
              </el-popconfirm>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      background
      v-if="selfGoods01.length != 0"
      :page-size="6"
      layout="prev, pager, next"
      :total="selfGoods01.length"
      @current-change="handleCurrentChange"
      :current-page="nowPage"
      style="position: absolute; left: 700px; bottom: 10px"
    />
    <div
      v-if="selfGoods01.length == 0"
      style="position: absolute; left: 700px; bottom: 500px"
    >
      你还没有发布过物品,快去发布吧！
    </div>
  </div>

  <el-dialog title="发布闲置" v-model="isUpload">
    <el-form :model="UploadGooods01" label-width="120px" ref="addForm">
      <el-form-item
        label="名称"
        prop="name"
        :rules="[{ required: true, message: 'name is required' }]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model="UploadGooods01.name"
        />
      </el-form-item>
      <el-form-item
        label="价格"
        prop="price"
        :rules="[
          { required: true, message: 'price is required' },
          { type: 'number', message: 'price must be a number' },
        ]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model.number="UploadGooods01.price"
        />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="UploadGooods01.description" />
      </el-form-item>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        style="margin-right: 260px; margin-bottom: 20px"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
      <el-form-item>
        <el-button type="primary" @click="AddGoods()">确定</el-button>
        <el-button @click="isUpload = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="编辑物品信息" v-model="isEdit">
    <el-form :model="EditGooods01" label-width="120px" ref="editForm">
      <el-form-item
        label="名称"
        prop="name"
        :rules="[{ required: true, message: 'name is required' }]"
      >
        <el-input type="text" autocomplete="off" v-model="EditGooods01.name" />
      </el-form-item>
      <el-form-item
        label="价格"
        prop="price"
        :rules="[
          { required: true, message: 'price is required' },
          { type: 'number', message: 'price must be a number' },
        ]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model.number="EditGooods01.price"
        />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="EditGooods01.description" />
      </el-form-item>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="changeGoodsPicture"
        style="margin-right: 260px; margin-bottom: 20px"
      >
        <img v-if="EditGooods01.url" :src="EditGooods01.url" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
      <el-form-item>
        <el-button type="primary" @click="editGoods()">确定</el-button>
        <el-button @click="isEdit = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Login, Student, Admin, Goods } from "@/datasource/Types";
import { ElMessage, ElMessageBox, UploadProps } from "element-plus";
import { tr } from "element-plus/lib/locale";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const router = useRouter();
    var selfGoods: Goods[] = [];
    var selfGoods01 = ref(selfGoods);
    var nowNumber = "";
    var student: Student = {};
    var nowPage = ref(1);
    var nowEndNumber = ref(6);
    var UploadGooods: Goods = {};
    var UploadGooods01 = ref(UploadGooods);
    var EditGooods: Goods = {};
    var EditGooods01 = ref(EditGooods);
    var isUpload = ref(false);
    var isEdit = ref(false);
    var picture = ref(null);
    var changePicture = ref(null);
    var addForm = ref(null);
    var editForm = ref(null);
    var imageUrl = ref("");
    var si = sessionStorage.getItem("studentInfo");
    if (si != null) {
      student = JSON.parse(si);
      if (student.studentNumber != null) {
        nowNumber = student.studentNumber;
      }
    }
    //获取该公寓同学发布的闲置产品
    axios.post(`/getSelfGoods/${nowNumber}`).then((resp) => {
      if (resp && resp.data.code == 200) {
        if (resp.data.data.selfGoods != null) {
          selfGoods01.value = resp.data.data.selfGoods;
        }
      }
    });
    function handleCurrentChange(val) {
      nowPage.value = val;
      if (selfGoods01.value.length - (nowPage.value - 1) * 6 >= 6) {
        nowEndNumber.value = (nowPage.value - 1) * 6 + 6;
      } else {
        nowEndNumber.value = selfGoods01.value.length;
      }
    }
    function editGoods() {
      editForm.value.validateField("price", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的物品价格为空或不合法");
        }
      });
      editForm.value.validateField("name", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("物品名称不能为空");
        }
      });
      editForm.value.validate((valid) => {
        if (valid == true) {
          var param = new FormData();
          param.append("file", changePicture.value);
          if (changePicture.value != null) {
            axios.post(`/editPicture`, param).then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.url != null) {
                  EditGooods01.value.url = resp.data.data.url;
                  axios.post(`/editGoods`, EditGooods01.value).then((resp) => {
                    if (resp && resp.data.code == 200) {
                      //刷新该公寓同学发布的闲置产品
                      axios.post(`/getSelfGoods/${nowNumber}`).then((resp) => {
                        if (resp && resp.data.code == 200) {
                          if (resp.data.data.selfGoods != null) {
                            selfGoods01.value = resp.data.data.selfGoods;
                          }
                        }
                      });
                      ElMessage({
                        message: "编辑成功",
                        type: "success",
                      });
                    } else {
                      ElMessage.error("编辑失败");
                    }
                  });
                }
              }
            });
            isEdit.value = false;
          } else {
            axios.post(`/editGoods`, EditGooods01.value).then((resp) => {
              if (resp && resp.data.code == 200) {
                //刷新该公寓同学发布的闲置产品
                axios.post(`/getSelfGoods/${nowNumber}`).then((resp) => {
                  if (resp && resp.data.code == 200) {
                    if (resp.data.data.selfGoods != null) {
                      selfGoods01.value = resp.data.data.selfGoods;
                    }
                  }
                });
                ElMessage({
                  message: "编辑成功",
                  type: "success",
                });
              } else {
                ElMessage.error("编辑失败");
              }
            });
          }
          isEdit.value = false;
        }
      });
    }

    var handleAvatarSuccess: UploadProps["onSuccess"] = (
      response,
      uploadFile
    ) => {
      imageUrl.value = URL.createObjectURL(uploadFile.raw);
      picture.value = uploadFile.raw;
    };

    var changeGoodsPicture: UploadProps["onSuccess"] = (
      response,
      uploadFile
    ) => {
      EditGooods01.value.url = URL.createObjectURL(uploadFile.raw);
      changePicture.value = uploadFile.raw;
    };

    function ToEditGoods(Goods: Goods) {
      isEdit.value = true;
      EditGooods01.value.id = Goods.id;
      EditGooods01.value.name = Goods.name;
      EditGooods01.value.price = Goods.price;
      EditGooods01.value.ownerNumber = Goods.ownerNumber;
      EditGooods01.value.description = Goods.description;
      EditGooods01.value.url = Goods.url;
      EditGooods01.value.state = Goods.state;
    }
    function AddGoods() {
      addForm.value.validateField("price", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的物品价格为空或不合法");
        }
      });
      addForm.value.validateField("name", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("物品名称不能为空");
        }
      });
      addForm.value.validate((valid) => {
        if (valid == true) {
          var param = new FormData();
          param.append("file", picture.value);
          if (picture.value != null) {
            axios.post(`/uploadPicture`, param).then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.url != null) {
                  UploadGooods01.value.url = resp.data.data.url;
                  UploadGooods01.value.state = "已发布";
                  UploadGooods01.value.ownerNumber = student.studentNumber;
                  axios
                    .post(`/uploadGoods`, UploadGooods01.value)
                    .then((resp) => {
                      if (resp && resp.data.code== 200) {
                        //刷新该公寓同学发布的闲置产品
                        axios
                          .post(`/getSelfGoods/${nowNumber}`)
                          .then((resp) => {
                            if (resp && resp.data.code == 200) {
                              if (resp.data.data.selfGoods != null) {
                                selfGoods01.value = resp.data.data.selfGoods;
                              }
                            }
                          });
                        ElMessage({
                          message: "发布成功",
                          type: "success",
                        });
                      } else {
                        ElMessage.error("发布失败");
                      }
                    });
                }
              }
            });
            isUpload.value = false;
          } else {
            ElMessage.error("物品照片不能为空");
          }
        }
      });
    }
    function deleteGoods(id: string) {
      axios.post(`/deleteGoods/${id}`).then((resp) => {
        if (resp && resp.data.code == 200) {
          //刷新该公寓同学发布的闲置产品
          axios.post(`/getSelfGoods/${nowNumber}`).then((resp) => {
            if (resp && resp.data.code == 200) {
              if (resp.data.data.selfGoods != null) {
                selfGoods01.value = resp.data.data.selfGoods;
              }
            }
          });
          ElMessage({
            message: "下架成功",
            type: "success",
          });
        } else {
          ElMessage.error("下架失败");
        }
      });
    }
    return {
      nowPage,
      nowEndNumber,
      selfGoods01,
      handleCurrentChange,
      UploadGooods01,
      AddGoods,
      isUpload,
      picture,
      handleAvatarSuccess,
      imageUrl,
      addForm,
      isEdit,
      EditGooods01,
      ToEditGoods,
      editGoods,
      changePicture,
      editForm,
      changeGoodsPicture,
      deleteGoods,
    };
  },
});
</script>
<style scoped>
.tip {
  color: white;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
  padding: 10px;
  width: auto;
  display: inline-block !important;
  display: inline;
}
.right {
  background-color: deepskyblue;
}
.left {
  background-color: forestgreen;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
