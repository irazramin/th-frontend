import React from 'react';
import {ErrorMessage} from "@hookform/error-message";

const ErrorText = ({errors, name}: any) => {
    return (
        <div>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({messages}) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                        <p
                            key={type}
                            style={{
                                color: "red",
                                marginTop: "10px",
                                fontSize: "14px",
                                fontWeight: "600",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                            className="password-error-message"
                        >
                            <i
                                className="bx bx-error-circle"
                                style={{fontSize: "17px"}}
                            />{" "}
                            {message}
                        </p>
                    ))
                }
            />
        </div>
    );
};

export default ErrorText;
