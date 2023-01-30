import React, { useEffect } from "react";

// LIBRARIES
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../view/HomePage/HomePage";
import DetailsPage from "../view/DetailsPage/DetailsPage";
import EditPage from "../view/EditPage/EditPage";
import CreatePage from "../view/CreatePage/CreatePage";

// COMPONENTS

const AppRoutes = () => {
  // CONSTANTS USING HOOKS
  const { pathname } = useLocation();

  // USE EFFECT FUNCTIONS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/create"
        element={
          <Layout>
            <CreatePage />
          </Layout>
        }
      />
      <Route
        path="/details"
        element={
          <Layout>
            <DetailsPage />
          </Layout>
        }
      />
      <Route
        path="/edit"
        element={
          <Layout>
            <EditPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
