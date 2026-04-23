"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: "07",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0F3D35] text-[#F5F5F0] overflow-hidden text-center p-5 font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        .bg-glow {
          position: absolute;
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle, rgba(23, 169, 139, 0.2) 0%, rgba(15, 61, 53, 0) 70%);
          border-radius: 50%;
          z-index: 0;
          filter: blur(80px);
          animation: pulse 15s infinite alternate ease-in-out;
        }

        @keyframes pulse {
          from { transform: scale(1) translate(-5%, -5%); opacity: 0.5; }
          to { transform: scale(1.3) translate(5%, 5%); opacity: 0.8; }
        }

        .showcase-container {
          max-width: 1000px;
          z-index: 10;
          position: relative;
        }

        .logo-box {
          margin-bottom: 80px;
          animation: fadeInDown 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .showcase-h1 {
          font-size: clamp(2.5rem, 10vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin-bottom: 32px;
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both;
        }

        .showcase-p {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: rgba(245, 245, 240, 0.5);
          margin-bottom: 64px;
          font-weight: 500;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.4;
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.4s both;
        }

        .countdown {
          display: flex;
          gap: 32px;
          justify-content: center;
          margin-bottom: 80px;
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.6s both;
        }

        .time-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          padding: 30px;
          min-width: 140px;
          border-radius: 32px;
          transition: transform 0.3s ease;
        }

        .time-box:hover {
          transform: translateY(-10px);
          border-color: rgba(23, 169, 139, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .time-val {
          font-size: 3.5rem;
          font-weight: 800;
          display: block;
          color: #17A98B;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .time-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.3);
          margin-top: 10px;
          display: block;
          font-weight: 700;
        }

        .cta-box {
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.8s both;
        }

        .showcase-btn {
          background-color: #17A98B;
          color: white;
          text-decoration: none;
          padding: 24px 56px;
          border-radius: 24px;
          font-weight: 800;
          font-size: 1.15rem;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 30px 60px rgba(23, 169, 139, 0.25);
        }

        .showcase-btn:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 40px 80px rgba(23, 169, 139, 0.35);
          background-color: #1dc4a2;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @media (max-width: 768px) {
          .countdown { gap: 12px; }
          .time-box { min-width: 80px; padding: 15px 10px; border-radius: 20px; }
          .time-val { font-size: 1.8rem; }
          .time-label { font-size: 0.6rem; letter-spacing: 0.1em; }
          .showcase-btn { padding: 20px 32px; font-size: 1rem; width: 100%; justify-content: center; }
        }
        `
      }} />
      <div className="bg-glow"></div>
      
      <div className="showcase-container">
        <div className="logo-box flex justify-center">
          {/* Using Space Square Logo as the guardian of information */}
          <Image 
            src="/assets/logos/spacesquare-logo-white.png" 
            alt="Space Square" 
            width={200} 
            height={60} 
            className="h-[100px] w-auto opacity-90 object-contain"
          />
        </div>

        <h1 className="showcase-h1">Prepare-se para o<br /><span style={{ color: "#17A98B" }}>Lançamento.</span></h1>
        
        <p className="showcase-p">Desenvolvendo uma nova experiência digital para a Nossa Terra Imobiliária.</p>

        <div className="countdown">
          <div className="time-box">
            <span className="time-val">{timeLeft.days}</span>
            <span className="time-label">Dias</span>
          </div>
          <div className="time-box">
            <span className="time-val">{timeLeft.hours}</span>
            <span className="time-label">Horas</span>
          </div>
          <div className="time-box">
            <span className="time-val">{timeLeft.minutes}</span>
            <span className="time-label">Min</span>
          </div>
          <div className="time-box">
            <span className="time-val">{timeLeft.seconds}</span>
            <span className="time-label">Seg</span>
          </div>
        </div>

        <div className="cta-box">
          <span style={{ display: "block", marginBottom: "20px", color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", fontWeight: 600 }}>Para informações, entre em contato:</span>
          <a href="https://api.whatsapp.com/send?phone=5586995903007&text=Olá!%20Gostaria+de%20informações%20sobre%20o%20projeto%20Nossa%20Terra." className="showcase-btn">
            Falar com Space Square →
          </a>
        </div>
      </div>
    </div>
  );
}
