import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
    padding: 10px 10px;
    background-color: ${(props) =>
        props.isDragging ? "#00a8ff" : props.theme.cardColor};
    box-shadow: ${(props) =>
        props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
    border-radius: 5px;
    margin-bottom: 5px;
`;

interface IDragabbleCardProps {
    toDo: string;
    index: number;
}

function DraggableCard({ toDo, index }: IDragabbleCardProps) {
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(magic, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging}
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                >
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}
//React.memo()를 사용하여 props가 변경되지 않았을 때에는 다시 랜더링 되지 않도록 설정한다.
export default React.memo(DraggableCard);
