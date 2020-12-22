import React from 'react';

import {CloseOutlined, PushpinOutlined} from "@ant-design/icons"
import {Button} from "antd";

import styles from './Ads.module.css'

const Ads = ({followAd, unfollowAd, requestRooms, ...props}) => {

    if (props.rooms.length === 0) {
        requestRooms()
    }

    return (<div className={styles.adPage}>

            {props.rooms.map(r =>
                <div key={r.id} className={styles.ad}>
                    {<div>
                        {r.followed
                            ? <Button danger shape={'round'} onClick={() => {
                                unfollowAd(r.id)
                            }}> <CloseOutlined/>Удалить из избранного</Button>
                            : <Button type={'primary'} shape={'round'} ghost onClick={() => {
                                followAd(r.id)
                            }}> <PushpinOutlined/>Добавить в избранное</Button>}
                    </div>
                    }
                    <div className={styles.newTitile}>{`Номер объявления:  ${r.id}`}</div>
                    <div className={styles.newTitile}><b>Описание объявления:</b>
                        <div>{r.type === 'flat' && 'Квартира'} {`${r.attributes.title}`}</div>
                        <div>{`Количество комнат: ${r.attributes.rooms}`}</div>
                    </div>
                    <div className={styles.newTitile}>
                        <b>Информация о доме:</b>
                        <div>{r.attributes.address.city === 'Tyumen' && 'город Тюмень'}</div>
                        <div>улица {r.attributes.address.street}</div>
                        <div>Номер дома: {r.attributes.address.house}</div>
                        <div>Номер квартиры: {r.attributes.address.room}</div>
                        <div>Площадь квартиры: {r.attributes.area} {r.attributes.unit}</div>
                    </div>

                    <div className={styles.newTitile}>
                        <b>Информация о продавце:</b>
                        <div>{r.relationships.type === 'agent' && 'Агентство'}</div>
                        <div>Номер агента: {r.relationships.id}</div>
                        <div>{`Имя агента:
                     ${r.relationships.attributes.last_name} 
                    ${r.relationships.attributes.first_name}  
                     ${r.relationships.attributes.middle_name}`}
                        </div>
                    </div>
                </div>)}
        </div>
    )

}

export default Ads;