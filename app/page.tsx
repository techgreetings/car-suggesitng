// import Footer from "../components/Footer";
// import Chat from "../components/Chat";

// import Image from 'next/image';
export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* //Background image with overlay */}

      <div className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/Elantra.png')`,
          filter: 'brightness(0.5)', // darkens the image for an aggrassive effect
        }} />
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to the TechGreetings<br /> Car Suggestion Chatbot
          </h1>
          <p className="text-2xl text-white mb-8">
            Find the best car that meets your requirements
          </p>
          </div>
     {/* <Chat /> */}

      {/* <Footer /> */} 
        {/* </div> */}
    </div>
  );
}
