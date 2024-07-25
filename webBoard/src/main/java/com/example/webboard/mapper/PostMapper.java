package com.example.webboard.mapper;

import com.example.webboard.model.Post;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PostMapper {
    @Select("select * from post order by created_at desc ")
    List<Post> getAllPosts();

    @Insert("insert into post (title,content) values (#{title}, #{content})")
    void insertPost(Post post);

    @Select("select * from post where id = #{id}")
    Post getPostId(int id);

    @Delete("delete from post where id = #{id}")
    void deletePostById(int id);
}
