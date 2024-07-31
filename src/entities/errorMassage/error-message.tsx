import Alert from "@mui/material/Alert";
import {ResponsiveAppBar} from "@/widgets/header/header";

export const ErrorMessage = ({message}: { message: string }) => <>
    <ResponsiveAppBar/>
    <Alert severity={'error'} variant={'filled'}>
        {message}
    </Alert>
</>

import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import {useAppSelector} from "../../shared/model/store/store";
import {selectAppError} from "../../shared/model/reduser/app/add.selector";

export default function AutohideSnackbar() {
    const [open, setOpen] = React.useState(true);

    const handleClose = (
        _: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const error = useAppSelector(selectAppError)

    return (
        <div>
            {error && <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <Alert severity="error">{error}</Alert>
            </Snackbar>}

        </div>
    );
}
