import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Chat from "../views/Chat.vue";
import Student from "../views/Student.vue";
import SingleChat from "../views/SingleChat.vue";
import SecondHand from "../views/SecondHand.vue";
import MySecondHand from "../views/MySecondHand.vue";
import NeedReward from "../views/NeedReward.vue";
import HelpReward from "../views/HelpReward.vue";
import MyNeedReward from "../views/MyNeedReward.vue";
import MyHelpReward from "../views/MyHelpReward.vue";
import SelfInfo from "../views/SelfInfo.vue";
import LateBack from "../views/LateBack.vue";
import ToRepair from "../views/ToRepair.vue";
import Admin from "../views/Admin.vue";
import AdminChat from "../views/AdminChat.vue";
import AdminLateBack from "../views/AdminLateBack.vue";
import AdminNotice from "../views/AdminNotice.vue";
import AdminToRepair from "../views/AdminToRepair.vue";
import AdminSingleChat from "../views/AdminSingleChat.vue";
import StudentInfo from "../views/StudentInfo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    props: true,
    path: "/student",
    name: "Student",
    component: Student,
    children: [
      {
        props: true,
        path: "/chat",
        name: "chat",
        component: Chat,
      },
      {
        props: true,
        path: "/singleChat/:number/:name",
        name: "singleChat",
        component: SingleChat,
      },
      {
        path: "/secondHand",
        name: "secondHand",
        component: SecondHand,
      },
      {
        path: "/mySecondHand",
        name: "mySecondHand",
        component: MySecondHand,
      },
      {
        path: "/needReward",
        name: "needReward",
        component: NeedReward,
      },
      {
        path: "/helpReward",
        name: "helpReward",
        component: HelpReward,
      },
      {
        path: "/myNeedReward",
        name: "myNeedReward",
        component: MyNeedReward,
      },
      {
        path: "/myHelpReward",
        name: "myHelpReward",
        component: MyHelpReward,
      },
      {
        path: "/selfInfo",
        name: "selfInfo",
        component: SelfInfo,
      },
      {
        path: "/lateBack",
        name: "lateBack",
        component: LateBack,
      },
      {
        path: "/toRepair",
        name: "toRepair",
        component: ToRepair,
      },
    ],
  },
  {
    props: true,
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        props: true,
        path: "/adminChat",
        name: "AdminChat",
        component: AdminChat,
      },
      {
        props: true,
        path: "/adminSingleChat/:number/:name",
        name: "adminSingleChat",
        component: AdminSingleChat,
      },
      {
        path: "/adminLateBack",
        name: "AdminLateBack",
        component: AdminLateBack,
      },
      {
        path: "/adminNotice",
        name: "AdminNotice",
        component: AdminNotice,
      },
      {
        path: "/adminTorepair",
        name: "AdminToRepair",
        component: AdminToRepair,
      },
      {
        path: "/studentInfo",
        name: "StudentInfo",
        component: StudentInfo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
