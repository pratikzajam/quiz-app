import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Submit, FetchQuizData, Skip } from "../../Redux/action";
import { motion } from "framer-motion";

const Dashboard = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [bgColor, setBgColor] = useState("bg-gradient-to-r from-pink-400 to-purple-600");

  useEffect(() => {
    dispatch(FetchQuizData());
  }, []);

  let index = Data?.IndexCount;

  const handleClick = (idx) => {
    setClickedIndex(idx);
    setBgColor("bg-green-500");
    dispatch(Submit(idx));

    setTimeout(() => {
      setClickedIndex(null);
      setBgColor("bg-gradient-to-r from-pink-400 to-purple-600");
    }, 1000);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${bgColor} transition-all duration-500`}> 
      <motion.div
        className="border-4 border-yellow-400 p-8 rounded-3xl shadow-2xl bg-white w-96 transform hover:scale-105 transition-all duration-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h3
          className="text-2xl font-extrabold mb-6 text-center text-indigo-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Data?.quizData?.data[index]?.question}
        </motion.h3>

        {Data?.quizData?.data[index] === undefined ? (
          <motion.li
            key={index}
            className="text-center text-2xl font-bold text-green-600 mt-4 animate-bounce"
          >
            🎉 You Got {Data?.marks} Marks!
          </motion.li>
        ) : (
          <motion.ul
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Data?.quizData?.data[index]?.options.map((ele, idx) => (
              <motion.li
                onClick={() => handleClick(idx)}
                key={idx}
                className={`p-4 border-2 border-indigo-500 rounded-lg cursor-pointer text-gray-900 bg-yellow-200 transition-all duration-300 shadow-lg transform hover:scale-105 hover:bg-green-400 hover:text-white ${
                  clickedIndex === idx ? "bg-green-500 text-white scale-110" : ""
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {`${idx + 1}) ${ele}`}
              </motion.li>
            ))}
          </motion.ul>
        )}

        <div className="mt-6 flex justify-center">
          {Data?.quizData?.data[index] !== undefined && (
            <motion.button
              onClick={() => dispatch(Skip())}
              className="px-8 py-3 bg-red-500 text-white rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-xl transform hover:rotate-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skip 🚀
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;