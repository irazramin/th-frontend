import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

const Datatable = ({
                       headers = [],
                       limits = [10, 20, 30, 40, 50, 100],
                       meta = null,
                       enableAction = true,
                       onChangeLimit,
                       onChangePage,
                       onChangeSearch,
                       children
                   }: any) => {

    return (
        <>
            <div className="row">
                <div className="col-md-8 col-sm-12 table-tools">
                    <div className="show-dropdown">
                        <label htmlFor="show">Show</label>
                        <select
                            name="show"
                            onChange={(e) => onChangeLimit(e.target.value)}
                        >
                            {limits?.map((limit: any, limitIndex: number) => {
                                return <option key={limitIndex} value={limit}>{limit}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 datatable-search">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Search data"
                            onKeyUp={(e: any) => {
                                if (e.key == "Enter") {
                                    onChangeSearch(e.target.value);
                                }
                            }}
                        />
                        <i className="bx bx-search icon"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="datatable-wrapper">
                        <table className="datatable">
                            <thead>
                            <tr>
                                {headers.map((header: any, headerIndex: any) => (
                                    <th key={headerIndex}>{header.name}</th>
                                ))}
                                {enableAction && (
                                    <th className="action">Action</th>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {children}
                            </tbody>
                        </table>
                    </div>
                </div>
                {meta != null && (
                    <>
                        <div className="col-md-5 col-sm-12 datatable-summary-count">
                            <p>
                                Showing <span
                                className="data-start"> {((meta.page - 1) * meta.per_page + 1) || 0}</span> to{" "}
                                <span
                                    className="data-end">{(meta.page * meta.per_page) > meta.total ? meta.total : (meta.page * meta.per_page) || 0}</span> of{" "}
                                <span className="all-data">{meta.total ?? 0}</span>{" "}
                                entries
                            </p>
                        </div>
                        <div className="col-md-7 col-sm-12 pagination">
                            <ReactPaginate
                                nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}
                                onPageChange={(e) => onChangePage(e.selected + 1)}
                                pageRangeDisplayed={0}
                                pageCount={meta?.pages ?? 0}
                                previousLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
                                renderOnZeroPageCount={() => null}
                                breakLabel={""}
                                initialPage={0}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Datatable;
