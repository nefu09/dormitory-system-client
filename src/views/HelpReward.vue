<template>
  <div
    class="demo-collapse"
    style="margin-left: 30px; margin-top: 30px; order: 1px solid black"
  >
    <el-scrollbar height="500px">
      <el-row>
        <el-col
          v-for="item in helpRewards01"
          :key="item.id"
          style="display: line-block"
        >
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
              <template #title>
                <span style="color: #549688">{{ item.title }}</span>
                <img
                  src="../assets/unfinished.png"
                  alt=""
                  style="
                    position: absolute;
                    right: 100px;
                    width: 40px;
                    height: 40px;
                  "
                  v-if="item.state == 0"
                />
                <img
                  src="../assets/doing.png"
                  alt=""
                  style="
                    position: absolute;
                    right: 100px;
                    width: 40px;
                    height: 40px;
                  "
                  v-if="item.state == 1"
                />
                <img
                  src="../assets/finished.png"
                  alt=""
                  style="
                    position: absolute;
                    right: 100px;
                    width: 40px;
                    height: 40px;
                  "
                  v-if="item.state == 2"
                />
              </template>

              <el-descriptions
                class="margin-top"
                :column="3"
                :size="size"
                border
              >
                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon><calendar /></el-icon>
                      发布日期
                    </div>
                  </template>
                  {{ item.date }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon :style="iconStyle">
                        <money />
                      </el-icon>
                      佣金
                    </div>
                  </template>
                  {{ item.price }}元
                </el-descriptions-item>
                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon :style="iconStyle">
                        <iphone />
                      </el-icon>
                      联系方式
                    </div>
                  </template>
                  <div style="display: inline-block">
                    {{ item.ownerPhone }}
                    <span
                      style="position: absolute; right: 30px"
                      @click="toSingleChat(item.ownerNumber)"
                    >
                      <el-button type="text" class="button">直接聊天</el-button>
                      <el-icon><chat-dot-round /></el-icon
                    ></span>
                  </div>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template #label>
                    <div class="cell-item">
                      <el-icon><tickets /></el-icon>
                      具体内容
                    </div>
                  </template>
                  {{ item.description }}
                </el-descriptions-item>
              </el-descriptions>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </el-scrollbar>
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
    var helpRewards: Reward[] = [];
    var helpRewards01 = ref(helpRewards);
    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "true") {
      var si = sessionStorage.getItem("studentInfo");
      if (si != null) {
        student = JSON.parse(si);
      }
    }

    axios
      .post(`/getApartmentHelpRewards/${student.studentNumber}`)
      .then((resp) => {
        if (resp && resp.data.code == 200) {
          if (resp.data.data.rewards != null) {
            helpRewards01.value = resp.data.data.rewards;
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
      helpRewards01,
      toSingleChat,
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
