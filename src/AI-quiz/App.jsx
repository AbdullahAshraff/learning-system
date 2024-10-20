// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [promptText, setPromptText] = useState('');  // New state for prompt text
//   const [quiz, setQuiz] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Handle prompt text input change
//   const handlePromptChange = (e) => {
//     setPromptText(e.target.value);
//   };

//   // Generate quiz based on the prompt text
//   const generateQuiz = async () => {
//     if (!promptText) {
//       alert('Please enter a prompt text first.');
//       return;
//     }

//     try {
//       setLoading(true);
//       // Send the prompt text to the AI API for quiz generation
//       const response = await axios({
//         url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAWxhLldGIu93QnDN-JW2XMT3i6lhRAkh4",
//         method: 'POST',
//         data: {
//           numQuestions: 10,
//           difficultyLevel: "easy",
//           prompt: promptText,  // Use prompt text entered by user
//         },
//       });

//       if (response.status === 200) {
//         setQuiz(response.data);
//         console.log('Generated Quiz:', response.data);
//       } else {
//         alert('Failed to generate quiz. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error generating quiz:', error);
//       alert('There was an error generating the quiz. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="App">
//       <textarea 
//         placeholder="Enter the prompt text here..." 
//         value={promptText} 
//         onChange={handlePromptChange} 
//         rows="4" 
//         cols="50"
//       />

//       <button onClick={generateQuiz} disabled={loading}>
//         {loading ? 'Generating Quiz...' : 'Generate Quiz'}
//       </button>

//       {quiz && (
//         <div>
//           <h2>Generated Quiz</h2>
//           <pre>{JSON.stringify(quiz, null, 2)}</pre> {/* Render quiz as JSON */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;










import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [numQuestions, setNumQuestions] = useState(0); // New state for the number of questions
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading the quiz... It might take up to 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAWxhLldGIu93QnDN-JW2XMT3i6lhRAkh4`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const generatedAnswer = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      setAnswer(generatedAnswer);

      // Extract number of questions from the generated answer
      const extractedQuestions = extractNumberOfQuestions(generatedAnswer);
      setNumQuestions(extractedQuestions);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  // Function to extract number of questions (mock implementation)
  const extractNumberOfQuestions = (text) => {
    
    return 10; 
  };

  return (
    <>
      <div className="bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50 min-h-screen flex flex-col justify-center items-center p-6">
        <form
          onSubmit={generateAnswer}
          className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105"
        >
          <h1 className="text-3xl font-bold text-yellow-600 mb-6 text-center">
            AI Quiz Generator
          </h1>
          <textarea
            required
            className="border border-gray-300 rounded w-full h-32 p-4 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your prompt to generate a quiz..."
          ></textarea>
          <button
            type="submit"
            className={`w-full bg-yellow-500 text-white font-bold py-3 rounded-md hover:bg-white-600 transition-all ${
              generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={generatingAnswer}
          >
            {generatingAnswer ? "Generating..." : "Generate Quiz"}
          </button>
        </form>

        <div className="mt-8 w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
             {numQuestions > 0 && `(${numQuestions} Questions)`}
          </h2>
          <div className="text-left text-gray-600">
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

