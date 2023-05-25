import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setDemoInfo } from "@/store/module/demo";
import React, { useEffect, useState } from "react";
import { Button } from 'antd'

import './index.less'
import Loading from "@/components/Loading";

function useComponentWillMount(func: () => void){
  const [isRenderer, setIsRenderer] = useState(false);

  useEffect(() => {
    setIsRenderer(true);
  }, [isRenderer])

  if(!isRenderer){
    func();
  }
}

export default function Home(){
  const dispatch = useAppDispatch();
  const name = useAppSelector(state => state.demo.demoInfo.name);
  
  useComponentWillMount(() => {
    console.log('componentWillMount');
  })

  const changeName = () => {
    dispatch(setDemoInfo({name: 'new name'}))
  }

  return <div className="home-container">
    home
    {name}
    <Button type="primary" onClick={changeName}>按钮</Button>
    <div className="trapezoid"></div>
    <Loading />
  </div>
}