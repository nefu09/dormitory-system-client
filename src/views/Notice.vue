<template>
  <div>
    <div style="position: absolute; top: 130px; left: 300px">
      <el-table
        :data="notices01"
        style="width: 1200px;height:500p;"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="description" label="内容" width="800" />
        <el-table-column prop="date" label="日期" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter, useRoute } from "vue-router";
import { Login, Student, Admin, Notice } from "@/datasource/Types";
import { ElMessage } from "element-plus";
import { SetupContext } from "vue";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    var isAdd = ref(false);
    var isEdit = ref(false);
    var student: Student = {};
    var notices: Notice[] = [];
    var notices01 = ref(notices);

    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "true") {
      var si = sessionStorage.getItem("studentInfo");
      if (si != null) {
        student = JSON.parse(si);
      }
    }
    axios
      .get(`/getApartmentNotices/${student.dormitoryBuilding}`)
      .then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            if (resp.data.data.notices != null) {
              notices01.value = resp.data.data.notices;
            }
          }
        }
      });

    return {
      notices01,
    };
  },
});
</script>
<style scoped>
</style>
