import { CommentList } from '../components/list/comment.list';
import { IComment } from '../types/post';
export const CommentsPage = ()=>{
    const comments:IComment[]=[
        {
            comment_id:'1',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:'Kirisaki Chitoge',
            profile_url:null
        },
        {
            comment_id:'2',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:'Kirisaki Chitoge',
            profile_url:'/src/assets/100790.png'
        },
        {
            comment_id:'3',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:'Kirisaki Chitoge',
            profile_url:'/src/assets/100790.png'
        },
        {
            comment_id:'4',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh dsgdsf sfd fsdfs fdfsfsf sfsf sfsf s fsf sfsf sdfsfsfsfsfsf sfsfs fsfsfs fsff s f sslkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:'Kirisaki Chitoge',
            profile_url:'/src/assets/100790.png'
        },
        {
            comment_id:'5',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:'Kirisaki Chitoge',
            profile_url:'/src/assets/100790.png'
        },
        {
            comment_id:'6',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:'Kirisaki Chitoge',
            profile_url:'/src/assets/100790.png'
        },
    ]
    return(
        <div className="">
            <CommentList comments={comments}/>
        </div>
    )
}