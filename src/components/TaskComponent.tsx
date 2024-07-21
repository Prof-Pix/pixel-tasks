import React from "react";

const pixelTaskTypes = (Array<string> = ["Basic", "VIP", "Landowner"]);

const TaskComponent = () => {
  return (
    <div className={`flex justify-between pb-2 `}>
      <div>
        <p>Sawtump Log</p>
      </div>
      <div className="flex items-center gap-x-2 ">
        {pixelTaskTypes.map((type) => (
          <button className="border px-4 py-0.5 rounded-lg translate-y-[-1px] shadow duration-50">
            <p className="text-sm">{type}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskComponent;
