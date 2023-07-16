// import React from 'react'
// import Navbar from '../layouts/Navbar'
// import Footer from '../layouts/Footer'

// export default function SignUpForm() {
//   return (
//     <><Navbar />
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Login now!</h1>
//           <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//         </div>
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <div className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input type="text" placeholder="email" className="input input-bordered" />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input type="text" placeholder="password" className="input input-bordered" />
//               <label className="label">
//                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//               </label>
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-primary">Login</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//    <Footer/>
//     </>
//   )
// }

'use client';

import * as React from 'react';


import  {useForm}  from 'react-hook-form';
import { useAppDispatch } from '../redux/hook';
import { createUser } from '../redux/feature/user/userSlice';
import Navbar from '../layouts/Navbar';


type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  email: string;
  password: string;
}

export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  
  const dispatch = useAppDispatch()

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    dispatch(createUser({email:data.email,password:data.password}))
  };

  return (
    <>
    
    <div {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input className="input input-bordered input-secondary w-full max-w-xs"
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })} />
            {errors.email && <p>{errors.email.message}</p>}
            <input className="input input-bordered input-secondary w-full max-w-xs"
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })} />
            {errors.password && <p>{errors.password.message}</p>}
            <input className="input input-bordered input-secondary w-full max-w-xs"
              id="password"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off" />
          </div>
          <button className="btn btn-active btn-accent">Create Account</button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          {/* <span className="w-full border-t" /> */}
        </div>
        {/* <div className="relative flex justify-center text-xs uppercase">
      <span className="bg-background px-2 text-muted-foreground">
        Or continue with
      </span>
    </div> */}
      </div>
      {/* <button
     
      type="button"
      className="flex items-center justify-between"
    >
      <p>Google</p>
      
    </button> */}
    </div></>
  );
}
