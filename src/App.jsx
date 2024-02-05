import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Chart from "./components/Chart/Chart";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader:() => fetch("quiz-topics.json"),
          element: <Home></Home>
        },
        {
          path: "/chart",
          element: <Chart></Chart>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/about",
          element: <About></About>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
