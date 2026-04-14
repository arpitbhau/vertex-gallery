// radhe radhe

import ShinyText from "../components/ShinyText"

function Home() {
  return (
    <div className="main selection:bg-[#f5f5f53e] w-full h-screen relative">
        <div className="banner w-full h-full relative object-cover overflow-hidden">
            <div className="vignette absolute w-full h-full bg-linear-to-r from-[#080808] to-transparent"></div>
            <img className='thumbnail' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4782/1771569944782-i" alt="img1" />
        </div>
        <div className="content w-full h-full absolute top-0 left-0 flex items-center justify-between">
            <div className="info w-2/5 h-full relative text-[#e2e1df] flex flex-col items-start px-16 py-5 gap-2">
                <h3 className='font-["jose-bold"] text-6xl leading-none tracking-tighter mt-[50%]'>
                    <ShinyText
                    text="Drawing the Parabolic Curve."
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
                <p className="desc opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates neque, nobis consequatur magnam reprehenderit doloremque architecto sequi ipsa voluptas quaerat?</p>
                <button className="play-btn mt-[10%] cursor-pointer w-full rounded-lg text-white text-xl font-bold py-2 px-6 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-indigo-400 hover:to-cyan-400 hover:scale-[1.05] transition duration-500">Play</button>
            </div>
            <div className="slider-container w-3/5 h-full relative flex justify-end items-end mb-[10%]">
                <div className="slide w-8/10 bg-[#00000048] relative px-2 py-3 flex gap-2 rounded-2xl">
                    <div className="slide w-20 h-14 object-cover rounded-lg overflow-hidden cursor-pointer border-2 border-[#e2e1df]">
                        <img className="slide-thumbnail w-full h-full" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4782/1771569944782-i" alt="" />
                    </div>
                    <div className="slide w-20 h-14 object-cover rounded-lg overflow-hidden cursor-pointer border-2 border-[#e2e1df]">
                        <img className="slide-thumbnail w-full h-full" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4782/1771569944782-i" alt="" />
                    </div>
                    <div className="slide w-20 h-14 object-cover rounded-lg overflow-hidden cursor-pointer border-2 border-[#e2e1df]">
                        <img className="slide-thumbnail w-full h-full" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4782/1771569944782-i" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home