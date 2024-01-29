import { IComment } from "../../types/post"
import { NamedAvatar } from "../avatar/named.avatar"
import Avatar from '../avatar/avatar';

export const CommentCard = ({comment}:{comment:IComment})=>{
    return(
        <div className="flex flex-col space-y-1 p-4 bg-white border-b-[1px] border-gray-300 m-4 rounded-lg">
            <div className="flex flex-row space-x-3 justify-between items-center">
                <NamedAvatar url={comment.profile_url} size={46} username={comment.username}/>
                <p className="text-sm text-colorScheme-light-charcoal text-opacity-60">{comment.comment_date}</p>
                {/* <Avatar url={comment.profile_url} size={32}/> */}
                {/* <h2 className="text-lg font-semibold text-colorScheme-light-charcoal">{comment.username}</h2> */}
            </div>
            <div className="flex flex-row space-x-2 items-center">
                <div className="opacity-0">
                    <Avatar url={null} size={46}/>
                </div>
                <p className="text-colorScheme-light-charcoal text-opacity-80"> {comment.comment_content}</p>
            </div>
        </div>
    )
}