import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AuthModal from "./Components/AuthModal";
import useAuthStore from "./store/useAuthStore";

export default function Layout() {
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initializeAuth();
    return () => unsubscribe();
  }, [initializeAuth]);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] font-sans selection:bg-[#CFE3D8] overflow-hidden">

      <NavBar />
      <AuthModal />
      <Outlet />
    </div>
  );
}
