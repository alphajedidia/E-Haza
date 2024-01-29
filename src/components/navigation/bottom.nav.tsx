import { Links } from "../../utils/routes"
import { LinkNavigation } from "./link.nav"

export const BottomNav = ()=>{
    return(
        <nav className="flex flex-row w-full h-14 bg-white border-t-[1px] border-gray-300 fixed bottom-0 justify-around items-center">
            {
                Links.map((linkItem, index)=>(
                    <LinkNavigation
                        showActive={true}
                        showLabel={false}
                        to={linkItem.to!}
                        label={linkItem.label!}
                        icon={linkItem.icon}
                        key={`${index}${linkItem.label}`}
                    />
                ))
            }
        </nav>
    )
}