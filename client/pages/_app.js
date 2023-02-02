import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
    return (
        <div>
            <Header currentUser = {currentUser}/>
            <Component {...pageProps} /> 
        </div>
    );
};

AppComponent.getInitialprops = async (appContext) => {
    const client = buildClient(appContext.ctx);
    const { data } = await client.get('/api/users/currentuser');

    let pageProps = {};
    if(appContext.Component.getInitialprops){
        pageProps = await appContext.Component.getInitialprops(appContext.ctx)
    }

    return {
        pageProps,
        ...data
    }
}

export default AppComponent