<template>
  <div>
    <el-menu
      style="width: 200px; min-height: calc(100vh-50px)"
      default-active="this.$route.path"
      router
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/adminChat">
        <template #title>即时通讯</template>
      </el-menu-item>
      <el-menu-item index="/adminNotice">
        <template #title>群通知</template>
      </el-menu-item>

      <el-menu-item index="/adminLateBack">
        <template #title>晚归管理</template>
      </el-menu-item>
      <el-menu-item index="/adminToRepair">
        <template #title>报修管理</template>
      </el-menu-item>
       <el-menu-item index="/adminUnreasonable">
        <template #title>违纪管理</template>
      </el-menu-item>
      <el-menu-item index="/studentInfo">
        <template #title>学生信息</template>
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
