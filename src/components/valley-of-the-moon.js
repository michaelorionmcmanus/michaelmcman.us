import React, { Text } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ValleyOfTheMoon = (props) => (
  <StaticQuery
    query={graphql`
      query PhotoPostQuery {
        contentfulPhotoPost(slug: { eq: "valley-of-the-moon"})   {
          slug
          photos {
            image {
              title
              fluid(maxWidth: 3000, quality: 100) {
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const photos = data.contentfulPhotoPost.photos.map((photo) => {
        return(
          <div>
            <h2>{photo.image.title}</h2>
            <Img fluid={photo.image.fluid}/>
          </div>
        )
      })
      return(
        <div>
          <div>{photos}</div>
        </div>
      )
    }}
  />
)
export default ValleyOfTheMoon
