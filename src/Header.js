import React from 'react'
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link ,useHistory} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Header({backButton}) {
    const history =useHistory();
    return (
        <div className="header">
         {backButton ?(
             <IconButton onClick = {() => history.replace(backButton)}>
            <ArrowBackIcon fontSize="large" className="header__arrowback"/> 
            </IconButton>
         ) :(<IconButton>
         <AccountCircleIcon className="header__icon" fontSize="large"/> 
         </IconButton> ) }   
                  
         <Link to="/">
         <img className="header__logo" src="data:image/png;base64,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" 
         alt="Tinder logo"/>
         </Link> 
         <Link to="/chats">
         <IconButton >
         <ForumIcon className="header__icon" fontSize="large"/>
         </IconButton>
         </Link>        
        </div>
    )
}

export default Header
