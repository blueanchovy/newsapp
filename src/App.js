import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route
              index
              element={
                <News
                  key="default"
                  pageSize={15}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/Business"
              element={
                <News
                  key="business"
                  pageSize={15}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/General"
              element={
                <News
                  key="general"
                  pageSize={15}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={15}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/Science"
              element={
                <News
                  key="science"
                  pageSize={15}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/Sports"
              element={
                <News
                  key="sports"
                  pageSize={15}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/Health"
              element={
                <News
                  key="health"
                  pageSize={15}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/Technology"
              element={
                <News
                  key="technology"
                  pageSize={15}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
