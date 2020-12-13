import styled from "styled-components"

export const ItemContainer = styled.div`
    background-color: #F6F6F6;

    display: grid;
    grid-template-columns: 50px 1fr 80px;

    padding: 5px;

    > * {
        margin: 5px;
    }
`