// คอมโพเนนต์แสดงรายชื่อพนักงาน พร้อมปุ่มลบ
import { type Employee } from "../App"

// props ที่รับจาก App
interface EmployeeListProps {
    data:Employee[] // ดึงมาจาก setState<Employ[]>
    deleteData:(id:number)=>void // สร้าง Method Signature
}

export default function Employeelist({data,deleteData}:EmployeeListProps){
    return(
        <>
        <ul>
            {/* วนลูปข้อมูลพนักงานด้วย map แล้วสร้าง <li> ทีละคน */}
            {data.map((person) => (
              // key ต้องไม่ซ้ำ เพื่อให้ React ติดตามแต่ละรายการได้ถูกต้อง
              <li key={person.id}>
                ชื่อ: {person.name} | เงินเดือน: {person.salary}
                {/* กดแล้วส่ง id กลับไปให้ App ลบ */}
                <button onClick={() => deleteData(person.id)}>ลบ</button>
              </li>
            ))}
          </ul>
        </>
    )
}
