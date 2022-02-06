import "./App.css";
import BookContainer from "./components/Book/BookContainer";
import AddForm from "./components/AddForm/AddForm";
import Header from "./components/Header/Header";

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className='container mt-3'>
        <AddForm />
        <BookContainer />
      </div>
    </div>
  );
}

export default App;

// json-server -p 3005 --watch db.json
