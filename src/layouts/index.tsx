import React, { FunctionComponent } from "react";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <main>
      <nav>Navbar</nav>
      {children}
      <footer>Footer</footer>
    </main>
  );
};

export default Layout;
