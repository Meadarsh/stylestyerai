import React from "react"
import LandingPage from "./pages/landingPage"
import SecondPage from "./pages/secondPage"
import ThirdPage from "./pages/thirdPage"
import FourthPage from "./pages/fourthPage"
import Footer from "./components/footer"
import DesktopOnly from "./components/desktopOnly"
function App() {
  const[width, setWidth] = React.useState(window.innerWidth)

  return (
   <>
    {width>768?<>
<LandingPage/>
<SecondPage/>
<ThirdPage/>
<FourthPage/>
<Footer/>
  </>:<DesktopOnly/>}
  </>
  )
}

export default App
