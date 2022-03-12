import { ActionTree, createStore, MutationTree } from "vuex";
import axios from "@/axios";

export interface State {
  tid: string;
}

const myState: State = {
  tid: "",
};

export default createStore({
  state: myState,
  modules: {},
});
