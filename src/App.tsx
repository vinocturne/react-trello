import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
    display: flex;
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
`;

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDrageEnd = (info: DropResult) => {
        console.log(info);
        const { destination, draggableId, source } = info;
        if (!destination) return;
        if (destination?.droppableId === source.droppableId) {
            // 1) source droppableId와 Destination droppableId가 같은지 확인,
            //    다르다면 다른 보드로 이동한 것.
            // same board movement;
            setToDos((allBoards) => {
                const boardCopy = [...allBoards[source.droppableId]];
                boardCopy.splice(source.index, 1);
                boardCopy.splice(destination?.index, 0, draggableId);
                return {
                    ...allBoards,
                    //[ ]를 활용하여 겹치는 property의 경우 덮어씌운다.
                    [source.droppableId]: boardCopy,
                };
            });
        }
    };
    return (
        <DragDropContext onDragEnd={onDrageEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board
                            boardId={boardId}
                            key={boardId}
                            toDos={toDos[boardId]}
                        />
                    ))}
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
