import * as React from "react";
import {Show, SimpleShowLayout, TextField,ReferenceField } from 'react-admin';



export const PostShow = props =>(

    <Show {...props} title="Detalhes">
        <SimpleShowLayout>
            
            <TextField source="id"/>
            <ReferenceField label="user" source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="title"/>
            <TextField source="body"/>

        </SimpleShowLayout>
    </Show>
);