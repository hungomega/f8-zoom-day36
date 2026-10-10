import styles from "./AdminSidebar.module.scss";
import { Link } from "react-router";

function AdminSidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <Link to="/admin">Dashboard</Link>
                <Link to="/admin/users">Quản lý Users</Link>
                <Link to="/admin/settings">Cài đặt</Link>
            </aside>
        </>
    );
}

export default AdminSidebar;
