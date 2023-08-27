import React from 'react';
import {ButtonGreenMd} from "../../../components/buttons";
import {DefaultCard, TitleCard} from "../../../components/cards";
import Cookies from "js-cookie";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";

const ResetPasswordComponent = () => {
    const dispatch = useDispatch<AppDispatch>()
    let authUser: any = Cookies.get('auth_user');

    if (authUser) {
        authUser = JSON.parse(authUser);
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.authMS('api/v1/auth/password-change-request'),
            storeName: 'password',
            body: null,
            defaultValue: null,
            showToast: true
        }));
    }
    return (
        <>
            <TitleCard title="Reset your password"/>
            <DefaultCard>
                <div>
                    <div className="add-items">
                        <form
                            onSubmit={onSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="form-group">
                                <label htmlFor="email">Request for change your password</label>
                                <div className="input-icon">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={authUser?.email}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="action-btn">
                                <ButtonGreenMd>Send</ButtonGreenMd>
                            </div>
                        </form>
                    </div>
                </div>
            </DefaultCard>
        </>
    );
};

export default ResetPasswordComponent;

