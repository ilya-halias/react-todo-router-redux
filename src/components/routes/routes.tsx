import {Link, Route, Routes, useParams} from "react-router-dom";
import {Login, NotFound, Profile, TodoById} from "../pages";
import React, {useEffect, useState} from "react";
import {App} from "../App";



export const RoutesComponent = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <>
            <header>
                <Link to="">Main</Link>
                {!isAuth && <Link to="login">Login</Link>}
                {isAuth && <Link to="profile">Profile</Link>}
            </header>


            <Routes>
                { isAuth && <Route path="/" element={<App/>}/>}
                <Route path=":id" element={<TodoById/>}/>
                <Route path="login" element={<Login/>}/>

                {isAuth && <Route path="/profile" element={<Profile/>}/>}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            {isAuth ? (
                    <button onClick={() => setIsAuth(false)}>Выйти</button>) :
                (<button onClick={() => setIsAuth(true)}>Войти</button>
                )}

        </>
    )

}
