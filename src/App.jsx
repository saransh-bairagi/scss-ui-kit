import React from "react";
// importing Modules
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// importing Pages
import HomePage from "./pages/HomePage.pages";
import ErrorPage from "./pages/ErrorPage.pages";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Homepage */}
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
