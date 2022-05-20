import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import TableHeader from "../components/TableHeader";
import SalesData from "../components/SalesData";
import salmon from "../public/img/salmon.png"
import Link from "next/link";

export default function Sales() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Salmon Cookies Daily Sales Data</title>
      </Head>
      <header className="header">
        <div>
          <div id="logo">
            <Link href="/">
              <a>
                <Image
                  src={salmon}
                  alt="a salmon"
                />
              </a>
            </Link>
          </div>
          <h1 className="h1">Salmon Cookies</h1>
        </div>
        <nav className="nav">
          <a href="index.html">Go back...</a>
        </nav>
      </header>
      <section id="form">
        <form id="new-store-form">
          <fieldset>
            <legend>Add/Update a store location</legend>
            <label>
              Location
              <input type="text" name="location" required="required" />
            </label>
            <label>
              Min. Customers per Hour
              <input type="number" name="minCust" required="required" />
            </label>
            <label>
              Max. Customers per Hour
              <input type="number" name="maxCust" required="required" />
            </label>
            <label>
              Avg. Cookies per Sale
              <input
                type="float"
                name="avgCookiePerSale"
                required="required"
              />
            </label>
          </fieldset>
          <button type="submit">Update Table</button>
        </form>
      </section>
      <section id="sales-table">
        <table style={{}}>
          <thead className="thead">
            <TableHeader />
          </thead>
          <SalesData />
        </table>
      </section>
      {/* <Script src="_app.js" /> */}
    </div>
  );
}
