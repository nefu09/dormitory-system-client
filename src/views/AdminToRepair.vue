<template>
  <div style="width=1000px;height=500px;margin-top:30px;margin-left:20px">
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
            style="display: line-block; width: 350px; height: 300px"
          >
            <template #header>
              <div class="card-header">
                <span>{{ item.name }}</span>
                <div style="">
                  <el-button
                    class="button"
                    type="text"
                    @click="toRefreshSchedule(item)"
                    :disabled="item.state == 3 || item.state == 2"
                    >更新进度</el-button
                  >
                  <el-button
                    class="button"
                    type="text"
                    @click="toAdminSingleChat(item)"
                    style="color: #00e09e"
                    >发起聊天</el-button
                  >
                </div>
              </div>
            </template>
            <div style="width: 100%; height: 200px">
              <el-descriptions style="width: 100%; height: 200px">
                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon><avatar /></el-icon>
                      申报人
                    </div>
                  </template>
                  &ensp;{{ item.studentName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon><house /></el-icon>
                      寝室号
                    </div>
                  </template>
                  &ensp;&ensp;{{ item.dormitoryNumber }}
                </el-descriptions-item>

                <el-descriptions-item :formatter="timeFormatter">
                  <template #label>
                    <div class="cell-item">
                      <el-icon><clock /></el-icon>
                      申报日期
                    </div>
                  </template>
                  {{ item.date }}
                </el-descriptions-item>

                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon><refresh-left /></el-icon>
                      状态
                    </div>
                  </template>
                  <el-tag size="small">
                    <span v-if="item.state == 0" style="color: black"
                      >已申请</span
                    >
                    <span v-if="item.state == 1">已接收</span>
                    <span v-if="item.state == 2" style="color: green"
                      >已完成</span
                    >
                    <span v-if="item.state == 3" style="color: #6b6882"
                      >已撤销</span
                    >
                  </el-tag>
                </el-descriptions-item>

                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon :style="iconStyle">
                        <tickets />
                      </el-icon>
                      详情
                    </div>
                  </template>
                  {{ item.description }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 更新 -->
    <el-dialog title="更新进度" v-model="isRefreshSchedule">
      <el-form :model="editRepair01" label-width="120px" ref="editForm">
        <el-steps :active="editRepair01.state + 1" finish-status="success">
          <el-step title="已申请" />
          <el-step title="已接收" />
          <el-step title="已完成" />
        </el-steps>
        <el-button style="margin-top: 70px; margin-left: 400px" @click="next"
          >更新</el-button
        >
        <el-form-item style="margin-left: 155px; margin-top: 10px">
          <el-button type="primary" @click="submitRefreshSchedule()"
            >确定</el-button
          >
          <el-button @click="isRefreshSchedule = false">取消</el-button>
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
import { el } from "element-plus/lib/locale";
export default defineComponent({
  setup() {
    const router = useRouter();
    var dialogImageUrl = ref("");
    var dialogVisible = ref(false);
    var repairs: Repair[] = [];
    var repairs01 = ref(repairs);
    var editRepair: Repair = {};
    var editRepair01 = ref(editRepair);
    var isRefreshSchedule = ref(false);
    var admin: Admin = {};
    var nowPage = ref(1);
    var nowEndNumber = ref(3);
    var fileList1: UploadFile[] = [];
    var fileList = ref(fileList1);
    var ai = sessionStorage.getItem("adminInfo");
    if (ai != null) {
      admin = JSON.parse(ai);
    }
    //获取该公寓同学发布的闲置产品
    axios
      .post(`/getApartmentRepairs/${admin.dormitoryBuilding}`)
      .then((resp) => {
        if (resp && resp.data.code == 200) {
          if (resp.data.data.repairs != null) {
            repairs01.value = resp.data.data.repairs;

            axios
              .get(
                `/student/getOneApartmentStudents/${admin.dormitoryBuilding}`
              )
              .then((resp) => {
                if (resp && resp.data.code == 200) {
                  if (resp.data.data.students != null) {
                    repairs01.value.forEach((item) => {
                      resp.data.data.students.forEach((s) => {
                        if (item.studentNumber == s.studentNumber) {
                          item.studentName = s.name;
                        }
                      });
                    });
                  }
                }
              });
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
    function toRefreshSchedule(item: Repair) {
      editRepair01.value.id = item.id;
      editRepair01.value.name = item.name;
      editRepair01.value.description = item.description;
      editRepair01.value.studentNumber = item.studentNumber;
      editRepair01.value.dormitoryNumber = item.dormitoryNumber;
      editRepair01.value.date = item.date;
      editRepair01.value.state = item.state;
      editRepair01.value.url = item.url;
      isRefreshSchedule.value = true;
    }
    function submitRefreshSchedule() {
      axios.post(`/updateRepair`, editRepair01.value).then((resp) => {
        if (resp && resp.data.code == 200) {
          axios
            .post(`/getApartmentRepairs/${admin.dormitoryBuilding}`)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.repairs != null) {
                  repairs01.value = resp.data.data.repairs;
                  axios
                    .get(
                      `/student/getOneApartmentStudents/${admin.dormitoryBuilding}`
                    )
                    .then((resp) => {
                      if (resp && resp.data.code == 200) {
                        if (resp.data.data.students != null) {
                          repairs01.value.forEach((item) => {
                            resp.data.data.students.forEach((s) => {
                              if (item.studentNumber == s.studentNumber) {
                                item.studentName = s.name;
                              }
                            });
                          });
                        }
                      }
                    });
                  isRefreshSchedule.value = false;
                  ElMessage({
                    message: "更新成功",
                    type: "success",
                  });
                }
              }
            });
        }
      });
    }
    function toAdminSingleChat(repair: Repair) {
      router.replace(
        `/adminSingleChat/${repair.studentNumber}/${repair.studentName}`
      );
    }
    function next() {
      if (editRepair01.value.state++ > 2) editRepair01.value.state = 0;
    }
    return {
      repairs01,
      editRepair01,
      nowPage,
      nowEndNumber,
      handleCurrentChange,
      dialogImageUrl,
      dialogVisible,
      fileList,
      timeFormatter,
      toAdminSingleChat,
      isRefreshSchedule,
      toRefreshSchedule,
      next,
      submitRefreshSchedule,
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
