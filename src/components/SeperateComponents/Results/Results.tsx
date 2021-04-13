import React, { useEffect } from 'react'

import { useSelector, RootStateOrAny } from 'react-redux'
function Results() {
  const obj = useSelector((state: RootStateOrAny) => state.obj)
  useEffect(() => {
    console.log(obj)
  }, [obj])
  return (<>

    <div className="d-flex align-items-center justify-content-center mt-5">
      {
        obj.uname === undefined ?
          <p>Submit the form to see results here</p> :
          <React.Fragment>
            <p>Form results are as follows</p> :

            <ul>
              <li>{obj.uname}</li>
              <li>{obj.pass}</li>
              <li>{obj.amount}</li>
              <li>{obj.cascader}</li>
              <li>{obj.dob}</li>
              <li>{obj.gender}</li>
            </ul>
          </React.Fragment>

      }
    </div>

  </>)
}
export default Results