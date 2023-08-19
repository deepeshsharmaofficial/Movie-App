import {Component} from "react";
class Navbar extends Component {
    render() {
        return (
            <>
            <div style={{ width: "100%",
                        height: 70,
                        background: "red",
                        justifyContent: "space-between"}}>
                <div>Title</div>
                <div>
                    <img src="" alt="Cart Icon" />
                    <span>0</span>
                </div>
            </div>
            </>
        )
    }
}
export default Navbar;