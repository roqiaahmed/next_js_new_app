"use client";
import PromptCard from "./PromptCard";

function Profile({name, desc, handleEdit, handleDelete, post}) {
  return (
    <section className='w-full'>
        <h1  className='head_text text-left'> <span className='blue_gradient'>{name} profile</span></h1>
        <p className='desc text-left'>{desc}</p>
        <div className='mt-16 prompt_layout'>
            {post.map((post)=>(<PromptCard 
            key={post._id}
            post={post}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />))}
        </div>
    </section>
  )
}

export default Profile