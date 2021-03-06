import React from 'react';
import {useSession} from "../../components/GlobalContext";
import {Redirect} from "react-router";

export default function TutorSearch(props) {
    const user = useSession();
    return (
        <>
            {!user?.db?.phoneNumber && <Redirect to={'/add-phone'}/>}
            <div>awd</div>
        </>
    );
}