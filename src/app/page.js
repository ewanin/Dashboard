import CardMain from "./components/card/CardMain"; // Importing CardMain component
import HeaderMain from "./components/header/HeaderMain"; // Importing HeaderMain component
import UploadMain from "./components/upload/UploadMain"; // Importing UploadMain component

export default function Home() {
  return (
    <main className="text-[14px] leading-[150%] bg-[#eff3f8]">
      {/* Header Section */}
      <HeaderMain />

      {/* Main Content Section */}
      <div className="md:p-10 p-5 pt-20">
        {/* Upload Section */}
        <UploadMain />

        {/* Card Section */}
        <CardMain />
      </div>
    </main>
  );
}