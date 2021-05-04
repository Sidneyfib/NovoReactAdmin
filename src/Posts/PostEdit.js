import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';




export const PostEdit = props =>(

    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput label="user" source="userId" reference="users">
                <SelectInput source="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Edit>
);