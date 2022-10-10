import React from "react";
import Addition from "./Addition";
import "./App.css";
import Navigation from "./Navigation";
import NewsApiList from "./NewsApiList";
import Contour from "./Contour";

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      currentSection: "news",
      title: "SAI SWAROOP",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this);
  }
  componentDidMount() {
    const appState = localStorage.getItem("appState");
    if (appState) {
      this.setState(JSON.parse(appState));
    }
    window.addEventListener("beforeunload", this.saveStateToLocalStorage);
  }
  saveStateToLocalStorage() {
    localStorage.setItem("appState", JSON.stringify(this.state));
  }
  render() {
    const { currentSection } = this.state;
    const sections = [
      {
        id: "news",
        title: "",
      },
      {
        id: "contour",
        title: "Contour",
      },
      {
        id: "addNumbers",
        title: "Addition",
      },
    ];
    return (
      <div className="container-fluid min-vh-100 p-0">
        <Navigation
          navItems={sections.map((item) => ({
            ...item,
            onClick: () => this.setState({ currentSection: item.id }),
          }))}
          userName={this.state.title}
          onUserNameChange={(title) => this.setState({ title })}
        />
        <div className="container-fluid pt-4">
          {currentSection === "news" && (
            <div className="container mb-3 align-center">
              <h3 class="row justify-content-center">Hello {this.state.title}!!</h3>
              <h3 class="row justify-content-center">Newest Headline's.</h3>
            </div>
          )}
          {currentSection === "news" && <NewsApiList />}
          {currentSection === "contour" && (
            <Contour
              title={this.state.title}
              about={this.state.about}
              onNameChange={(title) => this.setState({ title })}
              onAboutChange={(about) => this.setState({ about })}
            />
          )}
          {currentSection === "addNumbers" && <Addition />}
        </div>
      </div>
    );
  }
}

export default App;
