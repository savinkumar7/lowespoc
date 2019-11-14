import React, { useState } from "react";
import styled from 'styled-components';
import "./accordion.css";

const Accordion = (props) => {

    const [Active, setActiveState] = useState("");

    function toggleAccordion(id) {
        (Active === id) ? setActiveState(null) : setActiveState(id);
    }

    const Container = styled.div`
    padding: 5px;
    border-radius: 4px;
    width: 80%;
    margin: auto;
    min-width: 170px;
    `;

    const Button = styled.ul `
    text-decoration: none;
    list-style-type: none;
    `;
    const Filters = styled.div`
        background-color : blue;
        color:white;
        padding: 5px;
        margin: 4px;

    `;

    const FilterExpand = styled.ul`
    padding: 0;
    display: none;
    background-color: white;
    overflow: hidden;
    display: ${props => props.show ? "block" : "none"};
    margin:0px;
    
  `;
    return (
        <Container>
            <Filters>FIlters</Filters>
            {props.filtersList.map(filter =>
                <React.Fragment key={filter.id}>
                    <Button className="accordion " onClick={() => toggleAccordion(filter.id)}>
                        <li className="accordion__title" onClick={toggleAccordion}>
                            {filter.name}
                            {filter.types &&
                                (Active === filter.id
                                    ? "-" : "+")}
                        </li>
                    </Button>
                    {filter.types && <FilterExpand className ="onhover" show={Active === filter.id}>
                        {filter.types.map(type => <Button key={type}>
                            {type}
                        </Button>)}
                    </FilterExpand>}
                </React.Fragment>
            )}
        </Container>
    );
}

export default Accordion;