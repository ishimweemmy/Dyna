import InputField from "src/components/fields/InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import {api} from "@/axios.config";
import {notifications} from "@mantine/notifications";
import { getResError } from "@/utils/func1";

const Register = () => {
  const [data, setData] = useState({
    email : '',
    firstName:  '',
    lastName: '',
    phoneNumber: '',
    key: '',
    password: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
   setData({...data, [e.target.name] :  e.target.value})
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      const res = await api.post("/users/register-admin", data);
      console.log(res.data)
      const res_data = res.data.data;
      console.log("Registration successfull!")
    }catch(e){
      console.log(e);
      notifications.show({
         title: 'Error',
         message: getResError(e),
         color: 'red',
      });
    }
  }
  return (
    <div className=" flex h-full w-full items-center justify-center px-2 md:mx-4 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Register section */}
      <div className=" w-full flex flex-col items-center md:pl-4 lg:pl-0 xl:w-1/2 xl:pl-[2rem] ">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Register
        </h4>
      
        {/*Signup with Google *}
        {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign up with Google
          </h5>
        </div> */}
        <div className="w-[90%] mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> Account </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        <form className="w-full h-full" onSubmit={onSubmit}>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="emmy@dyna.com"
          onChange={(e)=>handleChange(e)}
          value={data.email}
          name="email"
          id="email"
          type="text"
        />

        {/* full name */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="First name*"
          name="firstName"
          placeholder="ishimwe emmy"
          onChange={(e)=>handleChange(e)}
          value={data.firstName}
          id="first Name"
          type="text"
        />

        {/* phone number */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="phone number*"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={(e)=>handleChange(e)}
          placeholder="078......."
          id="phone_nbr"
          type="number"
        />

        <InputField
          variant="auth"
          extra="mb-3"
          label="Key*"
          name="key"
          value={data.key}
          onChange={(e)=>handleChange(e)}
          placeholder="Admin Registration Key"
          id="key"
          type="key"
        />
        {/* Password */}
        <InputField
          variant="auth"
          name="password"
          value={data.password}
          onChange={(e)=>{handleChange(e)}}
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        {/* Confirm Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Confirm Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" type="submit">
          Register
        </button>
        </form>
        <div className="w-full flex justify-between mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <Link
            to={"/auth/sign-in"}
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign in to your account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
