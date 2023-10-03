import avatar from "src/assets/img/avatars/avatar11.png";
import banner from "src/assets/img/profile/banner.png";
import Card from "src/components/card";
import General from "./General";

const Banner = () => {
  return (
    <Card extra={"items-center w-full h-full p-[16px]"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-44 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex w-ful h-full items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Adela Parkson
        </h4>
        <p className="text-base font-normal text-gray-600">Owner and Admin</p>
      </div>
      <General />
    </Card>
  );
};

export default Banner;
