interface IMarkerEntity {
    id: string;
    lat: number;
    lng:  number;
    easting?: number;
    northing?: number;
    meta_depth?: number;
    meta_layer?: number;
}

class MarkerEntity implements IMarkerEntity
{
    id: string;
    lat: number;
    lng: number;
    easting?: number;
    northing?: number;
    meta_depth?: number;
    meta_layer?: number;
    
    constructor(
        id: string,
        lat: number,
        lng: number,
        easting?: number,
        northing?: number,
        meta_depth?: number,
        meta_layer?: number
        )
    {
        this.id = id;
        this.lat = lat,
        this.lng = lng,
        this.easting = easting,
        this.northing = northing,
        this.meta_depth = meta_depth,
        this.meta_layer = meta_layer

    }

}

export default MarkerEntity;
