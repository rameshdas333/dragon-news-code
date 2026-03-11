import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter(

      [
        {
            path:"/",
            element: <HomeLayout>Ramesh Das</HomeLayout>
        },
        {
            path:"/auth",
            element: <h1>Ramesh Das</h1>
        },
        {
            path:"/news",
            element: <h1>Ramesh Das</h1>
        },
        {
            path:"/*",
            element: <h1>Eorror 404</h1>
        },
      ]
)


export default router;