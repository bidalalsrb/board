package com.example.webboard.controller;

import com.example.webboard.model.Post;
import com.example.webboard.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping
    public void insertPost(@RequestBody Post post) {
        postService.insertPost(post);
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable int id) {
        return postService.getPostById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePostById(@PathVariable int id) {
        postService.deletePostById(id);
    }
}
