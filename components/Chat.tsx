import React from 'react';

const Chat: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-full bg-white bg-opacity-60 rounded-lg shadow-lg px-8 pt-6 pb-8 "style={{width:1000}}>
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Chat with Us</h2>
      <div className="w-full  bg-gray-100 rounded-lg shadow-inner p-4 overflow-y-auto mb-4">
        {/* Chat messages will go here */}
      </div>
      <div className="flex w-full items-center">
        <input
          className="flex-grow shadow appearance-none border rounded-l w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;