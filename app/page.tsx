import Footer from "../components/Footer";
import Chat from "../components/Chat";
export default function Home() {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">

      <div className="flex flex-col items-center">
      <img src="/car_image.jpg" alt="Car" className=" w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg" />
      <h1 className="text-4xl font-bold mt-6 text-white">
        Welcome to the TechGreetings Car Suggestion Chatbot.
      </h1>
       <p className="text-2xl text-white">Here you will find a best car that meet your requirements</p>
       </div>
    </div>
    <Chat />
    <Footer />
    </div>
  );
}
