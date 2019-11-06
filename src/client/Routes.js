import React from 'react';
//import {Route} from 'react-router-dom';
import Home from './component/Home';
import Products from './component/Products'

// export default () =>{
//     return (
//         <div>
//             <Route exact path ="/" component ={Home} />
//             <Route path ="/users" component ={UsersList} />
//         </div>
//     )
// }

export default [
    {
            path :'/',
            component : Products,
            exact : true
    },
]