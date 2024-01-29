import { clsx } from 'clsx';
type InputProps = {
    label?:string
    name:string
    iconEnd?:React.ReactNode
    iconStart?:React.ReactNode
    placeholder:string
    isShown:boolean
    style?:string
    onChanged:()=>void

}
export const PasswordInput = (props:InputProps)=> {
    const {label, name, iconStart,iconEnd, placeholder, style, onChanged, isShown} = props
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
                    type={isShown?"text":"password"}
                    
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
                    iconEnd && <span className="absolute bottom-1/4 right-0 px-3 cursor-pointer">
                        {iconEnd}
                    </span>
                }
            </div>
        </div>
    )
}