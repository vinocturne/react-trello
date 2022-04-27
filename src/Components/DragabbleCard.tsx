import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 5px;
    margin-bottom: 5px;
`;

interface IDragabbleCardProps {
    toDo: string;
    index: number;
}

function DraggableCard({ toDo, index }: IDragabbleCardProps) {
    console.log(toDo, "has been render");
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
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
    );
}

export default React.memo(DraggableCard);
