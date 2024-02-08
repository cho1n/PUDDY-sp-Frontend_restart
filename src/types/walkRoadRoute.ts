import { WalkRoadType } from "./walkRoad.ts";

export interface Geometry {
  type: string;
  coordinates: number[] | number[][];
}

export interface Properties {
  totalDistance?: number;
  totalTime?: number;
  index: number;
  pointIndex?: number;
  name: string;
  description: string;
  direction?: string;
  nearPoiName?: string;
  nearPoiX?: string;
  nearPoiY?: string;
  intersectionName?: string;
  facilityType: string;
  facilityName?: string;
  turnType: number;
  pointType: string;
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface FeatureCollection {
  type: string;
  road: WalkRoadType;
  features: Feature[];
}

export interface RouteInfo {
  markerImage: string;
  lng: number;
  lat: number;
  pointType: string;
}
