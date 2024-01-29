import { useParams } from "react-router-dom"
import { IComment, IMedia, IPostDetails } from "../types/post";
import { CommentList } from '../components/list/comment.list';
import { PostCardDetails } from "../components/card/post.details.card";

export const PostDetailPage = ()=>{
    const {id} = useParams()
    const medias:IMedia[] = [
        {
            media_id:'1',
            media_name:'media1',
            media_type:'image/jpeg',
            media_url:'/src/assets/media1.jpg'
        },
        {
            media_id:'2',
            media_name:'media2',
            media_type:'image/jpeg',
            media_url:'/src/assets/media2.jpg'
        },
        {
            media_id:'3',
            media_name:'media3',
            media_type:'image/jpeg',
            media_url:'/src/assets/media3.jpg'
        },
        {
            media_id:'4',
            media_name:'back',
            media_type:'image/jpeg',
            media_url:'/src/assets/back.jpg'
        },

    ]
    const posts:IPostDetails[] = [
        {
            post_id:'1',
            post_content:'sajfas;kf sajaksdj sdjasdah dlsdh asdlhasdlj ahdlashd asldah d adadasd adasdas dasdasf gdfgdf hd hdhd',
            username:'Kai Ichinose',
            profile_url:null,
            comment_count:69,
            reaction_count:169,
            medias:[]
        },
        {
            post_id:'2',
            post_content:'sajfas;kf sajaksdj sdjasdah dlsdh asdlhasdlj ahdlashd asldah d adadasd adasdas dasdasf gdfgdf hd hdhd',
            username:'Ichijo Raku',
            profile_url:null,
            comment_count:0,
            reaction_count:19,
            medias:[medias[1]]
        },
        {
            post_id:'3',
            post_content:'sajfas;kf sajaksdj sdjasdah dlsdh asdlhasdlj ahdlashd asldah d adadasd adasdas dasdasf gdfgdf hd hdhd',
            username:'Chitoge Kirisaki',
            profile_url:'/src/assets/100790.png',
            comment_count:999,
            reaction_count:19100,
            medias:medias
        }
    ]
    const post = posts.find(p => p.post_id == id)
    const comments:IComment[]=[
        {
            comment_id:'1',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:post?.username!,
            profile_url:post?.profile_url!
        },
        {
            comment_id:'2',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:post?.username!,
            profile_url:post?.profile_url!
        },
        {
            comment_id:'3',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:post?.username!,
            profile_url:post?.profile_url!
        },
        {
            comment_id:'4',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh dsgdsf sfd fsdfs fdfsfsf sfsf sfsf s fsf sfsf sdfsfsfsfsfsf sfsfs fsfsfs fsff s f sslkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:post?.username!,
            profile_url:post?.profile_url!
        },
        {
            comment_id:'5',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:post?.username!,
            profile_url:post?.profile_url!
        },
        {
            comment_id:'6',
            comment_date:'Just now',
            comment_content:'dfjsldf skfh slkfhdslf kshdflshf sfs fsf sfsdfsf s',
            username:post?.username!,
            profile_url:post?.profile_url!
        },
    ]
    // const comments:IComment[]=[]
    return(
        <div className="">
            <PostCardDetails post={post!} linkOn={false}/>
            <CommentList comments={comments}/>
                
        </div>
    )
}