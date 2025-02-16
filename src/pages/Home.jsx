import Footer from "../components/footer";
import Intro from "../components/intro";
export default function Home(){
    return(
        <div className="min-h-screen flex flex-col justify-evenly">
            <Intro/>
            <Footer/>
        </div>
    )
}