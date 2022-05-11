<template>
  <div
    style="
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      display: flex;
    "
  >
    <div
      style="width: 200px; padding-left: 30px; font-weight: bold; color: grey"
    >
      <img
        src="../assets/admin.png"
        style="
          width: 25px;
          height: 25px;
          position: absolute;
          top: 50px;
          left: 105px;
        "
      />
      <span>{{ admin.name }}</span>
    </div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-dropdown>
        <span class="el-dropdown-link">
          admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toEditPassword()"
              >修改密码</el-dropdown-item
            >
          </el-dropdown-menu>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout()"
              >&nbsp;&nbsp;&nbsp;退出</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <el-dialog title="修改密码" v-model="isEditPassword">
    <el-form label-width="120px" ref="editPasswordForm" :model="password01">
      <el-form-item
        label="原密码"
        prop="originPassword"
        :rules="[{ required: true, message: ' 旧密码不能为空' }]"
      >
        <el-input
          type="password"
          autocomplete="off"
          v-model="password01.originPassword"
          placeholder="请输入旧密码"
        />
      </el-form-item>
      <el-form-item
        label="新密码"
        prop="newPassword"
        :rules="[{ required: true, message: '新密码不能为空' }]"
      >
        <el-input
          type="password"
          autocomplete="off"
          v-model="password01.newPassword"
          placeholder="请输入新密码"
        />
      </el-form-item>
      <el-form-item
        label="再次确认"
        prop="againPassword"
        :rules="[{ required: true, message: '确认密码不能为空' }]"
      >
        <el-input
          type="password"
          autocomplete="off"
          v-model="password01.againPassword"
          placeholder="请再次确认新密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="editPassword()">确定</el-button>
        <el-button @click="isEditPassword = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Admin, Password, Student } from "@/datasource/Types";
import { tr } from "element-plus/lib/locale";
import { ElMessage } from "element-plus";
export default defineComponent({
  setup() {
    const router = useRouter();
    var admin: Admin = {};
    var password: Password = {};
    var password01 = ref(password);
    var isEditPassword = ref(false);
    var editPasswordForm = ref(null);
    var ai = sessionStorage.getItem("adminInfo");
    if (ai != null) {
      admin = JSON.parse(ai);
    }
    function logout() {
      sessionStorage.removeItem("token");
      router.replace(`/`);
    }
    function editPassword() {
      editPasswordForm.value.validateField("originPassword", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("旧密码不能为空");
        }
      });
      editPasswordForm.value.validateField("newPassword", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("新密码不能为空");
        }
      });
      editPasswordForm.value.validateField("againPassword", (errorMessage) => {
        if (errorMessage == false) {
          ElMessage.error("确认密码不能为空");
        }
      });
      if (
        password01.value.newPassword &&
        password01.value.againPassword &&
        password01.value.newPassword != password01.value.againPassword
      ) {
        ElMessage.error("两次输入的新密码不一致");
      }
      editPasswordForm.value.validate((valid) => {
        if (
          valid == true &&
          password01.value.newPassword == password01.value.againPassword
        ) {
          axios
            .post(
              `/admin/editPassword/${admin.adminNumber}/${password01.value.originPassword}/${password01.value.newPassword}`
            )
            .then((resp) => {
              if (resp && resp.data.code == 200) {
                ElMessage({
                  message: "密码修改成功,请重新登录",
                  type: "success",
                });
                isEditPassword.value = false;
                sessionStorage.removeItem("token");
                router.replace(`/`);
              } else if (resp.data.code == 1007) {
                ElMessage.error("旧密码错误，修改失败");
              }
            });
        }
      });
    }
    function toEditPassword() {
      isEditPassword.value = true;
    }
    return {
      logout,
      admin,
      editPassword,
      password01,
      isEditPassword,
      toEditPassword,
      editPasswordForm,
    };
  },
});
</script>
