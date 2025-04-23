import { YMaps, Map } from '@pbe/react-yandex-maps';
import "./maps2.css"
const Maps2 = () => (
  <YMaps>
    <div>
      <Map className='wrapper' defaultState={{ center: [40.790904650044304, 72.34895946165963], zoom: 19 }} />
    </div>
  </YMaps>
);

export default Maps2