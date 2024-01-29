import { UseErrorBoundaryApi } from "react-error-boundary";
import { ActionButtonProps } from "./button.type";
import Avatar from "../avatar/avatar";

type CreatePostBtnProps = {
    type: "button" | "submit" | "reset"
    onClicked:(() => UseErrorBoundaryApi<any>) | (() => void)  ,
    label: React.ReactNode,
}
export const CreatePostBtn = (props: CreatePostBtnProps) => {
    const {label, type, onClicked} = props;

    return (
        <div className="flex flex-row space-x-2 items-center">
            <Avatar url={null} size={44}/>
            <button
                type={type}
                onClick={ onClicked }
                className="text-colorScheme-light-charcoal text-opacity-70 border-colorScheme-light-charcoal border-[1px] border-opacity-50 w-full rounded-full text-left p-2 pl-4"
            >
                    { label }
            </button>
        </div>
    );
};