// radhe radhe

import { useRef, useState, useEffect, useCallback } from "react"
import ShinyText from "../components/ShinyText"
import GradientText from "../components/GradientText"


// had to define these guys globally for some react reasons
const videos = [
    { 
        thumbnail: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4782/1771569944782-i",
        title: "Drawing the Parabolic Curve.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?",
        views: 10,
        date: "20/10/2025",
        link: "https://www.youtube.com/watch?v=ysz5S6PUM-U"
    },

    { 
        thumbnail: "https://img.youtube.com/vi/SgmNxE9lWcY/maxresdefault.jpg",
        title: "CSS Animation Tutorial in 20 Minutes.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?",
        views: 152,
        date: "11/09/2025",
        link: "https://www.youtube.com/watch?v=SgmNxE9lWcY"
    },

    { 
        thumbnail: "https://img.youtube.com/vi/-mJFZp84TIY/maxresdefault.jpg",
        title: "Complete React Tutorial for Beginners.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?",
        views: 324,
        date: "05/08/2025",
        link: "https://www.youtube.com/watch?v=-mJFZp84TIY"
    },

    { 
        thumbnail: "https://img.youtube.com/vi/FrCGTBm0bUs/maxresdefault.jpg",
        title: "CSS Text Animation Effects.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?",
        views: 89,
        date: "17/07/2025",
        link: "https://www.youtube.com/watch?v=FrCGTBm0bUs"
    },

    { 
        thumbnail: "https://img.youtube.com/vi/j5imlp_c87s/maxresdefault.jpg",
        title: "Creative YouTube Thumbnail Ideas.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?",
        views: 210,
        date: "28/06/2025",
        link: "https://www.youtube.com/watch?v=j5imlp_c87s"
    },

    { 
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        title: "Modern Web Design Inspiration.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?",
        views: 478,
        date: "13/05/2025",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },

    { 
        thumbnail: "https://img.youtube.com/vi/3JluqTojuME/maxresdefault.jpg",
        title: "JavaScript DOM Manipulation Basics.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?",
        views: 265,
        date: "30/04/2025",
        link: "https://www.youtube.com/watch?v=3JluqTojuME"
    },

    { 
        thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
        title: "Learn JavaScript Full Course.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?",
        views: 612,
        date: "21/03/2025",
        link: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
    }
]

const infiniteVideos = [...videos, ...videos]

function Home() {

    const CARD_W = 96
    const GAP = 8
    const STEP = CARD_W + GAP

    const wrapperRef = useRef(null)
    const trackRef = useRef(null)
    const currentSlide = useRef(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const [currInfo, setCurrInfo] = useState(videos[0])

    const goToSlide = useCallback((rawIndex, animate = true) => {
        const track = trackRef.current
        if (!track) return

        track.style.transition = animate ? "transform 300ms ease-out" : "none"
        track.style.transform = `translateX(-${rawIndex * STEP}px)`
        currentSlide.current = rawIndex

        const normalIndex = rawIndex % videos.length
        setActiveIndex(normalIndex)

        // after changing active slide
        setCurrInfo(videos[normalIndex])

    }, [STEP])

    useEffect(() => {
        const interval = setInterval(() => {
            goToSlide(currentSlide.current + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [goToSlide])

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const handleTransitionEnd = () => {
            if (currentSlide.current >= videos.length) {
                goToSlide(currentSlide.current - videos.length, false)
            }
        }

        track.addEventListener("transitionend", handleTransitionEnd)
        return () => track.removeEventListener("transitionend", handleTransitionEnd)
    }, [goToSlide]) 

    const slide = (dir) => {
        const next = currentSlide.current + dir
        if (next < 0) {
            goToSlide(videos.length - 1)
            return
        }
        goToSlide(next)
    }

  return (
    <div className="main selection:bg-[#f5f5f53e] w-full h-screen relative">
        <div className="banner w-full h-full relative object-cover overflow-hidden">
            <div className="vignette absolute w-full h-full bg-linear-to-r from-[#080808] to-transparent"></div>
            <img className='thumbnail w-full h-full' src={currInfo.thumbnail} alt="img1" />
        </div>
        <div className="content w-full h-full absolute top-0 left-0 flex items-center justify-between">
            <div className="info w-2/5 h-full relative text-[#e2e1df] flex flex-col items-start px-16 py-5 gap-2">
                <h3 className='font-["jose-bold"] text-6xl leading-none tracking-tighter mt-[50%]'>
                    <ShinyText
                    text={currInfo.title}
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    />
                </h3>
                <div className="stats opacity-90">
                    <GradientText
                        colors={["#5227FF","#FF9FFC","#B497CF"]}
                        animationSpeed={5}
                        showBorder
                        className="bg-transparent"
                        >
                        {currInfo.views} views • {currInfo.date}
                    </GradientText>
                </div>
                <p className="desc opacity-60">{currInfo.desc}</p>
                <button className="play-btn mt-[10%] cursor-pointer w-full rounded-lg text-white text-xl font-bold py-2 px-6 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-indigo-400 hover:to-cyan-400 hover:scale-[1.05] transition duration-500">Play</button>
            </div>
            <div className="slider-container w-3/5 h-full relative flex justify-end items-end mb-[10%] px-5">
                <div className="relative w-8/10 flex items-center">
                    <button
                        onClick={() => slide(-1)}
                        className="absolute left-0 z-10 bg-black/70 text-white w-8 h-20 rounded-md text-xl cursor-pointer"
                    >
                        ‹
                    </button>
                    
                    <div ref={wrapperRef} className="overflow-hidden mx-10 w-full">
                        <div
                            ref={trackRef}
                            className="flex p-2"
                            style={{ gap: GAP, transition: "transform 300ms ease-out" }}
                        >
                            {infiniteVideos.map((video, i) => {
                                const normalIndex = i % videos.length
                                const isActive = normalIndex === activeIndex

                                return (
                                    <div
                                        key={i}
                                        onClick={() => goToSlide(i % videos.length)}
                                        style={{ flex: `0 0 ${CARD_W}px`, height: 64 }}
                                        className={`${isActive ? 'slide-active border-white scale-105' : 'slide-inactive border-[#e2e1dfc8]'} border-3 rounded-lg overflow-hidden cursor-pointer relative flex items-center justify-center hover:border-white hover:scale-105 transition duration-200`}
                                    >
                                        <img
                                            src={video.thumbnail}
                                            className="z-10 relative object-cover w-full h-full"
                                            alt={`slide-${i}`}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                    <button
                        onClick={() => slide(1)}
                        className="absolute right-0 z-10 bg-black/70 text-white w-8 h-20 rounded-md text-xl cursor-pointer"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home