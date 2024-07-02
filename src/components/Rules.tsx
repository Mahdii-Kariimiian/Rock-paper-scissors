import { Dispatch, SetStateAction, FC } from "react";
import rules from "../assets/image-rules.svg";
import close from "../assets/icon-close.svg";
interface RulesProps {
    setIsRulesOpen: Dispatch<SetStateAction<boolean>>;
}

const Rules: FC<RulesProps> = ({ setIsRulesOpen }) => {
    return (
        <div className="z-10 absolute flex flex-col sm:top-[50%] sm:left-[50%] sm:transform sm:-translate-x-[50%] sm:-translate-y-[50%] bg-white max-md:inset-0 items-center justify-center sm:size-[480px] mx-auto rounded-md">
            <img src={rules} alt="" />
            <button
                className="mt-[100px]"
                onClick={() => setIsRulesOpen(false)}
            >
                <img src={close} alt="close button" />
            </button>
        </div>
    );
};

export default Rules;
