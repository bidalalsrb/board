import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { useState } from "react"
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";


const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (id) => {
    setSelectedPostId(id);
  }

  const handleBackToList = () => {
    setSelectedPostId(null);
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">게시판</Typography>
        </Toolbar>
      </AppBar>
      {selectedPostId ? (<PostDetail postId={selectedPostId} onBack={handleBackToList}></PostDetail>)
        :
        (
          <>
            <PostForm onPostCreated={handleBackToList}></PostForm>
            <PostList onSelectPost={handleSelectPost}></PostList></>

        )}
    </Container>
  )


}
export default App;