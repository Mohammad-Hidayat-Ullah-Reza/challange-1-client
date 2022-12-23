import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

function App() {
  return (
    <div className="">
      <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
