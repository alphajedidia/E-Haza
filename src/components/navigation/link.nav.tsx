import { NavLink } from "react-router-dom"

type NavLinkItemProps = {
    to:string
    label:string
    showLabel:boolean
    icon?:React.ReactNode
    style?:string
    showActive:boolean
}
export const LinkNavigation = (props:NavLinkItemProps) =>{
    const {to, label, icon, showLabel, showActive, style} = props
    return (
        <NavLink
            to={to}
            className={({isActive})=>
                isActive && showActive?  " text-colorScheme-light-orange last:border-b-2 first:border-none border-colorScheme-light-orange": " text-gray-500"
            }
        >
            {
                
            }
            <span className="w-5">
                {icon}
            </span>
            {
                showLabel &&
                <span className={`md:flex flex-1 justify-start text-colorScheme-light-charcoal text-opacity-70 ${style}`}>
                    { label }
                </span>
            }
        </NavLink>
    )
}