// ไฟล์เริ่มต้นของแอป (Entry point) — Vite จะโหลดไฟล์นี้เป็นไฟล์แรก
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// หา element id="root" ใน index.html แล้ว render คอมโพเนนต์ App ลงไป
// เครื่องหมาย ! บอก TypeScript ว่ามั่นใจว่า element นี้มีอยู่จริง (ไม่เป็น null)
createRoot(document.getElementById('root')!).render(
  // StrictMode ช่วยตรวจหาปัญหาในโค้ดตอนพัฒนา (ไม่มีผลตอน build จริง)
  <StrictMode>
    <App />
  </StrictMode>,
)
