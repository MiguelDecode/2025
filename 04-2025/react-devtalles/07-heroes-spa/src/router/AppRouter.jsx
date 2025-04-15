import React from "react";
import { Route, Routes } from "react-router";
import { Navbar } from "../ui/components/Navbar";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
