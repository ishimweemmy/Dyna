import InputField from "src/components/fields/InputField";
import Banner from "./components/Banner";
import Upload from "./components/Upload";

const ProfileOverview = () => {
  return (
    <div className="w-full grid grid-cols-[50%_50%] pr-5 gap-6 mt-10">
      <Banner />
      <div className="w-full h-full flex flex-col justify-between">
        <Upload />
        <div className="w-full p-3 flex flex-col gap-3">
          <span className="text-xl fot-semibold text-navy-700">Update your information</span>
          <form className="w-full flex flex-col gap-2">
            {/* <InputField /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
