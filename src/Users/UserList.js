import * as React from 'react';
import { List, Datagrid, EmailField, TextField, UrlField, EditButton, ShowButton, ChipField,
        ExportButton} from 'react-admin';
import { useListStyles } from '../theme';
import {UserFilter} from '../filters';






export const UserList = props => {

    const classes = useListStyles();
    return (
        <List filters={<UserFilter/>} {...props} >
  
                <Datagrid >
                    <TextField source="id" />
                    <ChipField className={classes.actions} source="name" />
                    <ChipField className={classes.price} source="username" />
                    <EmailField className={classes.header}  source="email" />
                    <UrlField className={classes.header}  source="website"/>
                    <EditButton className={classes.header} />
                    <ShowButton className={classes.header} />
                    <ExportButton className={classes.header}/>
                    
                </Datagrid>
          
        </List>
    )};

