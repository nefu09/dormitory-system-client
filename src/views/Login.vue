<template>
  <div id="max">
    <div id="all">
      <div id="left">
        <img
          src="../assets/dormitory1.png"
          style="
            width: 100px;
            height: 100px;
            position: absolute;
            top: 280px;
            left: 200px;
          "
        />
        <div style="position: absolute; left: 150px; top: 100px">
          <h1 style="color: black; font-weight: 900">welcome</h1>
          <h1 style="color: black; font-weight: 900">宿舍应用系统</h1>
        </div>
      </div>
      <div id="right">
        <div id="user">
          <img
            src="../assets/user.png"
            style="
              width: 40px;
              position: absolute;
              left: 100px;
              display: inline-block;
            "
          />
          <input
            type="text"
            style="
              border: none;
              border-bottom: 1px solid cadetblue;
              outline: none;
              width: 250px;
              position: absolute;
              top: 20px;
              left: 148px;
              display: inline-block;
            "
            v-model="login01.userName"
            placeholder="请输入用户名"
          />
        </div>
        <div id="password">
          <img
            src="../assets/password.png"
            style="
              width: 40px;
              position: absolute;
              left: 100px;
              display: inline-block;
            "
          />
          <input
            type="password"
            style="
              border: none;
              border-bottom: 1px solid cadetblue;
              outline: none;
              width: 250px;
              position: absolute;
              top: 20px;
              left: 148px;
              display: inline-block;
            "
            v-model="login01.password"
            placeholder="请输入密码"
          />
        </div>
        <div id="login">
          <button
            @click="userlogin()"
            style="
              width: 300px;
              height: 40px;
              position: absolute;
              bottom: 100px;
              left: 100px;
              background-color: deepskyblue;
              border-radius: 20px;
            "
          >
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Login, Student, Admin } from "@/datasource/Types";
import { ElMessage } from "element-plus";

export default defineComponent({
  setup() {
    const router = useRouter();
    const login: Login = {
      userName: "1000001",
      password: "1000001",
    };
    const login01 = ref(login);
    // const student: Student = {};
    // const admin: Admin = {};
    // const student01 = ref(student);
    // const admin01 = ref(admin);
    function userlogin() {
      axios.post("/login", login01.value).then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            const token = resp.data.data.token;
            sessionStorage.setItem("token", token);
            const isStudent = resp.data.data.isStudent;
            if (isStudent == true) {
              router.replace(`/chat`);
              const studentInfo = resp.data.data.studentInfo;
              sessionStorage.setItem(
                "studentInfo",
                JSON.stringify(studentInfo)
              );
              sessionStorage.setItem("isStudent", "true");
            } else {
              router.replace(`/adminChat`);
              const adminInfo = resp.data.data.adminInfo;
              sessionStorage.setItem("adminInfo", JSON.stringify(adminInfo));
              sessionStorage.setItem("isStudent", "false");
            }
          } else {
            router.replace(`/`);
            ElMessage.error("账号或密码错误");
          }
        } else {
          router.replace(`/`);
        }
      });
    }

    return {
      login01,
      userlogin,
    };
  },
});
</script>
<style scoped>
#max {
  width: 100%;
  height: 100vh;
  background: url("../assets/back4.gif") no-repeat;
  background-size: 100vw 100vh;
}
#all {
  position: fixed;
  left: 200px;
  top: 180px;
  width: 1000px;
  height: 450px;
  display: inline-block;
}
#left {
  position: absolute;
  left: 0;
  width: 500px;
  height: inherit;
  display: inline-block;
  background-color: azure;
}
#right {
  position: absolute;
  width: 500px;
  height: inherit;
  display: inline-block;
}
#user {
  position: absolute;
  top: 100px;
  width: 500px;
  height: 80px;
  display: block;
}
#password {
  position: absolute;
  top: 200px;
  width: 500px;
  height: 80px;
  display: block;
}
</style>
