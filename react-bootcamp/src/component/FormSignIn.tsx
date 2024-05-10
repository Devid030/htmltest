// import React from 'react'

import React, { useState } from "react";
interface data {
  email: string;
  password: string;
  confirmPassword: string;
}

function FormSignIn() {
  
  const [data, setData] = useState<data>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  //   handle change for set data from input filed
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      if (value !== data.password) {
        setIsMatch(true);
      } else {
        setIsMatch(false);
      }
    }
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  // handle submit data.
  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.email === "") {
      alert("Please input email");
      return;
    }
    if (data.password === "") {
      alert("Pease input password");
      return;
    }

    if (data.confirmPassword !== data.password) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }

    setIsSubmit((prevIsSubmit) => !prevIsSubmit);
    setData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    console.log(data);
  };

  console.log(data);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={data.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                {isMatch ? (
                  <p className=" text-red-600 text-[12px]">
                    {" "}
                    confirmPassword not match <sup>***</sup>{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="confirmPassword"
                  autoComplete="current-confirmPassword"
                  required
                  value={data.confirmPassword}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isSubmit ? "loading..." : " Sign in "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormSignIn;

// using hook form
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// const schema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
//   confirmPassword: z.string().nonempty(),
// });

// function FormSignIn() {
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//     watch,
//     reset,
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (formData: object) => {
//     console.log(formData);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     reset();
//   };

//   const confirmPassword = watch("confirmPassword");

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="space-y-6"
//             action="#"
//             method="POST"
//           >
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   type="email"
//                   autoComplete="email"
//                   {...register("email")}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Password
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   type="password"
//                   autoComplete="current-password"
//                   {...register("password")}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               {/* {errors.password && <p className="text-red-500">{errors.password.message}</p>} */}
//             </div>

//             <div>
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Confirm Password
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="confirmPassword"
//                   type="password"
//                   autoComplete="new-password"
//                   {...register("confirmPassword")}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               {/* {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>} */}
//               {confirmPassword !== watch("password") && (
//                 <p className="text-red-500">Passwords do not match</p>
//               )}
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 {isSubmitting ? "Signing in..." : "Sign in"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FormSignIn;
