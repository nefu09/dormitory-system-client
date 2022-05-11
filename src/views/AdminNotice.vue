<template>
  <div>
    <div
      style="position: absolute; right: 100px; top: 100px"
      @click="isAdd = true"
    >
      <svg
        style="margin-top: 8px"
        t="1650870554870"
        class="icon"
        viewBox="0 0 1070 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="11863"
        width="30"
        height="30"
      >
        <path
          d="M520.784314 858.352941h-225.882353c-75.294118 0-136.784314-61.490196-136.784314-136.784314V222.117647c0-75.294118 61.490196-136.784314 136.784314-136.784314h37.647059c10.039216 0 18.823529 8.784314 18.823529 18.82353s-8.784314 18.823529-18.823529 18.823529h-37.647059c-53.960784 0-99.137255 43.921569-99.137255 99.137255v499.45098c0 53.960784 43.921569 99.137255 99.137255 99.137255h225.882353c10.039216 0 18.823529 8.784314 18.823529 18.82353s-8.784314 18.823529-18.823529 18.823529zM863.372549 527.058824c-10.039216 0-18.823529-8.784314-18.823529-18.82353V222.117647c0-53.960784-43.921569-99.137255-99.137255-99.137255H514.509804c-10.039216 0-18.823529-8.784314-18.823529-18.823529s8.784314-18.823529 18.823529-18.82353h232.156863c75.294118 0 136.784314 61.490196 136.784313 136.784314v286.117647c-1.254902 10.039216-10.039216 18.823529-20.078431 18.82353zM430.431373 122.980392h-5.019608c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 18.82353-18.82353h5.019608c10.039216 0 18.823529 8.784314 18.823529 18.82353s-7.529412 18.823529-18.823529 18.823529z"
          fill="#0B3155"
          p-id="11864"
        ></path>
        <path
          d="M560.941176 254.745098H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 18.82353-18.82353h261.019607c10.039216 0 18.823529 8.784314 18.82353 18.82353s-8.784314 18.823529-20.078432 18.823529zM727.843137 367.686275H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.82353s8.784314-18.823529 18.82353-18.823529h426.666666c10.039216 0 18.823529 8.784314 18.82353 18.823529s-8.784314 18.823529-18.82353 18.82353zM656.313725 577.254902H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.823529S289.882353 539.607843 301.176471 539.607843h355.137254c10.039216 0 18.823529 8.784314 18.82353 18.82353s-8.784314 18.823529-18.82353 18.823529zM514.509804 475.607843H301.176471c-10.039216 0-18.823529-8.784314-18.82353-18.823529s8.784314-18.823529 18.82353-18.82353h213.333333c10.039216 0 18.823529 8.784314 18.823529 18.82353s-8.784314 18.823529-18.823529 18.823529z"
          fill="#0B3155"
          p-id="11865"
        ></path>
        <path
          d="M931.137255 769.254902h-238.431373c-10.039216 0-18.823529-8.784314-18.823529-18.823529s8.784314-18.823529 18.823529-18.82353h237.176471c10.039216 0 18.823529 8.784314 18.823529 18.82353s-7.529412 18.823529-17.568627 18.823529z"
          fill="#0B3155"
          p-id="11866"
        ></path>
        <path
          d="M811.921569 880.941176c-10.039216 0-18.823529-8.784314-18.82353-18.823529v-238.431372c0-10.039216 8.784314-18.823529 18.82353-18.82353s18.823529 8.784314 18.823529 18.82353v237.17647c0 11.294118-8.784314 20.078431-18.823529 20.078431z"
          fill="#0B3155"
          p-id="11867"
        ></path>
      </svg>
      发帖子
    </div>
    <div style="position: absolute; top: 150px; left: 300px">
      <el-table
        :data="notices01"
        style="width: 1200px"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="description" label="内容" width="500" />
        <el-table-column prop="date" label="日期" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="toEdit(scope.row)"
              >编辑通知</el-button
            >
            <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              :icon="InfoFilled"
              icon-color="red"
              title="确定要删除吗?"
              @cancel="cancelEvent"
              @confirm="deleteNotice(scope.row)"
              style="margin-left: 100px"
            >
              <template #reference>
                <el-button size="small">删除通知</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 发布通知 -->
    <el-dialog title="发布通知" v-model="isAdd">
      <el-form :model="addNotice01" label-width="120px" ref="addForm">
        <el-form-item
          label="通知内容"
          prop="description"
          :rules="[{ required: true, message: 'content is required' }]"
        >
          <el-input
            type="textarea"
            autocomplete="off"
            v-model="addNotice01.description"
          />
        </el-form-item>

        <el-form-item style="margin-left: 170px">
          <el-button type="primary" @click="submitAddNotice()">确定</el-button>
          <el-button @click="isAdd = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 编辑通知 -->
    <el-dialog title="发布通知" v-model="isEdit">
      <el-form :model="editNotice01" label-width="120px" ref="editForm">
        <el-form-item
          label="通知内容"
          prop="description"
          :rules="[{ required: true, message: 'content is required' }]"
        >
          <el-input
            type="textarea"
            autocomplete="off"
            v-model="editNotice01.description"
          />
        </el-form-item>

        <el-form-item style="margin-left: 170px">
          <el-button type="primary" @click="submitEditNotice()">确定</el-button>
          <el-button @click="isEdit = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
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
    var isAdd = ref(false);
    var isEdit = ref(false);
    var admin: Admin = {};
    var notices: Notice[] = [];
    var notices01 = ref(notices);
    var addNotice: Notice = {};
    var addNotice01 = ref(addNotice);
    var editNotice: Notice = {};
    var editNotice01 = ref(editNotice);

    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null && isStudent == "false") {
      var ai = sessionStorage.getItem("adminInfo");
      if (ai != null) {
        admin = JSON.parse(ai);
      }
    }
    axios
      .get(`/getApartmentNotices/${admin.dormitoryBuilding}`)
      .then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            if (resp.data.data.notices != null) {
              notices01.value = resp.data.data.notices;
            }
          }
        }
      });

    function submitAddNotice() {
      if (addNotice01.value.description == null) {
        ElMessage.error("通知内容不能为空");
      } else {
        addNotice01.value.dormitoryBuilding = admin.dormitoryBuilding;
        var nowTime = new Date();
        var year = nowTime.getFullYear();
        var month =
          nowTime.getMonth() + 1 < 10
            ? "0" + (nowTime.getMonth() + 1)
            : nowTime.getMonth();
        var day =
          nowTime.getDate() < 10 ? "0" + nowTime.getDate() : nowTime.getDate();
        addNotice01.value.date = year + "-" + month + "-" + day;
        axios.post(`/addNotice`, addNotice01.value).then((resp) => {
          if (resp) {
            if (resp.data.code == 200) {
              if (resp.data.data.notices != null) {
                notices01.value = resp.data.data.notices;
                isAdd.value = false;
                addNotice01.value = {};
                ElMessage({
                  message: "发布成功",
                  type: "success",
                });
              }
            }
          }
        });
      }
    }

    function toEdit(notice: Notice) {
      editNotice01.value.id = notice.id;
      editNotice01.value.description = notice.description;
      editNotice01.value.dormitoryBuilding = notice.dormitoryBuilding;
      var nowTime = new Date();
      var year = nowTime.getFullYear();
      var month =
        nowTime.getMonth() + 1 < 10
          ? "0" + (nowTime.getMonth() + 1)
          : nowTime.getMonth();
      var day =
        nowTime.getDate() < 10 ? "0" + nowTime.getDate() : nowTime.getDate();
      editNotice01.value.date = year + "-" + month + "-" + day;
      isEdit.value = true;
    }

    function submitEditNotice() {
      axios.post(`/updateNotice`, editNotice01.value).then((resp) => {
        if (resp) {
          if (resp.data.code == 200) {
            if (resp.data.data.notices != null) {
              notices01.value = resp.data.data.notices;
              isEdit.value = false;
              addNotice01.value = {};
              ElMessage({
                message: "修改成功",
                type: "success",
              });
            }
          }
        }
      });
    }
    function deleteNotice(notice: Notice) {
      axios
        .get(`/deleteNotice/${notice.id}/${notice.dormitoryBuilding}`)
        .then((resp) => {
          if (resp) {
            if (resp.data.code == 200) {
              if (resp.data.data.notices != null) {
                notices01.value = resp.data.data.notices;
                isEdit.value = false;
                addNotice01.value = {};
                ElMessage({
                  message: "删除成功",
                  type: "success",
                });
              }
            }
          }
        });

      notice.id;
    }
    return {
      notices01,
      submitAddNotice,
      addNotice01,
      editNotice01,
      isAdd,
      isEdit,
      toEdit,
      submitEditNotice,
      deleteNotice,
    };
  },
});
</script>
<style scoped>
</style>
