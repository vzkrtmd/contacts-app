import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Contacts } from './pages/Contacts'

export const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Contacts />
        </React.Fragment>
    )
}
