import React from 'react';
import {useSession} from "../../components/GlobalContext";
import {useHistory} from "react-router";

export default function TutorSearch(props) {
    const user = useSession();
    const history = useHistory();

    if (user?.db && !user?.db?.phoneNumber) {
        history.push('/add-phone');
    }
    return (
        <>

        </>
    );
}