import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function NavButton({nomeBotao, itens}) {
  

    const [menu, setMenu] = useState(null);  
    const open = Boolean(menu);
    
    const handleClick = (event) => {
        setMenu(event.currentTarget);
    };
    const handleClose = () => {    
        setMenu(null);
    };
  
    return (
      <nav>
        <Button
           variant="Contained"
          onClick={handleClick}  
        > {nomeBotao}<ArrowDropDownIcon/></Button>    
               <Menu          
          anchorEl={menu}
          open={open}
          onClose={handleClose}         
        >
        {itens.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}><Link className="fonte-link" to={item.url}>{item.nome}</Link></MenuItem>
          ))}
        </Menu>
      </nav>
    );
}

