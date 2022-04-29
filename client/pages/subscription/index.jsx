import Head from "next/head";
import styles from "./sub.module.scss";
import { Fragment } from "react";

import Layout from "../../components/Layout";
import Login from "../../components/pageTemplates/Login";

import dynamic from "next/dynamic";

const UserLoadedNoSSR = dynamic(() => import("../../utils/loadUser"), {
  ssr: false,
});

const subscription = () => {
  return (
    <Layout>
      <UserLoadedNoSSR />
      <Head>
        <meta name="description" content="Subscription" />
        <title>{process.env.SITE}</title>
      </Head>
      <div className={styles.container}>
        <h1>COMMING SOON</h1>
      </div>
    </Layout>
  );
};

export default subscription;
