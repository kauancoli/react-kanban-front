import {
  Check,
  CircleNotch,
  Clipboard,
  Clock,
  HourglassLow,
  Power,
  X,
} from "phosphor-react";
import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ThemeProvider } from "styled-components";
import dark from "../Styles/dark";
import light from "../Styles/light";
import TaskModal from "./Components/TaskModal";
import * as S from "./styles";

type ColumnType = {
  id: string;
  name: string;
};

export type TaskType = {
  id: string;
  name: string;
  column: string;
  client: string;
  priority: string;
};

const columnIcons: Record<string, JSX.Element> = {
  "0": <Clipboard size={25} />,
  "1": <CircleNotch size={25} />,
  "2": <Clock size={25} />,
  "3": <HourglassLow size={25} />,
  "4": <Check size={25} />,
  "5": <Power size={25} />,
};

export function Kanban() {
  const [theme, setTheme] = useState(dark);

  const [columns] = useState<ColumnType[]>([
    { id: "0", name: "Not Started" },
    { id: "1", name: "Waiting for Approval" },
    { id: "2", name: "In Progress" },
    { id: "3", name: "Waiting for Review" },
    { id: "4", name: "Done" },
    { id: "5", name: "Finished" },
  ]);

  const [tasks, setTasks] = useState<TaskType[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const createTask = (newTask: TaskType) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const moveTask = (taskId: string, newColumnId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, column: newColumnId };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Layout>
        <S.Header>
          <header>Kanban Board</header>
          <S.Buttons>
            <button onClick={() => setModalIsOpen(true)}>
              Adicionar Tarefa
            </button>
            <button onClick={toggleTheme}>Mudar Tema</button>
          </S.Buttons>
        </S.Header>
        <TaskModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          onCreateTask={createTask}
        />

        <DndProvider backend={HTML5Backend}>
          <S.MainContainer>
            {columns.map((column) => (
              <ColumnContainer
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.column === column.id)}
                onTaskDrop={moveTask}
                onDeleteTask={deleteTask}
                icon={columnIcons[column.id]}
              />
            ))}
          </S.MainContainer>
        </DndProvider>
        <S.Footer>Made with 💜 by Kauan Coli</S.Footer>
      </S.Layout>
    </ThemeProvider>
  );
}

const ColumnContainer: React.FC<{
  column: ColumnType;
  tasks: TaskType[];
  icon: JSX.Element;
  onTaskDrop: (taskId: string, newColumnId: string) => void;
  onDeleteTask: (taskId: string) => void;
}> = ({ column, tasks, onTaskDrop, onDeleteTask, icon }) => {
  const [, ref] = useDrop({
    accept: "TASK",
    drop: (item: { id: string }) => {
      onTaskDrop(item.id, column.id);
    },
  });

  return (
    <S.ColumnCard ref={ref}>
      <S.ColumnHeader>
        {icon}
        {column.name}
      </S.ColumnHeader>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </S.ColumnCard>
  );
};

const TaskItem: React.FC<{
  task: TaskType;
  onDelete: () => void;
}> = ({ task, onDelete }) => {
  const [, ref] = useDrag({
    type: "TASK",
    item: { id: task.id },
  });

  const prioritySVG = `/${task.priority}.svg`;

  return (
    <S.TaskCard ref={ref}>
      <S.TaskHeader>
        {task.name}
        <X onClick={onDelete} size={20} style={{ cursor: "pointer" }} />
      </S.TaskHeader>
      <S.TaskBottom>
        <img src={prioritySVG} alt={task.priority} />
        <p>{task.client}</p>
      </S.TaskBottom>
    </S.TaskCard>
  );
};
