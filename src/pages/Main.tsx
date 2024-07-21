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

const pixelTaskTypes = (Array<string> = ["Basic", "VIP", "Landowner"]);

const Main = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[80rem]">
        <div>
          <div className="flex flex-col justify-start p-4 bg-gray-200 border rounded-lg shadow-md">
            <div className="flex gap-x-1">
              <p className="text-xl font-medium">PIXELS: </p>
              <div className="flex items-center gap-x-1">
                <p className="text-xl font-bold text-100">36 </p>
                <img className="w-5 h-4" src={"icons/pixel_icon.png"} />
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
          <form className="flex flex-col items-start p-4 border rounded-md shadow-md">
            <p className="text-xl font-bold">Add a Pixel Task</p>
            <div className="h-6" />
            <label className="mb-1 font-medium">Task Name</label>
            <div className="flex gap-x-2">
              <input
                className="px-3 py-2 text-sm border rounded w-[240px]"
                placeholder="Enter Pixel Task Name"
              />
              <select className="px-4 py-2 border rounded shadow">
                {craftingTypes.map((type) => (
                  <option>{type}</option>
                ))}
              </select>
            </div>

            <div className="h-2" />

            <div className="w-[240px]">
              <div className="flex items-center gap-x-1">
                {pixelTaskTypes.map((type) => (
                  <button className="border px-4 py-0.5 rounded-lg translate-y-[-1px] shadow duration-50">
                    <p className="text-sm">{type}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="h-4" />
            <div>
              <button className="px-6 py-2 bg-green-700 rounded-md hover:bg-green-600">
                <p className="text-sm text-white">Add Task</p>
              </button>
            </div>
          </form>
        </div>
        <div className="h-4" />
        <div className="p-2 border border-gray-400 rounded shadow-sm">
          <div className="flex justify-end ">
            <select className="px-4 py-2 border rounded shadow">
              <option>All</option>
              {craftingTypes.map((type) => (
                <option>{type}</option>
              ))}
            </select>
          </div>
          <div className="h-4" />
          <div className="flex flex-col gap-y-3">
            <CraftingTypeComponent type="Woodworking" />
            <CraftingTypeComponent type="Cooking" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
