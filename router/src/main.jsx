import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
// import { Layout } from 'lucide-react'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contact/Contactus.jsx'
import User from './components/Contact/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      }, {
        path: "about",
        element: <About/>
      }, {
        path: "contact",
        element: <Contact/>
      }, {
        path: "user/:userid",
        element: <User/>
      }, {
        path: "/github",
        element: <Github/>
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutersFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>} />
//       <Route path='about' element={<About/>} />
//       <Route path='contact' element={<Contact/>} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
