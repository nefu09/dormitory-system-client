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
