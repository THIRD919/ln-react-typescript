// คอมโพเนนต์ส่วนหัวของหน้า
// props ที่รับเข้ามา: ข้อความหัวเรื่อง
interface HeaderProps {
    title: string;
}

// เขียนแบบ arrow function (ให้ผลเหมือน function ปกติ)
const Header = ({ title }: HeaderProps) => {
    return (
        <header>
            {/* แสดงชื่อหัวเรื่องที่ส่งมาจาก App */}
            <h1>{title}</h1>
            <hr/>
        </header>
    );
}

export default Header;
