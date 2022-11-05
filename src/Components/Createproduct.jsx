import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Createproduct = () => {
  const [productlist, setproductlist] = useState({
    name: "",
    image: "",
    qty: "",
    price: ""
  });
  const navigate = useNavigate();


  let handleChange = (e) => {
    let newproductlist = { ...productlist }
    newproductlist[e.target.name] = e.target.value
    setproductlist(newproductlist)
  }

  let changeImage=(event)=>{
    let imageFile = event.target.files[0];
    console.log(event);
    let reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load", ()=>{
      if(reader.result){
        setproductlist({...productlist, image:reader.result})
      }
    })
  }

  let addProducts = () => {
    axios.post("http://localhost:3000/projects1", productlist).then((res) => {
      console.log(res.data)
      clearForm()
      navigate("/Admin")
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
                <input type="file" placeholder='Image' className='list-group-item' name="image" /* value={productlist.image}  */onChange={ changeImage} /><br />
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
