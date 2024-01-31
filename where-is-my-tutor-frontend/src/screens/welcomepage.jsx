import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const WelcomePage = () => {
  return (
    <div>
      <div className="z-30 fixed animate-bounceIn h-[18rem] w-[18rem] xl:h-[25rem] xl:w-[25rem] left-10 top-5 md:left-48 md:top-1">
        <div className="relative hidden lg:block">
          <DotLottiePlayer
            src="/src/assets/books.lottie"
            autoplay
            loop
          ></DotLottiePlayer>
        </div>
      </div>

      <div className="bg-blue-800 h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-500">Find</span> My Tutor
          </h1>
          <p className="text-md mb-8 mx-auto w-2/3">
            Discover personalized learning with our platform. Easily connect
            with qualified tutors around your area. Empower your education
            journey and achieve academic excellence with one-on-one guidance and
            support.
          </p>
          <button className="bg-yellow-300 text-blue-900 py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
