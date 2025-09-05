export interface Mass {
  massValue: number;
  massExponent: number;
}

export interface Vol {
  volValue: number;
  volExponent: number;
}

export interface AroundPlanet {
  planet: string;
  rel: string;
}

export interface Moon {
  moon: string;
  rel: string;
}

export interface PlanetaryBody {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  moons: Moon[] | null;
  semimajorAxis: number;
  perihelion: number;
  aphelion: number;
  eccentricity: number;
  inclination: number;
  mass: Mass | null;
  vol: Vol | null;
  density: number;
  gravity: number;
  escape: number;
  meanRadius: number;
  equaRadius: number;
  polarRadius: number;
  flattening: number;
  dimension: string;
  sideralOrbit: number;
  sideralRotation: number;
  aroundPlanet: AroundPlanet | null;
  discoveredBy: string;
  discoveryDate: string;
  alternativeName: string;
  axialTilt: number;
  avgTemp: number;
  mainAnomaly: number;
  argPeriapsis: number;
  longAscNode: number;
  bodyType: string;
  rel: string;
}

export interface PlanetaryData {
  bodies: PlanetaryBody[];
}
