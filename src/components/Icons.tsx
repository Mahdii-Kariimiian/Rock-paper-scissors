import { Dispatch, SetStateAction, FC } from "react";

type ColorMap = {
    paper: string;
    scissors: string;
    rock: string;
};
type Choice = "rock" | "paper" | "scissors" | null;

interface Props {
    title: "paper" | "scissors" | "rock" | null;
    setMyChoice?: Dispatch<SetStateAction<Choice>>;
    icon: string;
    children: string;
    isClickable?: true;
    color?: ColorMap;
}

const Icons: FC<Props> = ({
    title,
    icon,
    setMyChoice,
    children,
    isClickable,
    color,
}) => {
    return (
        <button
            disabled={isClickable}
            onClick={() => setMyChoice && setMyChoice(title)}
            className={`${children} ring-[12px] ring-[${
                title && color?.[title]
            }]`}
        >
            <img className="w-[40px]" src={icon} />
        </button>
    );
};

export default Icons;
