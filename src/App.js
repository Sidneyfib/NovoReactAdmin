import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PeopleIcon from '@material-ui/icons/People';
import {UserEdit}  from './Users/UserEdit'
import {UserList} from './Users/UserList'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (

  <Admin dataProvider={dataProvider}>

    <Resource name="users" options={{label:'Usuários'}} list={UserList} edit={UserEdit} icon={PeopleIcon}/>


  </Admin>



);




export default App;