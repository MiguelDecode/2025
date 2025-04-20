import React from "react";
import { Route, Routes } from "react-router";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
