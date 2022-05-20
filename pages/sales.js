import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import TableHeader from "../components/TableHeader";
import SalesData from "../components/SalesData";

export default function Sales() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Salmon Cookies Daily Sales Data</title>
      </Head>
        <header>
          <div>
            <div id="logo">
              <a href="sales.html">
                <Image
                  src="/../public/img/salmon.png"
                  alt="a salmon"
                  width="200px"
                  height="200px"
                />
              </a>
            </div>
            <h1>Salmon Cookies</h1>
          </div>
          <nav>
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
            <thead>
              <TableHeader />
            </thead>
          <SalesData />
          </table>
        </section>
        {/* <Script src="_app.js" /> */}
    </div>
  );
}
