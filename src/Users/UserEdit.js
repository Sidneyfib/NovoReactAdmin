import * as React from "react";
import { Edit,SimpleForm, TextInput } from 'react-admin';


export const UserEdit = props =>(

    <Edit {...props} title={"Edidando usuário"}>

        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
            <TextInput source="username"/>
            <TextInput source="email"/>
            <TextInput source="website"/>
    
        </SimpleForm>

    </Edit>

);
