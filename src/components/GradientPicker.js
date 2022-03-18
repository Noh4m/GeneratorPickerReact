import React, {useState} from 'react';

const GradientPicker = () => {
    const [color, setColor] = useState()
    const [color2, setColor2] = useState()

    const handleChangeColor = e => {
        setColor( e.target.value)
    }

    const handleChangeColor2 = e => {
        setColor2( e.target.value)
    }

    return (
        <>
            <div className="d-flex flex-row ">
                <div className="card w-50 m-5 ">
                    <div className="card-body">
                        <input type="color" className="w-100"  onChange={handleChangeColor}/>
                    </div>
                </div>
                    <div className="card w-50 m-5 ">
                        <div className="card-body">
                            <input type="color" className="w-100"  onChange={handleChangeColor2}/>
                        </div>
                    </div>
            </div>

            <div className=" border border-dark w-10" style={{ backgroundImage: `linear-gradient(to right,`+ color + `,`+ color2 + ` )`, height: "300px" }}>

            </div>
        </>


    );
};

export default GradientPicker;