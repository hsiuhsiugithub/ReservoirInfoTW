import React from 'react'
import Item from '../Item'
import {apiReservoirRequest} from '../../api'

export default function List() {
    const initReservoirList = []
    const [reservoirList, setReservoirList] = React.useState(initReservoirList);


    React.useEffect(() => {
        apiReservoirRequest().then(
            response => {
                const dataObject = response.data[0];
                const reservoirNameList = ['新山水庫', '翡翠水庫', '石門水庫', '永和山水庫', '寶山水庫', '寶山第二水庫', '明德水庫', '鯉魚潭水庫'
                    , '德基水庫', '石岡壩', '日月潭水庫', '霧社水庫', '湖山水庫', '仁義潭水庫', '蘭潭水庫'
                    , '白河水庫', '曾文水庫', '烏山頭水庫', '南化水庫', '阿公店水庫', '牡丹水庫'] //21個水庫

                let newReservoirList = []
                //初始化圖表
                for (let i = 0; i < Object.keys(dataObject).length; i++) {

                    newReservoirList = [...newReservoirList,
                    {
                        id:i,
                        name: reservoirNameList[i], //水庫名稱
                        percentage: dataObject[reservoirNameList[i]]['percentage'], //滿水位百分比
                        volumn: dataObject[reservoirNameList[i]]['volumn'], //有效蓄水量
                        updateAt: dataObject[reservoirNameList[i]]['updateAt'], //更新時間
                    }
                    ]


                }

                setReservoirList(newReservoirList)
            },
            error => {
            }
        )       
    }, [])



    return (
        <div id="content">
            {
                reservoirList.map((reservoir) => {
                    return(<Item
                        key={reservoir.id}
                        reservoir={reservoir}
                    />)
                    
                })
            }

        </div>
    )
}
