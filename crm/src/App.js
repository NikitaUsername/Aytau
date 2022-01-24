import './App.less';
import './less/main.less'
import { Menu, Table, Layout, } from 'antd';
import { observer } from 'mobx-react';
import { useStores } from './useStores';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import Requests from './modules/Requests/Requests';
import Bookings from './modules/Bookings/Bookings';
import Main from './modules/Main';
import Login from './modules/Auth/Login';
import { Fragment } from 'react';
import { useEffect } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


const { Content, Sider } = Layout;

const App = (props) => {
  const store = useStores().MainStore;
  const location = useLocation();

  useEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <Fragment>
      {!store.isLoading &&
        <Switch>
          <PublicRoute
            path="/login"
            isAuthenticated={store.isAuth}
          >
            <Login path='/login' />
          </PublicRoute>
          <PrivateRoute
            path="/"
            isAuthenticated={store.isAuth}
          >
            <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible >
                <Menu
                  theme="dark"
                  mode="inline"
                  selectedKeys={[location.pathname]}
                >
                  <Menu.Item key="/" icon={<Link to={'/'}> <i className="fa fa-home" aria-hidden="true"></i></Link>}>
                    Главная
                  </Menu.Item>
                  <Menu.Item key="/requests" icon={<Link to={'/requests'}><i className="fa fa-table" aria-hidden="true"></i></Link>}>
                    Заявки
                  </Menu.Item>
                  <Menu.Item key="/bookings" icon={<Link to={'/bookings'}><i className="fa fa-table" aria-hidden="true"></i></Link>}>
                    Бронирования
                  </Menu.Item>
                </Menu>
              </Sider>

              <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                  <Switch>
                    <Route exact={true} path='/'>
                      <Main />
                    </Route>
                    <Route path='/requests'>
                      <Requests />
                    </Route>
                    <Route path='/bookings'>
                      <Bookings />
                    </Route>
                    <Route render={() => <Redirect to="/" />} />
                  </Switch>
                </Content>
              </Layout>
            </Layout>

          </PrivateRoute>
        </Switch>
      }
    </Fragment >
  );
}

export default observer(App);
