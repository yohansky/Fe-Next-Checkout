import Head from "next/head";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
        <script key="stripe-js" src="https://js.stripe.com/v3/" async></script>
      </Head>
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
