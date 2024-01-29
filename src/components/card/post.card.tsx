import { Button, ButtonGroup } from '@mui/material';
import Avatar from '../avatar/avatar';
import CollectionsIcon from '@mui/icons-material/Collections';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { IMedia, IPost } from '../../types/post';
import { useState } from 'react';

type PostCardProps = {
    post:IPost
    linkOn:boolean
}

export const PostCard = (props:PostCardProps)=>{
    const {post:{username, post_content, reaction_count, comment_count, media_count, post_id, profile_url, media_first}, linkOn} = props
    const navigate = useNavigate()
    const [react, setReact] = useState<boolean>(false)

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

    return (
        <div className="flex flex-col w-full rounded-md bg-white text-colorScheme-light-charcoal border-b-[1px] border-gray-200" >
            <div className="w-full flex flex-row justify-between p-2">
                {
                    linkOn?
                    <Link to={`/details/post/${post_id}`}>
                        <div className="flex flex-row space-x-1 justify-start items-center">
                            <Avatar url={profile_url} size={56}/>
                            <h2 className='font-bold text-xl'>{username}</h2>
                        </div>
                    </Link>:
                    <div className="flex flex-row space-x-1 justify-start items-center">
                        <Avatar url={profile_url} size={56}/>
                        <h2 className='font-bold text-xl'>{username}</h2>
                    </div>
                }
                {/* <div className="cursor-pointer">
                    <span onClick={toggleDrawer(anchor, true)}>
                        <MoreHorizIcon />
                    </span>
                    <div className="" onClick={toggleDrawer(anchor, false)}>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor,false)}
                            onOpen={toggleDrawer(anchor,true)}
                        >
                            <PostDrawerMenu drawerMenus={drawerMenus}/>
                        </SwipeableDrawer>
                    </div>
                </div> */}
            </div>
            {
                linkOn?
                <Link to={`/details/post/${post_id}`}>
                    <div className="p-2">
                        <p>{post_content}</p>
                    </div>
                    {
                        media_count !== 0 &&
                        <div className="h-60 max-h-60 w-full relative">
                            {
                                media_count > 1 && <span className='absolute top-0 right-0 mr-2 mt-1'>
                                    <CollectionsIcon style={{color:"white"}}/>
                                </span>
                            }
                            <img src={media_first?.media_url!} alt={media_first?.media_name} className='w-full h-full object-cover'/>
                        </div>
                    }
                </Link>:
                <div className="">
                    <div className="p-2">
                        <p>{post_content}</p>
                    </div>
                    <div className="max-h-60 h-60 w-full relative overflow-hidden">
                        <img src={media_first?.media_url!} alt={media_first?.media_name} className='w-full object-cover'/>
                    </div>
                </div>
            }
            <div className="w-full pt-1 border-t-[1px] border-gray-200 border-opacity-40">
            <ButtonGroup variant="text" aria-label="text button group" style={{width:"100%"}}>
                {
                    react ? <Button style={{borderColor:"#ddd", borderWidth:".5px", color:"hotpink", width:"50%"}} startIcon={<FavoriteBorderOutlinedIcon/>} onClick={()=>{setReact(react=>!react)}}>{reaction_count}</Button>:
                    <Button style={{borderColor:"#ddd", borderWidth:".5px", color:"hotpink", width:"50%"}} startIcon={<FavoriteOutlinedIcon/>} onClick={()=>{setReact(react=>!react)}}>{reaction_count+1}</Button>
                        
                }
                <Button style={{borderColor:"#ddd", borderWidth:".5px", width:"50%"}} startIcon={<ModeCommentOutlinedIcon/>} onClick={()=> navigate(`/details/post/about/${post_id}`)}>{comment_count}</Button>
            </ButtonGroup>
            </div>
        </div>
    )
}