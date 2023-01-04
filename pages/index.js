import React from "react";
import Layout from "../components/layout";
import styles from "..//styles/Home.module.css";
import Head from "next/head";
export default function index() {
  return (
    <Layout>
      <Head>
        <title>{`Febriqgal`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fp.png" />
      </Head>
      <div className={`${styles.main}`}>
        <h1>My Portfolio</h1>
      </div>
    </Layout>
  );
}
