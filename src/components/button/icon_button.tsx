import { UseErrorBoundaryApi } from "react-error-boundary";

type IconButtonProps = {
    type: "button" | "submit" | "reset"
    onClicked:(() => UseErrorBoundaryApi<any>) | (() => void)  ,
    label: React.ReactNode,
    variant: "primary" | "secondary",
    style?: string
    labeled?: boolean
    icon:React.ReactNode
}
export const IconButton = (props: IconButtonProps) => {
    const {icon,label, labeled, type, onClicked, style, variant} = props;
    const btnVariant = variant == "primary" ? "btn-primary" : "btn-secondary";

    return (
        <button
            type={type}
            onClick={ onClicked }
            className={`btn  ${btnVariant} ${style}`}>
           
            {icon}
            {
                labeled &&
                <span className="text-lg">
                    { label }
                </span>
            }
        </button>
    );
};