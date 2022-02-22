import React, { useState } from 'react'
import {Singleshop} from './Singleshop'
import { Form,Button,Dropdown,DropdownButton,ButtonGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {addShop,filter } from '../actions/index'


export const Shops = ({viewDetails}) => {
  const mystate = useSelector((state)=>state.editList)
  const dispatch = useDispatch()
  const [shop_name,set_shop_name] = useState("");
  const [shop_area,set_shop_area] = useState("");
  const [category,set_category] = useState("");
  const [DOOpen,set_DOOpen] = useState("");
  const [DOClosing,set_DOClosing] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!shop_name||!shop_area||!category||!DOOpen||category=='None'||DOOpen=='None'){
      alert("Empty fields and None areas except closing date are not allowed")
    }
    else{
    dispatch(addShop(shop_name,shop_area,category,DOOpen,DOClosing));
    }
  }
  return (

    <>
    <h3 className='text-center my-3'>Add a Shop</h3>
    <div className='container'>

      <Form className=' my-5'>
      <Form.Group className="mb-3">
        <Form.Label htmlFor='shop_name'>Enter the name of your shop</Form.Label>
        <Form.Control type="text" value={shop_name} onChange={(e)=>set_shop_name(e.target.value)}/>
      </Form.Group>
<div className='d-flex'>
      <Form.Group className="mb-3 mx-3" style={{width:'35%'}}>
      <Form.Label htmlFor="shop_area">Select Area</Form.Label>
      <Form.Select value={shop_area} onChange={(e)=>set_shop_area(e.target.value)}>
        <option>None</option>
        <option>Thane</option>
        <option>Pune</option>
        <option>Mumbai Suburban</option>
        <option>Nashik</option>
        <option>Nagpur</option>
        <option>Ahmednagar</option>
        <option>Solapur</option>
      </Form.Select>
    </Form.Group>
    
      <Form.Group className="mb-3" style={{width:'35%'}}>
      <Form.Label htmlFor="category">Select Category</Form.Label>
      <Form.Select value={category} onChange={(e)=>set_category(e.target.value)}>
        <option>None</option>
        <option>Grocery</option>
        <option>Butcher</option>
        <option>Baker</option>
        <option>Chemist</option>
        <option>Stationary shop</option>
      </Form.Select>
    </Form.Group>
    </div>
    <div>
      <div className='container d-flex my-3'>
          
                    <div className="col-md-4 me-3">
                        <Form.Group>
                            <Form.Label htmlFor='DOOpen'>Select Opening Date</Form.Label>
                            <Form.Control type="date" value={DOOpen} onChange={(e)=>set_DOOpen(e.target.value)} placeholder="Date of Opening" />
                        </Form.Group>
                    </div>
        
            
                    <div className="col-md-4">           
                        <Form.Group>
                            <Form.Label htmlFor='DOClosing'>Select Closing Date</Form.Label>
                            <Form.Control type="date" value={DOClosing} onChange={(e)=>set_DOClosing(e.target.value)} placeholder="Date of Closing" />
                        </Form.Group>
                    </div>
               
            
            </div>
            </div>
      <Button variant="primary" type="submit" onClick={submit}>
        Submit
      </Button>
    </Form>
    <h3 className='text-center my-3'> Shop List</h3>
<div className='container my-5'>
    <DropdownButton as={ButtonGroup} title="Filter" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('All'))}}>All</Dropdown.Item>
    <DropdownButton as={ButtonGroup} title="Area" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Thane'))}}>Thane</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Pune'))}}>Pune</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Mumbai Suburban'))}}>Mumbai Suburban</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Nashik'))}}>Nashik</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Nagpur'))}}>Nagpur</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Ahmednagar'))}}>Ahmednagar</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Solapur'))}}>Solapur</Dropdown.Item>
    </DropdownButton>
    <DropdownButton as={ButtonGroup} title="Category" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Grocery'))}}>Grocery</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Butcher'))}}>Butcher</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Baker'))}}>Baker</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Chemist'))}}>Chemist</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Stationary Shop'))}}>Stationary Shop</Dropdown.Item>
    </DropdownButton>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Open'))}}>Open</Dropdown.Item>
    <Dropdown.Item eventKey="2" onClick={()=>{dispatch(filter('Closed'))}}>Closed</Dropdown.Item>
  </DropdownButton>
  </div>

{mystate.map((shop) => {
          return <Singleshop key={shop.shop_name} shop={shop} viewDetails={viewDetails} />
        })}


      </div></>
  )
}
