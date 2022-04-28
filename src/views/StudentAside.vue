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

<script>
export default {
  name: "Aside",
};
</script>
