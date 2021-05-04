import * as React from "react";
import { Show, SimpleShowLayout, TextField, EmailField, UrlField} from 'react-admin';



export const UserShow = props =>(

    <Show  title="Detalhes" {...props}>

        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <UrlField source="website"/>
            
        </SimpleShowLayout>

    </Show>

);