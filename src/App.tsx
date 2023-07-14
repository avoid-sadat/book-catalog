import { useEffect } from "react"
import MainLayout from "./layouts/MainLayouts"
import { useAppDispatch } from "./redux/hook"
import { setLoading, setUser } from "./redux/feature/user/userSlice"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(setLoading(true))
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch(setUser(user.email!))
        dispatch(setLoading(false))
      }else{
        dispatch(setLoading(false))
      }
    })
  },[dispatch])

  return (
    <div>
    <MainLayout />
  </div>
  )
}

export default App
