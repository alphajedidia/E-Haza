import { useRef, useState } from "react";
import { FilePreview } from '../view/media.preview';
import Avatar from "../avatar/avatar";
import { CameraAlt } from "@mui/icons-material";

type ProfileInputProps = {
    previewed: boolean
    url: string|null
    size: number
}
export const ProfileInput = (props:ProfileInputProps)=>{
    const {previewed, url, size} = props
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files){
            setFiles([...files,...Array.from(e.target.files)])
        }
    }
    const removeFile = (index:number)=>{
        setFiles(files.filter((_,i)=> i !== index))
    }

    const handleClick = ()=>{
        fileInputRef.current?.click()
    }
    const gridClass = ()=>{
        switch (files.length) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-2';
            default:
                return 'grid-cols-3';
        }
    }
    return(
        <div className="">
            <input 
                type="file" 
                name="" 
                id="" 
                multiple
                style={{display:"none"}} 
                onChange={handleFileChange}
                ref={fileInputRef}
            />
            <div className="relative cursor-pointer" onClick={handleClick}>
                <Avatar url={url} size={size} />
                <span className="p-1.5 bg-gray-500 bg-opacity-40 rounded-full absolute right-0 bottom-0 flex items-center">
                    <CameraAlt style={{color:"white", fontSize:22}}/>
                </span>
            </div>
            {
                previewed && <div className={`grid gap-1 mt-4 ${gridClass()}`}>
                    {
                        files.map((file, index)=>(
                            <FilePreview file={file} index={index} removeFile={()=>removeFile(index)} key={index}/>
                        ))
                    }
                </div>

            }
        </div>
    )
}