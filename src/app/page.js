import CardMain from "./components/card/CardMain";
import HeaderMain from "./components/header/HeaderMain";
import UploadMain from "./components/upload/UploadMain";

export default function Home() {
  return (
    <main className=" text-[14px] leading-[150%] bg-[#eff3f8]">
      <HeaderMain />
      <div className="md:p-10 p-5 pt-20">
        <UploadMain />
        <CardMain />
      </div>
      {/* <div className="h-[500px]"></div> */}
    </main>
  );
}
