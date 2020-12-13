import { ItemContainer } from "../styled"

import styled from "styled-components"

const Table = ({ children, titles }) => {
    return (
        <StyledTable>
            <Title titles={titles}/>
            {children}
        </StyledTable>
    )
}

export const Title = ({ titles }) => {
    return (
        <StyledTitle className="container">
            {titles.map((title, key) => (
                <h3 key={key}>{title}</h3>))}
        </StyledTitle>
    )
}

export default Table

const StyledTable = styled.div`
    background-color: #C4C4C4;
    border-radius: 5px;

    padding: 15px;

    min-width: 220px;

    .container:first-child {
        border-radius: 5px 5px 0 0;
    }

    .container:last-child {
        border-radius: 0 0 5px 5px;
    }

    .container:first-child:last-child {
        border-radius: 5px;
    }
`

const StyledTitle = styled(ItemContainer)`
    background-color: #DBDBDB;

    grid-column-gap: 5px;
`