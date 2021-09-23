import React from 'react'
import LiquidFillGauge from 'react-liquid-gauge';


export default function Item(props) {

    const {reservoir} = props;
    const [config, setConfig] = React.useState({
        
        circleColor: "#178BCA",
        textColor: "#045681",
        waveTextColor: "#A4DBf8",
        waveColor: "#178BCA"
    });
    if (reservoir.percentage < 25) {

        setConfig(
            {
                circleColor: "FF7777",
                textColor: "#FF4444",
                waveTextColor: "FFAAAA",
                waveColor: "#FFDDDD"
            }
        )
    }
    else if (reservoir.percentage < 50) {
        setConfig(
            {
                circleColor: "rgb(255, 160, 119)",
                textColor: "rgb(255, 160, 119)",
                waveTextColor: "rgb(255, 160, 119)",
                waveColor: "rgba(245, 151, 111, 0.48)"
            }
        )
    }


    return (
        <div className="reservoir">
            <h3>{reservoir.name}</h3>
            <LiquidFillGauge
                id={reservoir.id}
                width={100}
                height={100}
                textSize = {0.75}
                waveFrequency={2}
                value={reservoir.percentage}
                waveAnimation
                riseAnimation
                circleStyle={{
                    fill: config.circleColor
                }}
                textStyle={{
                    fill: config.textColor,
                    fontFamily: 'Arial'
                }}
                waveTextStyle={{
                    fill: config.waveTextColor,
                    fontFamily: 'Arial'
                }}
                
                waveStyle={{
                    fill: config.waveColor
                }}
            />
            <div>有效蓄水量:{reservoir.volumn}</div>
            <div>更新時間:{reservoir.updateAt}</div>
        </div>
    )
}
