import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react"
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Routes,Route, useSearchParams, useLocation } from "react-router-dom"; 
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";




export default function App(){
const{fetchBlogsPosts}=useContext(AppContext);

const[searchParams,setSearchParams]= useSearchParams();
const location = useLocation();

useEffect(()=>{
  const page = searchParams.get("page") ?? 1;

  if(location.pathname.includes("tags")) {
    // iska matlab tag wala page show karna h
    const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogsPosts(Number(page), tag);
  }
  else if(location.pathname.includes("categories")) {
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogsPosts(Number(page),null,category);
  }
  else{
    fetchBlogsPosts(Number(page));
  }

},[location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />
    </Routes>
  );
}