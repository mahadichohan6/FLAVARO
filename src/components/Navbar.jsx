import React from 'react'
import "./Main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../REDUX/slices/SearchSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
  <nav className="d-flex flex-column flex-lg-row justify-content-between py-3 mx-4">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
             <div className="">
        <h3 className="nav-text1">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h3 className="nav-text2">Flavoro Foods</h3>
      </div>
        </div>
        <div className="col-md-4">
             <div>
        <input
          type="search"
          name="search"
          id=""
          onChange={(e)=>dispatch(setSearch(e.target.value))}
          placeholder="Search Here"
          autoComplete="off"
          className="nav-input p-3 w-100" style={{outline: "none"}}

        />
      </div>
        </div>
      </div>
    </div>
   
   
    </nav>  )
}

export default Navbar