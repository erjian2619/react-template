
import SuspenseLazy from "@/components/SuspenseLazy";
import { RouteConfig } from "../interface";

const Home = SuspenseLazy(() => import("@/view/home"));

const homeRouter: RouteConfig[] = [
  {
    path: "/home",
    element: Home,
    meta: {
      requiresAuth: true,
      title: "首页",
      key: "home"
    }
  },
]

export default homeRouter