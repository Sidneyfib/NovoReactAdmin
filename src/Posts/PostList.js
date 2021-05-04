import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton,ShowButton, ChipField, ExportButton} from 'react-admin';
import { useListStyles } from '../theme';
import {PostFilter} from '../filters';



export const PostList = props =>{
    const classes = useListStyles();
    
   return (
    <List filters={<PostFilter/>} {...props} >
        <Datagrid Class={classes.header}>
            <TextField  source="id"/>
            <ReferenceField  label="user" source="userId" reference="users">
                <ChipField className={classes.actions} source="name"/>
            </ReferenceField>
            <TextField source="title"/>
            <TextField  source="body"/>
            <EditButton className={classes.header} />
            <ShowButton className={classes.header} />
            <ExportButton className={classes.header}/>
        </Datagrid>
    </List> 
)};