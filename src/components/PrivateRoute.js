import {Outlet,Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
function PrivateRoute() {
    let {issuccess}=useSelector(state=>state.user)
  return (
    issuccess?<Outlet/>:<Navigate to='/signin'/>
  )
}

export default PrivateRoute