import { PostCard } from '../components/card/post.card';
import { useNavigate } from 'react-router-dom';
import { CreatePostBtn } from '../components/button/create_post.btn';
import { IMedia, IPost } from '../types/post';
export const PostList = ()=>{
    const navigate = useNavigate()
    const medias:IMedia[] = [
        {
            media_id:'1',
            media_name:'media1',
            media_type:'image/jpeg',
            media_url:'src/assets/media1.jpg'
        },
        {
            media_id:'2',
            media_name:'media2',
            media_type:'image/jpeg',
            media_url:'src/assets/media2.jpg'
        },
        {
            media_id:'3',
            media_name:'media3',
            media_type:'image/jpeg',
            media_url:'src/assets/media3.jpg'
        },
        {
            media_id:'4',
            media_name:'back',
            media_type:'image/jpeg',
            media_url:'src/assets/media3.jpg'
        },

    ]
    const posts:IPost[] = [
        {
            post_id:'1',
            post_content:'sajfas;kf sajaksdj sdjasdah dlsdh asdlhasdlj ahdlashd asldah d adadasd adasdas dasdasf gdfgdf hd hdhd',
            username:'Kai Ichinose',
            profile_url:null,
            comment_count:69,
            reaction_count:169,
            media_count:0,
        },
        {
            post_id:'2',
            post_content:'sajfas;kf sajaksdj sdjasdah dlsdh asdlhasdlj ahdlashd asldah d adadasd adasdas dasdasf gdfgdf hd hdhd',
            username:'Ichijo Raku',
            profile_url:null,
            comment_count:0,
            reaction_count:19,
            media_count:1,
            media_first:medias[1]
        },
        {
            post_id:'3',
            post_content:'sajfas;kf sajaksdj sdjasdah dlsdh asdlhasdlj ahdlashd asldah d adadasd adasdas dasdasf gdfgdf hd hdhd',
            username:'Chitoge Kirisaki',
            profile_url:'src/assets/100790.png',
            comment_count:999,
            reaction_count:19100,
            media_count:4,
            media_first:medias[0]
        }
    ]
    return (
        <div className="mt-0">
            <div className="pb-3 pt-4 pl-2 pr-3 bg-white shadow-sm">
                <CreatePostBtn label="Create new post" type='button' onClicked={()=>navigate("/details/post/create")}/>
            </div>
            <div className="m-3 flex flex-col space-y-5">
                {
                    posts.map((post:IPost, index:number) =>(
                        <PostCard post={post} linkOn={true} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}