package com.example.webboard.service;

import com.example.webboard.mapper.PostMapper;
import com.example.webboard.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostMapper postMapper;

    public List<Post> getAllPosts() {
        return postMapper.getAllPosts();
    }

    public void insertPost(Post post) {
        postMapper.insertPost(post);
    }

    public Post getPostById(int id) {
        return postMapper.getPostId(id);
    }

    public void deletePostById(int id) {
        postMapper.deletePostById(id);
    }
}
