import { FC } from "react";
import { pixelIcon } from "../assets/icons.js";
import TierButton from "../sub-components/TierButton.js";

const taskTiers: Array<string> = ["Basic", "VIP", "Landowner"];

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

const TaskComponent: FC<TaskProps> = ({ name, pixels, tiersAcquired }) => {
  return (
    <div
      className={`flex items-center justify-between border-b px-2 py-3 last:border-b-0 even:bg-gray-100`}
    >
      <div className="flex">
        <div className="flex min-w-[47px] items-center gap-x-0.5 border-r pr-2">
          <p className="text-base font-medium">{pixels}</p>
          <img className="h-4 w-5" src={pixelIcon} />
        </div>
        <div className="pl-2">
          <p>{name}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        {taskTiers.map((tier) => (
          <TierButton
            tier={tier}
            isTierAcquired={tiersAcquired[tier.toLowerCase() as keyof TaskTier]}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskComponent;
