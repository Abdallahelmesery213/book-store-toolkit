import React, {useEffect, useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import BooksInfo from './BooksInfo';
import BooksList from './BooksList';
import { getBooks, deleteBook } from '../../redux/bookSlice';

const BookContainer = () => {
    const {isLoading, books} = useSelector(state => state.books);
    const {isLoggedIn} = useSelector(state => state.auth);
    const [selectedBook, setSelected]= useState({});
    const dispatch = useDispatch();
    useEffect( ()=> {
        dispatch(getBooks());
    }, [dispatch]);
    const getBook = (id) =>{
        const selectedBook = books.find(el => el.id === id);
        setSelected( (prev) => {
            return {...prev, ...selectedBook}
        });
    }
  return (
    <div className="row">
        <div className="col-md-6">
            <BooksList isLoading={isLoading} books={books} isLoggedIn={isLoggedIn} deleteBook={deleteBook} getBook={getBook} />
        </div>
        <div className="col-md-6">
            <BooksInfo info={selectedBook}  />
        </div>
    </div>
 );
};

export default BookContainer;
