import React from "react";

export const Card = ({ president }) => {
  return (
  <article className="card">
    <p>{president.number}</p>
    <p>{president.president}</p>
    <p>{president.birth_year}</p>
    <p>{president.death_year}</p>
    <p>{president.took_office}</p>
    <p>{president.left_office}</p>
    <p>{president.party}</p>
  </article>)
};
