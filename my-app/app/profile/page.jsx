"use client";
import React from 'react'
import Profile from '@components/profile'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'


function MyProfile() {
    const [mypost, setMyPost] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch((`/api/users/${session?.user.id}/posts`))
            const data = await res.json();
            setMyPost(data);
        }
        if(session?.user.id) fetchPost();
},[session?.user.id])

    const handleDelete = () => {}

    const handleEdit = () => {}

    return (
        <Profile 
        name="My"
        desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        post={mypost}/>
    )
}

export default MyProfile