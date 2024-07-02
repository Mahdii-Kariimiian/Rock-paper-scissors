import { Dispatch, SetStateAction, FC } from "react";

type Choice = "rock" | "paper" | "scissors" | null;
type WinnerType = "You" | "The House" | "Draw" | null;

type Props = {
    winner: WinnerType;
    setWinner: Dispatch<SetStateAction<WinnerType>>;
    setMyChoice: Dispatch<SetStateAction<Choice>>;
    setComputersChoice: Dispatch<SetStateAction<Choice>>;
};

const Winner: FC<Props> = ({
    winner,
    setWinner,
    setMyChoice,
    setComputersChoice,
}) => {
    return (
        <div className="max-sm:absolute top-[210px] text-center space-y-5">
            <h2 className="max-sm:text-5xl text-5xl font-bold uppercase tracking-tight whitespace-nowrap">
                {winner === "You"
                    ? "YOU Win"
                    : winner === "The House"
                    ? "You Lose"
                    : "It's a Draw"}
            </h2>
            <button
                className="px-16 py-2 bg-white text-blue-900 rounded-md shadow-sm shadow-blue-950 tracking-wider whitespace-nowrap"
                onClick={() => {
                    setWinner(null);
                    setMyChoice(null);
                    setComputersChoice(null);
                }}
            >
                PLAY AGAIN
            </button>
        </div>
    );
};

export default Winner;
