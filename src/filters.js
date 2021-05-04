import * as React from "react";
import {Filter, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import { useListStyles } from './theme'






export const PostFilter = (props) =>{
    const classes = useListStyles();

    return(
    <Filter {...props}>
        <TextInput className={classes.header} label="Filtro por Título" source="q" alwaysOn/>
        <ReferenceInput label="user" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </Filter>
)};


export const UserFilter = (props) =>{
    const classes = useListStyles();

    return(
    <Filter  {...props}>
        <TextInput className={classes.header} label="Filtro por Nome" source="q" alwaysOn/>
        <ReferenceInput label="user" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)};