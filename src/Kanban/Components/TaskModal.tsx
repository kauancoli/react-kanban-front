import { PlusCircle } from "phosphor-react";
import React, { useState } from "react";
import Modal from "react-modal";
import { v4 } from "uuid";
import { TaskType } from "../Index";
import * as S from "../styles";

type TaskModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onCreateTask: (task: TaskType) => void;
};

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onRequestClose,
  onCreateTask,
}) => {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [client, setClient] = useState<string>("");
  const [selectedPriority, setSelectedPriority] = useState<string>("Low");

  const handleCreateTask = () => {
    if (!newTaskName) {
      return;
    }
    const newTask = {
      id: v4(),
      name: newTaskName,
      column: "0",
      client: client,
      priority: selectedPriority,
    };

    onCreateTask(newTask);

    setNewTaskName("");
    setSelectedPriority("Low");
    setClient("");

    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adicionar Tarefa"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          width: "400px",
          height: "380px",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <S.ModalContainer>
        <h1 style={{ fontSize: "3rem" }}>
          <PlusCircle size={25} /> Create New Task
        </h1>
        <S.ModalForm>
          <label>
            Task
            <input
              type="text"
              id="taskName"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
          </label>
          <label>
            Client
            <input
              type="text"
              id="client"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </label>

          <S.ModalSelect>
            <label htmlFor="prioritySelect">Priority:</label>
            <select
              id="prioritySelect"
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </S.ModalSelect>

          <S.ModalButton>
            <button type="button" onClick={onRequestClose}>
              Close
            </button>
            <button
              type="button"
              onClick={handleCreateTask}
              disabled={!newTaskName || !client}
            >
              Add Task
            </button>
          </S.ModalButton>
        </S.ModalForm>
      </S.ModalContainer>
    </Modal>
  );
};

export default TaskModal;
