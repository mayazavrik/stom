import React from 'react'
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps'
import './style.css'

const coordinate = [
  [59.900498, 30.312895]
  
]

function DentistryMap(): JSX.Element {
  return (

    <YMaps>
      <Map defaultState={{ center:   [59.900498, 30.312895], zoom: 12 }} width="100%" height="100%">
        <ZoomControl />
        {coordinate.map((area, index) => (
          <Placemark
          key={index}
            geometry={area}
            properties={{
              hintContent: 'Dentist+',
              // eslint-disable-next-line no-useless-concat
              balloonContentHeader: '<a href = "#">Dentist+</a><br>' + '<span class="description">Сеть стоматологических клиник</span>',
              // Зададим содержимое основной части балуна.
              balloonContentBody:
                '<img src="https://avatars.mds.yandex.net/get-altay/4404605/2a000001826e39835e09ac2efd32de0a21b3/XXL" height="150" width="200"> <br/> ' +
                '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                '<b>Ближайшие записи</b>',
              // Зададим содержимое нижней части балуна.
              balloonContentFooter: 'Информация предоставлена:<br/>OOO "Dentist+"',
              // Зададим содержимое всплывающей подсказки.
            }}
            modules={['geoObject.addon.balloon']}
            options={{
              // preset: 'islands#circleIcon',
              preset: 'islands#greenGardenIcon', // список темплейтов на сайте яндекса
              iconColor: 'green', // цвет иконки, можно также задавать в hex
            }}
          />
        ))}
      </Map>
    </YMaps>
 
  )
}

export default DentistryMap;
