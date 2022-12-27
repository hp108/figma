import React from 'react'
import img1 from "./images/signin2.svg"
import './Signin.css'
import {userlogin} from '../Slices/Userslice'
import { useForm } from 'react-hook-form'
import {Link,Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

function Signin() {
  const {issuccess}=useSelector(state=>state.user)
  let dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const func=(data)=>
  {
      dispatch(userlogin(data))
  }
  return (
    <>
    {issuccess?<Navigate to='/dashboard'/>:
    <div className='container p-3' >
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12 text-start">
          <form className='frm rounded border-dark p-5 pb-4 pt-3' onSubmit={handleSubmit(func)}>
            <div className="display-6">Welcome!</div>
            <div className="mt-3" style={{ fontSize: "2rem" }}>Sign in</div>
            <p>Lorem ipsum dolor sit.</p>
            <div className="form-group mt-2 ">
            <div className='divv'><label htmlFor="username">User name</label></div>
            <input type="text" className="form-control ipclass mt-2" id="username" placeholder="Enter your user name" {...register("username", { required: true })} />
            </div>
            {errors.username?.type === "required" && <small className='text-danger' >*user name is required</small>}
            <div className='divv'><label htmlFor="InputPassword2">Password</label></div>
            <input type="password" className="form-control ipclass mt-2" {...register("password", { required: true })} id="InputPassword2" placeholder="confirm your password" />
            {errors.username?.type === "required" && <small className='text-danger' >*password is required</small>}
            <div className="row mt-2">
              <div className='col-lg-7'>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input ipclass" id="exampleCheck1" />
                  <small className="form-check-label" htmlFor="exampleCheck1">Remember Me</small>
                </div></div>
                <div className='col fp mt-2'> <Link className='link' to='/forgot'>Forgot Password</Link></div>
            </div>
            <div ><button type="submit" className="btn btn-dark mt-3" style={{ width: "100%" }}>Login</button></div>
            <div className="mt-3 text-center">
              <div><span className='fpp '>Don't have an account?</span> <Link className='link' to='/'>Register</Link></div>
            </div>
          </form>
        </div>
        <div className=" container col-lg-5 col-md-2 ps-0 ">
          <div className="df my-auto  ">
            <div className='align-self-center d-lg-block d-none'><img src={img1} alt="OOPs it might be deleted" style={{ width: "90%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  }
  </>
  )
}

export default Signin;