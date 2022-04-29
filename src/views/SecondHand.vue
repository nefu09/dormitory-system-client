<template>
  <div style="width=1000px;height=500px;margin-top:30px;margin-left:20px">
    <el-row>
      <el-col
        v-for="item in apartmentGoods01.slice((nowPage - 1) * 6, nowEndNumber)"
        :key="item.id"
        :span="8"
        :offset="index > 0 ? 2 : 0"
        style="display: line-block"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          style="display: line-block; width: 350px; height: 320px"
        >
          <img
            :src="item.url"
            class="image"
            style="display: line-block; width: 350px; height: 200px"
          />
          <div style="padding: 14px">
            <time class="time" style="">{{ item.name }}</time>
            <time class="time" style="margin-left: 10px; color: orange"
              >{{ item.price }}元</time
            >
            <div style="display: block">
              <el-tooltip
                class="box-item"
                effect="dark"
                :content="item.description"
                placement="right-end"
              >
                <el-button> 查看物品描述 </el-button>
              </el-tooltip>
            </div>
            <div class="bottom">
              <el-button
                type="text"
                class="button"
                @click="toSingleChat(item.ownerNumber)"
                >联系卖家</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      background
      v-if="apartmentGoods01.length != 0"
      :page-size="6"
      layout="prev, pager, next"
      :total="apartmentGoods01.length"
      @current-change="handleCurrentChange"
      :current-page="nowPage"
      style="position: absolute; left: 700px; bottom: 10px"
    />
    <div
      v-if="apartmentGoods01.length == 0"
      style="position: absolute; left: 700px; bottom: 500px"
    >
      还没有人发布物品呢！
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Login, Student, Admin, Goods } from "@/datasource/Types";
export default defineComponent({
  props: ["number", "name"],
  setup() {
    const router = useRouter();
    var apartmentGoods: Goods[] = [];
    var apartmentGoods01 = ref(apartmentGoods);
    var nowNumber = "";
    var student: Student = {};
    var nowPage = ref(1);
    var nowEndNumber = ref(6);
    var si = sessionStorage.getItem("studentInfo");
    if (si != null) {
      student = JSON.parse(si);
      if (student.studentNumber != null) {
        nowNumber = student.studentNumber;
      }
    }
    //获取该公寓同学发布的闲置产品
    axios.post(`/getApartmentGoods/${nowNumber}`).then((resp) => {
      if (resp && resp.data.code == 200) {
        if (resp.data.data.apartmentGoods != null) {
          apartmentGoods01.value = resp.data.data.apartmentGoods;
        }
      }
    });
    function handleCurrentChange(val) {
      nowPage.value = val;
      if (apartmentGoods01.value.length - (nowPage.value - 1) * 6 >= 6) {
        nowEndNumber.value = (nowPage.value - 1) * 6 + 6;
      } else {
        nowEndNumber.value = apartmentGoods01.value.length;
      }
    }
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
      nowPage,
      nowEndNumber,
      apartmentGoods01,
      handleCurrentChange,
      toSingleChat,
    };
  },
});
</script>
<style scoped>
.tip {
  color: white;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
  padding: 10px;
  width: auto;
  display: inline-block !important;
  display: inline;
}
.right {
  background-color: deepskyblue;
}
.left {
  background-color: forestgreen;
}
</style>
