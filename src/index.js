import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import netlifyIdentity from 'netlify-identity-widget';
import { CookiesProvider } from 'react-cookie';

import ThemePickerProvider from 'app/ThemePickerProvider';
import Home from 'app/Home';

import './style/main.less';

// import Loadable from 'react-loadable';
//
//
// const LoaderGraphic = (props) =>{
//   if (props.error) {
//     return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
//   } else {
//     return <div style={{width:'100%', textAlign:'center', marginTop:'20px',}}><CircularProgress  /></div>;
//   }
// }

// const LoadableHome = Loadable({
//   loader: () => import('./app/Home.jsx'),
//   loading: LoaderGraphic
// });

window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <Route path={['/', '/career', '/comedy', '/commerce']}>
        <CookiesProvider>
          <ThemePickerProvider>
            <Home />
          </ThemePickerProvider>
        </CookiesProvider>
      </Route>
    </BrowserRouter>
    , rootElement);
} else {
  ReactDOM.render(
    <BrowserRouter>
      <Route path={['/', '/career', '/comedy', '/commerce']}>
        <CookiesProvider>
          <ThemePickerProvider>
            <Home />
          </ThemePickerProvider>
        </CookiesProvider>
      </Route>
    </BrowserRouter>
    , rootElement);
}
