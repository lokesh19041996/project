import React, { useState } from 'react';
import axios from "axios"

const Createproduct = () => {
  const [productlist, setproductlist] = useState({
    name: "",
    image: "",
    qty: "",
    price: ""
  });

  let handleChange = (e) => {
    let newproductlist = { ...productlist }
    newproductlist[e.target.name] = e.target.value
    setproductlist(newproductlist)
  }

  let addProducts = () => {
    axios.post("http://localhost:3000/projects1", productlist).then((res) => {
      console.log(res.data)
      clearForm()
    })
  }
  let clearForm = () => {
    setproductlist({
      name: "",
      image: "",
      qty: "",
      price: ""
    });
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className='card'>
            <div className="card-header">Product List</div>
            <div className="card-body">
              <ul className='list-group'>
                <input type="text" placeholder='Product Name' className='list-group-item' name="name" value={productlist.name} onChange={(e) => { handleChange(e) }} /><br />
                <input type="text" placeholder='Image' className='list-group-item' name="image" value={productlist.image} onChange={(e) => { handleChange(e) }} /><br />
                <input type="number" placeholder='quantity' className='list-group-item' name="qty" value={productlist.qty} onChange={(e) => { handleChange(e) }} /><br />
                <input type="number" placeholder='price' className='list-group-item' name="price" value={productlist.price} onChange={(e) => { handleChange(e) }} />
              </ul>
              <button className='btn btn-danger my-3' onClick={addProducts}>Submit</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Createproduct;
