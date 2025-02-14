import BaseLayout from "@/layout/base.layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./auth.route";
import { authenticationRoutePaths } from "./common/routes";

function AppRoutes() {
  console.log("AppRoutes Rendered");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route element={<BaseLayout />}>
            {authenticationRoutePaths.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
