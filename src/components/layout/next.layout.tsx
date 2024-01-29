import { Outlet, useLocation } from 'react-router-dom';
import { NextTopNav } from '../navigation/next_top.nav';
import { routes } from '../../utils/next.routes';
export const NextLayout = ()=>{
    const location = useLocation();
    let currentRoute = routes.find(r => r.path === location.pathname)
    if (currentRoute === undefined) {
        for(let route of routes) {
            if (location.pathname.startsWith(route.path) && !location.pathname.endsWith("create")) {
                currentRoute = route     
            }
        }
    }
    const title = currentRoute?.title
    const to = currentRoute?.to
    return(
        <main className="flex flex-col text-colorScheme-light-charcoal">
            <NextTopNav to={to!} title={title!} rightElement=''/>
            <section className='mt-14'>
                <Outlet/>
            </section>
        </main>
    )
}