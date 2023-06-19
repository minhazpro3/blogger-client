import { useEffect, useRef } from "react";
const NotFound: React.FC = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="relative">
      <div className="absolute left-2/4 top-2/4 z-30 min-h-[230px] w-full max-w-[400px] flex-none border-b border-slate-900/10 p-4 text-left backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent">
        <h1 className="text-5xl font-medium text-white">404</h1>
        <br />
        <h2 className="text-3xl font-medium text-white">
          Ooops! <br />
          Page Not Found
        </h2>
      </div>
      <lottie-player
        className="z-20"
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets9.lottiefiles.com/private_files/lf30_3X1oGR.json"
        // style={{ width: "100%", height: "450px"   }}
      ></lottie-player>
    </div>
  );
};

export default NotFound;
