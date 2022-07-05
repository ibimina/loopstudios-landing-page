import vrimage from "./../assets/images/mobile/image-interactive.jpg"
import vrimageDesktop from "./../assets/images/desktop/image-interactive.jpg"


export default function Intro(props) {
  const {subtitle,details}=props
  return (
    <div>

      <div className="vr">
       
        <picture className="vr-image">
          <source media="(min-width:70rem )" srcset={vrimageDesktop} />
          <img src={vrimage} alt="a man using an interactive vr" className="vr-image" />
        </picture>
        <div className="leader-box">
          <h3 className="subtitle">{subtitle}</h3>
          <p className="details">{details}</p>
        </div>
      </div>
    </div>
  );
}
