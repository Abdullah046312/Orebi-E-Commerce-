import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element= {<Home />}></Route>
  </Route>
))

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
