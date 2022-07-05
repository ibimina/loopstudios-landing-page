import Creation from "../../shared/Creation";
import Intro from "../../shared/Intro";
import "./main.css"
function Main(props) {
    return ( <main>
    <Intro subtitle={props.subtitle} details={props.intro}/>
    <Creation creation={props.creation} creationList={props.creationList} seeAll={props.seeAll}/>
    </main> );
}

export default Main;