import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LinkNavigation } from './link.nav';

type NextTopBarProps = {
    title:string,
    to?:string,
    rightElement:React.ReactNode
}
export const NextTopNav = (props:NextTopBarProps)=>{
    const {title, rightElement, to} = props
    return(
        <nav className='flex flex-row bg-white justify-between px-2 h-14 border-b-[1px] border-gray-300 items-center fixed w-full z-30'>
            <LinkNavigation showActive={false} to={to||"/"} showLabel={false} label='go back' icon={<ArrowBackIcon style={{fontSize:30}}/>}/>
            <div className="text-lg font-semibold">
                {title}
            </div>
            <div className="">
                {rightElement}
            </div>
        </nav>
    )
}