import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Chat from "../views/Chat.vue";
import Student from "../views/Student.vue";
import SingleChat from "../views/SingleChat.vue";
import SecondHand from "../views/SecondHand.vue";
import Reward from "../views/Reward.vue";
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
    ],
  },
  {
    path: "/secondHand",
    name: "secondHand",
    component: SecondHand,
  },
  {
    path: "/reward",
    name: "reward",
    component: Reward,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
