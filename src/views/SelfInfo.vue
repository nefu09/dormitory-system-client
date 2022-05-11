<template>
  <div class="max" style="margin: 20px; width: 100%; height: 600px">
    <div style="width: 48%; height: 100%; display: inline-block; float: left">
      <span style="position: absolute; left: 493px; top: 110px; font-size: 20px"
        >详细资料</span
      >
      <div
        style="
          width: 200px;
          height: 150px;
          position: absolute;
          left: 430px;
          top: 250px;
        "
      >
        <img
          :src="student01.url"
          alt=""
          style="
            width: 100px;
            height: 100px;
            border-radius: 50px 50px;
            position: absolute;
            left: 50px;
            top: 10px;
          "
          @click="isEditPicture = true"
        />
        <span style="position: absolute; left: 80px; top: 120px">{{
          student01.name
        }}</span>
      </div>
      <el-button
        type="primary"
        plain
        style="position: absolute; left: 475px; top: 550px"
        @click="toEdit()"
        >编辑个人信息</el-button
      >
    </div>
    <div
      style="width: 48%; height: 100%; display: inline-block; float: left"
    ></div>
    <span style="position: absolute; left: 820px; top: 130px; font-size: 20px"
      >基本信息:</span
    >
    <div
      style="
        width: 500px;
        height: 40px;

        position: absolute;
        left: 820px;
        top: 170px;
      "
    >
      <el-icon :size="40" style="position: absolute; left: 30px"
        ><postcard
      /></el-icon>
      <span style="position: absolute; left: 85px; top: 10px; color: #758a99"
        >姓名</span
      >
      <span
        v-if="student01.name"
        style="position: absolute; left: 170px; top: 10px"
        >{{ student01.name }}</span
      >
      <span
        v-if="!student01.name"
        style="position: absolute; left: 170px; top: 10px; color: #758a99"
        @click="isAddName = true"
        >添加</span
      >
    </div>
    <div
      style="
        width: 500px;
        height: 40px;

        position: absolute;
        left: 820px;
        top: 220px;
      "
    >
      <el-icon :size="40" style="position: absolute; left: 30px"
        ><postcard
      /></el-icon>
      <span style="position: absolute; left: 85px; top: 10px; color: #758a99"
        >性别</span
      >
      <span
        v-if="student01.sex"
        style="position: absolute; left: 170px; top: 10px"
        >{{ student01.sex }}</span
      >
      <span
        v-if="!student01.sex"
        style="position: absolute; left: 170px; top: 10px; color: #758a99"
        @click="isAddSex = true"
        >添加</span
      >
    </div>
    <div
      style="
        width: 500px;
        height: 40px;

        position: absolute;
        left: 820px;
        top: 270px;
      "
    >
      <el-icon :size="40" style="position: absolute; left: 30px"
        ><postcard
      /></el-icon>
      <span style="position: absolute; left: 85px; top: 10px; color: #758a99"
        >出生日期</span
      >
      <span
        v-if="student01.birth"
        style="position: absolute; left: 170px; top: 10px"
        >{{ student01.birth }}</span
      >
      <span
        v-if="!student01.birth"
        style="position: absolute; left: 170px; top: 10px; color: #758a99"
        @click="isAddBirth = true"
        >添加</span
      >
    </div>
    <div
      style="
        width: 500px;
        height: 40px;
        position: absolute;
        left: 820px;
        top: 320px;
      "
    >
      <el-icon :size="40" style="position: absolute; left: 30px"
        ><postcard
      /></el-icon>
      <span style="position: absolute; left: 85px; top: 10px; color: #758a99"
        >民族</span
      >
      <span
        v-if="student01.nation"
        style="position: absolute; left: 170px; top: 10px"
        >{{ student01.nation }}</span
      >
      <span
        v-if="!student01.nation"
        style="position: absolute; left: 170px; top: 10px; color: #758a99"
        @click="isAddNation = true"
        >添加</span
      >
    </div>

    <div
      style="
        width: 500px;
        height: 40px;

        position: absolute;
        left: 820px;
        top: 370px;
      "
    >
      <el-icon :size="40" style="position: absolute; left: 30px"
        ><postcard
      /></el-icon>
      <span style="position: absolute; left: 85px; top: 10px; color: #758a99"
        >学号</span
      >
      <span
        v-if="student01.studentNumber"
        style="position: absolute; left: 170px; top: 10px"
        >{{ student01.studentNumber }}</span
      >
      <span
        v-if="!student01.studentNumber"
        style="position: absolute; left: 170px; top: 10px; color: #758a99"
        @click="isAddStudentNumber = true"
        >添加</span
      >
    </div>
    <div
      style="
        width: 500px;
        height: 40px;

        position: absolute;
        left: 820px;
        top: 420px;
      "
    >
      <el-icon :size="40" style="position: absolute; left: 30px"
        ><postcard
      /></el-icon>
      <span style="position: absolute; left: 85px; top: 10px; color: #758a99"
        >寝室楼</span
      >
      <span
        v-if="student01.dormitoryBuilding"
        style="position: absolute; left: 170px; top: 10px"
        >{{ student01.dormitoryBuilding }}</span
      >
      <span
        v-if="!student01.dormitoryBuilding"
        style="position: absolute; left: 170px; top: 10px; color: #758a99"
        @click="isAddDormitoryBuilding = true"
        >添加</span
      >
    </div>
    <div
      style="
        width: 500px;
        height: 40px;

        position: absolute;
        left: 820px;
        top: 470px;
      "
    >
      <el-icon :size="40" style="position: absolute; left: 30px"
        ><postcard
      /></el-icon>
      <span style="position: absolute; left: 85px; top: 10px; color: #758a99"
        >寝室号</span
      >
      <span
        v-if="student01.dormitoryNumber"
        style="position: absolute; left: 170px; top: 10px"
        >{{ student01.dormitoryNumber }}</span
      >
      <span
        v-if="!student01.dormitoryNumber"
        style="position: absolute; left: 170px; top: 10px; color: #758a99"
        @click="isAddDormitoryNumber = true"
        >添加</span
      >
    </div>
    <span style="position: absolute; left: 820px; top: 526px; font-size: 20px"
      >个性签名:</span
    >
    <el-input
      style="position: absolute; left: 817px; top: 560px; width: 500px"
      :rows="5"
      type="textarea"
      placeholder="去编辑自己的个签吧！"
      v-model="student01.signature"
    />
  </div>

  <el-dialog title="完善信息" v-model="isAddName">
    <el-form :model="tstudent01" label-width="120px" ref="addNameForm">
      <el-form-item
        prop="name"
        label="名字"
        :rules="[{ required: true, message: 'name is required' }]"
      >
        <el-input type="text" autocomplete="off" v-model="tstudent01.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAddName()">确定</el-button>
        <el-button @click="isAddName = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="完善信息" v-model="isAddSex">
    <el-form :model="tstudent01" label-width="120px" ref="addSexForm">
      <el-form-item
        prop="sex"
        label="性别"
        :rules="[{ required: true, message: 'sex is required' }]"
      >
        <el-input type="text" autocomplete="off" v-model="tstudent01.sex" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAddSex()">确定</el-button>
        <el-button @click="isAddSex = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="完善信息" v-model="isAddBirth">
    <el-form :model="tstudent01" label-width="120px" ref="addBirthForm">
      <el-form-item
        prop="birth"
        label="出生日期"
        :rules="[{ required: true, message: 'birth is required' }]"
      >
        <el-date-picker
          v-model="tstudent01.birth"
          type="date"
          placeholder="Pick a day"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAddBirth()">确定</el-button>
        <el-button @click="isAddBirth = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="完善信息" v-model="isAddNation">
    <el-form :model="tstudent01" label-width="120px" ref="addNationForm">
      <el-form-item
        prop="nation"
        label="民族"
        :rules="[{ required: true, message: 'nation is required' }]"
      >
        <el-input type="text" autocomplete="off" v-model="tstudent01.nation" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAddNation()">确定</el-button>
        <el-button @click="isAddNation = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="完善信息" v-model="isAddStudentNumber">
    <el-form :model="tstudent01" label-width="120px" ref="addStudentNumberForm">
      <el-form-item
        prop="studentNumber"
        label="学号"
        :rules="[
          { required: true, message: 'studentNumber is required' },
          { type: 'number', message: 'studentNumber must be a number' },
        ]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model.number="tstudent01.studentNumber"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAddStudentNumber()"
          >确定</el-button
        >
        <el-button @click="isAddStudentNumber = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="完善信息" v-model="isAddDormitoryBuilding">
    <el-form
      :model="tstudent01"
      label-width="120px"
      ref="addDormitoryBuildingForm"
    >
      <el-form-item
        prop="dormitoryBuilding"
        label="寝室楼"
        :rules="[{ required: true, message: 'dormitoryBuilding is required' }]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model="tstudent01.dormitoryBuilding"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAddDormitoryBuilding()"
          >确定</el-button
        >
        <el-button @click="isAddDormitoryBuilding = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="完善信息" v-model="isAddDormitoryNumber">
    <el-form
      :model="tstudent01"
      label-width="120px"
      ref="addDormitoryNumberForm"
    >
      <el-form-item
        prop="dormitoryNumber"
        label="寝室号"
        :rules="[
          { required: true, message: 'dormitoryNumber is required' },
          { type: 'number', message: 'dormitoryNumber must be a number' },
        ]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model.number="tstudent01.dormitoryNumber"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAddDormitoryNumber()"
          >确定</el-button
        >
        <el-button @click="isAddDormitoryNumber = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="编辑信息" v-model="isEdit">
    <el-form :model="editStudent01" label-width="120px" ref="editForm">
      <el-form-item
        prop="name"
        label="名字"
        :rules="[{ required: true, message: 'name is required' }]"
      >
        <el-input type="text" autocomplete="off" v-model="editStudent01.name" />
      </el-form-item>
      <el-form-item
        prop="sex"
        label="性别"
        :rules="[{ required: true, message: 'sex is required' }]"
      >
        <el-input type="text" autocomplete="off" v-model="editStudent01.sex" />
      </el-form-item>
      <el-form-item
        prop="birth"
        label="出生日期"
        :rules="[{ required: true, message: 'birth is required' }]"
      >
        <el-date-picker
          v-model="editStudent01.birth"
          type="date"
          placeholder="Pick a day"
        />
      </el-form-item>
      <el-form-item
        prop="nation"
        label="民族"
        :rules="[{ required: true, message: 'nation is required' }]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model="editStudent01.nation"
        />
      </el-form-item>
      <el-form-item
        prop="dormitoryBuilding"
        label="寝室楼"
        :rules="[{ required: true, message: 'dormitoryBuilding is required' }]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model="editStudent01.dormitoryBuilding"
        />
      </el-form-item>
      <el-form-item
        prop="dormitoryNumber"
        label="寝室号"
        :rules="[
          { required: true, message: 'dormitoryNumber is required' },
          { type: 'number', message: 'dormitoryNumber must be a number' },
        ]"
      >
        <el-input
          type="text"
          autocomplete="off"
          v-model.number="editStudent01.dormitoryNumber"
        />
      </el-form-item>
      <el-form-item prop="signature" label="个性签名">
        <el-input
          type="text"
          autocomplete="off"
          v-model="editStudent01.signature"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitEdit()">确定</el-button>
        <el-button @click="isEdit = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog title="编辑照片" v-model="isEditPicture">
    <el-form :model="editStudent01" label-width="120px" ref="editPictureForm">
      <el-form-item prop="picture">
        <div style="margin-left: 118px; width: 180px; height: 180px">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img
              v-if="imageUrl"
              :src="imageUrl"
              class="avatar"
              style="width: 180px; height: 180px"
            />
            <el-icon
              v-else
              class="avatar-uploader-icon"
              style="width: 180px; height: 180px"
              ><Plus
            /></el-icon>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item style="margin-left: 142px">
        <el-button type="primary" @click="submitEditPicture()">确定</el-button>
        <el-button @click="isEditPicture = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Login, Student, Admin } from "@/datasource/Types";
import { ElMessage, ElMessageBox, UploadProps } from "element-plus";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const router = useRouter();
    var student: Student = {};
    var student01 = ref(student);
    var tstudent: Student = {};
    var tstudent01 = ref(tstudent);
    var editStudent: Student = {};
    var editStudent01 = ref(editStudent);
    var isAddName = ref(false);
    var isAddSex = ref(false);
    var isAddNation = ref(false);
    var isAddBirth = ref(false);
    var isAddStudentNumber = ref(false);
    var isAddDormitoryBuilding = ref(false);
    var isAddDormitoryNumber = ref(false);
    var addNameForm = ref(null);
    var addSexForm = ref(null);
    var addNationForm = ref(null);
    var addBirthForm = ref(null);
    var addStudentNumberForm = ref(null);
    var addDormitoryBuildingForm = ref(null);
    var addDormitoryNumberForm = ref(null);
    var editForm = ref(null);
    var isEdit = ref(false);
    var isEditPicture = ref(false);
    var editPictureForm = ref(null);
    var imageUrl = ref("");
    var picture = ref(null);
    var si = sessionStorage.getItem("studentInfo");
    if (si != null) {
      student01.value = JSON.parse(si);
      tstudent01.value = JSON.parse(si);
      if (student01.value.url == null || student01.value.url == "") {
        student01.value.url =
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
        tstudent01.value.url =
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
      }
    }

    function submitAddName() {
      addNameForm.value.validateField("name", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的名字不能为空");
        }
      });
      addNameForm.value.validate((valid) => {
        if (valid == true) {
          axios
            .post(`/student/editStudentInfo`, tstudent01.value)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );
                  student01.value = resp.data.data.student;
                  isAddName.value = false;
                }
              }
            });
        }
      });
    }

    function submitAddSex() {
      addSexForm.value.validateField("sex", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的性别不能为空");
        }
      });
      addSexForm.value.validate((valid) => {
        if (valid == true) {
          axios
            .post(`/student/editStudentInfo`, tstudent01.value)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );
                  student01.value = resp.data.data.student;
                  isAddSex.value = false;
                }
              }
            });
        }
      });
    }

    function submitAddNation() {
      addNationForm.value.validateField("nation", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的民族不能为空");
        }
      });
      addNationForm.value.validate((valid) => {
        if (valid == true) {
          axios
            .post(`/student/editStudentInfo`, tstudent01.value)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );
                  student01.value = resp.data.data.student;
                  isAddNation.value = false;
                }
              }
            });
        }
      });
    }

    function submitAddBirth() {
      addBirthForm.value.validateField("birth", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的出生日期不能为空");
        }
      });
      addBirthForm.value.validate((valid) => {
        if (valid == true) {
          axios
            .post(`/student/editStudentInfo`, tstudent01.value)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );
                  student01.value = resp.data.data.student;
                  isAddBirth.value = false;
                }
              }
            });
        }
      });
    }

    function submitAddStudentNumber() {
      addStudentNumberForm.value.validateField(
        "studentNumber",
        (errorMessage) => {
          if (errorMessage == false) {
            ElMessage.error("输入的学号为空或者不合法");
          }
        }
      );
      addStudentNumberForm.value.validate((valid) => {
        if (valid == true) {
          axios
            .post(`/student/editStudentInfo`, tstudent01.value)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );
                  student01.value = resp.data.data.student;
                  isAddStudentNumber.value = false;
                }
              }
            });
        }
      });
    }
    function submitAddDormitoryBuilding() {
      addDormitoryBuildingForm.value.validateField(
        "dormitoryBuilding",
        (errorMessage) => {
          if (errorMessage == false) {
            ElMessage.error("输入寝室楼不能为空");
          }
        }
      );
      addDormitoryBuildingForm.value.validate((valid) => {
        if (valid == true) {
          axios
            .post(`/student/editStudentInfo`, tstudent01.value)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );

                  student01.value = resp.data.data.student;
                  isAddDormitoryBuilding.value = false;
                }
              }
            });
        }
      });
    }

    function submitAddDormitoryNumber() {
      addDormitoryNumberForm.value.validateField(
        "dormitoryNumber",
        (errorMessage) => {
          if (errorMessage == false) {
            ElMessage.error("输入的寝室号为空或者不合法");
          }
        }
      );
      addDormitoryNumberForm.value.validate((valid) => {
        if (valid == true) {
          axios
            .post(`/student/editStudentInfo`, tstudent01.value)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );
                  student01.value = resp.data.data.student;
                  isAddDormitoryNumber.value = false;
                }
              }
            });
        }
      });
    }

    function submitEdit() {
      editForm.value.validateField("name", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的名字不能为空");
        }
      });
      editForm.value.validateField("sex", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的性别不能为空");
        }
      });
      editForm.value.validateField("nation", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的民族不能为空");
        }
      });
      editForm.value.validateField("birth", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的出生日期不能为空");
        }
      });
      editForm.value.validateField("dormitoryBuilding", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入寝室楼不能为空");
        }
      });
      editForm.value.validateField("dormitoryNumber", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("输入的寝室号为空或者不合法");
        }
      });
      editForm.value.validate((valid) => {
        if (valid == true) {
          axios
            .post(`/student/editStudentInfo`, editStudent01.value)
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );
                  student01.value = resp.data.data.student;
                  isEdit.value = false;
                }
              }
            });
        }
      });
    }
    function toEdit() {
      isEdit.value = true;
      editStudent01.value.studentNumber = student01.value.studentNumber;
      editStudent01.value.name = student01.value.name;
      editStudent01.value.nation = student01.value.nation;
      editStudent01.value.dormitoryBuilding = student01.value.dormitoryBuilding;
      editStudent01.value.dormitoryNumber = student01.value.dormitoryNumber;
      editStudent01.value.sex = student01.value.sex;
      editStudent01.value.birth = student01.value.birth;
      editStudent01.value.url = student01.value.url;
      editStudent01.value.signature = student01.value.signature;
    }
    var handleAvatarSuccess: UploadProps["onSuccess"] = (
      response,
      uploadFile
    ) => {
      imageUrl.value = URL.createObjectURL(uploadFile.raw);
      picture.value = uploadFile.raw;
    };

    function submitEditPicture() {
      if (picture.value == null) {
        ElMessage.error("物品照片不能为空");
      } else {
        var param = new FormData();
        param.append("file", picture.value);
        if (picture.value != null) {
          axios
            .post(
              `/student/uploadPicture/${student01.value.studentNumber}`,
              param
            )
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                if (resp.data.data.student != null) {
                  sessionStorage.setItem(
                    "studentInfo",
                    JSON.stringify(resp.data.data.student)
                  );
                  student01.value = resp.data.data.student;
                  isEditPicture.value = false;
                }
              }
            });
        }
      }
    }
    return {
      student01,
      isAddName,
      isAddSex,
      isAddNation,
      isAddBirth,
      isAddStudentNumber,
      isAddDormitoryBuilding,
      isAddDormitoryNumber,
      addNameForm,
      addSexForm,
      addNationForm,
      addBirthForm,
      addStudentNumberForm,
      addDormitoryBuildingForm,
      addDormitoryNumberForm,
      submitAddName,
      submitAddSex,
      submitAddNation,
      submitAddBirth,
      submitAddStudentNumber,
      submitAddDormitoryBuilding,
      submitAddDormitoryNumber,
      tstudent01,
      isEdit,
      toEdit,
      editStudent01,
      editForm,
      submitEdit,
      isEditPicture,
      submitEditPicture,
      editPictureForm,
      imageUrl,
      handleAvatarSuccess,
    };
  },
});
</script>
<style scoped>
.max {
  background: url("../assets/infoBack.jpeg");
  background-size: auto;
}
</style>
‘’////////////，