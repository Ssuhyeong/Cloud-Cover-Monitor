import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

const routes = [
  // {
  //   path: "/login",
  //   // guard: RouterGuard,
  //   element: React.lazy(() => import("src/views/signIn")),
  // },
  {
    path: "/",
    // guard: LoginGuard,
    // layout: DashboardLayout,
    element: React.lazy(() => import("./Views/SignIn.js")),
  },
  {
    path: "/menu/side1",
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/MainPage.js")),
  },
  {
    path: "/menu/side2",
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/Side1Page.js")),
  },
  {
    path: "/menu/side3",
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/Side2Page.js")),
  },
  {
    path: "/menu/side4",
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/Side3Page.js")),
  },
  {
    path: "/*",
    element: () => <Navigate replace to="/404" />,
  },
];

const RenderRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, i) => {
          const RouteElement = route.element;
          const RouteLayout = route.layout || React.Fragment;
          const Guard = route.guard || React.Fragment;

          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Guard>
                  <RouteLayout>
                    <RouteElement />
                  </RouteLayout>
                </Guard>
              }
            ></Route>
          );
        })}
      </Routes>
    </React.Suspense>
  );
};

export default RenderRoutes;
