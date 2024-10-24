import { useState } from 'react';
import '../../App.css';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function Aiquiz() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [numQuestions, setNumQuestions] = useState(0);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer('Loading the quiz... It might take up to 10 seconds');
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAWxhLldGIu93QnDN-JW2XMT3i6lhRAkh4`,
        method: 'post',
        data: {
          contents: [
            {
              parts: [
                {
                  text: `i am a student of computer science who wants to learn and practice my knowledge of some topics. please generate mcq questions related to the following topics and prompt: ${question}. and at the end give me the answers`,
                },
              ],
            },
          ],
        },
      });

      const generatedAnswer =
        response['data']['candidates'][0]['content']['parts'][0]['text'];
      setAnswer(generatedAnswer);

      // Extract number of questions from the generated answer
      const extractedQuestions = extractNumberOfQuestions(generatedAnswer);
      setNumQuestions(extractedQuestions);
    } catch (error) {
      console.log(error);
      setAnswer('Sorry - Something went wrong. Please try again!');
    }

    setGeneratingAnswer(false);
  }

  // Function to extract number of questions (mock implementation)
  const extractNumberOfQuestions = text => {
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
            onChange={e => setQuestion(e.target.value)}
            placeholder="Enter topics to generate a quiz on them..."
          ></textarea>
          <button
            type="submit"
            className={`w-full bg-yellow-500 text-white font-bold py-3 rounded-md hover:bg-white-600 transition-all ${
              generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={generatingAnswer}
          >
            {generatingAnswer ? 'Generating...' : 'Generate Quiz'}
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

export default Aiquiz;
