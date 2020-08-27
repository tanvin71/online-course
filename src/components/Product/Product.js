import React from 'react';
import'./Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const handleAddCourse =props.handleAddCourse;
    const {name, price, img, instructor} =props.course;
    console.log(img);
    return (
        

                <div className="col-md-6 col-lg-6">
                    <div className="row">
                        <div className="card mb-3 mt-4 ">
                            <img src={img} alt=""/>
                            <h5 className="ml-2">Course name: {name}</h5>
                            <p className="ml-2">Price: {price}</p>
                            <p className="ml-2">Instructor: {instructor}</p>
                            <button onClick={()=>handleAddCourse(props.course)} className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart}/> Enroll now</button>
                        </div>
                    </div>
                </div>

        
    );
};

export default Product;