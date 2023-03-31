import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  pageImage,
  pageGradientA,
  pageGradientB,
} from './index.module.css'

const Background = () => {
    return(
        <>
            <div className={pageGradientA}></div>
            <div className={pageGradientB}></div>
            <StaticImage 
                src="../../images/austin-skyline.jpeg"
                alt="Layout image"
                layout="fullWidth"
                className={pageImage}
                placeholder="blurred"
            />
        </>
    )
}

export default Background