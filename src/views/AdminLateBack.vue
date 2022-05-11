<template>
  <div>
    <div style="padding: 15px">
      <el-table :data="apartmentLateBacks01" stripe style="width: 100%">
        <el-table-column prop="name" label="申请人"> </el-table-column>
        <el-table-column prop="dormitoryNumber" label="寝室号">
        </el-table-column>
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
              @click="toRefreshSchedule(scope.row)"
              :disabled="scope.row.state != 0"
              >审批</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="small"
              @click="toAdminSingleChat(scope.row)"
              style="color: #44cef6"
              >联系学生</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="" v-model="isRefreshSchedule">
        <el-form :model="editLateBack01" label-width="120px" ref="editForm">
          <el-radio-group v-model="editLateBack01.state">
            <el-radio :label="1" model-value="1">✅同意</el-radio>
            <el-radio :label="2" model-value="2">❌拒绝</el-radio>
          </el-radio-group>
          <el-form-item style="margin-left: 155px; margin-top: 10px">
            <el-button type="primary" @click="submitRefreshSchedule()"
              >确定</el-button
            >
            <el-button @click="isRefreshSchedule = false">取消</el-button>
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
import { Student, LateBack, Admin } from "@/datasource/Types";
import { ElMessage, ElMessageBox, UploadProps } from "element-plus";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const router = useRouter();
    var apartmentLateBacks: LateBack[] = [];
    var apartmentLateBacks01 = ref(apartmentLateBacks);
    var isRefreshSchedule = ref(false);
    var editLateBack: LateBack = {};
    var editLateBack01 = ref(editLateBack);
    var editForm = ref(null);
    var admin: Admin = {};
    var states = [
      { value: "已申请", index: 0 },
      { value: "已通过", index: 1 },
      { value: "未通过", index: 2 },
    ];
    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "false") {
      var ai = sessionStorage.getItem("adminInfo");
      if (ai != null) {
        admin = JSON.parse(ai);
      }
    }

    axios
      .post(`/getApartmentLateBacks/${admin.dormitoryBuilding}`)
      .then((resp) => {
        if (resp && resp.data.code == 200) {
          if (resp.data.data.lateBacks != null) {
            apartmentLateBacks01.value = resp.data.data.lateBacks;
            axios
              .get(
                `/student/getOneApartmentStudents/${admin.dormitoryBuilding}`
              )
              .then((resp) => {
                if (resp && resp.data.code == 200) {
                  if (resp.data.data.students != null) {
                    apartmentLateBacks01.value.forEach((item) => {
                      resp.data.data.students.forEach((s) => {
                        if (item.studentNumber == s.studentNumber) {
                          item.name = s.name;
                          item.dormitoryNumber = s.dormitoryNumber;
                        }
                      });
                    });
                  }
                }
              });
          }
        }
      });

    function toRefreshSchedule(lateBack: LateBack) {
      isRefreshSchedule.value = true;
      editLateBack01.value.id = lateBack.id;
      editLateBack01.value.applyTime = lateBack.applyTime;
      editLateBack01.value.backTime = lateBack.backTime;
      editLateBack01.value.reason = lateBack.reason;
      editLateBack01.value.phone = lateBack.phone;
    }

    function submitRefreshSchedule() {
      if (editLateBack01.value.state == null) {
        ElMessage.error("请选择同意或拒绝");
      } else {
        axios.post(`/updateLateBack`, editLateBack01.value).then((resp) => {
          if (resp && resp.data.code == 200) {
            editLateBack01.value = {};
            axios
              .post(`/getApartmentLateBacks/${admin.dormitoryBuilding}`)
              .then((resp) => {
                if (resp && resp.data.code == 200) {
                  if (resp.data.data.lateBacks != null) {
                    apartmentLateBacks01.value = resp.data.data.lateBacks;
                    axios
                      .get(
                        `/student/getOneApartmentStudents/${admin.dormitoryBuilding}`
                      )
                      .then((resp) => {
                        if (resp && resp.data.code == 200) {
                          if (resp.data.data.students != null) {
                            apartmentLateBacks01.value.forEach((item) => {
                              resp.data.data.students.forEach((s) => {
                                if (item.studentNumber == s.studentNumber) {
                                  item.name = s.name;
                                  item.dormitoryNumber = s.dormitoryNumber;
                                }
                              });
                            });
                          }
                        }
                      });
                  }
                }
              });
          }
          isRefreshSchedule.value = false;
          ElMessage({
            message: "更新成功",
            type: "success",
          });
        });
      }
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

    function toAdminSingleChat(lateBack:LateBack) {
      router.replace(
        `/adminSingleChat/${lateBack.studentNumber}/${lateBack.name}`
      );
    }
    return {
      apartmentLateBacks01,
      editLateBack01,
      isRefreshSchedule,
      toRefreshSchedule,
      states,
      submitRefreshSchedule,
      editForm,
      timeFormatter,
      toAdminSingleChat,
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
