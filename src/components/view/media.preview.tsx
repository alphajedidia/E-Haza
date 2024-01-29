import { Close } from '@mui/icons-material';
type FilePreviewProps = {
    file:File
    index: number
    removeFile: ()=>void
}
export const FilePreview = (props:FilePreviewProps)=>{
    
    const {file, index, removeFile} = props
    return(
        <div className="w-full">
            {
                file.type.startsWith('image/') && 
                <div className="relative h-32" key={index}>
                    <img src={URL.createObjectURL(file)} alt={`file-${index}`} className='w-full object-cover h-32'/>  
                    <span className='absolute top-0 right-0 p-1 m-1.5 flex items-center justify-center bg-gray-500 bg-opacity-50 rounded-full' onClick={()=>removeFile()}>
                        <Close style={{color:"white", fontSize:20}}/>  
                    </span> 
                </div>
            }
            {
                file.type.startsWith('video/') &&
                <div className="h-32 relative" key={index}>
                    <video controls className='w-full object-cover h-32'>
                        <source src={URL.createObjectURL(file)} type={file.type}/>
                        Your browser does not support the video tag
                    </video>
                    <span className='absolute top-0 right-0 p-1 m-1.5 flex items-center justify-center bg-gray-500 bg-opacity-50 rounded-full' onClick={()=>removeFile()}>
                        <Close style={{color:"white", fontSize:20}}/>  
                    </span> 
                </div>
            }
        </div>
    )
}