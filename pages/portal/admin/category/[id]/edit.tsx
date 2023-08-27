import React from "react";
import CategoryEdit from "../../../../../features/admin/category/CategoryEdit";

interface IFormInput {
    name: String,
    image: String,
    description: String
}

const Edit = () => {


    return (
        <>
            <CategoryEdit/>
        </>
    );
}

export default Edit