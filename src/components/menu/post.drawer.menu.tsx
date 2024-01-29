import { IDrawerMenu } from "../../types/misc"
import { IconButton } from "../button/icon_button"

type DrawerProps = {
    drawerMenus:Array<IDrawerMenu>
}
export const PostDrawerMenu = (props:DrawerProps)=>{
    const {drawerMenus} = props
    
    return(
        <div className="">
            <div className="bg-gray-200 m-3 p-3 pl-0 rounded-xl flex flex-col">

                {
                    drawerMenus.map((menu, index)=>(
                        <IconButton icon={menu.icon} label={menu.label} onClicked={menu.click} type="button" variant="secondary" labeled={true} style="border-none w-full justify-start text-colorScheme-light-charcoal text-opacity-85" key={index}/>
                    ))
                }
            </div>
        </div>
    )
}