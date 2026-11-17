// คอมโพเนนต์ส่วนท้ายของหน้า
// props ที่รับเข้ามา: ชื่อบริษัท และปีที่ก่อตั้ง (ค.ศ.)
interface FooterProps {
  company: string;
  year: number;
}

export default function Footer({ company, year }: FooterProps) {
  return (
    <>
      {/* บวก 543 เพื่อแปลง ค.ศ. เป็น พ.ศ. */}
      <p>{company} จำกัด | ปีที่ก่อตั้ง: {year+543}</p>
    </>
  );
}
