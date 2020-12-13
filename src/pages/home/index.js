import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import styled from "styled-components"

import Table from "../../components/table"
import Item from "../../components/item"
import Button, { ButtonNo, ButtonYes } from "../../components/button"

import Modal from "../../components/modal"

import { checkTodo, createNewTodo, deleteTodo, modifyTodo } from "../../redux/modules/itens/actions"

const titles = ['Feito', 'Itens', 'Deletar']

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector((state) => state.items)

    const [showModal, setShowModal] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState(-1)

    const handleOnTrashOpen = (id) => {
        setSelectedTodo(id)
        setShowModal(true)
    }

    return (
        <Container>
            <h1>TODO</h1>
            <div>
                <Table titles={titles}>
                    {items && items
                        .filter((item) => !item.checked)
                        .map(({ text, id }) => (
                            <Item
                                key={id}
                                text={text}
                                onCheck={(value) => dispatch(checkTodo(id, value))}
                                onTrashOpen={() => handleOnTrashOpen(id)}
                                onChangeInput={(value) => dispatch(modifyTodo(id, value))}
                            />
                        ))}
                    <div>
                        <Button text="Novo TODO +" onClick={() => dispatch(createNewTodo())}/>
                    </div>
                </Table>
            </div>
            <br />
            <div>
                <Table titles={titles}>
                    {items && items
                        .filter((item) => item.checked)
                        .map(({ text, id }) => (
                            <Item
                                key={id}
                                hasDone
                                text={text}
                                onCheck={(value) => dispatch(checkTodo(id, value))}
                                onTrashOpen={() => handleOnTrashOpen(id)}
                            />
                        ))}
                </Table>
            </div>
            <Modal show={showModal} setShow={setShowModal} title="ATENÇÃO">
                <div>
                    Você realmente quer deletar este item?
                </div>
                <ButtonContainer>
                    <div>
                        <ButtonYes
                            text="Sim"
                            onClick={() => {
                                dispatch(deleteTodo(selectedTodo))
                                setShowModal(false)
                            }}
                        />
                        <ButtonNo text="Não" onClick={() => setShowModal(false)} />
                    </div>
                </ButtonContainer>
            </Modal>
        </Container>
    )
}

export default Home

const Container = styled.div`
    margin: 50px;

    @media (max-width: 500px) {
        margin: 25px;
    }
`

const ButtonContainer = styled.div`
    display: grid;
    place-items: center;

    padding: 10px;
`