import { useEffect, useState, useCallback } from "react";
import Score from "./Score";
import Icons from "./Icons";
import Rules from "./Rules";
import Winner from "./Winner";
import triangle from "../assets/bg-triangle.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";

// Types
type Choice = "rock" | "paper" | "scissors" | null;
type WinnerType = "You" | "The House" | "Draw" | null;
type ColorMap = {
    paper: string;
    scissors: string;
    rock: string;
};

const Hero = () => {
    const [score, setScore] = useState<number>(0);
    const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
    const [myChoice, setMyChoice] = useState<Choice>(null);
    const [computersChoice, setComputersChoice] = useState<Choice>(null);
    const [winner, setWinner] = useState<WinnerType>(null);
    const choices = ["paper", "rock", "scissors"];
    const color: ColorMap = {
        paper: "#5671F4",
        scissors: "#EDA526",
        rock: "#D54464",
    };

    // Icon based on the selection
    const iconSelector = useCallback(
        (choice: Choice | "") =>
            choice === "paper"
                ? paper
                : choice === "rock"
                ? rock
                : choice === "scissors"
                ? scissors
                : "",
        []
    );

    // Set Score
    useEffect(() => {
        if (winner === "You") setScore((prev) => prev + 1);
        else if (winner === "The House") setScore((prev) => prev - 1);
    }, [winner]);

    // Computer's random choice
    useEffect(() => {
        if (myChoice) {
            const timer = setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 3);
                const CMChoice = choices[randomNumber] as Choice;
                setComputersChoice(CMChoice);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [myChoice]);

    // Pick winner
    useEffect(() => {
        const win = [
            ["paper", "rock"],
            ["rock", "scissors"],
            ["scissors", "paper"],
        ];

        const winnerResult =
            myChoice === null || computersChoice === null
                ? null
                : myChoice === computersChoice
                ? "Draw"
                : win.some(
                      (combination) =>
                          combination[0] === myChoice &&
                          combination[1] === computersChoice
                  )
                ? "You"
                : "The House";

        setWinner(winnerResult);
    }, [myChoice, computersChoice]);

    return (
        <div className="relative h-[100vh] p-8">
            <Score score={score} />
            {/* before choosing  */}
            {!myChoice && (
                <section className="z-0 relative flex items-center justify-center">
                    <div className="absolute top-[135px] w-[200px]">
                        <img src={triangle} alt="triangle shape" />
                        <Icons
                            title="paper"
                            icon={paper}
                            setMyChoice={setMyChoice}
                        >
                            absolute flex items-center justify-center
                            top-[-40px] left-[-20px] bg-white rounded-full
                            size-[90px] ring-[12px] ring-[#5671F4]cursor-pointer
                        </Icons>

                        <Icons
                            title="rock"
                            icon={rock}
                            setMyChoice={setMyChoice}
                        >
                            absolute flex items-center justify-center top-[80px]
                            left-[50%] transform -translate-x-[50%] bg-white
                            rounded-full size-[90px] ring-[12px] ring-[#D54464]
                            cursor-pointer
                        </Icons>

                        <Icons
                            title="scissors"
                            icon={scissors}
                            setMyChoice={setMyChoice}
                        >
                            absolute flex items-center justify-center
                            top-[-40px] left-[125px] bg-white rounded-full
                            size-[90px] ring-[12px] ring-[#EDA526]
                            cursor-pointer"
                        </Icons>
                    </div>
                </section>
            )}

            {/* after choosing */}
            {myChoice && (
                <section className="relative z-0 flex lg:gap-[70px] gap-[60px] sm:gap-[50px] mt-[110px] items-center justify-center">
                    <div className="flex flex-col items-center">
                        <Icons
                            isClickable={true}
                            title={myChoice}
                            icon={iconSelector(myChoice)}
                            color={color}
                            setMyChoice={setMyChoice}
                        >
                            flex items-center justify-center bg-white
                            rounded-full size-[90px] ring-[12px]
                        </Icons>
                        <h2 className="mt-10 uppercase text-sm font-bold">
                            You picked
                        </h2>
                    </div>
                    {/* Showing Result */}
                    {winner !== null && (
                        <Winner
                            winner={winner}
                            setWinner={setWinner}
                            setMyChoice={setMyChoice}
                            setComputersChoice={setComputersChoice}
                        />
                    )}

                    {computersChoice ? (
                        <div className="flex flex-col items-center">
                            <Icons
                                isClickable={true}
                                title={computersChoice}
                                icon={iconSelector(computersChoice)}
                                setMyChoice={setMyChoice}
                                color={color}
                            >
                                flex items-center justify-center bg-white
                                rounded-full size-[90px]
                            </Icons>
                            <h2 className="mt-10 uppercase text-sm font-bold whitespace-nowrap">
                                The house picked
                            </h2>
                        </div>
                    ) : (
                        <div className="font-bold">
                            The House is Picking ...
                        </div>
                    )}
                </section>
            )}

            {/* Rules Button */}
            <button
                onClick={() => setIsRulesOpen((prev) => !prev)}
                className="absolute min-w-[max-content] max-w-[max-content] max-md:left-[50%] max-md:transform max-md:-translate-x-[50%] bottom-10 right-10 border border-white rounded-lg px-10 py-2"
            >
                RULES
            </button>

            {/* Rules conditional rendering */}
            {isRulesOpen ? <Rules setIsRulesOpen={setIsRulesOpen} /> : null}
            {isRulesOpen && (
                <div className="z-0 absolute inset-0 backdrop-brightness-50"></div>
            )}
        </div>
    );
};

export default Hero;
