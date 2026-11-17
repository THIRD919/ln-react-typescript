// คอมโพเนนต์ฟอร์มสำหรับเพิ่มพนักงานใหม่
import { useState, type SubmitEvent } from "react";
import { type Employee } from "../App";

// props ที่รับจาก App: ฟังก์ชันสำหรับส่งข้อมูลพนักงานใหม่กลับไป
interface AddFormProps {
  insertData: (emp: Employee) => void;
}

export default function Addform({ insertData }: AddFormProps) {
  // State เก็บค่าที่ผู้ใช้กรอกในฟอร์ม (controlled component)
  const [name, setName] = useState<string>("");
  const [salary, setSalary] = useState<number>(15000);

  // เรียกตอน submit ฟอร์ม (React 19 ใช้ SubmitEvent แทน FormEvent)
  function submitData(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); // กันหน้าเว็บรีเฟรช

    // สร้างอ็อบเจกต์พนักงานใหม่จากค่าใน State
    // หมายเหตุ: id แบบสุ่มอาจซ้ำกับของเดิมได้
    const newEmployee: Employee = {
      id: Math.floor(Math.random() * 1000), //0-999
      name: name,
      salary: salary,
    };

    // ส่งข้อมูลกลับไปให้ App เพิ่มลง State หลัก
    insertData(newEmployee);
    // ล้างฟอร์มกลับเป็นค่าเริ่มต้น
    setName("");
    setSalary(15000);
  }

  return (
    <>
      <form onSubmit={submitData}>
        <label>ชื่อพนักงาน</label>
        <input
          type="Text" // ป้อนชื่อพนักงาน
          value={name} // นำ State มาผูก
          onChange={(e) => setName(e.target.value)} // ทุกครั้งที่มีการป้อนชื่อ จำถูกเก็บข้อมูลไว้ที่ State Name | ใช้ Event ชื่อ onChange
        />
        <select
          value={salary} // ทุกครั้งที่มีการเปลี่ยนแปลงตัวเลือก ก็จะนำเอาตัวเลือกที่เราเลือกไปเก็บใน State Salary ใช้ onChange
          onChange={(e) => setSalary(Number(e.target.value))} // กรณีนี้ต้องกำหนด Type ให้ด้วยเพราะเก็บค่าเป็น Number
        >
          {/* ตัวเลือกเงินเดือน */}
          <option>15000</option>
          <option>20000</option>
          <option>50000</option>
          <option>80000</option>
        </select>
        {/* ปิดปุ่มถ้ายังไม่กรอกชื่อ */}
        <button type="submit" disabled={name.trim() === ""}>
          บันทึก
        </button>
      </form>
    </>
  );
}
