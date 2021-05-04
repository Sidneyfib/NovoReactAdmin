import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, ShowButton, ChipField } from 'react-admin';
import {useListStyles, useStyles } from '../theme';


/*const TitleField = props => {
    const classes = useStyles();
    return <TextField HeaderClassName={classes.header} {...props} />;
};*/




export const PostList = props =>{
    const classes = useStyles();
    const classes2 = useListStyles();
   return (
    <List classes={classes2.header} {...props} >
        <Datagrid Class={classes.price} >
            <TextField headerClassName={classes.price} source="id"/>
            <ReferenceField headerClassName={classes.price} label="user" source="userId" reference="users">
                <ChipField classes={classes.header} source="name"/>
            </ReferenceField>
            <TextField headerClassName={classes.price}  source="title"/>
            <TextField headerClassName={classes.price} source="body"/>
            <EditButton headerClassName={classes.price} Class={classes.price}/>
            <ShowButton headerClassName={classes.price} Class={classes.price}/>
        </Datagrid>
    </List> 
)};