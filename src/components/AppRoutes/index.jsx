import { Routes, Route } from "react-router";

// layouts
import AdminLayout from "../../layouts/AdminLayout";
import AuthLayout from "../../layouts/AuthLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

// pages
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import NotFound from "../../pages/NotFound";
import PostDetail from "../../pages/PostDetail";
import Posts from "../../pages/Posts";
import Privacy from "../../pages/Privacy";
import Setting from "../../pages/Setting";
import Users from "../../pages/Users";
import Dashboard from "../../pages/Dashboard";

// components

import ScrollToTop from "../ScrollToTop";

function AppRoutes() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                {/* Default Layout */}
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/posts" element={<Posts />}></Route>
                    <Route path="posts/:id" element={<PostDetail />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/privacy" element={<Privacy />}></Route>
                </Route>
                {/* Auth Layout */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Route>
                {/* Admin Layout */}
                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<Dashboard />}></Route>
                    <Route path="/admin/users" element={<Users />}></Route>
                    <Route path="/admin/settings" element={<Setting />}></Route>
                </Route>
                {/* Not Found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
export default AppRoutes;
