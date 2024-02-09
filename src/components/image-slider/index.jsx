import { useEffect, useState } from "react";

export default function ImageSlide({url,limit}){
    const [images,setImages] = useState([])
    const [currentSlide,setCurrentSlide]=useState(0)
    const [errorMsg,setErrorMsg]=useState(null)
    const [loading,setLoading] =useState(false)
    async function fetchImages(getUrl){
        try{
            setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json()

            if(data){
                setImages(data)
                setLoading(false)
            }
            
        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(url!=='')fetchImages(url)
    },[url])

    console.log(images);

    if(loading) return <div>Loading data please wait</div>
    if(errorMsg!==null) return <div>Error occurred{errorMsg}</div>
    return <div className="container">
    </div>
}