// import { useEffect, useState } from "react"
import useWindowWidth from "./Hooks/useWindowWidth"

export default function LayoutComponetTwo (){

    // const [onSmallScreen, setOnSmallScreen] = useState(false)
    // const checkScreenSize = () => {
    //     setOnSmallScreen(window.innerWidth < 764)
    // }
    // useEffect(() => {
    //     checkScreenSize()
    //     window.addEventListener("resize", checkScreenSize)

    //     return () => window.removeEventListener('resize', checkScreenSize)
    // }, [])


    const onSmallScreen = useWindowWidth(600)

    return(
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This Is Another Componet</h1>
        </div>
    )
}