import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PeopleIcon from '@material-ui/icons/People';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import {UserEdit}  from './Users/UserEdit';
import {UserList} from './Users/UserList';
import {UserShow} from './Users/UserShow';
import {PostList} from './Posts/PostList';
import {PostEdit} from './Posts/PostEdit';
import {PostShow} from './Posts/PostShow';
import {theme} from './theme';
import MyLayout from './MyLayout';









const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  

  <Admin layout={MyLayout} theme={theme} dataProvider={dataProvider} >
   
    <Resource  name="users" options={{label:'Usuários'}}list={UserList} show={UserShow} edit={UserEdit}  icon={PeopleIcon}/>
    <Resource name="posts" options={{label:'Postagens'}} list={PostList} show={PostShow} edit={PostEdit}  icon={PostAddOutlinedIcon}/>
  
  </Admin>



);




export default App;