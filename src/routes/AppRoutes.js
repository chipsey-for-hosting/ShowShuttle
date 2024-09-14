import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TvPage from "../pages/TvPage";
// import LoginPage from "../pages/Login/Page";
// import PrivateRoute from "./PrivateRoute";
// import InversePrivateRoute from "./InversePrivateRoute";
// import FavoritesPage from "../pages/FavoritesPage"; // Assuming you have this page

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <HomePage />
            // </PrivateRoute>
          }
        />
        <Route
          path="/tv"
          element={
            // <PrivateRoute>
            <TvPage />
            // </PrivateRoute>
          }
        />
        {/* <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/login"
          element={
            <InversePrivateRoute>
              <LoginPage />
            </InversePrivateRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
