import { Spin } from "antd";
import React, { useState, useEffect } from "react";

interface ComponentLoaderProps {
  componentName: string;
  propsConfig?: Object;
  children?: React.ReactNode;
}

const ComponentLoader = (props: ComponentLoaderProps) => {
  const { componentName, propsConfig = {}, children = null } = props;
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import(`antd/lib/${componentName}`).then((module) => {
      setComponent(module.default);
    });
  }, [componentName]);

  if (!Component) return <Spin />;
  return <Component {...propsConfig}>{children}</Component>;
};

export default ComponentLoader;