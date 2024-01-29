import { ModeComment, Send } from "@mui/icons-material";
import { IComment } from "../../types/post"
import { CommentCard } from "../card/comment.card"
import { TextArea } from '../input/textarea.input';

export const CommentList = ({comments}:{comments:IComment[]})=>{
    return(
        <div className="mb-20">
            {
                comments.length !==0? comments.map((comment:IComment, index:number) =>(
                    <CommentCard comment={comment} key={index}/>
                )):
                <div className="flex flex-col justify-center items-center h-full pt-10">
                    <ModeComment style={{fontSize:150, color:'#999'}}/>
                    <p className="text-xl text-colorScheme-light-charcoal text-opacity-50">No comments yet</p>
                </div>
            }
            <div className="bg-white flex flex-row space-x-3 h-14 items-center p-2 w-full fixed bottom-0 left-0">
                <TextArea rows={1} placeholder="Leave a comment..." style="bg-gray-400 bg-opacity-10 border-none rounded-full p-2 pl-3 text-md w-full"/>
                <span className="text-colorScheme-light-orange cursor-pointer pr-2">
                    <Send/>
                </span>
            </div>
        </div>
    )
}