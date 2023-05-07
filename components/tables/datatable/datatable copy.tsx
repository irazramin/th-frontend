import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getFetchApi } from "../../../slices/getApiSlice";
import { useSelector } from "react-redux";

const Datatable = ({
  name,
  headers,
  size = [10, 20, 30, 40, 50],
  enableAction = true,
  onCheckAll,
  children,
  url,
  modalOpen
}: any) => {
  const [pageControl, setPageControl] = useState(1);
  const [dataLimit, setDataLimit] = useState(5);
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, apiResponse, error } = useSelector(
    (state: RootState) => state.getApi
  );

  const initialPageCount = apiResponse?.meta?.per_page * Math.abs(apiResponse?.meta?.page - 1) + 1;

  const endPageCount = apiResponse?.meta?.per_page * (apiResponse?.meta?.page - 1) +
  apiResponse?.meta?.per_page;

  useEffect(() => {
    dispatch(
      getFetchApi({ url: `${url}list?limit=${dataLimit}&page=${pageControl}` })
    );
  }, [dataLimit, pageControl, modalOpen]);


  function handlePageClick(e:any) {
    setPageControl(e.selected + 1);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-8 col-sm-12 table-tools">
          <div className="show-dropdown">
            <label htmlFor="show">Show</label>
            <select
              name="show"
              onChange={(e) => setDataLimit(parseInt(e.target.value))}
            >
              {size.map((item: any, itemIndex: number) => {
                return <option key={itemIndex} value={item}>{ item }</option>
              })}
            </select>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 datatable-search">
          <form action="#">
            <div className="form-group">
              <input type="text" placeholder="Search data" />
              <i className="bx bx-search icon" />
            </div>
          </form>
        </div>
        <div className="col-12">
          <div className="datatable-wrapper">
            <table className="datatable">
              <thead>
                <tr>
                  {enableAction && (
                    <>
                      <th>
                        <input
                          onClick={(e) => onCheckAll(e)}
                          id={`${name}CheckAll`}
                          name={`${name}CheckAll`}
                          type="checkbox"
                        />
                      </th>
                    </>
                  )}
                  {headers.map((header: any, headerIndex: any) => (
                    <th key={headerIndex}>{header.name}</th>
                  ))}
                  {enableAction && (
                    <>
                      <th className="action">Action</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 datatable-summary-count">
          <p>
            Showing <span className="data-start">{initialPageCount || 0}</span> to{" "}
            <span className="data-end">{endPageCount || 0}</span> of{" "}
            <span className="all-data">{apiResponse?.meta?.total || 0}</span>{" "}
            entries
          </p>
        </div>
        <div className="col-md-7 col-sm-12 pagination">
          <ReactPaginate
            nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={0}
            pageCount={apiResponse?.meta?.pages}
            previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
            renderOnZeroPageCount={() => null}
            breakLabel={""}
            initialPage={0}
          />
        </div>
      </div>
    </>
  );
};

export default Datatable;
