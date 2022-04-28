/* eslint-disable @typescript-eslint/ban-types */
export interface ResultVO {
  code?: number;
  message?: string;
  data?: object;
}

export interface Login {
  userName?: string;
  password?: string;
}

export interface Student {
  studentNumber?: string;
  name?: string;
  dormitoryBuilding?: string;
  dormitoryNumber?: number;
  nation?: string;
  birth?: Date;
  url?: string;
  sex?: string;
  signature?: string;
}

export interface Admin {
  adminNumber?: string;
  name?: string;
  dormitoryBuilding?: string;
}

export interface Goods {
  id?: number;
  name?: string;
  price?: number;
  ownerNumber?: string;
  description?: string;
  url?: string;
  state?: string;
}

export interface Reward {
  id?: number;
  title?: string;
  price?: number;
  ownerNumber?: string;
  description?: string;
  ownerPhone?: string;
  //发布为0，已接单为1，已经结束为2
  state?: number;
  date?: Date;
  //帮忙为0，求帮为1
  kind?: number;
}
