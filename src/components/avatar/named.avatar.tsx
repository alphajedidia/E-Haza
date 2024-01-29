import { useState } from "react"
import Avatar from "./avatar"

type NamedAvatarProps = {
    url: string|null,
    style?: string,
    size: number,
    username: string
}
export const NamedAvatar = (props:NamedAvatarProps)=>{
    const {url, style, size, username} = props
    var sizeStr = ""
    if (size<=20) {
        sizeStr ="sm"
    }
    else if (size <= 30) {
        sizeStr = "md"
    }
    else if (size <=40){
        sizeStr = "lg"
    }
    else if (size <=50){
        sizeStr = "xl"
    }
    else if (size <=60){
        sizeStr = "2xl"
    }
    else{
        sizeStr = "3xl"
    }
    return(
        <div className="flex flex-row space-x-2 items-center">
            <Avatar url={url} size={size} style={style}/>
            <h2 className={`text-${sizeStr} font-semibold`}>{username}</h2>
        </div>
    )
}