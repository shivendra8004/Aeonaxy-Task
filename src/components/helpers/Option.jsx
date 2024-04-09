import Image from "next/image";
import { Input } from "@/components/ui/input";
import { CircleCheck, CircleIcon } from "lucide-react";
import { Label } from "@/components/ui/label";

const Option = ({ selected, imageSrc, title, description, choice, handleChoiceSelect }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 ">
            <div
                className={`border-2 cursor-pointer border-gray-500 flex w-full items-center justify-center md:aspect-square rounded-xl p-4 md:p-0 ${
                    selected && "border-primary"
                }`}
                onClick={() => handleChoiceSelect(choice)}
            >
                <div className="md:h-[80%] md:w-[80%] flex flex-col items-center justify-between ">
                    <Image
                        src={imageSrc}
                        width={220}
                        height={220}
                        alt={choice.toUpperCase()}
                        className={`hidden md:block ${selected && "translate-y-[-8vh] "}`}
                    />
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className={`p-2 md:p-0 ${selected ? "" : "hidden"}`}>{description}</p>
                </div>
            </div>
            <Input className="hidden" type="checkbox" name={choice} value={choice} checked={selected} onChange={() => handleChoiceSelect(choice)} />
            <Label htmlFor={choice} className="cursor-pointer ">
                {selected ? <CircleCheck size={24} className="text-white bg-primary rounded-full" /> : <CircleIcon size={24} className="text-gray-500" />}
            </Label>
        </div>
    );
};

export default Option;
