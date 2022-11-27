import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes//Routes";
function App() {
  return (
    <div className="App dark:text-white bg-gray-200 dark:bg-gray-400">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
