import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center my-4">
          <div className="col-lg-6 col-sm-12 my-3">
            <div className="px-2">
              <h3 className="text-primary text-center fw-bolder">
                Difference between authorization and authentication?
              </h3>
              <div>
                <h2>Authentication :</h2>{" "}
                <div>
                  <p>
                    {" "}
                    Authentication works through passwords, one-time pins,
                    biometric information, and other information provided or
                    entered by the user.{" "}
                  </p>
                  <p>
                    Authentication is the first step of a good identity and
                    access management process.{" "}
                  </p>
                  <p>
                    Authentication is visible to and partially changeable by the
                    user.{" "}
                  </p>
                  <p>
                    Example: By verifying their identity, employees can gain
                    access to an HR application that includes their personal pay
                    information, vacation time, and 401K data.{" "}
                  </p>
                </div>
                <h2>few ways of Authorization:</h2>{" "}
                <div>
                  <p>
                    {" "}
                    Authorization works through settings that are implemented
                    and maintained by the organization.
                  </p>
                  <p>Authorization always takes place after authentication.</p>
                  <p>
                    Authorization isn't visible to or changeable by the user.
                  </p>
                  <p>
                    Example: Once their level of access is authorized, employees
                    and HR managers can access different levels of data based on
                    the permissions set by the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 my-3">
            <div className="px2">
              <h4 className="text-primary text-center fw-bold">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h4>
              <h4 className="fw-bold">why I am using firebase</h4>
              <p>
                Firebase by Google can be used for the following: Firebase
                manages all data real-time in the database. So, the exchange of
                data to and fro from the database is easy and quick. so that's
                reason for using firebase
              </p>
              <h4 className="fw-bold">
                A lots of option implement to authentication some Example:
              </h4>
              <p className="m-1">
                <span className="fw-bold">Parse:</span>{" "}
                <span>
                  {" "}
                  Parse is a complete open-source application stack and backend
                  framework
                </span>
              </p>
              <p className="m-1">
                <span className="fw-bold">Back4App</span>{" "}
                <span>
                  Back4App is an open source, low code, backend alternative to
                  Firebase
                </span>{" "}
              </p>
              <p className="m-1">
                <span className="fw-bold">AWS Amplify.</span>{" "}
                <span>
                  AWS is a cloud platform by Amazon that provides a set of tools
                  and services,
                </span>
              </p>
              <p className="m-1">
                <span className="fw-bold">Kuzzle:</span>{" "}
                <span>
                  Kuzzle is another open source alternative to Firebase that
                  helps you solve several digital needs such as single sign-on,
                  collaboration, messaging, secondary screens, and more.
                </span>
              </p>
              <p className="m-1">
                <span className="fw-bold">NativeScript:</span>{" "}
                <span>
                  NativeScript is another open-source platform that you can use
                  to create native mobile apps
                </span>
              </p>
              <p className="m-1">
                <span className="fw-bold"> RxDB:</span>{" "}
                <span>
                  Reactive Database or RxDB is a real-time NoSQL database for
                  JavaScript apps such as progressive web apps,
                </span>
              </p>
              <p className="m-1">
                <span className="fw-bold"> Flutter:</span>{" "}
                <span>
                  Flutter is another open-source app development framework but
                  it's part of the Google family of software just like Firebase
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <h3 className="fw-bold text-primary">
              What other services does firebase provide other than
              authentication?
            </h3>
            <h5>
              There are many services which Firebase provides, Most useful of
              them are:
            </h5>
            <ul>
              <li>Cloud Firestore</li>
              <li>Cloud Functions</li>
              <li>Hosting</li>
              <li>Cloud Storage</li>
              <li>Google Analytics</li>
              <li>Predictions</li>
              <li>Cloud Messaging</li>
              <li>Dynamic Links</li>
              <li>Remote Config</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
