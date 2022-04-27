import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

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

const Card = styled.div`
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 5px;
    margin-bottom: 5px;
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
                                    // dnd를 사용할때에는 Key와 draggableId가 무조건 같아야한다.
                                    <Draggable
                                        key={toDo}
                                        draggableId={toDo}
                                        index={index}
                                    >
                                        {(magic) => (
                                            <Card
                                                ref={magic.innerRef}
                                                {...magic.draggableProps}
                                                {...magic.dragHandleProps}
                                            >
                                                {toDo}
                                            </Card>
                                        )}
                                    </Draggable>
                                ))}
                                {/* placeholder로 요소가 빠졌을 때 board의 크기가 변하지 않도록 고정 */}
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
