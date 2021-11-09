import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2cmFodWwiLCJhIjoiY2t2b3gzNGZuMHU5djJ3cWhudTVtdWRxNyJ9.__hm1gQQxwjfBY2OZwcdpg';

const Map = () => {
    
    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [78.9629,20.5937],
          zoom:4,
          });
      },[])


    return(
        <Wrapper id='map'>map</Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`