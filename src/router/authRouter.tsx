import { AxiosCanceler } from "@/api/helper/axiosCancel";
import { useAppSelector } from "@/store/hook";
import { searchRoute } from "@/utils/utils";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { routerArray } from ".";

const isDevelopment = process.env.NODE_ENV === 'development';

const axiosCanceler = new AxiosCanceler();

const AuthRouter = (props: { children: any; }) => {

  const { pathname } = useLocation();
  const route = searchRoute(pathname, routerArray);
  axiosCanceler.removeAllPending();
  
  // * 判断当前路由是否需要访问权限(不需要权限直接放行)
	if (!route.meta?.requiresAuth || isDevelopment) return props.children;

  const token = useAppSelector((state) => state.global.token);
  if(!token) return <Navigate to='/login' replace />

  return props.children;
}

export default AuthRouter