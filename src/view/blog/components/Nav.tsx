import React, { useState } from "react";
import classNames from "classnames";

import { navItems } from "../constants";

import './Nav.less'


const Nav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('#home');
  const [left, setLeft] = useState<number>(0);

  const scroll = (path: string, left: number) => {
    const targetDom = document.querySelector(path);
    if (targetDom) {
      targetDom.scrollIntoView({ behavior: 'smooth' })
      setLeft(left)
      setActiveItem(path)
    }
  }

  return <nav className="blog-nav">
    <div className="title">
      <span>ZS2619</span>
    </div>
    <ul className="item-ul">
      {
        navItems.map((nav) => (<li onClick={() => scroll(nav.path, nav.left)} key={nav.path} className={classNames({ active: nav.path === activeItem })}>
          {nav.text}
        </li>))
      }
      <div className="slider" style={{ left }}></div>
    </ul>
  </nav>
}

export default Nav;