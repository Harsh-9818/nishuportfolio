import Intro from "../components/Desc";
import Footer from "../components/Footer";
export default function Home(){
    return(
        <div className="min-h-screen flex flex-col justify-evenly">
            <Intro/>
            <Footer/>
        </div>
    )
}