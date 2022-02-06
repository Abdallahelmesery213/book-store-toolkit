import React, {useRef} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { insertBook } from '../../redux/bookSlice';

const AddForm = () => {
    const {isLoggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const title = useRef(null);
    const price = useRef(null);
    const description = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data= {
            title: title.current.value,
            price: price.current.value,
            description: description.current.value
        }
        dispatch(insertBook(data));
        title.current.value = null;
        price.current.value = null;
        description.current.value = null;
    }
  return (
    <div className="row">
        <div className="col-md-6 offset-3 mt3 mb-3">
            <h2>Insert Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='title' className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" ref={title} required />
                </div>
                <div className="mb-3">
                    <label htmlFor='price' className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" ref={price} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor='description' className="form-label">Description</label>
                    <textarea className="form-control" rows='3' id="description" ref={description} required>
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!isLoggedIn}>Submit</button>
            </form>
        </div>
    </div>
 );
};

export default AddForm;
