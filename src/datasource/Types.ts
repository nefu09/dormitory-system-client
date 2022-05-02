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

export interface Password {
  originPassword?: string;
  newPassword?: string;
  againPassword?: string;
}

export interface LateBack {
  id?: number;
  name?: string;
  dormitoryNumber?: number;
  applyTime?: Date;
  backTime?: Date;
  studentNumber?: string;
  //0为已申请,1为已通过,2为未通过
  state?: number;
  //晚归原因
  reason?: string;
  //联系电话
  phone?: string;
}

export interface Repair {
  id?: number;
  studentName?: string;
  name?: string;
  description?: string;
  //申报人学号
  studentNumber?: string;
  //dormitoryNumber
  dormitoryNumber?: number;
  //已报为0，已接收为1，已完成为2
  state?: number;
  date?: string;
  //物品图片
  url?: string;
}
