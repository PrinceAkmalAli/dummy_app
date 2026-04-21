import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routs from "../public/components/routs";

function App() {
  const browserRouter = createBrowserRouter(routs);

  return <RouterProvider router={browserRouter} />;
}

export default App;
