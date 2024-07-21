import { FC, useState } from "react";
import TaskComponent from "./TaskComponent";
import taskData from "../db.json";

type CraftingType = {
  type: string;
};

type TaskTier = {
  basic: boolean;
  vip: boolean;
  landowner: boolean;
};

type TaskProps = {
  name: string;
  pixels: number;
  tiersAcquired: TaskTier;
};

const CraftingTypeComponent: FC<CraftingType> = ({ type }) => {
  const craftingTasks = taskData[type.toLowerCase() as keyof typeof taskData];
  console.log(craftingTasks);

  return (
    <div className="rounded-md border border-gray-100 px-4 py-7 shadow-sm">
      <div className="flex justify-center">
        <h1 className="font-semibold">{type}</h1>
      </div>
      <div className="h-4" />
      <div className="flex flex-col">
        {craftingTasks.map((task: TaskProps) => (
          <TaskComponent
            name={task.name}
            pixels={task.pixels}
            tiersAcquired={task.tiersAcquired}
          />
        ))}
      </div>
    </div>
  );
};

export default CraftingTypeComponent;
