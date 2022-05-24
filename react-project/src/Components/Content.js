import { useState } from "react"
import React from 'react'
import Menu from "./Menu";
import '../index.css';
import { CountContext } from "../App";
import { useContext } from "react";



export const Content = () => {

    const [items, setItems] = useState(Menu);

    const filterItem = (categItem) => {
        const updateItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updateItems);
    }

    const countContext = useContext(CountContext)

    return (
        <>
            <div className="container-fluid p-5 bg-light">
                <h1 className="text-center">Order Your Favourite Dish</h1>
                <div className="text-center">
                    <button type="button" className="btn btn-warning ml-2 " onClick={() => filterItem('breakfast')}>Breakfast</button>
                    <button type="button" className="btn btn-warning ml-5" onClick={() => filterItem('lunnch')}>Lunch</button>
                    <button type="button" className="btn btn-warning ml-5" onClick={() => filterItem('evening')}>Evening</button>
                    <button type="button" className="btn btn-warning ml-5" onClick={() => filterItem('dinner')}>Dinner</button>
                    <button type="button" className="btn btn-warning ml-5" onClick={() => setItems(Menu)}>All</button>
                </div>
                <div className="row my-5 mx-5 p-5">
                    {
                        items.map((item) => {
                            const { id, img, title, alt, content } = item;
                            return (
                                <div className="col-xl-4 col-md-6 col-sm-12" key={id}>
                                    <div className="card my-3" style={{ width: "18rem" }}>
                                        <img src={img} alt={alt} className="card-img-top img-fluid  d-block" />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{content}</p>
                                            <a className="btn btn-warning ml-5" onClick={() => countContext.countDispatch('increment')}>Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}
