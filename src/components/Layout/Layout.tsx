import React, { useEffect, useState } from "react";
import GlobalStyle from "style/GlobalStyle";

const Layout: React.FC = ({ children }) => {
  const [isMounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div className={isMounted ? "mounted" : ""}>
      <GlobalStyle />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
