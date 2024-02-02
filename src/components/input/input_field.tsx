import { clsx } from 'clsx';
type inputType = "text" | "number" | "date" | "password" | "email" | "search" | "year"
type InputProps = {
    label?:string
    name:string
    iconEnd?:React.ReactNode
    iconStart?:React.ReactNode
    placeholder:string
    style?:string
    onChanged:()=>void
    type:inputType

}
export const InputField = (props:InputProps)=> {
    const {label, name, iconStart,iconEnd, placeholder, style, onChanged, type} = props
    return (
        <div className="flex flex-col w-full">
            {
                label && (
                    <label htmlFor={name} className="label" >
                        {label}
                    </label>
                )
            }
            <div className="relative flex-1">
                {
                    iconStart && <span className="absolute left-0 px-5 -translate-y-1/2 top-1/2">
                        {iconStart}
                    </span>
                }
                <input 
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    onChange={onChanged}
                    className={ clsx(
                        "input",
                        {
                            "px-16": iconStart,
                        },
                        style
                    )}
                />
                {
                    iconEnd && <span className="absolute right-0 px-2 top-1/4">
                        {iconEnd}
                    </span>
                }
            </div>
        </div>
    )
}