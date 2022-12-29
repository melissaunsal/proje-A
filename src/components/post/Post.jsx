import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=astroloji">
              Astroloji
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=astroloji">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          22 Aralık Perşembe Günü Venüs Uranüs Üçgeni Gerçekleşiyor! Burçlara Etkileri Neler Olacak?
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      22 Aralık Perşembe günü gökyüzünde Venüs Uranüs üçgeni gerçekleşecek. Bu olay umutsuz günleri bir nebze olsun geride bırakacağımızın bir göstergesi. Etkiler birkaç gün öncesinden başlayan Venüs ve Uranüs üçgen açısı önümüzdeki günlerde yaralı kalplere iyi gelecek.


      </p>
    </div>
  );
}