import React from 'react'
import {Button,Form} from 'react-bootstrap'
import {useDispatch } from 'react-redux'
import {remShop } from '../actions/index'


export const Singleshop = ({shop,viewDetails}) => {
  const dispatch =useDispatch()
  return (
    <div className='container my-3 d-flex' style={{justifyContent:'flex-end'}}>
     <div style={{width:"75%"}}>
        <h4>
        {shop.shop_name}
      </h4>
      <p style={{fontColor:'#bdbdbd'}}>
        Area:<strong>{shop.shop_area}</strong><br /> Category:<strong>{shop.category}</strong><br />  Opening Date:<strong>{shop.opening_date}</strong> <br /> Closing Date:<strong>{shop.closing_date}</strong>
      </p>
      </div>
      {/* <Button className='mx-3' size='sm' variant="outline-primary" onClick={()=>viewDetails(shop)}>View Details</Button>{' '} */}

      <Button className='mx-3' size='sm' variant="outline-danger" style={{float:'right'}} onClick={()=>dispatch(remShop(shop))}>Remove</Button>
      </div>
      
  )
}

