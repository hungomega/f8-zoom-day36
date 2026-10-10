import styles from "./AuthSidebar.module.scss";
import { Link } from "react-router";

function AuthSidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <Link to="/register">Đăng ký</Link>
                <Link to="/login">Đăng nhập</Link>
                <Link to="/forgot-password">Quên mật khẩu</Link>
            </aside>
        </>
    );
}

export default AuthSidebar;