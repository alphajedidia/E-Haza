import { Route, Routes } from "react-router-dom"
import { CreatePost } from "../pages/create_post.page"
import { PostDetailPage } from "../pages/post_details.page"
import { CommentsPage } from "../pages/comments.page"

export const PostRoutes = ()=>{
    return (
        <Routes>
            <Route path="create/" element={<CreatePost/>}/>
            <Route path=":id" element={<PostDetailPage/>}/>
            <Route path="about/:id" element={<CommentsPage/>}/>
        </Routes>
    )
}