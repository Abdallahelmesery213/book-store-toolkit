import React, {Fragment} from 'react';
import { useDispatch , useSelector} from "react-redux";
import { logInOut } from '../../redux/authSlice';

const Header = () => {
    const {isLoggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const {isError} = useSelector(state => state.books)
  return (
    <Fragment>
        {
            isError && <div className="alert alert-danger" role="alert">Faild</div>
        }
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">My Books</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <button className='btn btn-outline-primary' type='submit' onClick={()=> dispatch(logInOut())}>
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </button>
                
            </div>
        </nav>
    </Fragment>
  )};

export default Header;
