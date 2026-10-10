import { useEffect, useState } from "react";
import styles from "./PostDetail.module.scss";
import { useNavigate, useParams } from "react-router";
function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                if (!res.ok) {
                    navigate("/posts", { replace: true });
                    return null;
                }

                return res.json();
            })
            .then((data) => {
                if (data) {
                    setPost(data);
                }
            });
    }, [id, navigate]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setComments(data);
            });
    }, [id]);

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.postDetail}>
            <article className={styles.postCard}>
                <span className={styles.postLabel}>POST DETAIL</span>
                <h1>Title : {post.title}</h1>
                <p className={styles.postBody}>Body: {post.body}</p>
                <p className={styles.userId}>User ID: {post.userId}</p>
            </article>

            <section className={styles.commentsSection}>
                <h2>Comments ({comments.length})</h2>

                {comments.map((comment) => (
                    <article className={styles.commentCard} key={comment.id}>
                        <h3>Name: {comment.name}</h3>
                        <p className={styles.commentEmail}>Email: {comment.email}</p>
                        <p className={styles.commentBody}>Body: {comment.body}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default PostDetail;
