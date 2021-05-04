import * as React from 'react';
import { List, Datagrid, EmailField, TextField, UrlField, EditButton, ShowButton, ChipField } from 'react-admin';

export const UserList = props => (
        <List  {...props} >
                   
                <Datagrid>
                    <TextField source="id" />
                    <ChipField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <UrlField source="website"/>
                    <EditButton/>
                    <ShowButton/>
                </Datagrid>
          
        </List>
    );

