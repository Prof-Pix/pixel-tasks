import { FC } from "react";
import TaskComponent from "./TaskComponent";

type CraftingType = {
  type: string;
};

const pixelTaskTypes = (Array<string> = ["Basic", "VIP", "Landowner"]);

const CraftingTypeComponent: FC<CraftingType> = ({ type }) => {
  return (
    <div className="px-4 border border-gray-100 rounded-md shadow-sm py-7">
      <div className="flex justify-center">
        <h1 className="font-semibold">{type}</h1>
      </div>
      <div className="h-4" />
      <div className="flex flex-col gap-y-5">
        <TaskComponent />
        <TaskComponent />
        <TaskComponent />
      </div>
    </div>
  );
};

export default CraftingTypeComponent;
