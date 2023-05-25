import { RouteObject } from "react-router-dom";

export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
};


export type RouteConfig = RouteObject &{
  meta?: MetaProps;
  children?: RouteConfig[];
}





