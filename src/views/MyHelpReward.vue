<template>
  <div>
    <div style="width: 100%; height: 50px">
      <el-button type="text" style="margin-top: 20px" @click="toMyNeedReward()"
        >查看我的求助帖</el-button
      >
      <div
        style="position: absolute; right: 100px; top: 100px"
        @click="toAdd()"
      >
        <svg
          style="margin-top: 8px"
          t="1650870554870"
          class="icon"
          viewBox="0 0 1070 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="11863"
          width="30"
          height="30"
        >
          <path
            d="M520.784314 858.352941h-225.882353c-75.294118 0-136.784314-61.490196-136.784314-136.784314V222.117647c0-75.294118 61.490196-136.784314 136.784314-136.784314h37.647059c10.039216 0 18.823529 8.784314 18.823529 18.82353s-8.784314 18.823529-18.823529 18.823529h-37.647059c-53.960784 0-99.137255 43.921569-99.137255 99.137255v499.45098c0 53.960784 43.921569 99.137255 99.137255 99.137255h225.882353c10.039216 0 18.823529 8.784314 18.823529 18.82353s-8.784314 18.823529-18.823529 18.823529zM863.372549 527.058824c-10.039216 0-18.823529-8.784314-18.823529-18.82353V222.117647c0-53.960784-43.921569-99.137255-99.137255-99.137255H514.509804c-10.039216 0-18.823529-8.784314-18.823529-18.823529s8.784314-18.823529 18.823529-18.82353h232.156863c75.294118 0 136.784314 61.490196 136.784313 136.784314v286.117647c-1.254902 10.039216-10.039216 18.823529-20.078431 18.82353zM430.431373 122.980392h-5.019608c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 18.82353-18.82353h5.019608c10.039216 0 18.823529 8.784314 18.823529 18.82353s-7.529412 18.823529-18.823529 18.823529z"
            fill="#0B3155"
            p-id="11864"
          ></path>
          <path
            d="M560.941176 254.745098H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 18.82353-18.82353h261.019607c10.039216 0 18.823529 8.784314 18.82353 18.82353s-8.784314 18.823529-20.078432 18.823529zM727.843137 367.686275H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.82353s8.784314-18.823529 18.82353-18.823529h426.666666c10.039216 0 18.823529 8.784314 18.82353 18.823529s-8.784314 18.823529-18.82353 18.82353zM656.313725 577.254902H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.823529S289.882353 539.607843 301.176471 539.607843h355.137254c10.039216 0 18.823529 8.784314 18.82353 18.82353s-8.784314 18.823529-18.82353 18.823529zM514.509804 475.607843H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 18.82353-18.82353h213.333333c10.039216 0 18.823529 8.784314 18.823529 18.82353s-8.784314 18.823529-18.823529 18.823529z"
            fill="#0B3155"
            p-id="11865"
          ></path>
          <path
            d="M931.137255 769.254902h-238.431373c-10.039216 0-18.823529-8.784314-18.823529-18.823529s8.784314-18.823529 18.823529-18.82353h237.176471c10.039216 0 18.823529 8.784314 18.823529 18.82353s-7.529412 18.823529-17.568627 18.823529z"
            fill="#0B3155"
            p-id="11866"
          ></path>
          <path
            d="M811.921569 880.941176c-10.039216 0-18.823529-8.784314-18.82353-18.823529v-238.431372c0-10.039216 8.784314-18.823529 18.82353-18.82353s18.823529 8.784314 18.823529 18.82353v237.17647c0 11.294118-8.784314 20.078431-18.823529 20.078431z"
            fill="#0B3155"
            p-id="11867"
          ></path>
        </svg>
        发帖子
      </div>
    </div>
    <div style="padding: 15px">
      <el-table
        :data="myHelpRewards01"
        border
        stripe
        height="600px"
        style="width: 100%"
      >
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column prop="description" label="具体内容"> </el-table-column>
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="ownerPhone" label="联系方式"> </el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="toEdit(scope.row)"
              >编辑帖子</el-button
            >

            <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              :icon="InfoFilled"
              icon-color="red"
              title="确定要删除该帖子吗?"
              @confirm="deleteReward(scope.row)"
              @cancel="cancelEvent"
              style="margin-left: 100px"
            >
              <template #reference>
                <el-button size="small">删除帖子</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="编辑物品信息" v-model="isEdit">
        <el-form :model="editReward01" label-width="120px" ref="editForm">
          <el-form-item
            label="标题"
            prop="title"
            :rules="[{ required: true, message: 'title is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="editReward01.title"
            />
          </el-form-item>
          <el-form-item
            label="具体内容"
            prop="description"
            :rules="[{ required: true, message: 'description is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="editReward01.description"
            />
          </el-form-item>

          <el-form-item
            label="日期"
            prop="date"
            :rules="[{ required: true, message: 'date is required' }]"
          >
            <el-date-picker
              v-model="editReward01.date"
              type="datetime"
              placeholder="Select date and time"
            />
          </el-form-item>

          <el-form-item
            v-model="editReward01.state"
            label="状态"
            prop="state"
            :rules="[{ required: true, message: 'state is required' }]"
          >
            <el-select
              v-model="editReward01.state"
              class="m-2"
              placeholder="Select"
              size="large"
            >
              <el-option
                v-for="s in states"
                :key="s.value"
                :label="s.value"
                :value="s.index"
              />
            </el-select>
          </el-form-item>

          <el-form-item
            label="联系方式"
            prop="ownerPhone"
            :rules="[{ required: true, message: 'phone is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="editReward01.ownerPhone"
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
              v-model.number="editReward01.price"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitEditReward()"
              >确定</el-button
            >
            <el-button @click="isEdit = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog title="新增物品信息" v-model="isAdd">
        <el-form :model="newReward01" label-width="120px" ref="addForm">
          <el-form-item
            label="标题"
            prop="title"
            :rules="[{ required: true, message: 'title is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="newReward01.title"
            />
          </el-form-item>
          <el-form-item
            label="具体内容"
            prop="description"
            :rules="[{ required: true, message: 'description is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="newReward01.description"
            />
          </el-form-item>

          <el-form-item
            label="日期"
            prop="date"
            :rules="[{ required: true, message: 'date is required' }]"
          >
            <el-date-picker
              v-model="newReward01.date"
              type="datetime"
              placeholder="Select date and time"
            />
          </el-form-item>

          <el-form-item
            label="联系方式"
            prop="ownerPhone"
            :rules="[{ required: true, message: 'phone is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="newReward01.ownerPhone"
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
              v-model.number="newReward01.price"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitAddReward()"
              >确定</el-button
            >
            <el-button @click="isAdd = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Login, Student, Admin, Goods, Reward } from "@/datasource/Types";
import { ElMessage, ElMessageBox, UploadProps } from "element-plus";
import { tr } from "element-plus/lib/locale";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const router = useRouter();
    var student: Student = {};
    var myHelpRewards: Reward[] = [];
    var myHelpRewards01 = ref(myHelpRewards);
    var isEdit = ref(false);
    var isAdd = ref(false);
    var editReward: Reward = {};
    var editReward01 = ref(editReward);
    var addForm = ref(null);
    var editForm = ref(null);
    var states = [
      { value: "未完成", index: 0 },
      { value: "进行中", index: 1 },
      { value: "已完成", index: 2 },
    ];
    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "true") {
      var si = sessionStorage.getItem("studentInfo");
      if (si != null) {
        student = JSON.parse(si);
      }
    }
    var newReward: Reward = {
      kind: 0,
      state: 0,
      ownerNumber: student.studentNumber,
    };
    var newReward01 = ref(newReward);
    axios.post(`/getSelfHelpRewards/${student.studentNumber}`).then((resp) => {
      if (resp && resp.data.code == 200) {
        if (resp.data.data.rewards != null) {
          myHelpRewards01.value = resp.data.data.rewards;
        }
      }
    });
    function toEdit(reward: Reward) {
      isEdit.value = true;
      editReward01.value.id = reward.id;
      editReward01.value.title = reward.title;
      editReward01.value.price = reward.price;
      editReward01.value.ownerNumber = reward.ownerNumber;
      editReward01.value.description = reward.description;
      editReward01.value.ownerPhone = reward.ownerPhone;
      editReward01.value.state = reward.state;
      editReward01.value.date = reward.date;
      editReward01.value.kind = reward.kind;
    }
    function toAdd() {
      isAdd.value = true;
    }
    function deleteReward(reward: Reward) {
      axios.post(`/deleteReward/${reward.id}`).then((resp) => {
        if (resp && resp.data.code == 200) {
          axios
            .post(`/getSelfHelpRewards/${student.studentNumber}`)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.rewards != null) {
                  myHelpRewards01.value = resp.data.data.rewards;
                }
              }
            });
          ElMessage({
            message: "删帖成功",
            type: "success",
          });
        }
      });
    }
    function submitEditReward() {
      editForm.value.validateField("price", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的物品价格为空或不合法");
        }
      });
      editForm.value.validateField("ownerPhone", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("联系方式不能为空");
        }
      });
      editForm.value.validateField("date", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("日期不能为空");
        }
      });
      editForm.value.validateField("description", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("具体内容不能为空");
        }
      });
      editForm.value.validateField("title", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("标题不能为空");
        }
      });
      editForm.value.validate((valid) => {
        if (valid == true) {
          axios.post(`/updateReward`, editReward01.value).then((resp) => {
            if (resp && resp.data.code == 200) {
              axios
                .post(`/getSelfHelpRewards/${student.studentNumber}`)
                .then((resp) => {
                  if (resp && resp.data.code == 200) {
                    if (resp.data.data.rewards != null) {
                      myHelpRewards01.value = resp.data.data.rewards;
                    }
                  }
                });
              isEdit.value = false;
              ElMessage({
                message: "编辑成功",
                type: "success",
              });
            }
          });
        }
      });
    }
    function toMyNeedReward() {
      router.replace(`/myNeedReward`);
    }
    function submitAddReward() {
      addForm.value.validateField("price", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的物品价格为空或不合法");
        }
      });
      addForm.value.validateField("ownerPhone", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("联系方式不能为空");
        }
      });
      addForm.value.validateField("date", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("日期不能为空");
        }
      });
      addForm.value.validateField("description", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("具体内容不能为空");
        }
      });
      addForm.value.validateField("title", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("标题不能为空");
        }
      });
      addForm.value.validate((valid) => {
        if (valid == true) {
          axios.post(`/addReward`, newReward01.value).then((resp) => {
            if (resp && resp.data.code == 200) {
              axios
                .post(`/getSelfHelpRewards/${student.studentNumber}`)
                .then((resp) => {
                  if (resp && resp.data.code == 200) {
                    if (resp.data.data.rewards != null) {
                      myHelpRewards01.value = resp.data.data.rewards;
                    }
                  }
                });
              isAdd.value = false;
              ElMessage({
                message: "发帖成功",
                type: "success",
              });
            }
          });
        }
      });
    }
    return {
      myHelpRewards01,
      isEdit,
      isAdd,
      toEdit,
      toAdd,
      editReward01,
      newReward01,
      states,
      deleteReward,
      submitEditReward,
      toMyNeedReward,
      submitAddReward,
      addForm,
      editForm,
    };
  },
});
</script>
<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
