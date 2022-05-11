<template>
  <div style="padding: 10px; margin-bottom: 50px">
    <el-row>
      <el-col :span="4">
        <el-card style="width: 250px; height: 300px; color: #333">
          <div style="padding-bottom: 10px; border-bottom: 1px solid #ccc">
            在线用户<span style="font-size: 12px"
              >（点击聊天气泡开始聊天）</span
            >
          </div>
          <span style="color: #177cb0">管理员</span>
          <el-icon
            class="el-icon-chat-dot-round"
            style="margin-left: 10px; font-size: 16px; cursor: pointer"
            @click="toAdminSingleChat()"
            ><chat-dot-round
          /></el-icon>
          <span style="font-size: 12px; color: limegreen; margin-left: 5px"
            >chatting...</span
          >

          <div
            style="padding: 10px 0"
            v-for="student in allStudents01"
            :key="student.name"
          >
            <div>
              <span>{{ student.name }}</span>
              <el-icon
                class="el-icon-chat-dot-round"
                style="margin-left: 10px; font-size: 16px; cursor: pointer"
                @click="toSingleChat(student)"
                ><chat-dot-round
              /></el-icon>
              <span style="font-size: 12px; color: limegreen; margin-left: 5px"
                >chatting...</span
              >
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="20">
        <div
          style="
            width: 800px;
            margin: 0 auto;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 0 10px #ccc;
          "
        >
          <div style="text-align: center; line-height: 50px">
            {{ apartment }}公寓群
          </div>

          <div
            style="height: 350px; overflow: auto; border-top: 1px solid #ccc"
            v-html="content"
          ></div>

          <div style="height: 200px; width: 100%">
            <div
              style="
                text-align: right;
                border: 1px solid #ccc;
                border-buttom: none;
                width: 100%;
              "
            >
              <el-button type="primary" size="mini" @click="send"
                >发送</el-button
              >
            </div>
            <div
              style="height: 160px; width: 100%; border: none; outline: none"
            >
              <textarea
                v-model="text"
                style="
                  height: 165px;
                  width: 100%;
                  border: none;
                  border-top: 1px solid #ccc;
                  border-bottom: 1px solid #ccc;
                  outline: none;
                "
              ></textarea>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import axios from "@/axios/index";
import { useRouter } from "vue-router";
import { Login, Student, Admin, Message } from "@/datasource/Types";
import { ElMessage } from "element-plus";
export default defineComponent({
  setup() {
    const router = useRouter();
    var text = ref("");
    var student: Student = {};
    var nowNumber = "";
    var admin: Admin = {};
    var admin01 = ref(admin);
    var nowUser: string;
    var apartment = "";
    var url = "";
    var content = ref("");
    var allStudents: Student[] = [];
    var allStudents01 = ref(allStudents);
    var allMessages: Message[] = [];

    const isStudent = sessionStorage.getItem("isStudent");
    if (isStudent != null) {
      var si = sessionStorage.getItem("studentInfo");
      if (si != null) {
        student = JSON.parse(si);
        url =
          "ws://localhost:8081/chat/" +
          student.studentNumber +
          "/" +
          student.name +
          "/1";
        if (student.name != null) {
          nowUser = student.name;
        }
        if (student.dormitoryBuilding != null) {
          apartment = student.dormitoryBuilding;
        }
        if (student.studentNumber != null) {
          nowNumber = student.studentNumber;
        }
      }
    }
    axios.get(`/student/getOneApartmentStudents/${apartment}`).then((resp) => {
      if (resp) {
        if (resp.data.code == 200) {
          if (resp.data.data.students != null) {
            allStudents01.value = resp.data.data.students;
            allStudents01.value = allStudents01.value.filter(
              (s) => s.studentNumber != nowNumber
            );
            axios
              .post(`/getMessages/${student.dormitoryBuilding}/all`)
              .then((resp) => {
                if (resp) {
                  if (resp.data.code == 200) {
                    if (resp.data.data.messages != null) {
                      allMessages = resp.data.data.messages;
                      var html = "";
                      allMessages.forEach((message) => {
                        if (message.from1 == student.studentNumber) {
                          html =
                            '<div class="el-row" style="padding: 5px 0">\n' +
                            '  <div class="el-col el-col-22" style="text-align: right; padding-right: 10px">\n' +
                            '    <div class="tip left">' +
                            message.text1 +
                            "</div>\n" +
                            "  </div>\n" +
                            '  <div class="el-col el-col-2">\n' +
                            '  <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">\n' +
                            '   <img src="' +
                            student.url +
                            '"style="object-fit: cover;">\n' +
                            "  </span>\n" +
                            "  </div>\n" +
                            "</div>";
                          content.value += html;
                        } else {
                          var accepterUrl = "";
                          var name = "";
                          allStudents01.value.forEach((s) => {
                            if (s.studentNumber == message.from1) {
                              accepterUrl = s.url;
                              name = s.name;
                            }
                          });
                          if (accepterUrl == "") {
                            name = "管理员";
                            accepterUrl =
                              "https://nljbucket.oss-cn-beijing.aliyuncs.com/42fc0cce-78ad-45d1-873c-75c7e8e6984b-chatAdmin.png?Expires=1667740856&OSSAccessKeyId=LTAI5tSRziSf7nWeTbGUiG7A&Signature=%2B%2FInOmYq2RngGLmFm9Huiy4K2Cs%3D";
                          }
                          // remoteUser表示远程用户聊天消息，蓝色的气泡
                          html =
                            '<div class="el-row" style="padding: 5px 0">\n' +
                            '  <div class="el-col el-col-2" style="text-align: right">\n' +
                            '<span style="margin-right:5px;font-size:10px;color:gray">' +
                            name +
                            "</span>" +
                            '  <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">\n' +
                            "    <img src=" +
                            accepterUrl +
                            ' style="object-fit: cover;">\n' +
                            "  </span>\n" +
                            "  </div>\n" +
                            '  <div class="el-col el-col-22" style="text-align: left; padding-left: 10px">\n' +
                            '    <div class="tip right" style="margin-top:30px">' +
                            message.text1 +
                            "</div>\n" +
                            "  </div>\n" +
                            "</div>";
                          content.value += html;
                        }
                      });
                    }
                  }
                }
              });
          }
        }
      }
    });

    axios.get(`/student/getApartmentAdmin/${apartment}`).then((resp) => {
      if (resp) {
        if (resp.data.code == 200) {
          if (resp.data.data.admin != null) {
            admin01.value = resp.data.data.admin;
          }
        }
      }
    });
    var socket = new WebSocket(url);
    //打开事件
    socket.onopen = function () {
      console.log("websocket已打开");
    };
    //  浏览器端收消息，获得从服务端发送过来的文本消息
    socket.onmessage = function (msg) {
      console.log("收到数据====" + msg.data);
      let data = JSON.parse(msg.data); // 对收到的json数据进行解析， 类似这样的： {"users": [{"username": "zhang"},{ "username": "admin"}]}
      if (data.from != student.studentNumber && data.to == "all") {
        createContent(data.from, ref(data.text));
      }
    };
    // //关闭事件
    // socket.onclose = function () {
    //   console.log("websocket已关闭");
    // };
    // //发生了错误事件
    // socket.onerror = function () {
    //   console.log("websocket发生了错误");
    // };
    function send() {
      if (text.value == "") {
        ElMessage({
          showClose: true,
          message: "发送的消息不能为空",
          type: "warning",
        });
      } else {
        // 组装待发送的消息 json
        // {"from": "zhang", "to": "admin", "text": "聊天文本"}
        let message = { from: student.studentNumber, to: "all", text: text };
        socket.send(JSON.stringify(message)); // 将组装好的json发送给服务端，由服务端进行转发
        // this.messages.push({user: this.user.username, text: this.text})
        // // 构建消息内容，本人消息
        if (student.studentNumber != null) {
          createContent(student.studentNumber, ref(text));
        }
        text.value = "";
      }
    }
    function createContent(number: string, text: Ref) {
      var html = "";
      if (number == student.studentNumber) {
        // nowUser 表示是否显示当前用户发送的聊天消息，绿色气泡
        html =
          '<div class="el-row" style="padding: 5px 0">\n' +
          '  <div class="el-col el-col-22" style="text-align: right; padding-right: 10px">\n' +
          '    <div class="tip left">' +
          text.value +
          "</div>\n" +
          "  </div>\n" +
          '  <div class="el-col el-col-2">\n' +
          '  <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">\n' +
          '    <img src="' +
          student.url +
          '" style="object-fit: cover;">\n' +
          "  </span>\n" +
          "  </div>\n" +
          "</div>";
      } else {
        // remoteUser表示远程用户聊天消息，蓝色的气泡
        var accepterUrl = "";
        var name = "";
        allStudents01.value.forEach((s) => {
          if (s.studentNumber == number) {
            accepterUrl = s.url;
            name = s.name;
          }
        });
        if (accepterUrl == "") {
          name = "管理员";
          accepterUrl =
            "https://nljbucket.oss-cn-beijing.aliyuncs.com/42fc0cce-78ad-45d1-873c-75c7e8e6984b-chatAdmin.png?Expires=1667740856&OSSAccessKeyId=LTAI5tSRziSf7nWeTbGUiG7A&Signature=%2B%2FInOmYq2RngGLmFm9Huiy4K2Cs%3D";
        }
        html =
          '<div class="el-row" style="padding: 5px 0">\n' +
          '  <div class="el-col el-col-2" style="text-align: right">\n' +
          '<span style="margin-right:5px;font-size:10px;color:gray">' +
          name +
          "</span>" +
          '  <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">\n' +
          '    <img src="' +
          accepterUrl +
          '" style="object-fit: cover;">\n' +
          "  </span>\n" +
          "  </div>\n" +
          '  <div class="el-col el-col-22" style="text-align: left; padding-left: 10px">\n' +
          '    <div class="tip right" style="margin-top:30px">' +
          text.value +
          "</div>\n" +
          "  </div>\n" +
          "</div>";
      }
      content.value += html;
    }
    function toSingleChat(student: Student) {
      router.replace(`/singleChat/${student.studentNumber}/${student.name}`);
    }
    function toAdminSingleChat() {
      router.replace(`/singleChat/${admin01.value.adminNumber}/管理员`);
    }
    return {
      send,
      text,
      content,
      allStudents01,
      nowNumber,
      toSingleChat,
      apartment,
      admin01,
      toAdminSingleChat,
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
