import React, { useEffect, useState } from "react";
import { deletePostById, getAllPosts } from "../api";
import { Button, Container, List, ListItem, ListItemText, Typography } from "@mui/material";

const PostList = ({ onSelectPost }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await getAllPosts();
        setPosts(response.data);
    };

    const handleDelete = async (id) => {
        await deletePostById(id);
        fetchPosts();
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                게시글 목록
            </Typography>
            <List>
                {posts.map((post) => (
                    <ListItem key={post.id} button onClick={() => onSelectPost(post.id)}>
                        <ListItemText primary={post.title} secondary={new Date(post.createdAt).toLocaleDateString()} />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent the onClick of ListItem from being called
                                handleDelete(post.id);
                            }}
                        >
                            삭제
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default PostList;
