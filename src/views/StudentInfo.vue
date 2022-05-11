<template>
  <div>
    <div
      style="position: absolute; right: 100px; top: 100px"
      @click="isAdd = true"
    >
      <svg
        t="1652256708084"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3399"
        width="40"
        height="40"
      >
        <path
          d="M771.584 273.92l-91.989333 156.842667-5.461334 5.461333v427.52a83.114667 83.114667 0 0 1-81.066666 81.066667c-37.888 0-70.314667-189.269333-81.237334-270.506667-5.290667 81.237333-37.888 270.506667-81.066666 270.506667a83.285333 83.285333 0 0 1-81.237334-81.066667v-426.666667l-5.461333-5.461333-91.818667-156.842667c-21.674667-26.965333-10.922667-59.562667 21.504-75.776a56.661333 56.661333 0 0 1 81.237334 21.674667l81.066666 129.877333h151.552l81.237334-135.338666a66.218667 66.218667 0 0 1 86.528-21.504 55.125333 55.125333 0 0 1 16.213333 80.213333zM512 295.594667A108.202667 108.202667 0 1 1 620.032 187.733333 108.544 108.544 0 0 1 512 295.594667z"
          fill="#6DD77F"
          p-id="3400"
        ></path>
      </svg>
      添加学生
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter, useRoute } from "vue-router";
import { Login, Student, Admin, Notice } from "@/datasource/Types";
import { ElMessage } from "element-plus";
import { fa } from "element-plus/lib/locale";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const route = useRoute();
    const router = useRouter();
    var admin: Admin = {};
    var isEdit = ref(false);
    var isAdd = ref(false);
    var editStudent: Student = {};
    var editStudent01 = ref(editStudent);
    var addStudent: Student = {};
    var addStudent01 = ref(addStudent);
    var allStudents: Student[] = [];
    var allStudents01 = ref(allStudents);

    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "false") {
      var ai = sessionStorage.getItem("adminInfo");
      if (ai != null) {
        admin = JSON.parse(ai);
      }
    }
    axios
      .get(
        `/student/getOneApartmentStudentsOrderByDormitoryNumber/${admin.dormitoryBuilding}`
      )
      .then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            if (resp.data.data.students != null) {
              allStudents01.value = resp.data.data.students;
            }
          }
        }
      });

    return {
      allStudents01,
      isAdd,
      isEdit,
      editStudent01,
      addStudent01,
    };
  },
});
</script>
<style scoped>
</style>
