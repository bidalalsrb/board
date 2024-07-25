import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { getPostById } from '../api';

const PostDetail = ({ postId, onBack }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (postId) {
            fetchPost();
        }
    }, [postId]);

    const fetchPost = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getPostById(postId);
            setPost(response.data);
        } catch (error) {
            setError('게시물을 가져오는 데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Typography>로딩 중...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!post) return <Typography>게시물이 없습니다.</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {post.title}
            </Typography>
            <Typography variant="body1" paragraph>
                {post.content}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
                작성일: {new Date(post.createdAt).toLocaleDateString()}
            </Typography>
            <Button variant="contained" onClick={onBack}>
                목록으로
            </Button>
        </Container>
    );
};

export default PostDetail;
