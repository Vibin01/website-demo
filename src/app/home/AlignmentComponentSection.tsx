export default function AlignmentCompoundsSection() {
  const cards = [
    {
      icon: "/home/icons/visibility-sharpens-strategy-icon.svg",
      title: "Visibility sharpens strategy",
      height: "h-[50px] md:h-[6vw]",
      top: "top-[30%]",
      iconSize: "w-[25px] md:w-[2.5vw] md:h-[2.5vw]",
      iconTop: "-top-[10px] md:-top-[1vw]",
      iconText: "text-xl",
    },
    {
      icon: "/home/icons/strategy-improves-decisions-icon.svg",
      title: "Strategy improves decisions",
      height: "h-[65px] md:h-[9vw]",
      top: "top-[27%]",
      iconSize: "w-[30px] h-auto md:w-[3.5vw] md:h-[3.5vw]",
      iconTop: " -top-[15px] md:-top-[1.5vw]",
      iconText: "text-xl",
    },
    {
      icon: "/home/icons/decisions-drive-execution-icon.svg",
      title: "Decisions drive execution",
      height: "h-[75px] md:h-[12vw]",
      top: "top-[20%]",
      iconSize: "w-[65px] h-auto md:w-[9vw] md:h-[9vw]",
      iconTop: "-top-[30px] md:-top-[4.5vw]",
      iconText: "text-base",
    },
    {
      icon: "/home/icons/execution-builds-momentum-icon.svg",
      title: "Execution builds momentum",
      height: "h-[85px] md:h-[15vw]",
      top: "top-[14%]",
      iconSize: " w-[70px] md:w-[10vw] md:h-[10vw]",
      iconTop: "-top-[30px] md:-top-[5vw]",
      iconText: "text-base",
    },
  ];

  return (
    <section className="w-full bg-white py-[5%]">
      <div className="relative w-full  ">
        {/* Heading */}
        <h2 className="font-extrabold text-[#1B1C17] text-h2 ">
          Alignment Compounds{" "}
          <span className="block md:inline-flex">Outcomes Accelerate</span>
        </h2>

        {/* Subtext */}
        <p className="mt-sm text-base font-bold text-[#1B1C17]">
          Closing one gap strengthens the system.
        </p>

        {/* Cards */}
        <div className="mt-lg grid grid-cols-1 md:grid-cols-4 place-items-center md:items-end gap-xl md:gap-sm">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "w-[75%]"
                    : index === 1
                      ? "w-[85%]"
                      : index === 2
                        ? "w-[93%]"
                        : "w-full"
                } relative ${card.height} py-md flex justify-center rounded-md border border-[#DEEDFF] bg-white shadow-[0px_0px_30px_0px_#0668E11A]`}
              >
                {/* Icon */}
                <div
                  className={`absolute left-1/2 ${card.iconTop} ${card.iconSize} -translate-x-1/2`}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={`w-full h-auto`}
                  />
                </div>

                {/* Text */}
                <p
                  className={`${card.iconText} md:w-[60%] md:mt-[2%] flex h-full items-center justify-center whitespace-pre-line text-center  font-bold  text-[#0668E1] md:text-[#1B1C17]`}
                >
                  {card.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <p className="mt-sm w-full md:text-center text-base font-medium">
          Seamless Yield is no longer chased — it is produced by the system.
        </p>
      </div>
    </section>
  );
}
