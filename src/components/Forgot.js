import React from 'react'
import img1 from "./images/signin2.svg"
import './forgot.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Forgot() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const func = (data) => {
    console.log(data)
  }



  return (
    <div className='container-fluid p-3' >
      <div className='text-start mb-5'><h3>Your Logo</h3></div>
      <div className="row container-fluid">
        <div className="col-lg-7 ps-0 text-start">
          <form className='frm rounded border-dark p-5 pb-4 pt-3' onSubmit={handleSubmit(func)} >
            <div className="display-6">Welcome!</div>
            <div className="mt-3" style={{ fontSize: "2rem" }}>Sign Up</div>
            <p>Lorem ipsum dolor sit.</p>
            <div className="form-group  mt-3">
              <div className='divv mb-2'><label htmlFor="InputEmail2">User name</label></div>
              <input type="text" className="form-control ipclass mt-1" id="InputEmail2" placeholder="Enter your user name" {...register("username", { required: true })} />
              {errors.username?.type === "required" && <small className='text-danger' >*user name is required</small>}
            </div>
            <div ><button type="submit" className="btn btn-dark mt-3" style={{ width: "100%" }}>Login</button></div>
            <div className="mt-3 text-center">
              <div><span className='fpp '>Don't have an account?<span>      </span></span><Link className='link' to='/' >Sign in</Link></div>
            </div>
          </form>
        </div>
        <div className=" container col-lg-5 col-mg-2 ps-0 ">
          <div className="df my-auto">
            <div className='align-self-center d-lg-block d-mg-block d-none'><img src={img1} alt="OOPs it might be deleted" style={{ width: "90%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgot;