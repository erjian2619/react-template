import SuspenseLazy from "@/components/SuspenseLazy";
import React from "react";
import { Navigate } from "react-router-dom";


const NotFound = SuspenseLazy(() => import("@/view/NotFound"));

import homeRouter from "./modules/home";
import Login from "@/view/login";
import { RouteConfig } from "./interface";

export const routerArray = [
  ...homeRouter
]

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Navigate to='home' />
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      title: "登录",
      requiresAuth: false,
      key: "login"
    }
  },
  ...routerArray,
  {
    path: "*",
    element: NotFound
  }
]

export default routes