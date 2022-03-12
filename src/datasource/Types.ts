/* eslint-disable @typescript-eslint/ban-types */
export interface ResultVO {
  code?: number;
  message?: string;
  data?: object;
}

export interface Student {
  studentNumber?: string;
  name?: string;
  password?: string;
}

export interface Admin {
  adminNumber?: string;
  name?: string;
  password?: string;
}
