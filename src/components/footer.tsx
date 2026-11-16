interface FooterProps {
  company: string;
  year: number;
}

export default function Footer({ company, year }: FooterProps) {
  return (
    <>
      <p>{company} จำกัด | ปีที่ก่อตั้ง: {year+543}</p>
    </>
  );
}
