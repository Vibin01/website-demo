const comparisonCards = [
  {
    title: "Without Easy Facilitator",
    titleicon:"/solutions/employer/question-icon.svg",
    icon: "question-round-icon",
    points: [
      "Offer accepted, engagement silently drops",
      "Communication gaps create growing uncertainty",
      "No structured reinforcement after offer",
      "Commitment momentum erodes before joining",
    ],
  },
  {
    title: "With Easy Facilitator",
    titleicon:"/solutions/employer/facilitator-icon.svg",
    icon: "tick-gradient-icon",
    points: [
      "Engagement begins immediately after offer",
      "Structured signals reinforce candidate intent",
      "Personalized content builds early connection",
      "Commitment momentum strengthens toward joining",
    ],
  },
];

export default function AlignmentDimensionsSection() {
  return (
    <div className="mx-auto ">
      <div className="grid grid-cols-1 gap-[1.5vw] md:grid-cols-2">
        {comparisonCards.map((card, index) => (
          <div
            key={index}
            className="w-full rounded-md border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_#0668E11A]"
          >
            <img
              src={`${card.titleicon}`}
              alt={`${card.title} icon`}
              className="size-iconsize-xl "
            />

            <h3 className="mt-sm text-base font-bold text-[#1B1C17]">
              {card.title}
            </h3>

            <div className="mt-sm space-y-sm ">
              {card.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex gap-2">
                   <img
                    src={`/icons/${card.icon}.svg`}
                    alt="tick icon"
                    className=" size-iconsize-sm p-[0.1%]"
                  />
                  <span className="text-xl font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-base font-medium text-center mt-[1.5vw]"  >Structured engagement converts <span className="font-bold">acceptance into Joining.</span></p>
    </div>
  );
}
