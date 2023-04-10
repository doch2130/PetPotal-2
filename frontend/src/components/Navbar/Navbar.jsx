import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [Keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const historyValue = useParams();

  const searchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${Keyword}`);
    /**
     * 2023.04.11 gkfrjt
     * 검색 경로로 이동시키기
     * css 적용시켜놓기
     * 회원가입페이지 적용시키기
     */
  };

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    setKeyword(historyValue.searchKeyword);
  }, [historyValue]);

  return (
    <header>
      <section className={style.navbarWrapper}>
        <div className={style.navbarTop}>
          <ul className={style.topInner}>
            <li>회원가입</li>
            <Link to={'/login'}>로그인</Link>
            <li>고객센터</li>
          </ul>
        </div>

        <div className="style.navbarMiddle">
          <h1 className="style.navbarLogo">
            <Link to={'/'}>Pet Portal</Link>
          </h1>
          <form onSubmit={searchSubmit} className="style.searchForm">
            <input
              onChange={handleKeyword}
              type="search"
              class="search-input"
            />
            <button className="style.searchBtn">아이콘</button>
          </form>
          <ul className="style.headerItem">
            <li>아이콘1</li>
            <li>아이콘2</li>
            <li>아이콘3</li>
          </ul>
        </div>

        <nav className="style.navbarBottom">
          <ul className="menu">
            <li className="menuItem">
              <a href="#" className="menuItemLink">
                메이트
              </a>
            </li>
            <li className="menuItem">
              <a href="#" className="menuItemLink">
                메이트
              </a>
            </li>
            <li className="menuItem">
              <a href="#" className="menuItemLink">
                병원
              </a>
            </li>
            <li className="menuItem">
              <a href="#" className="menuItemLink">
                호텔링
              </a>
            </li>
            <li className="menuItem">
              <a href="#" className="menuItemLink">
                숙박
              </a>
            </li>
            <li className="menuItem">
              <a href="#" className="menuItemLink">
                음식
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
