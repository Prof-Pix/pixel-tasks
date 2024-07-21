import CraftingTypeComponent from "../components/CraftingTypeComponent";
import TierButton from "../sub-components/TierButton";
import AddPixelTaskForm from "../AddPixelTaskForm/AddPixelTaskForm.js";
import { pixelIcon } from "../assets/icons.js";

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

const Main = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-[80rem]">
        <div>
          <div className="flex flex-col justify-start rounded-lg border bg-gray-200 p-4 shadow-md">
            <div className="flex gap-x-1">
              <p className="text-xl font-medium">PIXELS: </p>
              <div className="flex items-center gap-x-1">
                <p className="text-100 text-xl font-bold">36 </p>
                <img className="h-4 w-5" src={"icons/pixel_icon.png"} />
              </div>
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
          <AddPixelTaskForm />
        </div>
        <div className="h-4" />
        <div className="rounded border border-gray-400 p-2 shadow-sm">
          <div className="flex justify-end">
            <select className="rounded border px-4 py-2 shadow">
              <option>All</option>
              {craftingTypes.map((type) => (
                <option>{type}</option>
              ))}
            </select>
          </div>
          <div className="h-4" />
          <div className="flex flex-col gap-y-3">
            {craftingTypes.map((type) => (
              <CraftingTypeComponent type={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
