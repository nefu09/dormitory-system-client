<template>
  <div id="max">
    <button @click="build">建立</button>
    <button @click="message">发送消息</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    function build() {
      const ws = new WebSocket("ws://localhost");
    }
    function message() {
      console.log("222");
    }
    return {
      build,
      message,
    };
  },
});
</script>
<style scoped>
#max {
  margin-left: 500px;
  margin-top: 130px;
  border: 2px solid silver;
  width: 500px;
  height: 300px;
  background: url("../assets/loginback.jpeg") no-repeat;
}
#form01 {
  position: fixed;
  left: 500px;
  top: 220px;
  width: 500px;
  height: 200px;
  display: block;
}
#form02 {
  position: fixed;
  left: 500px;
  top: 220px;
  width: 500px;
  height: 200px;
  display: none;
}
#login {
  margin-right: 50px;
}
#teacherbutton {
  margin-top: 2px;
}
#adminbutton {
  margin-top: 2px;
}
</style>
