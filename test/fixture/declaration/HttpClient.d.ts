/*
* Autogenerated by Route Type Compiler (1.2.4)
*
* DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
/* tslint:disable */

import ApiDemo from '../server/route/api/demo';
import Demo from '../server/route/demo';

declare module 'test' {
  const apiDemo: ApiDemo;
  const demo: Demo;
  export interface IGetRoute {
    'api/demo/': ReturnType<typeof apiDemo.alive >;
    'api/demo/koa': ReturnType<typeof apiDemo.koa >;
    'api/demo/error/path/somepath': ReturnType<typeof apiDemo.error >;
    '/demo/': ReturnType<typeof demo.alive >;
    '/demo/koa': ReturnType<typeof demo.koa >;
    '/demo/error/path/somepath': ReturnType<typeof demo.error >
  }
  export interface IPostRoute {
    'api/demo/koa': ReturnType<typeof apiDemo.koaPost >;
    '/demo/koa': ReturnType<typeof demo.koaPost >
  }
}
