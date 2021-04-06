import {useEffect} from 'react'

import { useSelector, RootStateOrAny } from 'react-redux'
function Footer1() {
    const obj = useSelector((state: RootStateOrAny) => state.obj)
    useEffect(()=>{
      console.log(obj)
    },[obj])
    return (<>
        {obj===null || obj===undefined  ? '' : 
        <>
        {obj.uname}
        {obj.pass}
        {obj.amount}
        {obj.cascader}
        {obj.dob}
        {obj.gender}

        </>
        
        }
    </>)
}
export default Footer1