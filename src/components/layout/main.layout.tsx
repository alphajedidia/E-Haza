import { Outlet } from "react-router-dom"
import { TopNav } from '../navigation/top.nav';
import { BottomNav } from '../navigation/bottom.nav';

export const MainLayout = ()=>{
    return(
        <main className="flex flex-col text-colorScheme-light-charcoal">
            <TopNav/>
            <section className="my-14">
                <Outlet/>
            </section>
            <BottomNav/>
        </main>
    )
}