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
        <div className="w-full flex flex-col">
            {
                label && (
                    <label htmlFor={name} className="label">
                        {label}
                    </label>
                )
            }
            <div className="flex-1 relative">
                {
                    iconStart && <span className="absolute left-0 top-1/2 -translate-y-1/2 px-5">
                        {iconStart}
                    </span>
                }
                <input 
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    onChange={onChanged}
                    className={clsx(
                        "input",
                        {
                            "px-16": iconStart,
                        },
                        style
                    )}
                />
                {
                    iconEnd && <span className="absolute top-1/4  right-0 px-2">
                        {iconEnd}
                    </span>
                }
            </div>
        </div>
    )
}