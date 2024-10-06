import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

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
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      </Head>
      <div>
        <div className="container">
          <main>
            <div className="py-5 text-center">
              <h2>Welcome</h2>
              <p className="lead">has invited you to buy these products!</p>
            </div>

            <div className="row g-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Products</span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Product name</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
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
        </div>
      </div>
    </>
  );
}
