import React from 'react'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const PopOver = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    //Sets the "open" variable to a boolean value based on the achorEl, if anchorEl (which is <Popover>) is open, then "open" variable is true.
    const open = Boolean(anchorEl);

    //Functions
    const handlePopoverOpen = (event) => {
            setAnchorEl(event.currentTarget);
        };

    const handlePopoverClose = () => {
            setAnchorEl(null);
        };


    //Styles material ui
    const useStyles = makeStyles((theme) => ({
        popover: {
            pointerEvents: 'none',
        },
        paper: {
            padding: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    return (
        <div className="timerEffects">
            <div
            //Honestly don't know "aria" as well as I should, but it allows a connection between this <div> and the <popover> through id
                aria-owns={open ? 'mouse-over-popover' : undefined}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                12:34:56:78
            </div>

            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{paper: classes.paper}}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                onClose={handlePopoverClose}
            >
            <Typography>Insert Popover Text here</Typography>
        </Popover>
            
        </div>
    )
}

export default PopOver
