import { Cart, Header, Main, Overlay, ImageModal } from "components";

import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <Main />
      <Overlay />
      <ImageModal />
    </Fragment>
  );
}

export default App;
