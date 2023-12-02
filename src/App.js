import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter= createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter}/>
      <Body/>
    </div>
    </Provider>
  );
}



export default App;
