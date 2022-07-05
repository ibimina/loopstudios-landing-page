
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const navList = ["About", "Careers", "Events", " Products", "Support"];
  const title = " Immersive experiences that deliver";
  const subtitle = "The leader in interactive VR";
  const details =
    " Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.";
   const creation ="Our creations"

   const seeAll= "See all"

   const creationList=["Deep earth","Night arcade","Soccer team VR","The grid","from up above","Pocket borealis", "The curiosity"," Make it fisheye"]

   const footerText="© 2021 Loopstudios. All rights reserved."

  return (
    <div className="App">
      <Header navlist={navList} title={title} />
      <Main
        subtitle={subtitle}
        intro={details}
        creation={creation}
        seeAll={seeAll}
        creationList={creationList}
      />
      <Footer navlist={navList} footerText={footerText}/>
    </div>
  );
}

export default App;
