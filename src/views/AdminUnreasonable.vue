<template>
  <div>
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
      新增违纪
    </div>
    <div
      style="position: absolute; left: 300px; top: 100px"
      @click="download()"
    >
      <svg
        t="1653413136311"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2975"
        width="35"
        height="35"
      >
        <path
          d="M745.115849 864.675637L278.884151 864.675637c-37.630987 0-68.247224-30.616237-68.247224-68.247224L210.636927 218.360827c0-37.630987 30.615214-68.247224 68.247224-68.247224l466.231698 0c37.630987 0 68.247224 30.615214 68.247224 68.247224l0 578.067586C813.363073 834.0594 782.746836 864.675637 745.115849 864.675637L745.115849 864.675637zM278.884151 170.579686c-26.347012 0-47.781141 21.434129-47.781141 47.781141l0 578.067586c0 26.347012 21.434129 47.781141 47.781141 47.781141l466.231698 0c26.347012 0 47.781141-21.434129 47.781141-47.781141L792.89699 218.360827c0-26.347012-21.434129-47.781141-47.781141-47.781141L278.884151 170.579686 278.884151 170.579686z"
          fill=""
          p-id="2976"
        ></path>
        <path
          d="M371.827797 397.901587c-24.827405 0-45.025383-20.197977-45.025383-45.025383s20.197977-45.025383 45.025383-45.025383 45.025383 20.197977 45.025383 45.025383S396.655202 397.901587 371.827797 397.901587L371.827797 397.901587zM371.827797 318.083863c-19.184906 0-34.792341 15.607435-34.792341 34.792341s15.607435 34.792341 34.792341 34.792341 34.792341-15.607435 34.792341-34.792341S391.012703 318.083863 371.827797 318.083863L371.827797 318.083863z"
          fill=""
          p-id="2977"
        ></path>
        <path
          d="M512.018419 397.901587c-24.827405 0-45.025383-20.197977-45.025383-45.025383s20.197977-45.025383 45.025383-45.025383c24.826382 0 45.025383 20.197977 45.025383 45.025383S536.845825 397.901587 512.018419 397.901587L512.018419 397.901587zM512.018419 318.083863c-19.184906 0-34.792341 15.607435-34.792341 34.792341s15.607435 34.792341 34.792341 34.792341 34.792341-15.607435 34.792341-34.792341S531.203326 318.083863 512.018419 318.083863L512.018419 318.083863z"
          fill=""
          p-id="2978"
        ></path>
        <path
          d="M652.17118 397.901587c-24.827405 0-45.025383-20.197977-45.025383-45.025383s20.197977-45.025383 45.025383-45.025383 45.025383 20.197977 45.025383 45.025383S676.998585 397.901587 652.17118 397.901587L652.17118 397.901587zM652.17118 318.083863c-19.184906 0-34.792341 15.607435-34.792341 34.792341s15.607435 34.792341 34.792341 34.792341 34.792341-15.607435 34.792341-34.792341S671.356086 318.083863 652.17118 318.083863L652.17118 318.083863z"
          fill=""
          p-id="2979"
        ></path>
        <path
          d="M721.284119 550.373906l-418.531399 0c-5.651709 0-10.233042-4.582356-10.233042-10.233042s4.581333-10.233042 10.233042-10.233042l418.531399 0c5.650686 0 10.233042 4.582356 10.233042 10.233042S726.934804 550.373906 721.284119 550.373906L721.284119 550.373906z"
          fill=""
          p-id="2980"
        ></path>
        <path
          d="M721.284119 695.683095l-418.531399 0c-5.651709 0-10.233042-4.582356-10.233042-10.233042s4.581333-10.233042 10.233042-10.233042l418.531399 0c5.650686 0 10.233042 4.582356 10.233042 10.233042S726.934804 695.683095 721.284119 695.683095L721.284119 695.683095z"
          fill=""
          p-id="2981"
        ></path>
      </svg>
      生成报表
    </div>

    <div style="position: absolute; top: 150px; left: 300px">
      <el-table
        :data="Unreasonable01"
        style="width: 1000px"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="name" label="姓名" width="100" />
        <el-table-column prop="number" label="学号" width="150" />
        <el-table-column prop="content" label="违纪内容" width="400" />
        <el-table-column prop="date" label="日期" width="150" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="toEdit(scope.row)"
              >编辑违纪</el-button
            >
            <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              :icon="InfoFilled"
              icon-color="red"
              title="确定要删除吗?"
              @cancel="cancelEvent"
              @confirm="deleteUnreasonable(scope.row)"
              style="margin-left: 100px"
            >
              <template #reference>
                <el-button size="small">删除违纪</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 生成违纪 -->
    <el-dialog title="生成违纪" v-model="isAdd">
      <el-form :model="addUnreasonable01" label-width="120px" ref="addForm">
        <el-form-item
          label="学生"
          prop="info"
          :rules="[{ required: true, message: 'student is required' }]"
        >
          <el-select
            v-model="addUnreasonable01.info"
            class="m-2"
            placeholder="Select"
            size="middle"
          >
            <el-option
              v-for="item in allInfo"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="违纪内容"
          prop="content"
          :rules="[{ required: true, message: 'content is required' }]"
        >
          <el-input
            type="textarea"
            autocomplete="off"
            v-model="addUnreasonable01.content"
          />
        </el-form-item>

        <el-form-item
          label="日期"
          prop="date1"
          :rules="[{ required: true, message: 'date is required' }]"
        >
          <el-date-picker
            v-model="addUnreasonable01.date1"
            type="date"
            placeholder="Pick a day"
          />
        </el-form-item>

        <el-form-item style="margin-left: 170px">
          <el-button type="primary" @click="submitAddUnreasonable()"
            >确定</el-button
          >
          <el-button @click="isAdd = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 编辑违纪 -->
    <el-dialog title="编辑违纪" v-model="isEdit">
      <el-form :model="editUnreasonable01" label-width="120px" ref="editForm">
        <el-form-item
          label="学生"
          prop="info"
          :rules="[{ required: true, message: 'student is required' }]"
        >
          <el-select
            v-model="editUnreasonable01.info"
            class="m-2"
            placeholder="Select"
            size="middle"
          >
            <el-option
              v-for="item in allInfo"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item
          label="违纪内容"
          prop="content"
          :rules="[{ required: true, message: 'content is required' }]"
        >
          <el-input
            type="textarea"
            autocomplete="off"
            v-model="editUnreasonable01.content"
          />
        </el-form-item>

        <el-form-item
          label="日期"
          prop="date1"
          :rules="[{ required: true, message: 'date is required' }]"
        >
          <el-date-picker
            v-model="editUnreasonable01.date1"
            type="date"
            placeholder="Pick a day"
          />
        </el-form-item>

        <el-form-item style="margin-left: 170px">
          <el-button type="primary" @click="submitEditUnreasonable()"
            >确定</el-button
          >
          <el-button @click="isEdit = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter, useRoute } from "vue-router";
import {
  Login,
  Student,
  Admin,
  Notice,
  Unreasonable,
} from "@/datasource/Types";
import { ElMessage } from "element-plus";
import { fa } from "element-plus/lib/locale";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const route = useRoute();
    const router = useRouter();
    var isAdd = ref(false);
    var isEdit = ref(false);
    var admin: Admin = {};
    var unreasonable: Unreasonable[] = [];
    var Unreasonable01 = ref(unreasonable);
    var addunreasonable: Unreasonable = {};
    var addUnreasonable01 = ref(addunreasonable);
    var editUnreasonable: Unreasonable = {};
    var editUnreasonable01 = ref(editUnreasonable);
    var allStudent: Student[] = [];
    var allStudents01 = ref(allStudent);
    var allInfo = ref<string[]>([]);
    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "false") {
      var ai = sessionStorage.getItem("adminInfo");
      if (ai != null) {
        admin = JSON.parse(ai);
      }
    }

    axios
      .post(`/getApartmentUnreasonables/${admin.dormitoryBuilding}`)
      .then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            if (resp.data.data.unreasonables != null) {
              Unreasonable01.value = resp.data.data.unreasonables;
              axios
                .get(
                  `/student/getOneApartmentStudents/${admin.dormitoryBuilding}`
                )
                .then((resp) => {
                  if (resp) {
                    if (resp.data.code == 200) {
                      if (resp.data.data.students != null) {
                        allStudents01.value = resp.data.data.students;
                        allStudents01.value.forEach((s) => {
                          Unreasonable01.value.forEach((u) => {
                            if (u.number == s.studentNumber) {
                              u.name = s.name;
                            }
                          });
                          allInfo.value.push(s.studentNumber + "-" + s.name);
                        });
                      }
                    }
                  }
                });
            }
          }
        }
      });
    function submitAddUnreasonable() {
      if (addUnreasonable01.value.content == null) {
        ElMessage.error("违纪内容不能为空");
      } else if (addUnreasonable01.value.date1 == null) {
        ElMessage.error("违纪时间不能为空");
      } else if (addUnreasonable01.value.info == null) {
        ElMessage.error("违纪学生不能为空");
      } else {
        addUnreasonable01.value.kind = 1;
        addUnreasonable01.value.number =
          addUnreasonable01.value.info.split("-")[0];
        addUnreasonable01.value.name =
          addUnreasonable01.value.info.split("-")[1];

        var nowTime = addUnreasonable01.value.date1;
        var year = nowTime.getFullYear();
        var month =
          nowTime.getMonth() + 1 < 10
            ? "0" + (nowTime.getMonth() + 1)
            : nowTime.getMonth();
        var day =
          nowTime.getDate() < 10 ? "0" + nowTime.getDate() : nowTime.getDate();
        addUnreasonable01.value.date = year + "-" + month + "-" + day;
        axios
          .post(
            `/addUnreasonable/${admin.dormitoryBuilding}`,
            addUnreasonable01.value
          )
          .then((resp) => {
            if (resp) {
              if (resp.data.code == 200) {
                if (resp.data.data.unreasonables != null) {
                  Unreasonable01.value = resp.data.data.unreasonables;
                  axios
                    .get(
                      `/student/getOneApartmentStudents/${admin.dormitoryBuilding}`
                    )
                    .then((resp) => {
                      if (resp) {
                        if (resp.data.code == 200) {
                          if (resp.data.data.students != null) {
                            allStudents01.value = resp.data.data.students;
                            allStudents01.value.forEach((s) => {
                              Unreasonable01.value.forEach((u) => {
                                if (u.number == s.studentNumber) {
                                  u.name = s.name;
                                }
                              });
                              allInfo.value.push(
                                s.studentNumber + "-" + s.name
                              );
                            });
                          }
                        }
                      }
                    });
                  isAdd.value = false;
                  addUnreasonable01.value = {};
                  ElMessage({
                    message: "记录成功",
                    type: "success",
                  });
                }
              }
            }
          });
      }
    }

    function toEdit(unreasonable: Unreasonable) {
      editUnreasonable01.value.id = unreasonable.id;
      editUnreasonable01.value.number = unreasonable.number;
      editUnreasonable01.value.content = unreasonable.content;
      editUnreasonable01.value.info =
        unreasonable.number + "-" + unreasonable.name;
      editUnreasonable01.value.date = unreasonable.date;
      editUnreasonable01.value.date1 = new Date(editUnreasonable01.value.date);
      editUnreasonable01.value.kind = 1;
      isEdit.value = true;
    }

    function submitEditUnreasonable() {
      var nowTime = editUnreasonable01.value.date1;
      var year = nowTime.getFullYear();
      var month =
        nowTime.getMonth() + 1 < 10
          ? "0" + (nowTime.getMonth() + 1)
          : nowTime.getMonth();
      var day =
        nowTime.getDate() < 10 ? "0" + nowTime.getDate() : nowTime.getDate();
      editUnreasonable01.value.date = year + "-" + month + "-" + day;
      editUnreasonable01.value.number =
        editUnreasonable01.value.info.split("-")[0];
      axios
        .post(
          `/updateUnreasonable/${admin.dormitoryBuilding}`,
          editUnreasonable01.value
        )
        .then((resp) => {
          if (resp) {
            if (resp.data.code == 200) {
              if (resp.data.data.unreasonables != null) {
                Unreasonable01.value = resp.data.data.unreasonables;
                axios
                  .get(
                    `/student/getOneApartmentStudents/${admin.dormitoryBuilding}`
                  )
                  .then((resp) => {
                    if (resp) {
                      if (resp.data.code == 200) {
                        if (resp.data.data.students != null) {
                          allStudents01.value = resp.data.data.students;
                          allStudents01.value.forEach((s) => {
                            Unreasonable01.value.forEach((u) => {
                              if (u.number == s.studentNumber) {
                                u.name = s.name;
                              }
                            });
                            allInfo.value.push(s.studentNumber + "-" + s.name);
                          });
                        }
                      }
                    }
                  });
                isEdit.value = false;
                ElMessage({
                  message: "修改成功",
                  type: "success",
                });
              }
            }
          }
        });
    }
    function deleteUnreasonable(unreasonable: Unreasonable) {
      axios
        .post(
          `/deleteUnreasonable/${unreasonable.id}/${admin.dormitoryBuilding}`
        )
        .then((resp) => {
          if (resp) {
            if (resp.data.code == 200) {
              if (resp.data.data.unreasonables != null) {
                Unreasonable01.value = resp.data.data.unreasonables;

                axios
                  .get(
                    `/student/getOneApartmentStudents/${admin.dormitoryBuilding}`
                  )
                  .then((resp) => {
                    if (resp) {
                      if (resp.data.code == 200) {
                        if (resp.data.data.students != null) {
                          allStudents01.value = resp.data.data.students;
                          allStudents01.value.forEach((s) => {
                            Unreasonable01.value.forEach((u) => {
                              if (u.number == s.studentNumber) {
                                u.name = s.name;
                              }
                            });
                            allInfo.value.push(s.studentNumber + "-" + s.name);
                          });
                        }
                      }
                    }
                  });

                ElMessage({
                  message: "删除成功",
                  type: "success",
                });
              }
            }
          }
        });
    }
    function download() {
      axios.get(`/downloadUnreasonable/${admin.dormitoryBuilding}`);
    }
    return {
      Unreasonable01,
      submitAddUnreasonable,
      addUnreasonable01,
      editUnreasonable01,
      isAdd,
      isEdit,
      toEdit,
      submitEditUnreasonable,
      deleteUnreasonable,
      allInfo,
      download,
    };
  },
});
</script>
<style scoped></style>
