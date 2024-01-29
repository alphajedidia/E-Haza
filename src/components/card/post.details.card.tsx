import { Button, ButtonGroup, SwipeableDrawer } from '@mui/material';
import Avatar from '../avatar/avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IMedia, IPostDetails } from '../../types/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import { IDrawerMenu } from '../../types/misc';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Delete, Edit } from '@mui/icons-material';
import { useSnackbar } from 'notistack';

import 'swiper/css';
import 'swiper/css/pagination';
import { baseClientUrl } from '../../lib/base';
import { PostDrawerMenu } from '../menu/post.drawer.menu';
import { ConfirmationModal } from '../modal/confirmation.modal';

type PostCardProps = {
    post:IPostDetails
    linkOn:boolean
}
type Anchor = "top"|"bottom"|"left"|"right"

export const PostCardDetails = (props:PostCardProps)=>{
    const {post:{username, post_content, reaction_count, comment_count, medias, post_id, profile_url}, linkOn} = props
    const { enqueueSnackbar} = useSnackbar()
    const location = useLocation()
    const [open, setOpen] = useState<boolean>(false)
    const [react, setReact] = useState<boolean>(false)
    const [state, setState] = useState({
        top:false,
        left:false,
        bottom:false,
        right:false
    })

    
    const anchor = "bottom"
    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
      ) {
          return;
      }

      setState({ ...state, [anchor]: open });
    };
    const copyToClipboard = () => {
        const url = baseClientUrl+location.pathname
        navigator.clipboard.writeText(url).then(() => {
            enqueueSnackbar("Link copied", {anchorOrigin:{horizontal:"center", vertical:"bottom"}, className:"bg-[#f2f2f2] text-colorScheme-light-charcoal text-opacity-80"});
        },(err)=>{
            console.log(err)
            enqueueSnackbar("Failed to copy link", {variant: "error", anchorOrigin:{horizontal:"center", vertical:"bottom"}});
        })
    }
    const handleDelete = () => {
        setOpen(true);
    }
    const drawerMenus:IDrawerMenu[] = [
        {
            icon: <ContentCopyIcon/>,
            label:"Copy link",
            click: ()=>copyToClipboard()
        },
        {
            icon:<Edit/>,
            label:"Edit post",
            click: ()=> console.log("Edit")
        },
        {
            icon:<Delete/>,
            label:"Delete post",
            click:()=> handleDelete()
        }
    ]
    const navigate = useNavigate()

    return (
        <div className="flex flex-col w-full rounded-md bg-white text-colorScheme-light-charcoal border-b-[1px] border-gray-200" onKeyDown={toggleDrawer(anchor, false)}>
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
                <div className="cursor-pointer">
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
                    {
                        open && <ConfirmationModal open={open} content='Are your sure you want to delete this post?' title='Delete post' handleClose={()=>setOpen(false)} handleSubmit={()=> setOpen(false)}/>
                    }
                </div>
            </div>
                <div className="">
                    <div className="p-2">
                        <p>{post_content}</p>
                    </div>
                    {
                        medias?.length !== 0 &&
                        <div className="h-60 w-full relative overflow-hidden">
                            {
                                medias?.length! <= 1?
                                <div className="w-full h-full">
                                    {
                                        medias?.map((media:IMedia, index:number) =>(

                                            <img src={media?.media_url!} alt={media?.media_name} className='w-full h-full object-cover' key={index}/>
                                        ))
                                    }
                                </div>                             
                                :
                                <Swiper
                                    style={{
                                        '--swiper-pagination-color': '#fff',
                                    }}
                                    modules={[Pagination]}
                                    pagination={{clickable: true}}
                                    loop={false}
                                    lazy={true}
                                >
                                    {
                                        medias?.map((media:IMedia, index:number) =>(
                                            <SwiperSlide key={index} className='w-full h-full'>
                                                <div className="w-full h-full">
                                                    <img src={media.media_url!} alt={media.media_name} className='w-full h-full object-cover'/>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            }
                        </div>
                    }
                </div>
            <div className="w-full pt-1">
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