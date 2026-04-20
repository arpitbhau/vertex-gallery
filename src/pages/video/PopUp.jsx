// radhe radhe
import gsap from "gsap";

function PopUp({ vid }) {
  const btn = document.getElementById("close-btn");
  const container = document.getElementById("v-container");

  gsap.from(container, {
    scale: 0.88,
    opacity: 0,
    y: 40,
    transformOrigin: "center center",
    duration: 0.65,
    ease: "expo.out",
  });

  btn.addEventListener("click", () => {
    btn.style.pointerEvents = "none";

    gsap
      .timeline()
      .to(btn, {
        scale: 0,
        duration: 0.25,
        ease: "back.in(2)",
      })
      .to(
        container,
        {
          scaleY: 0,
          scaleX: 0.85,
          opacity: 0,
          transformOrigin: "top center",
          duration: 0.45,
          ease: "expo.in",
        },
        "-=0.1",
      )
      .then(() => {
        console.log("closed!!");
      });
  });

  function isExactlyFiveDaysAgo(dateString) {
    const [day, month, year] = dateString.split("/");

    const videoDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    // remove time part (important!)
    videoDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today - videoDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays === 5;
  }

  return (
    <div class="min-h-[98vh] flex items-center justify-center relative top-2">
      <div
        id="v-container"
        class="relative w-[99vw] h-[96vh] bg-[#000000ea] rounded-3xl flex flex-col overflow-hidden"
      >
        {/* Close Button  */}
        <button
          id="close-btn"
          class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 border border-white/20 cursor-pointer flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line
              x1="1"
              y1="1"
              x2="13"
              y2="13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="13"
              y1="1"
              x2="1"
              y2="13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>

        {/* Video Section */}
        <div class="w-full flex-[0_0_55%] flex items-center justify-center bg-[#0a1628] relative overflow-hidden">
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,180,255,0.08)_0%,transparent_70%)]"></div>
          <div class="relative w-full h-full flex items-center justify-center p-5 box-border">
            <iframe
              width="100%"
              height="100%"
              class="rounded-xl border-none max-w-165"
              src={vid.link}
              title="Automatic Player Farm"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Description Section */}
        <div class="flex-1 flex flex-col justify-center px-9 py-7 border-t border-white/[0.07]">
          {/* Label */}
          {isExactlyFiveDaysAgo(vid.date) && (
            <div class="flex items-center gap-2.5 mb-3">
              <div class="w-1 h-5.5 bg-sky-400 rounded-sm"></div>
              <span class="text-[11px] font-semibold tracking-[0.12em] uppercase text-sky-400">
                New Release
              </span>
            </div>
          )}

          {/* Title */}
          <h2 class="m-0 mb-2.5 text-[22px] font-bold text-white leading-snug tracking-tight">
            {vid.title}
          </h2>

          {/* Description */}
          <p class="m-0 mb-5 text-sm leading-relaxed text-white/55 px-2">
            {vid.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
