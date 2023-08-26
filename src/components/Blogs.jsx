import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

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
                    <BlogDetails key={post.id} post={post}/>
                )))
            )
        }
    </div>
  )
}

export default Blogs