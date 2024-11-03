import React from 'react';

const Chat: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg px-8 pt-6 pb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Chat with Us</h2>
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
      <div className="mt-4">
        <p className="text-gray-700">This is where the chat messages will appear.</p>
      </div>
    </div>
  );
}

export default Chat;
