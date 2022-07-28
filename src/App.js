import FormPage from "./components/form/Form";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <ToastContainer />
      <FormPage />
    </div>
  );
}

export default App;
