import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Kahve Falı & El Falı</span>
        <span className="headerTitleLg">FALQUENN</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3652513/pexels-photo-3652513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}