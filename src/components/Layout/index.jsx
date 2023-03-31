import * as React from "react"
import { GlobalStyle } from "../../styles/GlobalStyles"
import Navigation from '../Navigation/index'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
                <Navigation />
                {children}
        </>
    )
}

export default Layout