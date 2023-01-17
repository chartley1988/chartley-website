import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import getBlogPostData from "../blog/getBlogPostData";

function BlogPost () {
    const [postData, setPostData] = useState({
        title: "",
        post_date: "",
        content: "",
    })

    const { slug } = useParams();
    
    useEffect(()=>{
        getBlogPostData(slug).then((post)=>{
            console.log(post);
            setPostData(post[0]);
        })
    },[slug])
    


    return <div className="main-container">
        <h2>{postData.title}</h2>
        <p>{postData.post_date}</p>
        <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
}

export default BlogPost