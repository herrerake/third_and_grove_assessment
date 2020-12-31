import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Accordion from "../components/accordion";

import "../styles/app.scss";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <Header />
      {data.allRandomUser.nodes.map((card) => (
        <Accordion data={card} key={card.id} />
      ))}
    </Fragment>
  );
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
