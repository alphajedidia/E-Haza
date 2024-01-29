import { useRef, useState } from "react";
import ImageIcon from '@mui/icons-material/Image';
import { IconButton } from "../button/icon_button";
import { FilePreview } from '../view/media.preview';

type FileInputProps = {
    previewed: boolean
}
export const FileInput = (props:FileInputProps)=>{
    const {previewed} = props
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
            <IconButton labeled={true}  label='Insert images or videos' style="w-full" type="button" variant="secondary" onClicked={handleClick} icon={<ImageIcon/>} />
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