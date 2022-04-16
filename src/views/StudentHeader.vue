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
        src="../assets/student.png"
        style="
          width: 25px;
          height: 25px;
          position: absolute;
          top: 50px;
          left: 105px;
        "
      />
      <span>{{ student.name }}</span>
    </div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-dropdown>
        <span class="el-dropdown-link">
          student<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout()">修改密码</el-dropdown-item>
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Student } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const router = useRouter();
    var student: Student = {};
    var si = sessionStorage.getItem("studentInfo");
    if (si != null) {
      student = JSON.parse(si);
    }
    function logout() {
      sessionStorage.removeItem("token");
      router.replace(`/`);
    }
    return {
      logout,
      student,
    };
  },
});
</script>
