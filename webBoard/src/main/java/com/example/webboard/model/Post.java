package com.example.webboard.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Post {
    private int id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
}
