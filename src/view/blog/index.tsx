import React from "react";
import Nav from "./components/Nav";
import BlogHome from "./components/BlogHome";

export default function Blog(){
  return <div className="my-blog-container">
    <Nav />
    <main>
      <BlogHome />
    </main>
  </div>
}