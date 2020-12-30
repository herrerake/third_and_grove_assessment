import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Header from "../components/header";

import "../styles/app.scss"

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <Header/>
    </Fragment>
  )
};

export default IndexPage;

export const query = graphql`
  {
    allRandomUser(sort: { fields: name___last, order: ASC }) {
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
`;
