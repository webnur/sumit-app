import { useEffect, useState } from "react"


export default function LayoutComponetOne (){

    const [onSmallScreen, setOnSmallScreen] = useState(false)

    const checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth < 764)
    }
    useEffect(() => {
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    return(
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    )
}