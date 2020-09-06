import React, { useEffect, useState } from 'react';
import AllPosts from '../AllPosts/AllPosts';


const Post = () => {
    const [post, setPost] = useState([]);

    //get post data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            {
                post.map(post => <AllPosts post={post} key={post.id}></AllPosts>)
            }
        </div>
    );
};

export default Post;