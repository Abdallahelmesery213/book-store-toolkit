import React from 'react';

const BooksInfo = ({info}) => {
    return (
        <React.Fragment>
            <h3>Book Details</h3>
            {
                Object.keys(info).length>0 ? 
                (
                    <div  className="alert alert-secondary" role="alert">
                        <p className='fw-bold'>Title: {info.title}</p>
                        {info.userName && <p className='fw-bold'>Inserted By: {info.userName}</p>}
                        <p className='fw-bold'>Description: {info.description}</p>
                        <p className='fw-bold'>Price {info.price}</p>
                    </div>
                ):
                (
                    <div className="alert alert-secondary" role="alert">
                        There is no book selected yet. please select!
                    </div>
                )
            }
            
            
           
        </React.Fragment>
    );
};

export default BooksInfo;
