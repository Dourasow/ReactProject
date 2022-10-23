import React from 'react'

function FunctionClick() {

    function clickHadler()
    {
        console.log('Button click')
    }
  return (
    <div>
        <button onClick={clickHadler}>Click</button>
    </div>
  )
}

export default FunctionClick