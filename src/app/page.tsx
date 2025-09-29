'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Smile, ThumbsUp, Zap } from "lucide-react";

export default function Home() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:to-zinc-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur shadow-xl rounded-3xl p-8 text-center"
      >
        <div className="flex justify-center mb-4">
          <Zap className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-3xl font-bold mb-3 text-gray-800 dark:text-gray-100">
          Welcome to My Fun Page
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          🎉 Just a simple, modern, and professional-looking playground built with Next.js + Tailwind.
        </p>

        <div className="flex flex-col items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setLikes(likes + 1)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
          >
            <ThumbsUp className="w-5 h-5" /> Like {likes > 0 && `(${likes})`}
          </motion.button>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Smile className="w-4 h-4" /> Made for fun, but still professional ✨
          </div>
        </div>
      </motion.div>
    </div>
  );
}