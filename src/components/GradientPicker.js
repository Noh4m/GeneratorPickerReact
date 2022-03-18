import React, {useState} from 'react';

const GradientPicker = () => {
    const [color, setColor] = useState()
    const [color2, setColor2] = useState()
    const [colorBp, setColorBp] = useState()
    const [color2Bp, setColor2Bp] = useState()
    const test = `linear-gradient(to right,`+ color+ " " + colorBp+`%` +`,` + color2 + " " + color2Bp+`%` +` )`

    const handleChangeColor = e => {
        setColor( e.target.value)
    }
    const handleChangeColorBp = e => {
        setColorBp(e.target.value)
        console.log(colorBp)
    }
    const handleChangeColor2Bp = e => {
        setColor2Bp(e.target.value)
        console.log(color2Bp)
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
                        <input type="range" className="w-100"  onChange={handleChangeColorBp}/>
                    </div>
                </div>
                    <div className="card w-50 m-5 ">
                        <div className="card-body">
                            <input type="color" className="w-100"  onChange={handleChangeColor2}/>
                            <input type="range" className="w-100"  onChange={handleChangeColor2Bp}/>
                        </div>
                    </div>
            </div>

            <div className=" border border-dark w-10" style={{ backgroundImage: test , height: "300px" }}>

            </div>

            <p> {test}</p>

        </>


    );
};

export default GradientPicker;