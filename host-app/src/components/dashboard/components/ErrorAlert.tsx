
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import { RootState } from "../../../redux/store"; // Update path based on your store location
import { clearError } from "../../../redux/errorSlice";

const ErrorAlert = () => {
    const dispatch = useDispatch();
    const { message, code } = useSelector((state: RootState) => state.error);

    const handleClose = () => {
        dispatch(clearError());
    };

    return (
        <Snackbar open={!!message} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                {message} (Error Code: {code})
            </Alert>
        </Snackbar>
    );
};

export default ErrorAlert;
