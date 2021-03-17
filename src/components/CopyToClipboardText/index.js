import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useCopyToClipboard } from 'react-use'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            cursor: 'pointer',
        },
        icon: {
            marginRight: theme.spacing(1),
        },
    })
)

const STATUS_COPY = {
    COPY: 'copy',
    COPIED: 'copied',
}

const TITLE_BY_STATUS = {
    [STATUS_COPY.COPY]: 'Copy',
    [STATUS_COPY.COPIED]: 'Copied',
}

export const CopyToClipboardText = ({ text }) => {
    const classes = useStyles()
    const [, copyToClipboard] = useCopyToClipboard()
    const [statusCopy, setStatusCopy] = useState('copy')

    const onClickCopy = () => {
        copyToClipboard(text)
        setStatusCopy(STATUS_COPY.COPIED)
    }

    const onClickAway = () => {
        setStatusCopy(STATUS_COPY.COPY)
    }

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top" arrow>
                <Box
                    display="flex"
                    alignItems="center"
                    className={classes.root}
                    onClick={onClickCopy}
                >
                    <FileCopyOutlinedIcon
                        className={classes.icon}
                        color="primary"
                        fontSize="small"
                    />
                    {text}
                </Box>
            </Tooltip>
        </ClickAwayListener>
    )
}

CopyToClipboardText.propTypes = {
    text: PropTypes.string.isRequired,
}
