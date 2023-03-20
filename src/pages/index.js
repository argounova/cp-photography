import * as React from "react"
import {
  pageImage,
  pageStyles,
  pageGradient,
  heading,
  headingAccent,
} from './index.module.css'

const IndexPage = () => {
  return (
    <main className={pageImage}>
      <div className={pageStyles}>
        <div className={pageGradient}>
          <h1 className={heading}>
            CP Photography
            <br />
            <span className={headingAccent}>...coming soon</span>
          </h1>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>CP Photography</title>
