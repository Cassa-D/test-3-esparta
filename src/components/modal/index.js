import styled from "styled-components"

const Modal = ({ children, show, setShow, title }) => {
    return (
        <StyledModal show={show}>
            <div className="container">
                <h2>{title}</h2>
                <hr />
                <div>
                    {children}
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal

const StyledModal = styled.div`
    display: ${({ show }) => (show ? "grid" : "none")};
    place-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    .container {
        border-radius: 5px;
        background-color: white;
        margin: 25px;
        min-width: 210px;
        max-height: 80%;

        > h2 {
            color: red;
            font-size: 1.5rem;
        }
        
        > * {
            margin: 0;
        }

        > h2, > div {
            padding: 15px;
        }
    }
`