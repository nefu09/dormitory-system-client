<template>
  <div>
    <el-menu
      style="width: 200px; min-height: calc(100vh-50px)"
      default-active="this.$route.path"
      router
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/chat">
        <i class="el-icon-s-comment"></i>
        <template #title>即时通讯</template>
      </el-menu-item>
      <el-menu-item index="/secondHand">
        <i class="el-icon-s-comment"></i>
        <template #title>二手交易</template>
      </el-menu-item>
      <el-menu-item index="/reward">
        <i class="el-icon-s-comment"></i>
        <template #title>公寓悬赏</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
};
</script>
