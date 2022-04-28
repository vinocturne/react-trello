import { Draggable, Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DragabbleCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
    padding: 10px 0px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
const Title = styled.h1`
    text-align: center;
    margin-bottom: 10px;
    font-weight: 500;
`;

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
    height: 100%;
    background-color: ${(props) =>
        props.isDraggingOver
            ? "#b2bec3"
            : props.isDraggingFromThis
            ? "#dcdde1"
            : "transparent"};
    flex-grow: 1;
    transition: background-color 0.2s ease-in-out;
    padding: 20px;
`;

interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
    index: number;
}

interface IForm {
    toDo: string;
}

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    input {
        height: 30px;
        width: 100%;
        padding: 5px;
        margin: 5px;
        border-radius: 15px;
        border: none;
    }
`;

function Board({ toDos, boardId, index }: IBoardProps) {
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const setToDo = useSetRecoilState(toDoState);
    const onValid = ({ toDo }: IForm) => {
        const newToDo = {
            id: Date.now(),
            text: toDo,
        };
        setToDo((allBoards) => {
            return {
                ...allBoards,
                [boardId]: [...allBoards[boardId], newToDo],
            };
        });
        setValue("toDo", "");
    };
    return (
        <Draggable draggableId={boardId} index={index} key={boardId}>
            {(magic) => (
                <Wrapper
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                >
                    <Title>{boardId}</Title>
                    <Form onSubmit={handleSubmit(onValid)}>
                        <input
                            {...register("toDo", { required: true })}
                            type="text"
                            placeholder={`Add task on ${boardId}`}
                        />
                    </Form>
                    <Droppable droppableId={boardId}>
                        {(magic, snapshot) => (
                            <Area
                                isDraggingOver={snapshot.isDraggingOver}
                                isDraggingFromThis={Boolean(
                                    snapshot.draggingFromThisWith
                                )}
                                ref={magic.innerRef}
                                {...magic.droppableProps}
                            >
                                {toDos.map((toDo, index) => (
                                    <DraggableCard
                                        key={toDo.id}
                                        index={index}
                                        toDoId={toDo.id}
                                        toDoText={toDo.text}
                                    />
                                ))}
                                {magic.placeholder}
                            </Area>
                        )}
                    </Droppable>
                </Wrapper>
            )}
        </Draggable>
    );
}

export default Board;
