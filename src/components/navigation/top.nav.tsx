import { Notifications } from '@mui/icons-material';
import logo from '../../assets/react.svg'
import { LinkNavigation } from './link.nav';
import { app_name } from '../../constant';

export const TopNav = ()=> {
    return (
        <nav className='flex flex-row justify-between items-center h-14 border-b-[1px] border-gray-200 bg-white px-3 fixed w-full mt-0 z-20'>
            <div className="flex flex-row items-center space-x-2">
                <img src={logo} alt="logo" />
                <h2 className='text-colorScheme-light-orange font-semibold text-2xl'>{app_name}</h2>
            </div>
            <div className="flex flex-row items-center space-x-2">
                {/* <span className='cursor-pointer'>
                    <Notifications style={{color:"#555", fontSize:30}}/>
                </span> */}
                <LinkNavigation showActive={true} to='/notification' label='Notification' showLabel={false} icon={<Notifications style={{fontSize:31}}/>}/>
            </div>
        </nav>
    )
}