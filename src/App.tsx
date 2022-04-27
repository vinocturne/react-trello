import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
    const onDrageEnd = () => {};
    return (
        <DragDropContext onDragEnd={onDrageEnd}>
            <div>
                <Droppable droppableId="one">
                    {/* Droppable의 children은 react가 아닌 javascript로 작성되어야하기 때문에
                아래와 같이 익명함수를 통해 해당 컴포넌트를 불러올 수 있도록 한다. */}
                    {(magic) => (
                        <ul ref={magic.innerRef} {...magic.droppableProps}>
                            <Draggable draggableId="first" index={0}>
                                {/* 함수를 통해 태그를 지정할 때, 매개변수로 DraggableProvider를 보낼 수 있다. 
                              해당 provider에는 innerRef, draggableProps, dragHandleProps등이 있는데,
                              draggableProps를 드래그가 가능한 영역을 지정하는 프로퍼티고,
                              draggableHandleProps는 드래그가 가능하게 하고싶은 곳에다가 옮겨놓으면 해당 부분만 드래그하여 아이템을 움직일 수 있다.*/}
                                {(magic) => (
                                    <li
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                        {...magic.dragHandleProps}
                                    >
                                        Hello
                                    </li>
                                )}
                            </Draggable>
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default App;
