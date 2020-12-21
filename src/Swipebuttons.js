import React from 'react'
import './Swipebuttons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


function Swipebuttons() {
    return (
        <div className="swipebuttons">
            <IconButton className="swipebuttons__replay">
            <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebuttons__close">
            <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebuttons__star">
            <StarIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebuttons__favorite">
            <FavoriteBorderIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebuttons__flash">
            <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Swipebuttons
