import {AdminPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm,} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import React from "react";
import ToastMessage from "../../../../../components/toast/ToastMessage";
import ErrorText from "../../../../../components/texts/ErrorText";
import CompanyAdd from "../../../../../features/admin/company/CompanyAdd";

const Add = () => {
    return (
        <>
           <CompanyAdd />
        </>
    );
};

export default Add;
