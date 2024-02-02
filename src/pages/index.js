import MapComponent from "../components/Map"
import Map2Component from "../components/Map2"
import LayoutComponent from '../components/Layout'


export default function MapPage(){
  return(
    // <LayoutComponent content={<MapComponent/>}/>
    <LayoutComponent content={<Map2Component/>}/>
  )
}
