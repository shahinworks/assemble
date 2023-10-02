import React from 'react';
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ArrowRight, Calendar, Cart, Airplane , Balloon, Speedometer} from 'react-bootstrap-icons';


function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            // if (level === 0) 

              // return {
              //   color: disabled ? '#FDD2BF' : '#9B5151',
              //   backgroundColor: active ? '#ffffff' : '#A5A2A2',
              // };

              return {
                color: disabled ? '#f5d9ff' : '#d359ff',
                backgroundColor: active ? '#eecef9' : undefined,
              };
          },
        }}
      >  
        <MenuItem component={<Link to="/" />} active icon={<Speedometer color='#d359ff' size={16} />}>
          Dashboard
        </MenuItem>
        <SubMenu active label="Category" icon={<Balloon color='#d359ff' size={16} />}>
          <MenuItem component={<Link to="/admin/CreateCategory" />} > Create Category</MenuItem>
          <MenuItem component={<Link to="/admin/ListCategory" />} > List Category</MenuItem>
        </SubMenu>
        <SubMenu active label="Product" icon={<Balloon color='#d359ff' size={16} />}>
          <MenuItem component={<Link to="/admin/CreateProduct" />} > Create Product </MenuItem>
          <MenuItem component={<Link to="/admin/ListProduct" />} > List Product </MenuItem>
        </SubMenu>
        <SubMenu active label="SubCategory" icon={<Balloon color='#d359ff' size={16} />}>
          <MenuItem component={<Link to="/admin/CreateSubCategory" />} >Create SubCategory </MenuItem>
          <MenuItem component={<Link to="/admin/ListSubCategory" />} >List SubCategory </MenuItem>
        </SubMenu>
        <SubMenu active label="Cart" icon={<Cart color='#d359ff' size={16} />}>
          <MenuItem component={<Link to="/CreateCart" />} >Create Cart</MenuItem>
          <MenuItem component={<Link to="/ListCart" />} >List Cart</MenuItem>
        </SubMenu>
        <MenuItem active icon={<Cart color='#d359ff' size={16}  />}>
          Cart
        </MenuItem>
        
        <MenuItem active icon={<Airplane color='#d359ff' size={16}  />}> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
  )
}

export default Dashboard;
