import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DraggableCard from "./Components/DragabbleCard";

const Wrapper = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
`;

const Board = styled.div`
    padding: 20px 10px;
    padding-top: 30px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 200px;
`;

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    //드래그를 하면 최종적으로 도착한 Index와, 출발한 element에 대한 정보가 들어온다.
    const onDrageEnd = ({ draggableId, destination, source }: DropResult) => {
        if (!destination) return;

        setToDos((oldToDos) => {
            const copyToDos = [...oldToDos];
            // 1) source.index를 가져와 해당 인덱스의 요소를 삭제
            copyToDos.splice(source.index, 1);
            // 2) destination.index 인덱스에 draggableId 주입.
            copyToDos.splice(destination?.index, 0, draggableId);

            return copyToDos;
        });
    };
    return (
        <DragDropContext onDragEnd={onDrageEnd}>
            <Wrapper>
                <Boards>
                    <Droppable droppableId="one">
                        {(magic) => (
                            <Board
                                ref={magic.innerRef}
                                {...magic.droppableProps}
                            >
                                {toDos.map((toDo, index) => (
                                    <DraggableCard
                                        key={toDo}
                                        index={index}
                                        toDo={toDo}
                                    />
                                ))}
                                {magic.placeholder}
                            </Board>
                        )}
                    </Droppable>
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
