import React from 'react'

const Hello = () => {
    //With JSX
  //  return(
    //<div>
      //  <h1> Sow Abdul</h1>
    //</div>
    //)
//}

//Without JSX
return React.createElement('div', null, React.createElement('h1', null, 'Hello Dybala'))
}

export default Hello