import { createContext, useState } from "react"
import { baseUrl } from "../baseUrl";


// Step 1
export const Appcontext = createContext();


function AppContextProvider({children}){

    const[loading,setLoading] = useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);  


    // Data filling from API call

    async function fetchBlogsPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalpages);



        }
        catch(error){

        }

    }


    const value ={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages
    };


// Step 2
    return <Appcontext.Provider value={value}>
                {children}
           </Appcontext.Provider>

}
