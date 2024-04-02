// import InputField from "src/components/fields/InputField";
import Banner from "./components/Banner";
import Upload from "./components/Upload";
// import { useState } from "react";
import Card from "src/components/card";
import Checkbox from "src/components/checkbox";

const ProfileOverview = () => {
  // const [userInfo] = useState([
  //   {
  //     name: "First Name",
  //     value: "Umugwaneza"
  //   },
  //   {
  //     name: "Last Name",
  //     value: "Alice"
  //   },
  //   {
  //     name: "E-mail",
  //     value: "aliceumugwaneza@gmail.com"
  //   },
  //   {
  //     name: "Organization",
  //     value: "Dyna"
  //   },
  //   {
  //     name: "Phone Number",
  //     value: "+07897090113"
  //   },
  //   {
  //     name: "Address",
  //     value: "kigali__and__other__stuffs"
  //   }
  // ])

  return (
    <div className="w-full grid grid-cols-[50%_50%] pr-5 gap-6 mt-5">
      <Banner />
      <div className="w-full h-full flex flex-col justify-between gap-6 max-h-[80dvh] overflow-scroll">
        <Upload />
        <div className="w-full p-3 flex flex-col gap-8">
          <span className="text-xl font-medium text-navy-700">Update your information</span>
          <form className="w-full grid grid-cols-2 gap-x-5 gap-y-4" noValidate>
            {/* <InputField id="fname" name="fname" value={userInfo[0].value} label="First Name" placeholder="Update First name" extra="" variant=""  />
            <InputField id="lname" name="lname" value={userInfo[1].value} label="Last Name" placeholder="Update Last name" extra="" variant=""  />
            <InputField id="email" name="email" value={userInfo[2].value} label="E-mail" placeholder="Update E-mail" extra="" variant=""  />
            <InputField id="pnumber" name="pnumber" value={userInfo[3].value} label="pnumber" placeholder="Update Organization" extra="" variant=""  />
            <InputField id="organization" name="organization" value={userInfo[4].value} label="organization" placeholder="Update Organization" extra="" variant=""  />
            <InputField id="organization" name="organization" value={userInfo[5].value} label="organization" placeholder="Update Organization" extra="" variant=""  /> */}
            <button className="linear rounded-md bg-brand-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-700 active:bg-brand-600 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
              save changes
            </button>
            <button disabled className="linear rounded-md bg-gray-500 px-4 py-2 text-base font-medium text-white transition duration-200 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90 cursor-not-allowed">
              cancel
            </button>
          </form>
          <span className="text-xl font-medium text-navy-700">Update security information</span>
          <form className="w-full grid grid-cols-2 gap-x-5 gap-y-4" noValidate>
            {/* <InputField id="prev_password" name="prev_password" label="previous password" placeholder="Enter previous password" extra="" variant=""  />
            <InputField id="new_password" name="new_password" label="new password" placeholder="Enter new password" extra="" variant=""  />
            <InputField id="conf_new_password" name="conf_new_password" label="confirm new password" placeholder="confirm new password" extra="" variant=""  />
            <InputField id="email" name="email" label="email" placeholder="Enter your email" extra="" variant=""  /> */}
            <button className="linear rounded-md bg-brand-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-700 active:bg-brand-600 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
              save changes
            </button>
            <button disabled className="linear rounded-md bg-gray-500 px-4 py-2 text-base font-medium text-white transition duration-200 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90 cursor-not-allowed">
              cancel
            </button>
          </form>
          <Card extra="!p-4 items-start justify-center gap-6">
            <span className="font-medium text-lg">Delete Account</span>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-sm bg-red-50 text-red-400 p-2 flex flex-col items-start rounded-lg">
                <span className="font-medium">Are you sure you want to delete your account?</span>
                <span className="font-medium">Once you delete your account, there is no going back. Please be certain.</span>
              </p>
              <div className="w-full flex items-center gap-2 text-gray-700 text-sm">
                <Checkbox color="red" />
                <span>I confirm my account deactivation</span>
              </div>
              <button className="linear rounded-md bg-red-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-700 active:bg-red-600 dark:bg-red-400 dark:hover:bg-red-300 dark:active:opacity-90 self-start">
                Deactivate account
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
