import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = React.lazy((_) => import('@/pages/home/Home'))
const About = React.lazy((_) => import('@/pages/about/About'))
// const Page2 = React.lazy((_) => import('@/pages/page2'))
// const Page3 = React.lazy((_) => import('@/pages/page3'))

const router = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    component: Home,
    // routes: [
    //   //子路由
    //   {
    //     path: '/page1',
    //     exact: true,
    //     render: () => <Redirect to={'/page1/page11'} />,
    //   },
    //   {
    //     path: '/page1/page11',
    //     component: Page11,
    //   },
    // ],
  },
  {
    path: '/about',
    component: About,
  },
  // {
  //   path: '/page3',
  //   component: Page3,
  // },
]

export default router
