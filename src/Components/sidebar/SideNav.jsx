
import SideNavItem from "./SideNavItem";

function SideNav() {
    return (
        
        <div className="side-nav">
           <ul>
            <SideNavItem heading="Import Fale" text="Browser and upload" />
            <SideNavItem heading="Data Mapping" text="Select and mapp it"  />
            <SideNavItem heading="Entity Mapping" text="Choose the name" />
            <SideNavItem heading="Summery" text="Review and confirm" />
           </ul>
        </div>
        
    )
}


export default SideNav;