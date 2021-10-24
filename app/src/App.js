import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import { Layout } from 'antd';
import './App.less';
import './less/main.less'

const { Footer } = Layout;


const Booking = React.lazy(() => import('./views/Booking/Booking'));
const DefaultHeader = React.lazy(() => import('./views/DefaultHeader'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <div className='layoutAntd'>

          <DefaultHeader />
          <Switch>
            <Route path='/booking'>
              <Booking />
            </Route>
          </Switch>

          {/* <Content className='contentAntd'>
          </Content> */}
          <Footer className='footerAntd'>
            Footer
          </Footer>
        </div >
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
