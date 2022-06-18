import "../styles/footer.css"

export default function Footer(){
    return (
      <footer className="footer-container">
        <p className="footer">
          {" "}
          Mental Smart &copy; {new Date().getFullYear()} | Made With 💕 by
          Nerissa Dorlus{" "}
        </p>
      </footer>
    );
}