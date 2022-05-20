import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import chinook from "../public/img/chinook.jpg";
import cutter from "../public/img/cutter.jpg";
import family from "../public/img/family.jpg";
import fish from "../public/img/fish.jpg"
import frostedCookie from "../public/img/frosted-cookie.jpg";
import salmon from "../public/img/salmon.png";
import shirt from "../public/img/shirt.jpg";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Salmon Cookies</title>
      </Head>
      <div className={styles.body}>
        <header className="header">
          <div>
            <div id="logo">
              <Link href="/sales">
                <a className="a">
                  <Image
                    src={salmon}
                    alt="a salmon"
                    className="img"
                    id="salmon-main"
                  />
                </a>
              </Link>
            </div>
            <h1 className="h1">Salmon Cookies</h1>
          </div>
        </header>
        <main className={styles.main}>
          <section className="articles">
            <article className="article">
              <Image
                src={frostedCookie}
                alt="a pair of delicious looking frosted cookies, shaped like salmon"
              />
              <p>
                Ipsum porro ad facilis eveniet dolorum minus maiores quaerat ab
                enim? Amet dolorem, quam nobis optio, illo, harum ullam dicta ad
                ab nam consequuntur reprehenderit voluptatum velit obcaecati
                labore? Explicabo! Sequi rem harum eaque repudiandae facilis quia
                beatae iste, iure quo exercitationem magni modi unde soluta facere
                neque a temporibus, reprehenderit voluptatem!
              </p>
            </article>
            <article className="article">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                sed odio in earum nesciunt ipsa dicta eaque, aliquam adipisci
                voluptate vero quae possimus? Dolorum optio recusandae cum sequi
                dolores maxime? Eligendi atque, eius repudiandae magnam odit porro
                libero, suscipit veritatis autem fuga in modi.
              </p>
              <Image
                src={family}
                alt="Pat and his happy family, in their kitchen"
              />
            </article>
            <article className="article">
              <Image
                src={cutter}
                alt="a salmon shaped cookie cutter"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos
                eaque odio iusto cumque, harum optio voluptatibus quasi beatae aut
                eum consequatur vitae mollitia repudiandae magnam maiores sed cum
                tenetur. Delectus necessitatibus numquam, qui architecto
                consequatur voluptates hic optio possimus adipisci similique
                labore ipsa earum quaerat ut et incidunt ratione ducimus cumque
                eaque pariatur, temporibus rerum minima unde. Magni, repudiandae!
              </p>
            </article>
            <article className="article">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos
                eaque odio iusto cumque, harum optio voluptatibus quasi beatae aut
                eum consequatur vitae mollitia repudiandae magnam maiores sed cum
                tenetur. Delectus necessitatibus numquam, qui architecto
                consequatur voluptates hic optio possimus adipisci similique
                labore ipsa earum quaerat ut et incidunt ratione ducimus cumque
                eaque pariatur, temporibus rerum minima unde. Magni, repudiandae!
              </p>
              <Image
                src={fish}
                alt="a collection of colorful fish cookies"
              />
            </article>
            <article className="article">
              <Image
                src={shirt}
                alt="a men's salmon grpahic tee-shirt"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos
                eaque odio iusto cumque, harum optio voluptatibus quasi beatae aut
                eum consequatur vitae mollitia repudiandae magnam maiores sed cum
                tenetur. Delectus necessitatibus numquam, qui architecto
                consequatur voluptates hic optio possimus adipisci similique
                labore ipsa earum quaerat ut et incidunt ratione ducimus cumque
                eaque pariatur, temporibus rerum minima unde. Magni, repudiandae!
              </p>
            </article>
          </section>
          <aside className="aside">
            <h4>Store Locations</h4>
            <ul className="ul">
              <hr />
              <li className="li">
                <em>Seattle, USA</em>
                <br />
                2130 6th Ave
                <br />
                Seattle, WA 98121
                <br />
                1+206-888-8888
              </li>
              <hr />
              <li className="li">
                <em>Tokyo, Japan</em>
                <br />
                1-21-15 Jingumae
                <br />
                1F Napole Harajuku Bldg.
                <br />
                Shibuya 150-0011
                <br />
                Tokyo Prefecture
                <br />
                81+120-888-888
              </li>
              <hr />
              <li className="li">
                <em>Dubai, UAE</em>
                <br />
                DIFC
                <br />
                Gate District Building
                <br />
                Level 2, Unit 11
                <br />
                Dubai, UAE
                <br />
                971+4 888-8888
              </li>
              <hr />
              <li className="li">
                <em>Paris, France</em>
                <br />
                71 rue Greneta
                <br />
                75002 Paris
                <br />
                France
                <br />
                33+09 88 88 88 88
              </li>
              <hr />
              <li className="li">
                <em>Lima, Peru</em>
                <br />
                Ave Larco 795 Miraflores
                <br />
                Lima LIMA 18
                <br />
                Peru
                <br />
                51+206-888-888
              </li>
            </ul>
          </aside>
        </main>

        <footer className={styles.footer}>
          <div id="footer-content">
            <div id="hours">
              Open 7 Days / Week
              <br />
              6am - 7pm
            </div>
            <div id="tag">
              <Image
                src={chinook}
                alt="a chinook salmon"
              />
              <p>fish you were here</p>
            </div>
            <div id="contact">
              Salmon Cookies International
              <br />
              1234 5th Ave
              <br />
              Seattle, WA 98101
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
