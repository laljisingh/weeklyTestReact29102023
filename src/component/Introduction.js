
import ProgressBar from "react-bootstrap/ProgressBar";
function Introduction(){
    return(
        <div className="right-part">
        {/* navbar */}
        <div className="navBar-container">
            <div className="navBar-left-part">
                <p>About me</p>
            </div>
            <div className="navBar-right-part">
                <a href="#" style={{ color: "rgb(225, 198, 24)" }}>About</a>
                <a href="#">Certificate</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </div>
        </div>
        {/* next about us */}
        <div className="about-content">
            <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary, makin
            </p>
        </div>   
        


        {/* primary focus section */}
        <p className="primary-content">Primary Focus</p>
        <div className="focus-container">
            <div className="d1">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/icon-dev.svg"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Hi i am gooed guys</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form,{" "}
                    </p>
                </div>
            </div>
            <div className="d2">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/icon-app.svg"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Hi i am gooed guys</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form,{" "}
                    </p>
                </div>
            </div>
        </div>
        <div className="focus-container">
            <div className="d1">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/icon-frameworks.svg"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Hi i am gooed guys</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form,{" "}
                    </p>
                </div>
            </div>
            <div className="d2">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/icon-marketing.svg"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Hi i am gooed guys</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form,{" "}
                    </p>
                </div>
            </div>
        </div>
        {/* exporer creativiti section */}
        <p className="primary-content">Exploring Creativity</p>
        <div className="focus-container">
            <div className="d1">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/icon-video.svg"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Visual Storytelling</h1>
                    <p>
                        Taking and editing photos or videos that tell engaging
                        stories, bringing concepts and ideas to life visually.
                    </p>
                </div>
            </div>
            <div className="d2">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/icon-multimedia.svg"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Hi i am gooed guys</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form,{" "}
                    </p>
                </div>
            </div>
        </div>
        {/* programmimg section */}
        <p className="primary-content">Programming Languages</p>
        <div className="programmimg-section">
            <div>
                <label>Java Script 80%</label>
                <ProgressBar
                    className="progress"
                    striped
                    variant="warning"
                    now={80}
                />
                <label>CSS 60%</label>
                <ProgressBar variant="warning" now={60} />
                <label>Java 60%</label>
                <ProgressBar striped variant="warning" now={60} />
                <label>HTML 100%</label>
                <ProgressBar striped variant="warning" now={100} />
                <label>Spring Boot 60%</label>
                <ProgressBar striped variant="warning" now={60} />
            </div>
        </div>
        {/* Human Language section */}
        <p className="primary-content">Human Languages</p>
        <div className="programmimg-section">
            <div>
                <label>Hindi 100%</label>
                <ProgressBar
                    className="progress"
                    striped
                    variant="warning"
                    now={100}
                />
                <label>English 80%</label>
                <ProgressBar striped variant="warning" now={80} />
                <label>Bhojpuri 90%</label>
                <ProgressBar striped variant="warning" now={90} />
                <label>Marathi 0%</label>
                <ProgressBar striped variant="warning" now={0} />
                <label>Bengali 0%</label>
                <ProgressBar striped variant="warning" now={0} />
            </div>
        </div>
        {/* development skills */}
        <p className="primary-content">Development Skills</p>
        <div className="development-section">
            <div>
                <div class="marquee">
                    <div className="scrolla-bar">
                        <img src="https://oktayshakirov.com/assets/images/npm.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/git.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/html.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/css.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/react.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/npm.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/git.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/html.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/css.png"></img>
                        <img src="https://oktayshakirov.com/assets/images/react.png"></img>
                    </div>
                </div>
            </div>
        </div>
        {/* favorite activity */}

        <p className="primary-content">Exploring Creativity</p>
        <div className="activity">
            <div className="d1">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/finances.png"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Visual Storytelling</h1>
                    <p>
                        Taking and editing photos or videos that tell engaging
                        stories, bringing concepts and ideas to life visually.
                    </p>
                </div>
            </div>
            <div className="d2">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/music.png"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Hi i am gooed guys</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form,{" "}
                    </p>
                </div>
            </div>
        </div>
        <div className="activity">
            <div className="d1">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/traveling.png"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Visual Storytelling</h1>
                    <p>
                        Taking and editing photos or videos that tell engaging
                        stories, bringing concepts and ideas to life visually.
                    </p>
                </div>
            </div>
            <div className="d2">
                <div className="logo-part">
                    <img
                        src="https://oktayshakirov.com/assets/images/camera.png"
                        alt="ghg"
                    ></img>
                </div>
                <div className="desc">
                    <h1>Hi i am gooed guys</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form,{" "}
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Introduction;