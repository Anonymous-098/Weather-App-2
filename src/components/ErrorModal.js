import React from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    return (
        <div className={classes.errorModal}>
            <div className={classes.background}>
                City Not Found
            </div>
        </div>
    );
}

export default ErrorModal;