import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

interface Employee {
  id: number;
  name: string;
  salary: number;
}

function App() {
  const [isVisible, setIsvisble] = useState<boolean>(true);
  const [data, setData] = useState<Employee[]>([
    { id: 1, name: "ต้น", salary: 25000 },
    { id: 2, name: "โจ", salary: 23000 },
    { id: 3, name: "เจม", salary: 23500 },
  ]);

  function deleteData(id:number){ // 2
    setData(data.filter((person) => person.id !== id));

    // console.log("ต้องการลบข้อมูลพนังงานรหัส", id);
  }
  return (
    <>
    <Header title="แอพจัดการข้อมูลพนักงาน" />
      <button onClick={() => setIsvisble(!isVisible)}>
        {isVisible ? "ซ่อน" : "แสดง"}
      </button>
      <p>จำนวนข้อมูล: {data.length} รายการ</p>
      {isVisible && 
      <ul>
          {data.map((person) => (
            <li key={person.id}>
              ชื่อ: {person.name} | เงินเดือน: {person.salary}
              <button onClick={() => deleteData(person.id)}>ลบ</button>
            </li>
          ))}
        </ul>}
      <hr />
    <Footer company="บริษัท XYZ สตูดิโอ" year={2026} />
    </>
  );
}

export default App;
