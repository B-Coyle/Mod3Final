import React from "react";
import './Card.css'

export const Card = ({ president }) => {
  return (
  <article className="card">
    <p>President Number: {president.number}</p>
    <p>Name: {president.president}</p>
    <p>Year Born: {president.birth_year}</p>
    <p>Year Died: {president.death_year}</p>
    <p>Year took office: {president.took_office}</p>
    <p>Year left office: {president.left_office}</p>
    <p>Affiliation: {president.party}</p>
  </article>)
};
