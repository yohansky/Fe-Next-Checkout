import Layout from "@/components/Layout";
import React from "react";

const success = () => {
  return (
    <Layout>
      <div className="py-5 text-center">
        <h2>Success</h2>
        <p className="lead">Your Purchase has been completed!</p>
      </div>
    </Layout>
  );
};

export default success;
