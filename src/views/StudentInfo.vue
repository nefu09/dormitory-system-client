<template>
  <div>
    <div style="width: 300px; position: absolute; left: 600px; top: 105px">
      <el-input
        v-model="search"
        class="w-50 m-2"
        size="large"
        placeholder="请输入学号、名字或者寝室号"
        :suffix-icon="Search"
        style="width: 220px"
      />
      <el-icon
        size="28px"
        style="position: absolute; left: 265px; top: 7px;x"
        @click="toSearch"
        ><search
      /></el-icon>
    </div>
    <div
      style="position: absolute; right: 100px; top: 100px"
      @click="isAdd = true"
    >
      <svg
        t="1652256708084"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3399"
        width="40"
        height="40"
      >
        <path
          d="M771.584 273.92l-91.989333 156.842667-5.461334 5.461333v427.52a83.114667 83.114667 0 0 1-81.066666 81.066667c-37.888 0-70.314667-189.269333-81.237334-270.506667-5.290667 81.237333-37.888 270.506667-81.066666 270.506667a83.285333 83.285333 0 0 1-81.237334-81.066667v-426.666667l-5.461333-5.461333-91.818667-156.842667c-21.674667-26.965333-10.922667-59.562667 21.504-75.776a56.661333 56.661333 0 0 1 81.237334 21.674667l81.066666 129.877333h151.552l81.237334-135.338666a66.218667 66.218667 0 0 1 86.528-21.504 55.125333 55.125333 0 0 1 16.213333 80.213333zM512 295.594667A108.202667 108.202667 0 1 1 620.032 187.733333 108.544 108.544 0 0 1 512 295.594667z"
          fill="#6DD77F"
          p-id="3400"
        ></path>
      </svg>
      添加学生
    </div>
    <div style="width=1000px;height=500px;margin-top:70px;margin-left:30px">
      <el-row>
        <el-col
          v-for="item in allStudents01.slice((nowPage - 1) * 6, nowEndNumber)"
          :key="item.studentNumber"
          :span="30"
          :offset="index > 0 ? 2 : 0"
          style="display: line-block"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            style="
              display: line-block;
              width: 350px;
              height: 300px;
              border: 1px black solid;
            "
          >
            <div style="margin-left: 234px">
              <el-popconfirm
                confirm-button-text="Yes"
                cancel-button-text="No"
                :icon="InfoFilled"
                icon-color="red"
                title="删除学生信息同时会删除学生账号，确定删除吗?"
                @confirm="deleteStudentInfo(item.studentNumber)"
                @cancel="cancelEvent"
              >
                <template #reference>
                  <el-button style="color: #50616d">删除学生信息</el-button>
                </template>
              </el-popconfirm>
            </div>
            <img
              :src="item.url"
              class="image"
              style="
                display: line-block;
                width: 150px;
                height: 150px;
                margin-top: 10px;
                border-radius: 100px 100px;
                border: 1px black solid;
              "
            />
            <div
              style="
                padding: 14px;
                height: 102px;
                width: 100%;
                position: absolute;
              "
            >
              <span
                style="
                  position: absolute;
                  left: 40px;
                  top: 10px;
                  color: #48c0a3;
                "
                >姓名:<span style="color: #1685a9">{{ item.name }}</span></span
              >
              <span
                style="
                  position: absolute;
                  left: 220px;
                  top: 10px;
                  color: #48c0a3;
                "
              >
                性别:<span style="color: #1685a9">{{ item.sex }}</span></span
              >
              <span
                style="
                  position: absolute;
                  left: 40px;
                  top: 40px;
                  color: #48c0a3;
                "
                >学号:<span style="color: #1685a9">{{
                  item.studentNumber
                }}</span>
              </span>
              <span
                style="
                  position: absolute;
                  left: 220px;
                  top: 40px;
                  color: #48c0a3;
                "
                >民族:<span v-if="item.nation != ''" style="color: #1685a9">{{
                  item.nation
                }}</span>
                <span v-if="item.nation == ''" style="color: black"
                  >暂无</span
                ></span
              >
              <span
                style="
                  position: absolute;
                  left: 40px;
                  top: 70px;
                  color: #48c0a3;
                "
                >出生日期:<span
                  v-if="item.studentNumber != null"
                  style="color: #1685a9"
                  >{{ item.birth }}</span
                >
                <span v-if="item.birth == null" style="color: black"
                  >暂无</span
                ></span
              >
              <span
                style="
                  position: absolute;
                  left: 220px;
                  top: 70px;
                  color: #48c0a3;
                "
                >寝室号:<span style="color: #1685a9">{{
                  item.dormitoryNumber
                }}</span></span
              >
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-pagination
        background
        v-if="allStudents01.length != 0"
        :page-size="6"
        layout="prev, pager, next"
        :total="allStudents01.length"
        @current-change="handleCurrentChange"
        :current-page="nowPage"
        style="position: absolute; left: 700px; bottom: 10px"
      />
    </div>
    <el-dialog title="新增学生信息" v-model="isAdd">
      <el-form :model="addStudent01" label-width="120px" ref="addForm">
        <el-form-item
          label="姓名"
          prop="name"
          :rules="[{ required: true, message: 'name is required' }]"
        >
          <el-input
            type="text"
            autocomplete="off"
            v-model="addStudent01.name"
          />
        </el-form-item>
        <el-form-item
          label="性别"
          prop="sex"
          :rules="[{ required: true, message: 'sex is required' }]"
        >
          <el-radio-group v-model="addStudent01.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="学号"
          prop="studentNumber"
          :rules="[{ required: true, message: 'studentNumber is required' }]"
        >
          <el-input
            type="text"
            autocomplete="off"
            v-model="addStudent01.studentNumber"
          />
        </el-form-item>

        <el-form-item
          label="寝室号"
          prop="dormitoryNumber"
          :rules="[
            { required: true, message: 'dormitoryNumber is required' },
            { type: 'number', message: 'dormitoryNumber must be a number' },
          ]"
        >
          <el-input
            type="text"
            autocomplete="off"
            v-model.number="addStudent01.dormitoryNumber"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitAddStudent()">确定</el-button>
          <el-button @click="isAdd = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter, useRoute } from "vue-router";
import { Login, Student, Admin, Notice } from "@/datasource/Types";
import { ElMessage } from "element-plus";
import { el, fa } from "element-plus/lib/locale";
import { Search } from "@element-plus/icons-vue";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const route = useRoute();
    const router = useRouter();
    var admin: Admin = {};
    var isEdit = ref(false);
    var isAdd = ref(false);
    var editStudent: Student = {};
    var editStudent01 = ref(editStudent);
    var addStudent: Student = {};
    var addStudent01 = ref(addStudent);
    var allStudents: Student[] = [];
    var allStudents01 = ref(allStudents);
    var nowPage = ref(1);
    var nowEndNumber = ref(6);
    var search = ref("");
    var addForm = ref(null);
    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "false") {
      var ai = sessionStorage.getItem("adminInfo");
      if (ai != null) {
        admin = JSON.parse(ai);
      }
    }
    axios
      .get(
        `/student/getOneApartmentStudentsOrderByDormitoryNumber/${admin.dormitoryBuilding}`
      )
      .then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            if (resp.data.data.students != null) {
              allStudents01.value = resp.data.data.students;
            }
          }
        }
      });
    function handleCurrentChange(val) {
      nowPage.value = val;
      if (allStudents01.value.length - (nowPage.value - 1) * 6 >= 6) {
        nowEndNumber.value = (nowPage.value - 1) * 6 + 6;
      } else {
        nowEndNumber.value = allStudents01.value.length;
      }
    }
    function toSearch() {
      if (search.value.trim() == "") {
        axios
          .get(
            `/student/getOneApartmentStudentsOrderByDormitoryNumber/${admin.dormitoryBuilding}`
          )
          .then((resp) => {
            if (resp) {
              if (resp.data.code == 200) {
                if (resp.data.data.students != null) {
                  allStudents01.value = resp.data.data.students;
                }
              }
            }
          });
      } else {
        axios
          .get(
            `/student/getOneApartmentStudentsBySearch/${admin.dormitoryBuilding}/${search.value}`
          )
          .then((resp) => {
            if (resp) {
              if (resp.data.code == 200) {
                if (resp.data.data.students != null) {
                  allStudents01.value = resp.data.data.students;
                }
              }
            }
          });
      }
    }
    function deleteStudentInfo(number: string) {
      if (search.value.trim() != "") {
        axios
          .post(
            `/student/deleteStudentToSearch/${number}/${admin.dormitoryBuilding}/${search.value}`
          )
          .then((resp) => {
            if (resp) {
              if (resp.data.code == 200) {
                if (resp.data.data.students != null) {
                  allStudents01.value = resp.data.data.students;
                }
              }
            }
          });
      } else {
        axios
          .post(`/student/deleteStudent/${number}/${admin.dormitoryBuilding}`)
          .then((resp) => {
            if (resp) {
              if (resp.data.code == 200) {
                if (resp.data.data.students != null) {
                  allStudents01.value = resp.data.data.students;
                }
              }
            }
          });
      }
    }
    function submitAddStudent() {
      addForm.value.validateField("dormitoryNumber", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("学生寝室号为空或者不是数字");
        }
      });
      addForm.value.validateField("studentNumber", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("学生学号不能为空");
        }
      });
      addForm.value.validateField("sex", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("学生性别不能为空");
        }
      });
      addForm.value.validateField("name", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("学生姓名不能为空");
        }
      });

      addForm.value.validate((valid) => {
        if (valid == true) {
          addStudent01.value.dormitoryBuilding = admin.dormitoryBuilding;
          addStudent01.value.url =
            "https://nljbucket.oss-cn-beijing.aliyuncs.com/1ac0e72c-2950-4198-ab43-62a225ac33d2-%E5%A4%B4%E5%83%8F.png?Expires=1667813010&OSSAccessKeyId=LTAI5tSRziSf7nWeTbGUiG7A&Signature=BxH1G4fb13WIImvjkemoxEPa7Fs%3D";
          axios
            .post(`/student/addStudent/`, addStudent01.value)
            .then((resp) => {
              if (resp) {
                if (resp.data.code == 200) {
                  if (resp.data.data.students != null) {
                    allStudents01.value = resp.data.data.students;
                    isAdd.value = false;
                    ElMessage({
                      message: "新增成功",
                      type: "success",
                    });
                  }
                } else {
                  ElMessage({
                    message: "该学号已经存在，请检查输入学号是否有误",
                    type: "error",
                  });
                }
              }
            });
        }
      });
    }
    return {
      allStudents01,
      isAdd,
      isEdit,
      editStudent01,
      addStudent01,
      handleCurrentChange,
      toSearch,
      search,
      deleteStudentInfo,
      submitAddStudent,
      addForm,
      nowPage,
      nowEndNumber,
    };
  },
});
</script>
<style scoped></style>
