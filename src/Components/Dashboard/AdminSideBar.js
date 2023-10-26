import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Button } from 'react-bootstrap';
import { ArrowRight, Calendar, Cart, Airplane , Balloon, Speedometer, List} from 'react-bootstrap-icons';

function AdminSideBar() {

  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(window.matchMedia('(max-width: 800px)').matches);

  return (<>
    <div style={{ display: 'flex', height: '100%', backgroundColor: "black" }}>
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} customBreakPoint="800px" onBreakPoint={setBroken}>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
                return {
                  color: disabled ? 'grey' : 'black',
                  backgroundColor: active ? 'white' : "whitesmoke",
                };
            },
          }}
        >  
          <MenuItem component={<Link to="/" />} active icon={<Speedometer color='black' size={20} />}>
            Home 
          </MenuItem>
          <SubMenu active label="User" icon={<Balloon color='black' size={20} />}>
            <MenuItem component={<Link to="/admin/User" />} >User</MenuItem>
          </SubMenu>
          <SubMenu active label="Category" icon={<Balloon color='black' size={20} />}>
          <MenuItem component={<Link to="/admin/CreateCategory" />} > Create Category</MenuItem>
          <MenuItem component={<Link to="/admin/ListCategory" />} > List Category</MenuItem>
          </SubMenu>
          <SubMenu active label="Product" icon={<Balloon color='black' size={20} />}>
          <MenuItem component={<Link to="/admin/CreateProduct" />} > Create Product </MenuItem>
          <MenuItem component={<Link to="/admin/ListProduct" />} > List Product </MenuItem>
          <MenuItem component={<Link to="/admin/UpdateProduct" />} >Update Product </MenuItem>
          </SubMenu>
          {/* <SubMenu active label="SubCategory" icon={<Balloon color='black' size={20} />}>
          <MenuItem component={<Link to="/admin/CreateSubCategory" />} >Create SubCategory </MenuItem>
          <MenuItem component={<Link to="/admin/ListSubCategory" />} >List SubCategory </MenuItem>
          </SubMenu> */}
          <SubMenu active label="Color" icon={<Balloon color='black' size={20} />}>
          <MenuItem component={<Link to="/admin/CreateColor" />} >Create Color </MenuItem>
          <MenuItem component={<Link to="/admin/ListColor" />} >List Color </MenuItem>
          </SubMenu>
          <SubMenu active label="Gender" icon={<Balloon color='black' size={20} />}>
          <MenuItem component={<Link to="/admin/CreateGender" />} >Create Gender </MenuItem>
          <MenuItem component={<Link to="/admin/ListGender" />} >List Gender </MenuItem>
          </SubMenu>
          <SubMenu active label="Size" icon={<Balloon color='black' size={20} />}>
          <MenuItem component={<Link to="/admin/CreateSize" />} >Create Size </MenuItem>
          <MenuItem component={<Link to="/admin/ListSize" />} >List Size </MenuItem>
          </SubMenu>
          <SubMenu active label="Slider" icon={<Balloon color='black' size={20} />}>
          <MenuItem component={<Link to="/admin/CreateSlider" />} >Add Slider</MenuItem>
          <MenuItem component={<Link to="/admin/ListSlider" />} >List Slider</MenuItem>
          </SubMenu>
          <SubMenu active label="Order" icon={<Balloon color='black' size={20} />}>
          <MenuItem component={<Link to="/admin/ListOrder" />} >List Order</MenuItem>
          {/* <MenuItem component={<Link to="/admin/ListSlider" />} >List Slider</MenuItem> */}
          </SubMenu>
          {/* <SubMenu active label="Cart" icon={<Cart color='black' size={20} />}>
          <MenuItem component={<Link to="/CreateCart" />} >Create Cart</MenuItem>
          <MenuItem component={<Link to="/ListCart" />} >List Cart</MenuItem>
          </SubMenu>
          <MenuItem active icon={<Cart color='black' size={20}  />}>
          Cart
          </MenuItem> */}
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          {broken && (
            <Button className="btn btn-dark " onClick={() => setToggled(!toggled)}>
             <List size={20} />
            </Button>
          )}
        </div>
      </main>
    </div>
  </>);
}

export default AdminSideBar;
