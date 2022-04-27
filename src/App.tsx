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
        const { destination, draggableId, source } = info;
        if (!destination) return;
        if (destination?.droppableId === source.droppableId) {
            // Same Board Movement;
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
        if (destination.droppableId !== source.droppableId) {
            //Different Board Movement;
            setToDos((allBoards) => {
                //전체 보드에서 source.droppableId 키를 가진 보드의 모든 요소를 가져온다.
                const sourceBoard = [...allBoards[source.droppableId]];
                const destinationBoard = [
                    ...allBoards[destination.droppableId],
                ];
                sourceBoard.splice(source.index, 1);
                destinationBoard.splice(destination?.index, 0, draggableId);
                console.log(sourceBoard);
                console.log(destinationBoard);
                return {
                    ...allBoards,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: destinationBoard,
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
