import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {

    const{loading,posts}=useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[500px] h-screen flex flex-col py-3 gap-y-7 mb-[80px] mt-[65px] items-center justify-center'>
        {
            loading ?
              
             (<Spinner/>) : 
             (
                posts.length===0 ? 
                (<div>
                    <p>No Post Found</p>
                </div>) : 
                (posts.map((post)=>(
                    <div key ={post.id}>
                        <p className='font-bold'>{post.title}</p>
                        <p className='text-[13px]'>
                            By <span className='italic'>{post.author}</span> on <span className='font-bold'>{post.category}</span>

                        </p>
                        <p className='text-[12px]'>Posted on {post.date}</p>
                        <p className='text-[16px] mt-[10px]'>{post.content}</p>
                        <div className='text-xs flex gap-x-2'>
                            {post.tags.map((tag,index)=>{
                                return <span key ={index} className="text-blue-800 font-bold underline">{`#${tag}`} </span>
                            })}
                        </div>
                     </div>
                )))
            )
        }
    </div>
  )
}

export default Blogs