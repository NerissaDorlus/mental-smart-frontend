import Footer from "../common/Footer";
import NavBar from "../common/NavBar";
import cook from "../assets/cook.png"
import goleman from "../assets/goleman.png"
import lubetzky from "../assets/lubetzky.png"
import nadella from "../assets/nadella.png"


const Landing = () => {
    return(
        <>
        <NavBar />
        <div className="quotes">
        <img
              src={goleman}
              alt="quote from Goleman"
              className="goleman"
            />
             <img
              src={lubetzky}
              alt="quote from ceo Daniel Lubetzky about empathy"
              className="lubetzky"
            />
             <img
              src={cook}
              alt="quote from ceo Tim Cook about empathy"
              className="cook"
            />
             <img
              src={nadella}
              alt="quote from ceo Satya Nadella about empathy"
              className="nadella"
            />
</div>
        {/* <p>
        People will try to convince you that you should keep your empathy out of your career. Don’t accept this false premise. Tim Cook, CEO of Apple      
        </p>
        <p>
        Empathy is one of our greatest tools of business that is most underused. Daniel Lubetzky, CEO of snack company Kind LLC    
        </p>
        <p>
            Without empathy it is not possible to get the best from your team, so for this reason it is the key to everything. Satya Nadella, CEO of Microsoft
        </p> */}


        <Footer />
        </>
    )
}







export default Landing;