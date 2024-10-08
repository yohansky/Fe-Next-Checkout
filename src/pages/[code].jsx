import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import constants from "../../constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();
  const { code } = router.query;
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  // console.log(code);
  useEffect(() => {
    if (code != undefined) {
      (async () => {
        const { data } = await axios.get(`${constants.endpoint}/links/${code}`);

        console.log(data);

        setUser(data.user);
        setProducts(data.products);
        setQuantities(
          data.products.map((p) => ({
            product_id: p.id,
            quantity: 0,
          }))
        );
      })();
    }
  }, [code]);

  const change = (id, quantity) => {
    setQuantities(
      quantities.map((q) => {
        if (q.product_id === id) {
          return {
            ...q,
            quantity,
          };
        }

        return q;
      })
    );
  };

  const total = () => {
    return quantities.reduce((s, q) => {
      const product = products.find((p) => p.id === q.product_id);

      return s + product.price * q.quantity;
    }, 0);
  };

  return (
    <Layout>
      <main>
        <div className="py-5 text-center">
          <h2>Welcome</h2>
          <p className="lead">
            {user?.first_name} {user?.last_name} has invited you to buy these products!
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Products</span>
            </h4>
            <ul className="list-group mb-3">
              {products.map((product) => {
                return (
                  <div key={product.id}>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">{product.title}</h6>
                        <small className="text-muted">{product.description}</small>
                      </div>
                      <span className="text-muted">${product.price}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">Quantity</h6>
                      </div>
                      <input type="number" min="0" defaultValue={0} className="text-muted form-control" style={{ width: "65px" }} onChange={(e) => change(product.id, parseInt(e.target.value))} />
                    </li>
                  </div>
                );
              })}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total()}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Personal Info</h4>
            <form className="needs-validation" novalidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">
                    First name
                  </label>
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label">
                    Last name
                  </label>
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
                </div>

                <div className="col-12">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>

                <div className="col-12">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                </div>

                <div className="col-md-5">
                  <label for="country" className="form-label">
                    Country
                  </label>
                  <input className="form-control" id="country" placeholder="Country" />
                </div>

                <div className="col-md-4">
                  <label for="city" className="form-label">
                    City
                  </label>
                  <input className="form-control" id="city" placeholder="City" />
                </div>

                <div className="col-md-3">
                  <label for="zip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="zip" placeholder="Zip" />
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
