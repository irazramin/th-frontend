import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { collapseAction } from "../../../../../features/sidebarCollapaseSlice";
import { callApi } from "../../../../../features/apiSlice";
import { HttpHethod } from "../../../../../constants";
import { UrlHelper } from "../../../../../helpers";
import Cookies from "js-cookie";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const collapseState = useSelector(
    (state: RootState) => state.collapse.collapse
  );

  const { isLoading = false, logout = { data: null, time: "" } } = useSelector(
    (state: RootState) => state.callApi
  );

  const logoutUser = () => {
    dispatch(
      callApi({
        method: HttpHethod.POST,
        url: UrlHelper.authMS("api/v1/logout"),
        storeName: "logout",
        body: { token: Cookies.get("access_token") },
        defaultValue: null,
        showToast: true,
      })
    );
  };

  useEffect(() => {
    if (logout?.time != null && logout?.code == 200) {
      Cookies.remove("access_token");
      Cookies.remove("auth_user");

      window.location.href = "/login";
    }
  }, [logout?.time]);
  
  return (
    <>
      <nav>
        <button
          style={{ backgroundColor: "transparent", border: "0" }}
          onClick={() => dispatch(collapseAction(!collapseState))}
        >
          <i className="bx bx-menu toggle-sidebar" />
        </button>
        <form action="#">
          {/* <div className="form-group">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search icon" />
          </div> */}
        </form>
        <span className="divider" />
        <div className="profile">
          <img
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ height: "36px", width: "36px" }}
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <ul className={` profile-link ${showDropdown ? "show" : ""}`}>
            <li>
              <a href="#">
                <i className="bx bxs-user-circle icon" /> Profile
              </a>
            </li>
            <li>
              <a onClick={logoutUser} style={{ cursor: "pointer" }}>
                <i className="bx bxs-log-out-circle" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
