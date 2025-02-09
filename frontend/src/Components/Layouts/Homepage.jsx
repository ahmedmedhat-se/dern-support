// Importing Components
import Services from "../Services";
import Installations from "../Installations";
import ContactUs from "../ContactUs";

function Homepage() {
    return (
        <>
            <div className="homepage">
                <Services />
                <Installations />
                <ContactUs />
            </div>
        </>
    );
}

export default Homepage;
