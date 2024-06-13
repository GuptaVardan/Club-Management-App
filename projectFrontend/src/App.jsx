import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider,useParams } from 'react-router-dom'
import Home from './components/Home'
import LoginMember from './components/LoginMember'
import LoginAdmin from './components/LoginAdmin'
import Join from './components/Join'
import EventCreate from './components/Subcomponents/EventCreate'
import EventDeletion from './components/Subcomponents/EventDeletion'
import Nav from './components/Subcomponents/nav'
import EventShow from './components/Subcomponents/events'
import NavMember from './components/Subcomponents/navMember'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login_member",
      element: <><Navbar /><LoginMember /></>
    },
    {
      path: "/login_admin",
      element: <><Navbar /><LoginAdmin /></>
    },
    {
      path: "/join",
      element: <><Navbar /><Join /></>
    },
    {
      path: "/members/:memberName",
      element: <><NavMember /><EventShow/></>
    },
    {
      path: "/admin/home",
      element: <><Nav /><EventShow /></>
    },
    {
      path: "/admin/create",
      element: <><Nav /><EventCreate /></>
    },
    {
      path: "/admin/delete",
      element: <><Nav /><EventDeletion /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
