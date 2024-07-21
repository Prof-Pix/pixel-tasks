import React from "react";
import { pixelIcon } from "../assets/icons.js";
import TierButton from "../sub-components/TierButton.js";

const craftingTypes: Array<string> = [
  "Woodworking",
  "Cooking",
  "Mining",
  "Stoneshaping",
  "Forestry",
  "Farming",
  "Petcare",
  "Business",
];

const taskTiers: Array<string> = ["Basic", "VIP", "Landowner"];

const AddPixelTaskForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col items-start rounded-md border p-4 shadow-md"
    >
      <p className="text-xl font-bold">Add a Pixel Task</p>
      <div className="h-6" />
      <label className="mb-1 font-medium">Task Name</label>
      <div className="flex gap-x-2">
        <input
          className="w-[290px] rounded border px-3 py-2 text-sm"
          placeholder="Enter Pixel Task Name"
        />
        <div className="flex items-center rounded border px-3 py-2">
          <input type="number" className="mr-1 w-[40px] border-b" />
          <div>
            <img className="h-4 w-5" src={pixelIcon} />
          </div>
        </div>

        <select className="rounded border px-4 py-2 shadow">
          {craftingTypes.map((type) => (
            <option>{type}</option>
          ))}
        </select>
      </div>

      <div className="h-2" />

      <div className="w-[290px]">
        <div className="flex items-center gap-x-1">
          {taskTiers.map((tier) => (
            <TierButton tier={tier} isTierAcquired={false} />
          ))}
        </div>
      </div>
      <div className="h-4" />
      <div>
        <button className="rounded-md bg-green-700 px-6 py-2 hover:bg-green-600">
          <p className="text-sm text-white">Add Task</p>
        </button>
      </div>
    </form>
  );
};

export default AddPixelTaskForm;
