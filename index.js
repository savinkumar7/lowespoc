import Hapi from 'hapi';
import 'babel-polyfill';
import renderer from './src/client/helpers/renderer';
import inert from 'inert';
import createStore from './src/client/helpers/createStore';

const bootupServer = async () =>{
    const server = new Hapi.Server({
        port:8000,
        host :'localhost'
    });

    await server.register(inert);

    // Home Route

    server.route({
        method: 'GET',
        path : '/',
        handler : (request,reply) =>{
            const store = createStore();
            return renderer(request, store);
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