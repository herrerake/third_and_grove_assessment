import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <div>helloworld</div>
  )
}

export default IndexPage

export const query = graphql`
  {
    allRandomUser(sort: {fields: name___last, order: ASC}) {
      totalCount
      nodes {
        phone
        email
        name {
          first
          last
        }
        location {
          city
          country
        }
        picture {
          thumbnail
        }
        id
      }
    }
  }
`
