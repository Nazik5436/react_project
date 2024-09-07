import axios from "axios"
import { useEffect, useState } from "react"
import { RequestList } from "./RequestList/RequestList"

export const Request = () =>{
    const [listApi, setListApi] = useState(null)

    const apiKey = "https://jsonplaceholder.typicode.com"

    const requestHandle = async () =>{
        try {
            const response = await axios.get(`${apiKey}/posts`)
            console.log(response.data)
            setListApi(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() =>{
        requestHandle()
    }, [])
    
    return(
        <div>
            { listApi && (
                <RequestList posts={listApi}></RequestList>
            )}
        </div>
    )
}