import { useState } from "react"
import { createPost } from "../api"
import { Button, Container, TextField, Typography } from "@mui/material"


const PostForm = ({ onPostCreated }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost({ title, content });
        setTitle('')
        setContent('')
        onPostCreated();

    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                새 게시물 작성
            </Typography>
            <form onSubmit={handleSubmit}>

                <TextField fullWidth label="제목" value={title} onChange={(e)=>setTitle(e.target.value)} margin="normal" required></TextField>
                <TextField fullWidth label="내용" value={content} onChange={(e)=>setContent(e.target.value)} margin="normal" required multiline rows={4}></TextField>
                <Button type="submit" variant="contained" color="primary">작성</Button>
            </form>

        </Container>
    )

}
export default PostForm;