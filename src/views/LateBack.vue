<template>
  <div>
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
        申请晚归
      </div>
    </div>
    <div style="padding: 15px">
      <el-table :data="myLateBack01" stripe style="width: 100%">
        <el-table-column
          prop="applyTime"
          label="申请时间"
          :formatter="timeFormatter"
        >
        </el-table-column>
        <el-table-column
          prop="backTime"
          label="归寝时间"
          :formatter="timeFormatter"
        >
        </el-table-column>
        <el-table-column prop="reason" label="晚归原因"> </el-table-column>
        <el-table-column prop="phone" label="联系方式"> </el-table-column>
        <el-table-column prop="state" label="状态">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span v-if="scope.row.state == 0">已申请</span>
              <span v-if="scope.row.state == 1">已通过</span>
              <span v-if="scope.row.state == 2">未通过</span>
              <span v-if="scope.row.state == 3">已取消</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="small"
              @click="toEdit(scope.row)"
              :disabled="scope.row.state != 0"
              >编辑申请</el-button
            >
            <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              :icon="InfoFilled"
              icon-color="red"
              title="确定要取消吗?"
              @confirm="deleteAdd(scope.row.id)"
              @cancel="cancelEvent"
              style="margin-left: 100px"
            >
              <template #reference>
                <el-button size="small" :disabled="scope.row.state != 0"
                  >取消申请</el-button
                >
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="编辑申请" v-model="isEdit">
        <el-form :model="editLateBack01" label-width="120px" ref="editForm">
          <el-form-item
            label="归寝时间"
            prop="backTime"
            :rules="[{ required: true, message: 'backTime is required' }]"
          >
            <el-date-picker
              v-model="editLateBack01.backTime"
              type="datetime"
              placeholder="Select date and time"
            />
          </el-form-item>
          <el-form-item
            label="晚归原因"
            prop="reason"
            :rules="[{ required: true, message: 'reason is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="editLateBack01.reason"
            />
          </el-form-item>

          <el-form-item
            label="联系方式"
            prop="phone"
            :rules="[{ required: true, message: 'phone is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="editLateBack01.phone"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitEditLateBack()"
              >确定</el-button
            >
            <el-button @click="isEdit = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog title="申请晚归" v-model="isAdd">
        <el-form :model="addLateBack01" label-width="120px" ref="addForm">
          <el-form-item
            label="归寝时间"
            prop="backTime"
            :rules="[{ required: true, message: 'backTime is required' }]"
          >
            <el-date-picker
              v-model="addLateBack01.backTime"
              type="datetime"
              placeholder="Select date and time"
            />
          </el-form-item>
          <el-form-item
            label="晚归原因"
            prop="reason"
            :rules="[{ required: true, message: 'reason is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="addLateBack01.reason"
            />
          </el-form-item>

          <el-form-item
            label="联系方式"
            prop="phone"
            :rules="[{ required: true, message: 'phone is required' }]"
          >
            <el-input
              type="text"
              autocomplete="off"
              v-model="addLateBack01.phone"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitAddLateBack()"
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
import { Student, LateBack } from "@/datasource/Types";
import { ElMessage, ElMessageBox, UploadProps } from "element-plus";
import { tr } from "element-plus/lib/locale";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const router = useRouter();
    var student: Student = {};
    var myLateBack: LateBack[] = [];
    var myLateBack01 = ref(myLateBack);
    var isEdit = ref(false);
    var isAdd = ref(false);
    var editLateBack: LateBack = {};
    var editLateBack01 = ref(editLateBack);
    var addLateBack: LateBack = {};
    var addLateBack01 = ref(addLateBack);
    var addForm = ref(null);
    var editForm = ref(null);
    var states = [
      { value: "已申请", index: 0 },
      { value: "已通过", index: 1 },
      { value: "未通过", index: 2 },
    ];
    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "true") {
      var si = sessionStorage.getItem("studentInfo");
      if (si != null) {
        student = JSON.parse(si);
      }
    }

    axios.get(`/getSelfLateBack/${student.studentNumber}`).then((resp) => {
      if (resp && resp.data.code == 200) {
        if (resp.data.data.lateBacks != null) {
          myLateBack01.value = resp.data.data.lateBacks;
        }
      }
    });

    function toEdit(lateBack: LateBack) {
      isEdit.value = true;
      editLateBack01.value.id = lateBack.id;
      editLateBack01.value.applyTime = lateBack.applyTime;
      editLateBack01.value.backTime = lateBack.backTime;
      editLateBack01.value.state = lateBack.state;
      editLateBack01.value.reason = lateBack.reason;
      editLateBack01.value.phone = lateBack.phone;
    }
    function toAdd() {
      isAdd.value = true;
    }

    function submitEditLateBack() {
      editForm.value.validateField("phone", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的联系方式不能为空");
        }
      });
      editForm.value.validateField("reason", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的晚归原因不能为空");
        }
      });
      editForm.value.validateField("backTime", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的归寝时间不能为空");
        }
      });
      editForm.value.validate((valid) => {
        if (valid == true) {
          axios.post(`/updateLateBack`, editLateBack01.value).then((resp) => {
            if (resp && resp.data.code == 200) {
              axios
                .get(`/getSelfLateBack/${student.studentNumber}`)
                .then((resp) => {
                  if (resp && resp.data.code == 200) {
                    if (resp.data.data.lateBacks != null) {
                      myLateBack01.value = resp.data.data.lateBacks;
                    }
                  }
                });
            }
            isEdit.value = false;
            ElMessage({
              message: "编辑成功",
              type: "success",
            });
          });
        }
      });
    }

    function submitAddLateBack() {
      addForm.value.validateField("phone", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的联系方式不能为空");
        }
      });
      addForm.value.validateField("reason", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的晚归原因不能为空");
        }
      });
      addForm.value.validateField("backTime", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的归寝时间不能为空");
        }
      });
      addForm.value.validate((valid) => {
        if (valid == true) {
          addLateBack01.value.applyTime = new Date();
          addLateBack01.value.studentNumber = student.studentNumber;
          addLateBack01.value.state = 0;
          axios.post(`/applyLateBack`, addLateBack01.value).then((resp) => {
            if (resp && resp.data.code == 200) {
              axios
                .get(`/getSelfLateBack/${student.studentNumber}`)
                .then((resp) => {
                  if (resp && resp.data.code == 200) {
                    if (resp.data.data.lateBacks != null) {
                      myLateBack01.value = resp.data.data.lateBacks;
                    }
                  }
                });
              isAdd.value = false;
              ElMessage({
                message: "申请成功",
                type: "success",
              });
            }
          });
        }
      });
    }
    function deleteAdd(id: string) {
      axios.post(`/deleteLateBack/${id}`).then((resp) => {
        if (resp && resp.data.code == 200) {
          axios
            .get(`/getSelfLateBack/${student.studentNumber}`)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                axios
                  .get(`/getSelfLateBack/${student.studentNumber}`)
                  .then((resp) => {
                    if (resp && resp.data.code == 200) {
                      if (resp.data.data.lateBacks != null) {
                        myLateBack01.value = resp.data.data.lateBacks;
                      }
                    }
                  });
                ElMessage({
                  message: "取消成功",
                  type: "success",
                });
              }
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
      myLateBack01,
      addLateBack01,
      editLateBack01,
      isEdit,
      isAdd,
      toEdit,
      toAdd,
      states,
      submitEditLateBack,
      submitAddLateBack,
      addForm,
      editForm,
      deleteAdd,
      timeFormatter,
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
