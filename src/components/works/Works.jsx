import './works.scss';
import Cards from "./cards/Cards.jsx"

const Works = () => {
    return (
        <>
            <div className="works" id='works'>

                <div className="txt">
                    <h1>
                        Popular Works
                    </h1>
                    <p>There will be a short description here</p>
                </div>

                <Cards />
            </div>
        </>
    )
}

export default Works