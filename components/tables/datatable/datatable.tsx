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
                <div className="col-8 table-tools">
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
                        <label htmlFor="sort_by">Sort by</label>
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
                <div className="col-4 datatable-search">
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
                                    <th>
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

                    {/*<div className="pagination">*/}
                    {/*        <div className="previous-btn">*/}
                    {/*            <button onClick={() => setPageControl(pageControl > 1 ? pageControl- 1 : 1)}> <FontAwesomeIcon icon={faChevronLeft} /> </button>*/}
                    {/*        </div>*/}

                    {/*        <div className="pages-btn">*/}
                    {/*            <div className="visible-btns">*/}
                    {/*                {totalPage.length > 7 ? totalPage.slice(0,7).map((page,idx) => <button className={`page-btn ${((pageControl === idx+1) ) ? 'active' : ''}`}>{idx+1}</button>) : totalPage.map((page,idx) => <button className="page-btn">{idx+1}</button>*/}
                    {/*                )}*/}
                    {/*            </div>*/}
                    {/*            <div className="last-page-btn">*/}
                    {/*                <button className="page-btn">{totalPage.length}</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="previous-btn">*/}
                    {/*            <button onClick={() => setPageControl(pageControl < totalPage.length ? pageControl+1 : totalPage.length)}><FontAwesomeIcon icon={faChevronRight} /> </button>*/}
                    {/*        </div>*/}

                    {/*</div>*/}

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={totalPage.length}
                        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                        renderOnZeroPageCount={()=> null}
                    />
                </div>
            </div>
        </>
    );
}

export default Datatable