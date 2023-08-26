import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";



// Step 1
export const AppContext = createContext();


export default function AppContextProvider({children}){

    const[loading,setLoading] = useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);  
    const navigate = useNavigate();


    // Data filling from API call

    async function fetchBlogsPosts(page=1,tag=null,category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);




        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);

    }

    function handlePageChange(page)
    {
        navigate({search: `?page=${page}`});
        setPage(page);
        

    }


    const value ={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogsPosts,
        handlePageChange
    };


// Step 2
    return <AppContext.Provider value={value}>
                {children}
           </AppContext.Provider>

}
