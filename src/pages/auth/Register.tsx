// import * as yup from "yup"
// import { yupResolver } from "@hookform/resolvers/yup"
// import { useForm } from "react-hook-form"
// import { registerAPI } from "../../apis/AuthAPI"
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {

//   const navigate = useNavigate()
//   const[image,setimage] = useState<string>("") 
//   const[avatar,setAvatar] = useState<string>("") 

//   const onHadleIamge = (e: any) => {

//     const localImage = e.target.files[0]
//     const saveImage = URL.createObjectURL(localImage)
//     setimage(localImage)
//     setAvatar(saveImage)
//   }

//   const model = yup.object({
//     name: yup.string().required(),
//     email: yup.string().required(),
//     password: yup.string().required(),
//     confirm: yup.string().oneOf([yup.ref("password")]),
//   })

  // const { handlesubmit, register, formstate: {errors} } = useForm ({
  //   resolver: yupResolver(model)
  // })
  //  const onSubmit = handlesubmit(async (data) => {
  //   const {name,email,password} = data

  //   const formData = new FormData()
  //   formData.append("name",name)
  //   formData.append("email",email)
  //   formData.append("password",password)
  //   formData.append("avatar",image)

  //   (formData).then(() => {
  //     navigate("sign-in")
  //   })

  //  })
  return (
    <div
      className={`w-full h-[100vh]  flex items-center justify-center`}
    >
       <form
                // onSubmit={onsubmit}
                className="flex flex-col justify-center" >
      <div className="flex flex-col items-center border-2 border-[#8fbeed] mb-8 bg-white py-8 px-5 rounded">
        <div className="flex flex-col items-center">
          <div className="mt-[10px] text-3xl">Sign Up</div>

          <div className="w-[60px] h-[60px] rounded-[50%] object-cover border-2 border-[dodgerblue] m-[10px]"></div>

          <label className="py-1 px-3 my-2 bg-[dodgerblue] text-purple-200 rounded-md hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all mt-[10px]">
            Upload Image
          </label>
          <div className="w-[300px] h-[40px] gap-[10px] mt-[10px] flex items-center">
            <div className="text-16px">Name :</div>
            <input
              placeholder="Enter your username"
              className="border-none o flex-1 h-full outline-none text-xs border-[black] border-b-2 "
            ></input>
          </div>
          <div className="w-[300px] h-[40px] gap-[10px] mt-[10px] flex items-center">
            <div className="text-16px">Email :</div>
            <input
              placeholder="Enter your Email"
              className="border-none o flex-1 h-full outline-none text-xs border-[black] border-b-2 "
            ></input>
          </div>
          <div className="w-[300px] h-[40px] gap-[10px] mt-[10px] flex items-center">
            <div className="text-16px">Password :</div>
            <input
              placeholder="Enter your Password"
              className="border-none o flex-1 h-full outline-none text-xs border-[black] border-b-2 "
            ></input>
          </div>
          <div className="text-[13px] mt-[10px]">Already have an Account</div>
          <Link to="/sign-in">
            <span className=" text-[12px] font-medium text-[dodgerblue] hover:cursor-pointer decoration-none ">
              Please Sign in here
            </span>
          </Link>
        </div>
        <label className="py-2 px-10 my-2 bg-[dodgerblue] mt-[10px] text-purple-200 rounded-md hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all">
          Sign-Up
        </label>
      </div>
      </form>
    </div>
  );
};

export default Register;