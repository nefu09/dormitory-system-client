<template>
  <div id="nav">
    <!--头部-->
    <Header />
    <!--主体-->
    <div style="display: flex">
      <!--侧边栏-->
      <Aside />
      <!--内容区域-->
      <router-view style="flex: 1" />
    </div>
  </div>
</template>

<style></style>
<script>
import Header from "@/views/AdminHeader.vue";
import Aside from "@/views/AdminAside.vue";

export default {
  name: "admin",
  components: {
    Header,
    Aside,
  },
};
</script>
