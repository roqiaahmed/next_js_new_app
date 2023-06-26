import React from 'react'
import Link from 'next/link'

function Form({type, post, setPost, submitting, handelSubmit}) {
    return (
    <section>
        <h1><span>{type} post</span></h1>
        <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
        </p>
        <form onSubmit={handelSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label className='font-satoshi font-semibold text-base text-gray-700'> Your AI Prompt</label>
        <textarea placeholder='write your prompt here' required className='form_textarea' 
        value={post.prompt}
        onChange={(e)=> setPost({...post, prompt: e.target.value})}/>
        <label className='font-satoshi font-semibold text-base text-gray-700'> (#product, #webdevelopment, #idea, etc.)</label>
        <input placeholder='#tag' className='form_input' required
        value={post.tag}
        onChange={(e)=> setPost({...post, tag: e.target.value})}/>
        <div>
        <Link href="/">cancel </Link>
        <button disabled={submitting}>
            {submitting? `${type}ing...`: type}
        </button>
        </div>
        </form>
    </section>
)
}

export default Form