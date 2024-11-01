import React from 'react';
const Chat: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
        <div className="w-full max-w-md bg-blue-50 rounded-lg shadow-lg">
          <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Chat with Us</h2>
            <div className="flex mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Type your message..."
              />
              <button
                className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">This is where the chat messages will appear.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Chat;
  