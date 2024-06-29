import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function Root() {
    return (
        <div className="grid grid-rows-[min-content_1fr_min-content] overflow-hidden h-screen bg-home-mb md:bg-home-tb lg:bg-home-ds bg-cover bg-center bg-no-repeat md:pt-12">
            <Header />
            <Outlet />
        </div>
    )
}
export default Root