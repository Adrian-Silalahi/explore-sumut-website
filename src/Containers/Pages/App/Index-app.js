import Destinasi from '../Destinasi/Index-destinasi';
import Home from '../Home/Index-home';
import  Galeri  from '../Galeri/Index-galeri';
import  Tentang  from '../Tentang/Index-tentang.js';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Store } from '../../../Config/Redux/Index.js';
import Footer from '../Footer/Index-footer';


function App() {
  return (
    <Provider store={Store}>
      <Fragment>
        <Home />
        <Tentang/>
        <Destinasi />
        <Galeri />
        <Footer/>
      </Fragment>
    </Provider>
  );
}

export default App;
