import * as React from "react"
import { Link } from "gatsby"
import { galleryItems } from "../components/Navigation/constants"
// import { SubNavStyles } from "../components/Navigation/styles"
import Layout from "../components/Layout"

const GalleryPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
      <ul
        style={{
          listStyle: 'none',
          fontSize: 'var(--h4)',
          
        }}
      >
        {galleryItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              activeClassName="menu__item--active"
              style={{
                textDecoration: 'none',
                color: '#fff'
              }}
            >
            {item.text}
            </Link>
            <hr />
          </li>
        ))}
      </ul>
      </div>
    </Layout>
  )
}

export const Head = () => <title>CP Photography | GALLERY</title>

export default GalleryPage