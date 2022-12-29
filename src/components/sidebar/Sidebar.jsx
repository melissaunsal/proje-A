import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://astrologelvan.com/wp-content/uploads/2022/06/Elvan-Yarma-1-640x640.jpg"
                    alt=""
                />
                <p>
                    14 yaşında ilk Tarot destemi aldım ve spiritüel dünyaya adımım o desteyle başladı. Ve ne ilginç ki o deste aradan yıllar geçmesine rağmen hala eksiksiz benimle. Üniversiteyi İzmir’de Ekonomi Üniversite’sinde okudum. Sonrasında Galatasaray Üniversitesi’nde Üretim Yönetimi ve Pazarlama üzerine master yaptım.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">

                        Astroloji

                    </li>
                    <li className="sidebarListItem">

                        Kahve Falı

                    </li>
                    <li className="sidebarListItem">

                        El Falı

                    </li>
                    <li className="sidebarListItem">

                        Tarot

                    </li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>

                </div>
            </div>
        </div>
    );
}