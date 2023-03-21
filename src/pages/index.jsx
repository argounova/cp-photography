import * as React from "react"
import Layout from "../components/Layout"
import {
  heading,
  headingAccent,
} from './index.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <h1 className={heading}>
        CP Photography
        <br />
        <span className={headingAccent}>coming soon</span>
      </h1>
    </Layout>
  )
}

export const Head = () => <title>CP Photography</title>

export default IndexPage