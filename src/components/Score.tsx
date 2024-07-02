type Props = {
    score: number;
};

const Score = ({ score }: Props) => {
    return (
        <div>
            <section className="flex items-center gap-3 min-w-[max-content] text-[16px] justify-between border-[3px] border-gray-500 rounded-md p-3 md:text-[24px] max-w-xl mx-auto">
                <h1 className="font-bold uppercase leading-3 md:leading-[18px] whitespace-nowrap">
                    Rock <br /> Paper <br /> Scissors <br />
                </h1>

                <div className="text-[1em] bg-white text-gray-700 rounded-sm px-5 md:px-8 py-1 text-center whitespace-nowrap">
                    <p className="uppercase text-[.6em]">Score</p>
                    <p className="text-[1.5em] font-bold">{score}</p>
                </div>
            </section>
        </div>
    );
};

export default Score;
