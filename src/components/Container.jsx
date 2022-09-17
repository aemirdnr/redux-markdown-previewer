import Footer from "./Footer";
import Header from "./Header";
import Input from "./Input";
import Preview from "./Preview";

function Container() {
  return (
    <div className="container h-100 d-flex flex-column align-items-center">
      <Header />
      <div className="d-flex align-items-center justify-content-center h-100 w-100 gap-4 my-4">
        <Input />
        <Preview />
      </div>
      <Footer />
    </div>
  );
}

export default Container;
