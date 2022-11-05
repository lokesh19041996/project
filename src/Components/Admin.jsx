import React, { useEffect, useState } from 'react';
import axios from "axios"
// import { useNavigate } from "react-router-dom";


const Admin = () => {
  const [tdata, settdata] = useState([]);
  const [form, setform] = useState({});

  // const navigate = useNavigate();


  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axios.get("http://localhost:3000/projects1").then((res) => {
      console.log(res.data);
      settdata(res.data)
    })
  }

  const handleChange = (e) => {
    // console.log(e.target.name)
    let newForm = { ...form }
    newForm[e.target.name] = e.target.value
    setform(newForm)
  }

  const DeleteUser = (data) => {
    // console.log(data)
    axios.delete("http://localhost:3000/projects1/" + data.id).then((res) => {
      console.log(res)
      getData()

    })
  }
  const EditUser = (data) => {
    console.log("edited")
    setform(data)
  }
  let UpdateUser = (data) => {
    console.log(data);
    axios.put("http://localhost:3000/projects1/" + form.id,form).then((res) => {
      console.log("updated")
      getData()
    })

  }

  // let ChangeImage=(e)=>{
  //     e.preventDefault()
  //     let url="http://localhost:3000/projects1"
  //     axios.post(url,product).then((res)=>{
        
  //     })
  // }
  return (
    <div>
      <h1>Display data</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>qty</th>
                  <th>price</th>
                  <th>id</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tdata.map((data, i) => {
                  return <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.image}</td>
                    <td>{data.qty}</td>
                    <td>{data.price}</td>
                    <td>{data.id}</td>
                    <td><button className='btn btn-warning' onClick={() => { EditUser(data) }}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={() => { DeleteUser(data) }}>Delete</button></td>
                  </tr>
                })}
              </tbody>
            </table>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  {Object.keys(form).length > 0 && (
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder='name' name="name" value={form.name} onChange={(e) => { handleChange(e) }} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="file" placeholder='Image' className="form-control" name="image" value={form.image} onChange={(e) => {                         <input type="text" className="form-control" placeholder='name' name="name" value={form.name} onChange={(e) => { handleChange(e) }} />
(e) }} /><br />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">quantity</label>
                        <input type="text" placeholder='quantity' className="form-control" name="quantity" value={form.quantity} onChange={(e) => { handleChange(e) }} /><br />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">price</label>
                        <input type="number" placeholder='price' className="form-control" name="price" value={form.price} onChange={(e) => { handleChange(e) }} /><br />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">id</label>
                        <input type="number" placeholder='id' className="form-control" name="id" value={form.id} onChange={(e) => { handleChange(e) }} /><br />
                      </div>
                      <button type="button" className="btn btn-primary" onClick={UpdateUser}>Update</button>
                    </form>
                  )}


                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Admin;
