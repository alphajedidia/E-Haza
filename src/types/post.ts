export interface IPost {
    post_id:string,
    post_content:string,
    username:string,
    profile_url:string|null,
    comment_count:number,
    reaction_count:number,
    media_count:number,
    media_first?:IMedia
}
export interface IPostDetails {
    post_id:string,
    post_content:string,
    username:string,
    profile_url:string|null,
    comment_count:number,
    reaction_count:number,
    comments?:IComment[]|null
    medias?:IMedia[]|null
}

export interface IComment{
    comment_id:string,
    comment_content:string,
    comment_date:string,
    username:string,
    profile_url:string|null
}
export interface IMedia{
    media_id:string,
    media_type:string,
    media_name:string,
    media_url:string|null   
}