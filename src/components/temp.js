<div className="row ">
  <div className="col-lg-6 m-3">
    <h2 style={{ textAlign: "left" }}>Your Logo</h2>
    <div className='com '>
      <div className=' w-100 '  >
        <form className='frm mt-5 pt-4 mx-auto bg-info ' >
          <h3>Welcome !</h3>
          <h3 className='signin'> Sign in</h3>
          <div>
            <label htmlFor="name" className='form-control ' >User name</label>
            <input id='name' type="text" />
          </div>
          <div>
            <label htmlFor="pw" className='form-control'>Password</label>
            <input id='pw' type="password" />
          </div>
          <div className='mt-2' >
            <input type="checkbox" label="Check me out" />
            Remember Me
          </div>
          <div>
            <button className="submit mt-2 mb-3 bg-dark  btn">Login </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className='image ' >
      <img className='w-75' src={img1} alt="OOPs! it might be deleted" />
    </div>
  </div>
  </div>