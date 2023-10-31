import "./About.css";
import "./Introduction.js";
import "./LeftPart.js";
import Introduction from "./Introduction.js";
import LeftPart from "./LeftPart.js";

function About() {
    return (
        <>
            <div className="main">
                <LeftPart />
                <Introduction/>

            </div>
        </>
    );
}

export default About;
