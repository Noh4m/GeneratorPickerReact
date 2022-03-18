import React, {useState} from 'react';

const GradientPicker = () => {
    const [color, setColor] = useState()
    const [color2, setColor2] = useState()
    const [color3, setColor3] = useState()
    const [colorBp, setColorBp] = useState()
    const [color2Bp, setColor2Bp] = useState()
    const [color3Bp, setColor3Bp] = useState()
    const [ratotion, setRatotion] = useState()
    const test = `linear-gradient(`+ratotion+`deg`+`,`+ color+ " " + colorBp+`%` +`,` + color2 + " " + color2Bp+`%` +`,`+ color3 + " " + color3Bp+`%` + ` )`

    const handleChangeColor = e => {
        setColor( e.target.value)
    }

    const handleChangeColor2 = e => {
        setColor2( e.target.value)
    }
    const handleSetRatotion = e => {
        setRatotion( e.target.value)
    }
    const handleChangeColor3 = e => {
        setColor3( e.target.value)
    }

    const handleChangeColorBp = e => {
        setColorBp(e.target.value)

    }

    const handleChangeColor2Bp = e => {
        setColor2Bp(e.target.value)
    }

    const handleChangeColor3Bp = e => {
        setColor3Bp(e.target.value)
    }




    return (
        <>
            <div className="row row-cols-2">
                <div className="col">
                    <div className="card m-2">
                        <div className="card-body">
                            <input type="color" className="w-100"  onChange={handleChangeColor}/>
                            <p>BreakPoint 1</p>
                            <input type="range" className="w-100"  onChange={handleChangeColorBp}/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2">
                        <div className="card-body">
                            <input type="color" className="w-100"  onChange={handleChangeColor2}/>
                            <p>BreakPoint 2</p>
                            <input type="range" className="w-100"  onChange={handleChangeColor2Bp}/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2">
                        <div className="card-body">
                            <input type="color" className="w-100"  onChange={handleChangeColor3}/>
                            <p>BreakPoint 3</p>
                            <input type="range" className="w-100"  onChange={handleChangeColor3Bp}/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2">
                        <div className="card-body">
                            <p>Rotation</p>
                            <input type="range" className="w-100" min="0" max="360"   onChange={handleSetRatotion}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" border border-dark w-10" style={{ backgroundImage: test , height: "300px" }}>

            </div>

            <p> Background-color: {test}</p>

        </>


    );
};

export default GradientPicker;