import React from 'react'
import { Card } from '../Card/index';
import './CardContainer.css';

export const CardContainer = ({presidents}) => {
    const cards = presidents.map(president => <Card president={president} key={president.name} />)

        return(
            <section className="container">
                {cards}
            </section>
        )
}