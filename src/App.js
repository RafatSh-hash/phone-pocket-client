import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes//Routes";
import toast, { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App dark:text-white bg-gray-200 dark:bg-gray-400">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
