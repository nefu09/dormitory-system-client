<template>
  <div style="width=1000px;height=500px;margin-top:30px;margin-left:20px">
    <div style="width: 100%; height: 50px">
      <div
        style="position: absolute; right: 100px; top: 100px"
        @click="isAdd = true"
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
            d="M520.784314 858.352941h-225.882353c-75.294118 0-136.784314-61.490196-136.784314-136.784314V222.117647c0-75.294118 61.490196-136.784314 
136.784314-136.784314h37.647059c10.039216 0 18.823529 8.784314 18.823529 18.82353s-8.784314 18.823529-18.823529 18.823529h-37.647059c-53.960784 0-99.137255 
43.921569-99.137255 99.137255v499.45098c0 53.960784 43.921569 99.137255 99.137255 99.137255h225.882353c10.039216 0 18.823529 8.784314 18.823529 18.82353s-8.784314 
18.823529-18.823529 18.823529zM863.372549 527.058824c-10.039216 
0-18.823529-8.784314-18.823529-18.82353V222.117647c0-53.960784-43.921569-99.137255-99.137255-99.137255H514.509804c-10.039216 
0-18.823529-8.784314-18.823529-18.823529s8.784314-18.823529 18.823529-18.82353h232.156863c75.294118 0 136.784314 61.490196 136.784313 136.784314v286.117647c-1.254902 
10.039216-10.039216 18.823529-20.078431 18.82353zM430.431373 122.980392h-5.019608c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 
18.82353-18.82353h5.019608c10.039216 0 18.823529 8.784314 18.823529 18.82353s-7.529412 18.823529-18.823529 18.823529z"
            fill="#0B3155"
            p-id="11864"
          ></path>
          <path
            d="M560.941176 254.745098H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 18.82353-18.82353h261.019607c10.039216 0 18.823529 8.784314 
18.82353 18.82353s-8.784314 18.823529-20.078432 18.823529zM727.843137 367.686275H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.82353s8.784314-18.823529 
18.82353-18.823529h426.666666c10.039216 0 18.823529 8.784314 18.82353 18.823529s-8.784314 18.823529-18.82353 18.82353zM656.313725 577.254902H301.176471c-10.039216 
0-18.823529-8.784314-18.82353-18.823529S289.882353 539.607843 301.176471 539.607843h355.137254c10.039216 0 18.823529 8.784314 18.82353 18.82353s-8.784314 18.823529-18.82353 
18.823529zM514.509804 475.607843H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 18.82353-18.82353h213.333333c10.039216 0 18.823529 
8.784314 18.823529 18.82353s-8.784314 18.823529-18.823529 18.823529z"
            fill="#0B3155"
            p-id="11865"
          ></path>
          <path
            d="M931.137255 769.254902h-238.431373c-10.039216 0-18.823529-8.784314-18.823529-18.823529s8.784314-18.823529 18.823529-18.82353h237.176471c10.039216 0 18.823529 
8.784314 18.823529 18.82353s-7.529412 18.823529-17.568627 18.823529z"
            fill="#0B3155"
            p-id="11866"
          ></path>
          <path
            d="M811.921569 880.941176c-10.039216 0-18.823529-8.784314-18.82353-18.823529v-238.431372c0-10.039216 8.784314-18.823529 18.82353-18.82353s18.823529 8.784314 18.823529 
18.82353v237.17647c0 11.294118-8.784314 20.078431-18.823529 20.078431z"
            fill="#0B3155"
            p-id="11867"
          ></path>
        </svg>
        申请报修
      </div>
    </div>

    <div style="position: absolute; width: 1150px">
      <el-row>
        <el-col
          v-for="item in repairs01.slice((nowPage - 1) * 3, nowEndNumber)"
          :key="item.id"
          :span="8"
          :offset="index > 0 ? 2 : 0"
          style="display: line-block"
          :gutter="50"
        >
          <div class="demo-image__lazy" style="width: 350px; height: 250px">
            <el-image
              v-for="url in item.url.split(';')"
              :key="url"
              :src="url"
              lazy
              style="width: 350px; height: 250px"
            />
          </div>
          <el-card
            class="box-card"
            style="display: line-block; width: 350px; height: 250px"
          >
            <template #header>
              <div class="card-header">
                <span>{{ item.name }}</span>
              </div>
            </template>
            <div style="width: 100%; height: 200px">
              <el-descriptions style="width: 100%; height: 200px">
                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon :style="iconStyle">
                        <user />
                      </el-icon>
                      寝室号
                    </div>
                  </template>
                  &ensp;&ensp;{{ item.dormitoryNumber }}
                </el-descriptions-item>

                <el-descriptions-item :formatter="timeFormatter">
                  <template #label>
                    <div class="cell-item">
                      <el-icon :style="iconStyle">
                        <location />
                      </el-icon>
                      申报日期
                    </div>
                  </template>
                  {{ item.date }}
                </el-descriptions-item>

                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon :style="iconStyle">
                        <tickets />
                      </el-icon>
                      状态
                    </div>
                  </template>
                  <el-tag size="small">
                    <span v-if="item.state == 0" style="color:black">已申请</span>
                    <span v-if="item.state == 1" >已接收</span>
                    <span v-if="item.state == 2" style="color:green">已完成</span>
                  </el-tag>
                </el-descriptions-item>

                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon :style="iconStyle">
                        <office-building />
                      </el-icon>
                      详情
                    </div>
                  </template>
                  {{item.description}}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 报修 -->
    <el-dialog title="报修" v-model="isAdd">
      <el-form :model="addRepair01" label-width="120px" ref="addForm">
        <el-form-item
          label="损坏物品"
          prop="name"
          :rules="[{ required: true, message: 'name is required' }]"
        >
          <el-input type="text" autocomplete="off" v-model="addRepair01.name" />
        </el-form-item>
        <el-form-item label="损坏详情" prop="description">
          <el-input
            type="text"
            autocomplete="off"
            v-model="addRepair01.description"
          />
        </el-form-item>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-remove="handleRemove"
          :file-list="fileList"
          :limit="3"
          :on-exceed="addOverLimit"
          ref="addPictures"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
        <el-form-item style="margin-left: 153px; margin-top: 20px">
          <el-button type="primary" @click="submitAddRepair()">确定</el-button>
          <el-button @click="isAdd = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 分页 -->
    <el-pagination
      background
      v-if="repairs01.length != 0"
      :page-size="3"
      layout="prev, pager, next"
      :total="repairs01.length"
      @current-change="handleCurrentChange"
      :current-page="nowPage"
      style="position: absolute; left: 700px; bottom: 10px"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Login, Student, Admin, Goods, Repair } from "@/datasource/Types";
import type { UploadFile, UploadProps, UploadUserFile } from "element-plus";
import { ElMessage } from "element-plus/lib/components";
export default defineComponent({
  setup() {
    const router = useRouter();
    var dialogImageUrl = ref("");
    var dialogVisible = ref(false);
    var repairs: Repair[] = [];
    var repairs01 = ref(repairs);
    var editRepair: Repair = {};
    var editRepair01 = ref(editRepair);
    var addRepair: Repair = {};
    var addRepair01 = ref(addRepair);
    var isEdit = ref(false);
    var isAdd = ref(false);
    var addForm = ref(null);
    var editForm = ref(null);
    var student: Student = {};
    var nowPage = ref(1);
    var nowEndNumber = ref(3);
    var addPictures = ref(null);
    var fileList1: UploadFile[] = [];
    var fileList = ref(fileList1);
    const urls = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
    ];
    var si = sessionStorage.getItem("studentInfo");
    if (si != null) {
      student = JSON.parse(si);
    }
    //获取该公寓同学发布的闲置产品
    axios.get(`/getSelfRepairs/${student.studentNumber}`).then((resp) => {
      if (resp && resp.data.code == 200) {
        if (resp.data.data.repairs != null) {
          repairs01.value = resp.data.data.repairs;
        }
      }
    });
    function handleCurrentChange(val) {
      nowPage.value = val;
      if (repairs01.value.length - (nowPage.value - 1) * 3 >= 3) {
        nowEndNumber.value = (nowPage.value - 1) * 3 + 3;
      } else {
        nowEndNumber.value = repairs01.value.length;
      }
    }
    var handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };
    function addOverLimit() {
      ElMessage({
        message: "最多只能上传三张图片",
        type: "warning",
      });
    }
    function submitAddRepair() {
      var result = [];
      addForm.value.validateField("name", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("损坏物品名称不能为空");
        }
      });
      if (fileList.value.length == 0) {
        ElMessage({
          message: "请至少上传一张照片",
          type: "warning",
        });
      }
      addForm.value.validate((valid) => {
        if (valid == true && fileList.value.length != 0) {
          fileList.value.forEach((file) => {
            var param = new FormData();
            param.append("file", file.raw);
            axios.post(`/addPicture`, param).then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.url != null) {
                  result.push(resp.data.data.url);
                  if (result.length == fileList.value.length) {
                    addRepair01.value.studentNumber = student.studentNumber;
                    addRepair01.value.dormitoryNumber = student.dormitoryNumber;
                    addRepair01.value.state = 0;
                    addRepair01.value.url = result.join(";");
                    var nowTime = new Date();
                    var year = nowTime.getFullYear();
                    var month =
                      nowTime.getMonth() + 1 < 10
                        ? "0" + (nowTime.getMonth() + 1)
                        : nowTime.getMonth();
                    var day =
                      nowTime.getDate() < 10
                        ? "0" + nowTime.getDate()
                        : nowTime.getDate();
                    addRepair01.value.date = year + "-" + month + "-" + day;
                    alert(addRepair01.value.date);
                    axios.post(`/addRepair`, addRepair01.value).then((resp) => {
                      if (resp && resp.data.code == 200) {
                        if (resp.data.data.repairs != null) {
                          repairs01.value = resp.data.data.repairs;
                          ElMessage({
                            message: "上传成功",
                            type: "success",
                          });
                          isAdd.value = false;
                          addRepair01.value = {};
                        }
                      }
                    });
                  }
                }
              }
            });
          });
        }
      });
    }
    function timeFormatter(row, column, cellValue, index) {
      let format = "YYYY-mm-dd HH:MM:SS";
      let date = new Date(cellValue);
      const dataItem = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString(),
      };
      Object.keys(dataItem).forEach((item) => {
        const ret = new RegExp(`(${item})`).exec(format);
        if (ret) {
          format = format.replace(
            ret[1],
            ret[1].length === 1
              ? dataItem[item]
              : dataItem[item].padStart(ret[1].length, "0")
          );
        }
      });
      return format;
    }
    return {
      repairs01,
      editRepair01,
      addRepair01,
      nowPage,
      nowEndNumber,
      handleCurrentChange,
      isEdit,
      isAdd,
      addForm,
      editForm,
      submitAddRepair,
      dialogImageUrl,
      dialogVisible,
      fileList,
      addOverLimit,
      addPictures,
      timeFormatter,
    };
  },
});
</script>
<style scoped>
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
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
