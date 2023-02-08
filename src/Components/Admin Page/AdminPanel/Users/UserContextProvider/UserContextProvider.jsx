import React, { createContext, useState, useEffect } from 'react'

// API
import { getUsers } from '../api/api';

export const BlogsContext = createContext();

const BlogContextProvider = (props) => {

    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setBlogs(await getUsers());
        }

        fetchAPI();

    }, []);

    return ( 
        <BlogsContext.Provider value={Blogs}>
            {props.children}
        </BlogsContext.Provider>
     );
}
 
export default BlogContextProvider;