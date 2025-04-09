import { Link, Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export default function AppLayout(){
    const navi = useNavigation()
    console.log(navi.state)
    const state = navi.state === 'loading'
    if(state){return <Loader />}
    return(
        <div className = 'layout'>
        <header>
            <Link to = '/'>💚Clean Foodie Ecommerce💚</Link>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <CartOverview />
        </footer>
        </div>
    )
}