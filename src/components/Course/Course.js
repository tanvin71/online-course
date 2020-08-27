import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import'./Course.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [courses, setCourses]=useState(fakeData);
    const [cart, setCart]=useState([]);
    const handleAddCourse = (courses) => {
        console.log('course added',courses);
        const newCart = [...cart, courses];
        setCart(newCart);
    }
    return (
        <div className="course-container">
            <div className="course">
                <div className="row">
                    {
                        courses.map(course => <Product  handleAddCourse ={handleAddCourse}key={course.id} course={course}></Product>)
                    }  
                </div>
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Shop;