import "./App.scss";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";

//components
import LoadingPage from "./components/LoadingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import { initSocket } from "./utilities/socket";

function App() {

  initSocket();
  
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            {routes.public.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
            <Route element={<DashboardLayout />}>
              {routes.private.map((route, key) => {
                return (
                  <Route
                  caseSensitive
                    key={key}
                    path={route.path}
                    element={<route.element />}
                  />
                );
              })}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
