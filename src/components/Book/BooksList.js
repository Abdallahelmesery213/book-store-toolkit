import React from 'react';
import {useDispatch} from 'react-redux';

const BooksList = ({isLoading, books, isLoggedIn, deleteBook, getBook}) => {
    const dispatch = useDispatch();
    const bookList = books.length > 0 ? books.map( (item) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
            <span>{item.title}</span>
            <span className="btn-group">
                <button className="btn btn-primary" onClick={()=>getBook(item.id)}>Read</button>
                <button className="btn btn-danger" disabled={!isLoggedIn} onClick={()=> dispatch(deleteBook(item.id))}>Delete</button>
            </span>
        </li>
    )) : "there is no books available" ;
  return (
    <div>
        {
            isLoading ? (<p>Loading...</p>) : 
            <div>
                <h3>Books List</h3>
                <ul className="list-group">{bookList}</ul>
            </div>
            
        }
    </div>
 );
};

export default BooksList;
