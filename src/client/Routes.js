import React from 'react';
//import {Route} from 'react-router-dom';
import App ,{loadData} from './component/App';

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
        loadData,
            path :'/',
            component : App,
            exact : true
    },
]