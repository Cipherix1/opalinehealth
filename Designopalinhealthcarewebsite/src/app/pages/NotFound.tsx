import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-[#eef6f8] to-[#f6f9fb]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-[#2aa99b] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-[#07306d] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-[#07306d]/70 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2aa99b] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#238a7e] transition-all shadow-lg"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="border-2 border-[#07306d] text-[#07306d] px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#07306d] hover:text-white transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
