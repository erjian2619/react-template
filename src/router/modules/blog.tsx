
import SuspenseLazy from "@/components/SuspenseLazy";
import { RouteConfig } from "../interface";

const Blog = SuspenseLazy(() => import("@/view/blog"));

const blogRouter: RouteConfig[] = [
  {
    path: "/blog",
    element: Blog,
    meta: {
      requiresAuth: false,
      title: "zBlog",
      key: "blog"
    }
  },
]

export default blogRouter