import 'antd-css-utilities/utility.min.css';
import "antd/dist/antd.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/css/font-awesome.min.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./assets/styles/style.css";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import routes from "./module/routes";
// const router = createBrowserRouter(routes);
function App() {
  return (
    <div className="App">
      <div id="loader_body"></div>
      <ToastContainer />
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          {
            routes.map(item => (
              <>
                {
                  item.children ?
                    <>
                      {
                        item.custom_children ?
                          item.children.map(child => (
                            <Route path={child.path} element={child.element} />
                          )) :
                          <Route path={item.path}>
                            {
                              item.children.map(child => (
                                <>
                                  {
                                    child.children ?
                                      <Route path={child.path}>
                                        {
                                          child.children.map(c => (
                                            <Route path={c.path} element={c.element} index={c.index ? true : false} />
                                          ))
                                        }
                                      </Route>
                                      : <Route path={child.path} element={child.element} index={child.index ? true : false} />
                                  }
                                </>

                              ))
                            }
                          </Route>
                      }

                    </>
                    : <Route path={item.path} element={item.element} />
                }
              </>
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
