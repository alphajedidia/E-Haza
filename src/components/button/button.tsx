import { ActionButtonProps } from "./button.type";


export const ActionButton = (props: ActionButtonProps) => {
    const {label, isFetching, type, onClicked, style, size, variant} = props;
    const btnSize = size ? `btn-${size}` : `w-full`;
    const btnVariant = variant == "primary" ? "btn-primary" : "btn-secondary";

    return (
        <button
            type={type}
            disabled={ isFetching }
            onClick={ onClicked }
            className={`${btnSize}  btn  ${btnVariant} ${style} ${isFetching ? "btn-disabled" : ""}`}>
            {
                isFetching &&
                    <span className="circular-animated ">

                   </span>
            }
            <span className="text-lg">
                { label }
            </span>
        </button>
    );
};