<template>
  <div>
    <el-menu
      style="width: 200px; min-height: calc(100vh-50px)"
      default-active="this.$route.path"
      router
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/chat">
        <template #title>即时通讯</template>
      </el-menu-item>
      <el-menu-item index="/notice" @click="updateHasNotReadNotice()">
        <template #title
          >群通知<svg
            v-if="hasNotReadNotice"
            t="1651560854974"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1721"
            width="15"
            height="15"
          >
            <path
              d="M512 322c-104.92 0-190 85.08-190 190s85.08 190 190 190 190-85.06 190-190-85.08-190-190-190z"
              p-id="1722"
              fill="#d81e06"
            ></path></svg
        ></template>
      </el-menu-item>

      <el-sub-menu>
        <template #title>二手交易</template>
        <el-menu-item index="/secondHand">随便逛逛</el-menu-item>
        <el-menu-item index="/mySecondHand">我的发布</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/reward">
        <template #title>公寓悬赏</template>
        <el-menu-item index="/needReward">求助帖</el-menu-item>
        <el-menu-item index="/helpReward">帮忙帖</el-menu-item>
        <el-menu-item index="/myNeedReward">我的悬赏</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/lateBack">
        <template #title>晚归申请</template>
      </el-menu-item>
      <el-menu-item index="/toRepair">
        <template #title>报修申请</template>
      </el-menu-item>
      <el-menu-item index="/selfInfo">
        <template #title>个人信息</template>
      </el-menu-item>
    </el-menu>

    <!-- 
    <el-scrollbar>
      <el-menu :default-openeds="['1', '3']">
        <el-sub-menu index="1">
          <template #title> Navigator One </template>
          <el-menu-item index="/chat">即时通讯</el-menu-item>
          <el-sub-menu>
            <template #title>二手交易</template>
            <el-menu-item index="/secondHand">逛逛</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar> -->
  </div>
</template>

<script lang="ts">
import axios from "@/axios";
import { Student } from "@/datasource/Types";
import { useRouter, useRoute } from "vue-router";
import { defineComponent, ref } from "vue";
import { af } from "element-plus/lib/locale";
export default defineComponent({
  name: "Aside",
  setup() {
    var route = useRoute();
    var student: Student = {};
    var hasNotReadNotice = ref();
    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "true") {
      var si = sessionStorage.getItem("studentInfo");
      if (si != null) {
        student = JSON.parse(si);
      }
    }

    function updateHasNotReadNotice() {
      hasNotReadNotice.value = false;
    }

    axios.get(`getNoticeReadDetail/${student.studentNumber}`).then((resp) => {
      if (resp && resp.data.code == 200) {
        if (resp.data.data.hasNotReadNotice != null) {
          hasNotReadNotice.value = resp.data.data.hasNotReadNotice;
        }
      }
    });

    return {
      hasNotReadNotice,
      updateHasNotReadNotice,
    };
  },
});
</script>