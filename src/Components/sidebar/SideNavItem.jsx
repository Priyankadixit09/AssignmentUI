import Ellipse from "../../assets/Ellipse.png";
function SideNavItem(props){
    return(
        <li>
        <div className="Ellipse">
            <span className="round">{props.heading}
                <p>{props.text}</p>
            </span>
            <img className="circle" src={Ellipse} alt="" />
        </div>
    </li>
    )
}
export default SideNavItem;