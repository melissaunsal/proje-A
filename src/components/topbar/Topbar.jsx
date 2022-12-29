import { Link, useHistory } from "react-router-dom";
import "./topbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, } from "react-router";
import { logout } from "../../pages/login/Login";
import { logout as logoutHandle } from "../../store/auth"


export default function Topbar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const handleLogout = async () => {
        await logout()
        dispatch(logoutHandle())
        history('/login', {
            replace: true
        })
    }

    if (user) {
        return (
            <div className="top">
                <div className="topLeft">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" />
                    <i className="topIcon fab fa-facebook-square"></i>
                    <i className="topIcon fab fa-instagram-square"></i>
                    <i className="topIcon fab fa-pinterest-square"></i>
                    <i className="topIcon fab fa-twitter-square"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/">
                                HOME
                            </Link>
                        </li>
                        {
                            user.email !== "admin@gmail.com" &&
                            <li className="topListItem">
                                <Link className="link" to="/Fallarım">
                                    FALLARIM
                                </Link>

                            </li>
                        }
                        {
                            user.email === "admin@gmail.com" && <li className="topListItem">
                                <Link className="link" to="/Admin">
                                    Admin
                                </Link>

                            </li>
                        }
                        {
                            user.email !== "admin@gmail.com" &&

                            <li className="topListItem">
                                <Link className="link" to="/Fal">
                                    FAL BAK
                                </Link>

                            </li>
                        }
                    </ul>
                </div>
                <div className="topRight">

                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" onClick={handleLogout} >
                                logout
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="top">
                <div className="topLeft">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" />
                    <i className="topIcon fab fa-facebook-square"></i>
                    <i className="topIcon fab fa-instagram-square"></i>
                    <i className="topIcon fab fa-pinterest-square"></i>
                    <i className="topIcon fab fa-twitter-square"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/">
                                HOME
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="topRight">

                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login" >
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}