import React, { useEffect } from "react";
import './index.less'


const Loading = (props: { text?: string }) => {
  const { text='loading...' } = props;

  return <div className="cmp-loading">
    <div className="pyramid-loader">
      <div className="wrapper">
        <span className="side side1"></span>
        <span className="side side2"></span>
        <span className="side side3"></span>
        <span className="side side4"></span>
        <span className="shadow"></span>
      </div>
    </div>
    <div className="text">{text}</div>
  </div>
}

export default Loading;