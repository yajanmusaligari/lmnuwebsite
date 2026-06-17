import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import HomePage from "./pages/HomePage";
import MaterialsPage from "./pages/MaterialsPage";
import ConstructionPage from "./pages/ConstructionPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#0A0A0A',
              color: '#fff',
              border: '1px solid #C9A24B',
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
