import React from "react";
import { Routes, Route, Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Biller
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flexGrow: 0 }}
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/addbill">
                  Add bill
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
