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
          <h1 style="color: black">welcome</h1>
          <h1 style="color: black">宿舍应用系统</h1>
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
import { Admin, Student } from "@/datasource/Types";

export default defineComponent({
  setup() {
    const router = useRouter();
    const admin: Admin = {
      adminNumber: "admin",
      password: "123",
    };
    const admin01 = ref(admin);
    const student: Student = {
      studentNumber: "2018214215",
      password: "2018214215",
    };
    const student01 = ref(student);
    function submitadminlogin() {
      axios.post("/admin/login", admin01.value).then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            const token = resp.data.data.token;
            sessionStorage.setItem("token", token);
            console.log("进来了");
            router.replace(`/layout`);
          } else {
            router.replace(`/`);
          }
        }
      });
    }
    function submituserlogin() {
      axios.post("/user/login", student01.value).then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            const studentNumber = student01.value.studentNumber;
            if (typeof studentNumber == "string") {
              sessionStorage.setItem("studentNumber", studentNumber);
            }
            const token = resp.data.data.token;
            sessionStorage.setItem("token", token);
            console.log("进来了");
            router.replace(`/userlayout`);
          } else {
            router.replace(`/`);
          }
        }
      });
    }
    function userlogin() {
      // const obj2 = document.getElementById("form02");
      // if (obj2 != null) {
      //   obj2.style.display = "none";
      // }
      // const obj1 = document.getElementById("form01");
      // if (obj1 != null) {
      //   obj1.style.display = "block";
      // }
      alert("ddd");
    }

    return {
      submitadminlogin,
      submituserlogin,
      admin01,
      student01,
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
  border: solid darkgray;
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
