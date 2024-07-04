import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react"

function Root() {
    const [backgroundImg,setBackgroundImg]=useState("home")
    const location = useLocation()
    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setBackgroundImg("home");
                break;
            case "/destination":
                setBackgroundImg("destination");
                break;
            case "/crew":
                setBackgroundImg("crew");
                break;
            case "/technology":
                setBackgroundImg("technology");
                break;
        }
    }, [location.pathname]);
    useEffect(() => {
        console.log(`Background Image: bg-${backgroundImg}-mb`); // Debug log
    }, [backgroundImg]);
    return (
        <div className={`grid grid-rows-[min-content_1fr_min-content] overflow-hidden w-screen h-screen bg-${backgroundImg}-mb md:bg-${backgroundImg}-tb lg:bg-${backgroundImg}-ds bg-cover bg-center bg-no-repeat md:pt-12`}>
            <Header />
            <Outlet />
        </div>
    )
}
export default Root