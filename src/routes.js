import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const routes = [
  // {
  //   path: "/login",
  //   // guard: RouterGuard,
  //   element: React.lazy(() => import("src/views/signIn")),
  // },
  {
    path: "/",
    guard: PublicRoute,
    element: React.lazy(() => import("./Views/SignIn.js")),
  },
  {
    path: "/menu/aws",
    guard: PrivateRoute,
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/AwsPage.js")),
  },
  {
    path: "/menu/azure",
    guard: PrivateRoute,
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/AzurePage.js")),
  },
  {
    path: "/menu/gcp",
    guard: PrivateRoute,
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/GcpPage.js")),
  },
  {
    path: "/menu/ncp",
    guard: PrivateRoute,
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/NcpPage.js")),
  },
  {
    path: "/menu/cloud",
    guard: PrivateRoute,
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/CloudPage.js")),
  },
  {
    path: "/menu/AI",
    guard: PrivateRoute,
    layout: DashboardLayout,
    element: React.lazy(() => import("./Views/AIPage.js")),
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
