import React from 'react';
import {useSession} from "../../components/GlobalContext";
import {Redirect} from "react-router";

export default function TutorSearch(props) {
    const user = useSession();
    console.log(user?.db?.phoneNumber)
    return (
        <>
            {!user?.db?.phoneNumber && <Redirect to={'/add-phone'}/>}


        </>
    );
}