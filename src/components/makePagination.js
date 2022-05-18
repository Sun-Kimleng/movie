
import React from 'react';
import { Pagination } from '@mui/material';

const MakePagination = ({totalPage, totalPost, currentPage, setCurrentPage}) => {

    // create UI for Pagination click
    

    //changePage
    const changePage = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    return ( 
        <div className="Make-pagination">
            <Pagination count={totalPage} page={currentPage}  onChange={(e, value)=>changePage(value)} showFirstButton showLastButton  />
        </div>
     );
}
 
export default MakePagination;