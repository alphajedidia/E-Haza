import { FileInput } from '../input/file.input';
import { TextArea } from '../input/textarea.input';
import { NamedAvatar } from '../avatar/named.avatar';
import { ActionButton } from '../button/button';
export const CreatePostForm = ()=>{
    return(
        <form className="flex flex-col py-4 px-3 space-y-3">
            <NamedAvatar url={null} username='Kai Ichinose' size={48}/>
            <TextArea rows={10} placeholder="What's on your mind?" style='text-xl w-full'/>
            <FileInput previewed={true}/>
            <ActionButton isFetching={false} label="Create post" onClicked={()=> console.log("created")} type='submit' variant='primary'/>
        </form>
    )
}