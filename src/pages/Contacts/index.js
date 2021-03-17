import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useContacts } from './useContacts'
import { ContactsTable } from './ContactTable'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(4),
        },
        header: {
            marginBottom: theme.spacing(3),
        },
    })
)

export const Contacts = () => {
    const classes = useStyles()
    const contacts = useContacts()

    return (
        <Container className={classes.root}>
            <Grid container className={classes.header}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h3" component="h1">
                        Contacts
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} container justify="flex-end">
                    <ToggleButtonGroup color="primary">
                        <ToggleButton value={1}>
                            <FormatListBulletedIcon />
                        </ToggleButton>
                        <ToggleButton value={2}>
                            <ViewModuleIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {(() => {
                    if (contacts.isLoading) {
                        return <CircularProgress />
                    }

                    if (contacts.isError) {
                        return <p>Error</p>
                    }

                    return <ContactsTable data={contacts.data} />
                })()}
            </Grid>
        </Container>
    )
}
