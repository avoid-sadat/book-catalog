/* eslint-disable @typescript-eslint/no-unused-vars */

import  { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/feature/user/userSlice';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const {user,isLoading} = useAppSelector((state)=>state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.from?.pathname || '/'

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    dispatch(loginUser({email:data.email,password:data.password}))
  };

  useEffect(()=>{
    if(user.email && !isLoading)
    navigate(from,{replace:true})
  },[user.email,isLoading,navigate,from])
  return (
    <>

    <div  {...props}>
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
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input className="input input-bordered input-secondary w-full max-w-xs"
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button className="btn btn-active btn-accent">Login</button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
         
        </div>

      </div>

    </div>
   
    </>
  )
}


