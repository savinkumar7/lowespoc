import Hapi from 'hapi';
import 'babel-polyfill';
import renderer from './src/client/helpers/renderer';
import inert from 'inert';
import createStore from './src/client/helpers/createStore';
import {matchRoutes} from 'react-router-config';
import Routes from './src/client/Routes';

const bootupServer = async () =>{
    const server = new Hapi.Server({
        port:8000,
        host :'localhost'
    });

    await server.register(inert);

    // Home Route

    server.route({
        method: 'GET',
        path : '/{any*}',
        handler : (request,reply) =>{
            const store = createStore();
            const promises = matchRoutes(Routes, request.url.pathname).map(({route}) =>{
              return route.loadData ? route.loadData(store) : null ;
          });
          return Promise.all(promises).then(() =>{
            return renderer(request.url.pathname, store);
          });
        }
    });

    server.route(
        {
          method: 'GET',
          path: '/public/{param*}',
          options: {
            handler: {
              directory: {
                path: 'public'
              }
            },
          }
        });

    //start server

await server.start((err) =>{
    if(err){
        throw err;
    }
    console.log(`server running in ${server.info.uri}`);
})
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

bootupServer();