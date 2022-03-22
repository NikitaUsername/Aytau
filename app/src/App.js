import { HashRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import { Layout } from 'antd';
import './App.less';
import BookingComplete from "./views/Booking/BookingComplete";

const { Footer, Content } = Layout;


const Booking = React.lazy(() => import('./views/Booking/Booking'));
const DefaultHeader = React.lazy(() => import('./views/DefaultHeader'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <div className='layoutAntd'>

          <DefaultHeader />
          <Content className='contentAntd'>

            <Switch>
              <Route exact path='/booking'>
                <Booking />
              </Route>
              <Route path='/booking/complete'>
                <BookingComplete />
              </Route>
            </Switch>
          </Content>
          <Footer className='container-xxl footerAntd' style={{ backgroundColor: '#1e1e1e' }}>
            Footer
          </Footer>
        </div >
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
