import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import './bio.css'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <div className="bio_column bio_left">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/profile-pic.png"
          width={200}
          height={200}
          quality={95}
          alt="Profile picture"
        />
      </div>
      <div className="bio_column bio_right">
        {author?.name && (
          <p>
            Hello my name's <strong>{author.name}</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, diam non dictum consectetur, elit eros sagittis felis, eget laoreet sem risus nec odio. Ut suscipit quis lectus at fermentum.
          </p>
        )}
      </div>
    </div>
  )
}

export default Bio
