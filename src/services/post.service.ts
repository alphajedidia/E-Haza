import { POST } from "../constant/endpoint"
import { HttpClient } from "../lib"

class PostService {
    public createPost(createPostDto:ICreatePostDto){
        return HttpClient.post<ICreatePostDto>(POST.CRUD, createPostDto)
    }
    public getAll(){
        return HttpClient.get(POST.CRUD)
    }
    public getById(post_id:string){
        return HttpClient.get(POST.CRUD+ post_id)
    }
    public update(post_id:string, updateDto:Partial<IUpdateDto>){
        return HttpClient.put<Partial<IUpdateDto>>(POST.CRUD+ post_id, updateDto)
    }
    public delete(post_id:string){
        return HttpClient.delete(POST.CRUD+ post_id)
    }
}

export const postService = new PostService()

export interface ICreatePostDto {
    post_id?: string
    post_content: string
    medias:File[]
}
export interface IUpdateDto extends ICreatePostDto {}