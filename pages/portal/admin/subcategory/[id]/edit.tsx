import React from "react";
import SubcategoryEdit from "../../../../../features/admin/subcategory/SubcategoryEdit";

interface IFormInput {
    name: String,
    category: String,
    image: String,
    description: String
}

const Edit = () => {

    return (
        <>
            <SubcategoryEdit/>
        </>
    );
}

export default Edit