import React from "react";
import CraftingTypeComponent from "../components/CraftingTypeComponent";

const craftingTypes = (Array<string> = [
  "Woodworking",
  "Cooking",
  "Mining",
  "Stoneshaping",
  "Forestry",
  "Farming",
  "Petcare",
  "Business",
]);

const Main = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80rem]">
        <div>
          <div className="flex flex-col justify-start border rounded-lg p-4 bg-gray-200 shadow-md">
            <div className="flex gap-x-1">
              <p className="text-xl font-bold">TOTAL PIXELS: </p>
              <p className="text-xl text-100">36 </p>
            </div>
            <div className="h-4" />
            <div className="flex gap-x-3">
              <div className="flex gap-x-1">
                <p className="font-medium">Basic: </p>
                <p>3 </p>
              </div>
              <div className="flex gap-x-1">
                <p className="font-medium">VIP: </p>
                <p>5 </p>
              </div>
              <div className="flex gap-x-1">
                <p className="font-medium">Landowner: </p>
                <p>9 </p>
              </div>
            </div>
          </div>
          <div className="h-4" />
          <form className="flex flex-col items-start p-4 border rounded-md">
            <p className="text-xl font-bold">Add a Pixel Task</p>
            <div className="h-6" />
            <label className="font-medium mb-1">Task Name</label>
            <div>
              <input
                className="border px-3 py-2 rounded text-sm"
                placeholder="Enter Pixel Task Name"
              />
              <button className="px-4 py-2 bg-green-700 rounded-md hover:bg-green-600">
                <p className="text-white text-sm">Add Task</p>
              </button>
            </div>

            <div className="h-2" />
            <div>
              <div className="flex gap-x-1 items-center">
                <button className="border px-4 py-0.5 rounded-sm">
                  <p className="text-sm">Basic</p>
                </button>
                <button className="border px-4 py-0.5 rounded-sm">
                  <p className="text-sm">VIP</p>
                </button>
                <button className="border px-4 py-0.5 rounded-sm">
                  <p className="text-sm">Landowner</p>
                </button>
              </div>
            </div>
            <div className="h-4" />
          </form>
        </div>
        <div className="h-4" />
        <div className="border">
          <div className="flex justify-end">
            <select className="px-4 py-2 rounded border">
              {craftingTypes.map((type) => (
                <option>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <CraftingTypeComponent type="Woodworking" />
      </div>
    </div>
  );
};

export default Main;
