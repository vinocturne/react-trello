import styled from "styled-components";
import { Box, IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Modal from "@mui/material/Modal";
import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";
import { saveStorage } from "../localStorage/localStrage";

const CreateButton = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    object-fit: cover;
`;

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const InputTaskName = styled.input`
    width: 100%;
    height: 30px;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`;

interface IForm {
    taskName: string;
}

function Create() {
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const [toDos, setToDos] = useRecoilState(toDoState);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("hi");
    };
    const onValid = ({ taskName }: IForm) => {
        const data = { [taskName]: [], ...toDos };
        setToDos(data);
        setValue("taskName", "");
        saveStorage(data);
        handleClose();
    };
    return (
        <CreateButton>
            <IconButton
                aria-label="done"
                color="success"
                name="create"
                onClick={handleOpen}
            >
                <AddBoxIcon fontSize="large" color="action" />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <h1>Create Task</h1>
                    <Form onSubmit={handleSubmit(onValid)}>
                        <InputTaskName
                            {...register("taskName", {
                                required: true,
                            })}
                            type="text"
                            placeholder={`Write a task name without number`}
                        />
                    </Form>
                </Box>
            </Modal>
        </CreateButton>
    );
}

export default Create;
