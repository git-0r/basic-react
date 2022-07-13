import { Component, SyntheticEvent } from "react";
import Styles from "./form1.module.css";

type prevState = {
  email: {
    value: string;
    isValid: boolean;
    errorTxt: string;
  };
  password: {
    value: string;
    isValid: boolean;
    errorTxt: string;
    isVisible: boolean;
  };
};

export class Form1 extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: {
        value: "",
        isValid: true,
        errorTxt: "",
      },
      password: {
        value: "",
        isValid: true,
        errorTxt: "",
        isVisible: false,
      },
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }

  handleEmailChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    this.setState((prev: prevState) => ({
      ...prev,
      email: {
        ...prev.email,
        value: target.value,
      },
    }));
  }

  handlePasswordChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    this.setState((prev: prevState) => ({
      ...prev,
      password: {
        ...prev.password,
        value: target.value,
      },
    }));
  }

  handleFormSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const userEmail = this.state.email.value;
    const userPassword = this.state.password.value;
    if (!userEmail) {
      this.setState((prev: prevState) => ({
        ...prev,
        email: {
          ...prev.email,
          isValid: false,
          errorTxt: "Email field required!",
        },
      }));
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
    ) {
      this.setState((prev: prevState) => ({
        ...prev,
        email: {
          ...prev.email,
          isValid: false,
          errorTxt: "Invalid email ID!",
        },
      }));
    } else {
      this.setState((prev: prevState) => ({
        ...prev,
        email: {
          ...prev.email,
          isValid: true,
          errorTxt: "",
        },
      }));
    }

    if (!userPassword) {
      this.setState((prev: prevState) => ({
        ...prev,
        password: {
          ...prev.password,
          isValid: false,
          errorTxt: "Password field required!",
        },
      }));
    } else if (
      !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]){10,12}$/.test(
        userPassword
      )
    ) {
      this.setState((prev: prevState) => ({
        ...prev,
        password: {
          ...prev.password,
          isValid: false,
          errorTxt:
            "Invalid password value. Password should have atleast 10 chars, atmost 12 chars, 1 number, 1 special character",
        },
      }));
    } else {
      this.setState((prev: prevState) => ({
        ...prev,
        password: {
          ...prev.password,
          isValid: true,
          errorTxt: "",
        },
      }));
    }
  }

  togglePassword() {
    this.setState((prev: prevState) => ({
      ...prev,
      password: {
        ...prev.password,
        isVisible: !prev.password.isVisible,
      },
    }));
  }

  render() {
    return (
      <main className={Styles.form_container}>
        <header>
          <h1>Form-1 (Validation on Submit)</h1>
        </header>
        <div>
          <form className={Styles.form} onSubmit={this.handleFormSubmit}>
            <div className={Styles.input_container}>
              <label htmlFor="email1">Email Address</label>
              <div className={Styles.input_wrapper}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
                  </svg>
                </div>
                <input
                  onChange={this.handleEmailChange}
                  formNoValidate
                  type="email"
                  name="email"
                  id="email1"
                  placeholder="Username@gmail.com"
                />
              </div>
            </div>
            {!this.state.email.isValid && (
              <p className={Styles.error}>{this.state.email.errorTxt}</p>
            )}
            <div className={Styles.input_container}>
              <label htmlFor="password1">Password</label>
              <div className={Styles.input_wrapper}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z" />
                  </svg>
                </div>
                <input
                  onChange={this.handlePasswordChange}
                  formNoValidate
                  type={this.state.password.isVisible ? "text" : "password"}
                  name="password"
                  id="password1"
                  placeholder="enter your password..."
                />
                <div
                  onClick={this.togglePassword}
                  className={Styles.password_toggle}
                >
                  {this.state.password.isVisible ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {!this.state.password.isValid && (
              <p className={Styles.error}>{this.state.password.errorTxt}</p>
            )}
            <button className={Styles.submit_button}>Login</button>
          </form>
        </div>
      </main>
    );
  }
}
