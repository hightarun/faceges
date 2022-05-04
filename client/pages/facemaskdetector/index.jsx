import React, { useState } from "react";
import Head from "next/head";

//redux
import { connect } from "react-redux";

import Layout from "../../components/Layout";

import styles from "./styles.module.scss";

import FaceMaskBody from "../../components/PageTemplates/FaceMaskBody";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const UserLoadedNoSSR = dynamic(() => import("../../utils/loadUser"), {
  ssr: false,
});

const FaceMask = (props) => {
  const router = useRouter();
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <meta name="description" content="Live Webcam face mask detection" />
          <title>Face Mask Detection</title>
        </Head>
        <UserLoadedNoSSR />
        {props.isAuthenticated && props.user.isPremium ? (
          <FaceMaskBody />
        ) : (
          <div>
            <p>Buy Subscription to use software</p>
            <span onClick={() => router.push("/subscription")}> BUY</span>
          </div>
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  userData: state.user,
});

export default connect(mapStateToProps, null)(FaceMask);
