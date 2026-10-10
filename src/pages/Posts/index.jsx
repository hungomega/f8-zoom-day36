import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import styles from "./Posts.module.scss";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

function Post() {
    // 1. Tạo state lưu danh sách posts, ban đầu là mảng rỗng
    const [params, setParams] = useSearchParams();
    const [page, setPage] = useState(() => +params.get("page") || 1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`,
        )
            .then((res) =>
                res.json().then((posts) => {
                    setPosts(posts);
                }),
            )
            .finally(() => {
                setLoading(false);
            });
    }, [page]);
    //mỗi khi page thay đổi, gọi setParams để cập nhật tham số trên URL.
    useEffect(() => {
        setParams({ page });
    }, [page, setParams]);

    return (
        <div className={styles.posts}>
            <h1>Latest Posts</h1>
            <p className={styles.description}>
                Khám phá danh sách bài viết mới nhất.
            </p>

            {loading ? (
                <Loading />
            ) : (
                <ul className={styles.postList}>
                    {" "}
                    {posts.map((post) => (
                        <li key={post.id}>
                            {" "}
                            <Link to={`/posts/${post.id}`}>
                                {" "}
                                <span>{post.id}. </span> {post.title}{" "}
                            </Link>{" "}
                        </li>
                    ))}{" "}
                </ul>
            )}

            <div className={styles.paginationSection}>
                <Pagination
                    currentPage={page}
                    totalPages={5}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}

export default Post;
