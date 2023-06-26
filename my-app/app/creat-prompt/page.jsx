"use client"
import React from 'react'
import Form from "@components/form"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

function Creat_prompt() {
  const router = useRouter();
  const { data: session } = useSession()
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: ""
  })
  console.log(post);
  const createPrompt = async (e) =>{
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <Form 
    type="creat"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handelSubmit={createPrompt}
    />
  )
}

export default Creat_prompt