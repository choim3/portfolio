import ".././css/home.css";
export default function Home() {
  return (
    <div className=" parent-grid">
      <header className="header"> Matthew Choi </header>
      <div className="name-container">
        <h1 className="name"> Matthew Choi </h1>
        <button> View Projects </button>
      </div>
      <div className="button-containers">
        <button className="btn-1"> LinkedIn </button>
        <button className="btn-2"> Github </button>
        <button className="btn-3"> Medium </button>
        <button className="btn-4"> Resume </button>
        <button className="btn-5"> Contact </button>
      </div>
      <footer className="footer">foot</footer>
    </div>
  );
}
