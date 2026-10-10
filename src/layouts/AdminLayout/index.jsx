import styles from "./AdminLayout.module.scss";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import AdminHeader from "./components/AdminHeader";
import { Outlet } from "react-router";

function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <div className={styles.container}>
                <AdminSidebar />
                <Outlet />
            </div>
            <AdminFooter />
        </>
    );
}

export default AdminLayout;
