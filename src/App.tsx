// คอมโพเนนต์หลักของแอป — เก็บ State ข้อมูลพนักงาน และส่งต่อให้คอมโพเนนต์ลูก
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Employeelist from "./components/employeelist";
import Addform from "./components/Addform";

// กำหนดโครงสร้างข้อมูลพนักงาน (export ออกไปให้คอมโพเนนต์อื่นใช้ร่วมกัน)
export interface Employee {
  id: number; // รหัสพนักงาน (ใช้เป็น key และใช้ตอนลบ)
  name: string; // ชื่อพนักงาน
  salary: number; // เงินเดือน
}

function App() {
  // State ควบคุมการ แสดง/ซ่อน รายชื่อพนักงาน
  const [isVisible, setIsvisble] = useState<boolean>(true);
  // State เก็บรายการพนักงานทั้งหมด พร้อมข้อมูลเริ่มต้น 3 คน
  const [data, setData] = useState<Employee[]>([
    { id: 1, name: "ต้น", salary: 25000 },
    { id: 2, name: "โจ", salary: 23000 },
    { id: 3, name: "เจม", salary: 23500 },
  ]);

  // เพิ่มพนักงานใหม่ — ถูกเรียกจาก Addform
  // ใช้ spread (...data) สร้าง array ใหม่ เพราะห้ามแก้ State ตรง ๆ
  function insertData(emp: Employee) {
    // console.log("ข้อมูลที่ส่งจากฟอร์ม = ", emp);
    setData([...data,emp])
  }

  // ลบพนักงานตาม id — ถูกเรียกจาก Employeelist
  // filter เก็บไว้เฉพาะคนที่ id ไม่ตรงกับที่ต้องการลบ
  function deleteData(id: number) {
    // 2
    setData(data.filter((person) => person.id !== id));

    // console.log("ต้องการลบข้อมูลพนังงานรหัส", id);
  }
  return (
    <>
      {/* ส่วนหัว: ส่งชื่อแอปผ่าน props title */}
      <Header title="แอพจัดการข้อมูลพนักงาน" />
      {/* ฟอร์มเพิ่มพนักงาน: ส่งฟังก์ชัน insertData ให้ลูกเรียกกลับมา */}
      <Addform insertData={insertData} />
      {/* ปุ่มสลับสถานะ แสดง/ซ่อน รายการ */}
      <button onClick={() => setIsvisble(!isVisible)}>
        {isVisible ? "ซ่อน" : "แสดง"}
      </button>
      <p>จำนวนข้อมูล: {data.length} รายการ</p>
      {/* แสดงรายการเฉพาะตอน isVisible เป็น true (conditional rendering ด้วย &&) */}
      {isVisible && <Employeelist data={data} deleteData={deleteData} />}
      <hr />
      {/* ส่วนท้าย: ส่งชื่อบริษัทและปี (ค.ศ.) ผ่าน props */}
      <Footer company="บริษัท XYZ สตูดิโอ" year={2026} />
    </>
  );
}

export default App;
