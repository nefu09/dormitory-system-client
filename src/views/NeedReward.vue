<template>
  <div class="demo-image__lazy">
    <el-image v-for="url in urls" :key="url" :src="url" lazy />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Login, Student, Admin, Goods, Reward } from "@/datasource/Types";
import { ElMessage, ElMessageBox, UploadProps } from "element-plus";
import { tr } from "element-plus/lib/locale";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const router = useRouter();
    var student: Student = {};
    var needRewards: Reward[] = [];
    var needRewards01 = ref(needRewards);
    var urls = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
    ];
    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "true") {
      var si = sessionStorage.getItem("studentInfo");
      if (si != null) {
        student = JSON.parse(si);
      }
    }
    axios
      .post(`/getApartmentNeedRewards/${student.studentNumber}`)
      .then((resp) => {
        if (resp && resp.data.code == 200) {
          if (resp.data.data.rewards != null) {
            needRewards01.value = resp.data.data.rewards;
          }
        }
      });
    function toSingleChat(number: string) {
      axios.get(`/student/getOneStudentByNumber/${number}`).then((resp) => {
        if (resp && resp.data.code == 200) {
          if (resp.data.data.student != null) {
            router.replace(
              `/singleChat/${resp.data.data.student.studentNumber}/${resp.data.data.student.name}`
            );
          }
        }
      });
    }
    return {
      needRewards01,
      toSingleChat,
      urls,
    };
  },
});
</script>
<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
