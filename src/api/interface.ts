export interface resData<T> {
  success?: boolean;
  data: T;
  code: number;
  message: string;
}

export interface Result {
	code: string;
	msg: string;
}

export interface ResultData<T = any> extends Result {
	data?: T;
}