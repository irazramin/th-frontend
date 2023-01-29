import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

function handlePageClick() {

}

const Datatable = ({name, headers, size = [10, 20, 30, 40, 50], enableCheckbox = false, enableAction = true, onCheckAll, children,tableProps}: any) => {
    console.log(tableProps)

    const totalPage = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const [pageControl,setPageControl] = useState(1);

    return (
        <>
            <div className="row">
                <div className="col-md-8 col-sm-12 table-tools">
                    <div className='show-dropdown'>
                        <label htmlFor="show">Show</label>
                        <select name="show" >
                            <option value="10">10</option>
                            <option value="10">20</option>
                            <option value="10">30</option>
                            <option value="10">40</option>
                            <option value="10">50</option>

                        </select>
                    </div>
                    <div className='sortby-dropdown'>
                        <label htmlFor="sort_by">Sort</label>
                        <select name="sort_by" >
                            <option value="10">10</option>
                            <option value="10">20</option>
                            <option value="10">30</option>
                            <option value="10">40</option>
                            <option value="10">50</option>
                        </select>
                        <select name="sort_by" >
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 datatable-search">
                    <form action="#">
                        <div className="form-group">
                            <input type="text" placeholder="Search data"/>
                            <i className='bx bx-search icon'/>
                        </div>
                    </form>
                </div>
                <div className="col-12">
                    <div className="datatable-wrapper">
                        <table className="datatable">
                            <thead>
                            <tr>
                                {enableAction &&
                                <>
                                    <th>
                                        <input onClick={(e) => onCheckAll(e)} id={`${name}CheckAll`} name={`${name}CheckAll`} type="checkbox"/>
                                    </th>
                                </>
                                }
                                {headers.map((header: any, headerIndex: any) => (
                                    <th key={headerIndex}>{header.name}</th>
                                ))}
                                {enableAction &&
                                <>
                                    <th className='action'>
                                        Action
                                    </th>
                                </>
                                }
                            </tr>
                            </thead>
                            <tbody>
                            {children}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 datatable-summary-count">
                    <p>Showing <span className='data-start'>1</span> to <span className='data-end'>10</span> of <span className='all-data'>20</span> entries</p>
                </div>
                <div className="col-md-7 col-sm-12 pagination">

                    <ReactPaginate
                        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={0}
                        pageCount={totalPage.length}
                        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                        renderOnZeroPageCount={()=> null}
                        breakLabel={""}

                    />

                    {/*<Pagination simple defaultCurrent={1} total={100*10} prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}  nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={{ gap:"20px" }} />*/}
                    <br />
                </div>
            </div>
        </>
    );
}

export default Datatable