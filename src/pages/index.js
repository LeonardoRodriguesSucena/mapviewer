import MapComponent from "../components/Map"
import LayoutComponent from '../components/Layout'


export default function MapPage(){
  return(
    <LayoutComponent content={<MapComponent/>}/>
  )
}
