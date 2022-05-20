import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Salmon Cookies</title>
      </Head>
      <header>
        <div>
          <div id="logo">
            <Link href="/sales">
              <a>
                <Image
                  src="/../public/img/salmon.png"
                  alt="a salmon"
                  height="200px"
                  width="200px"
                />
              </a>
            </Link>
          </div>
          <h1>Salmon Cookies</h1>
        </div>
      </header>
      <main className={styles.main}>
        <section id="articles">
          <article>
            <Image
              src="/../public/img/frosted-cookie.jpg"
              alt="a pair of delicious looking frosted cookies, shaped like salmon"
              height="200px"
              width="200px"
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
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              sed odio in earum nesciunt ipsa dicta eaque, aliquam adipisci
              voluptate vero quae possimus? Dolorum optio recusandae cum sequi
              dolores maxime? Eligendi atque, eius repudiandae magnam odit porro
              libero, suscipit veritatis autem fuga in modi.
            </p>
            <Image
              src="/../public/img/family.jpg"
              alt="Pat and his happy family, in their kitchen"
              height="200px"
              width="200px"
            />
          </article>
          <article>
            <Image
              src="/../public/img/cutter.jpg"
              alt="a salmon shaped cookie cutter"
              height="200px"
              width="200px"
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
          <article>
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
              src="/../public/img/fish.jpg"
              alt="a collection of colorful fish cookies"
              height="200px"
              width="200px"
            />
          </article>
          <article>
            <Image
              src="/../public/img/shirt.jpg"
              alt="a men's salmon grpahic tee-shirt"
              height="200px"
              width="200px"
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
        <aside>
          <h4>Store Locations</h4>
          <ul>
            <hr />
            <li>
              <em>Seattle, USA</em>
              <br />
              2130 6th Ave
              <br />
              Seattle, WA 98121
              <br />
              1+206-888-8888
            </li>
            <hr />
            <li>
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
            <li>
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
            <li>
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
            <li>
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
              src="/../public/img/chinook.jpg"
              alt="a chinook salmon"
              height="200px"
              width="200px"
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
  );
}
