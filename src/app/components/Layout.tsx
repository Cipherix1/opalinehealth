import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomCursor } from "./CustomCursor";
import { LoadingScreen } from "./LoadingScreen";
import { FloatingBackground } from "./FloatingBackground";

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHomePage);

  useEffect(() => {
    // Only show loading screen on home page
    if (isHomePage) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname, isHomePage]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="min-h-screen bg-background cursor-none relative"
        >
          <FloatingBackground />
          <div className="relative z-10">
            <CustomCursor />
            <Header />
            <Outlet />
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}
