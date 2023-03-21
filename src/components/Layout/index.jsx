import * as React from "react"
import {
  pageImage,
  pageGradientA,
  pageGradientB,
} from './index.module.css'

const Layout = ({ children }) => {
    return (
        <main className={pageImage}>
            <div className={pageGradientA}>
                <div className={pageGradientB}>
                    {children}
                </div>
            </div>
        </main>  
    )
}

export default Layout