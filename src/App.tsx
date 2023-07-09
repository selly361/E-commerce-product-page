import { Cart, Header, Main, Overlay, ImageModal, MobileMenu } from "components";

import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <Main />
      <Overlay />
      <ImageModal />
      <MobileMenu />
    </Fragment>
  );
}

export default App;
