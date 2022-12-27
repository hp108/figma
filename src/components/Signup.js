import React from 'react'
import img1 from "./images/signin2.svg"
import './signup.css'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup() {

  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()
  const func=(signupdata)=>
  {
    axios.post('/user/register',signupdata)
        .then(response=>{
            alert(response.data.message)
            if(response.data.message==="new user created")
            {
                navigate('/signin')
            }
        })
        .catch(error=>alert("something went wrong in creating user"))
  }

  return (
        <div className='container-fluid p-3' >
            <div className="row container-fluid">
            <div className="col-lg-7 col-md-12 col-sm-12 ps-0 text-start">
            <form className='frm rounded border-dark p-5 pb-4 pt-3'onSubmit={handleSubmit(func)} >
                <div className="display-6">Welcome!</div>
                <div className="mt-3" style={{fontSize:"2rem"}}>Sign Up</div>
                <p>Lorem ipsum dolor sit.</p>
            <div className="form-group ">
            <div className='divv'><label htmlFor="InputEmail1">Email</label></div>
            <input  type="email" className="form-control ipclass mt-1" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" {...register("email",{required:true})}  />
            {errors.email?.type === "required" && <small className='text-danger' >*email is required</small>}
            </div>
            <div className="form-group  mt-2">
            <div className='divv'><label htmlFor="InputEmail2">User name</label></div>
            <input  type="text" className="form-control ipclass mt-1" id="InputEmail2"  placeholder="Enter your user name" {...register("username",{required:true})}  />
            {errors.username?.type === "required" && <small className='text-danger' >*user name is required</small>}
            </div>
            <div className="form-group ">
            <div className='divv'><label htmlFor="InputPassword1">Password</label></div>
            <input  type="password" className="form-control ipclass mt-1" id="InputPassword1" placeholder="Enter your password" {...register("password",{required:true})}  />
            {errors.password?.type === "required" && <small className='text-danger' >*password is required</small>}
            </div>
            <div className="form-group mt-2">
            <div className='divv'><label htmlFor="InputPassword2">Password</label></div>
            <input  type="password" className="form-control ipclass mt-1" id="InputPassword2" placeholder="confirm your password" {...register("cpassword",{required:true})}  />
            {errors.cpassword?.type === "required" && <small className='text-danger' >*password is required</small>}
            </div>
            <div className="row mt-2">
    <div className='col-lg-7'>
  </div>
  </div>
  <div ><button type="submit" className="btn btn-dark mt-3" style={{width:"100%"}}>Register</button></div>
  <div className="mt-3 text-center">
   <div><span className='fpp '>Already have an account?</span> <span> <Link className='link' to='/signin'>Login</Link> </span></div>
    </div>
</form>
            </div>
            <div className=" container col-lg-5 ps-0 ">
                <div className="df my-auto">
            <div className='align-self-center  d-lg-block d-none '><img src={img1} alt="OOPs it might be deleted" style={{width:"90%"}}/></div>
            </div>
            </div>
        
            </div>
        </div>
  )
}

export default Signup;