export const getColor = (se4: string) => {
  if (!e4[se4]) {
    return "";
  }
  return e4[se4].color;
};

const getMarkPosition = (long: number, lat: number) => {
  return {
    markerPosition: {
      long,
      lat,
    },
  };
};

interface E4 {
  color: string;
  markerPosition?: {
    long: number;
    lat: number;
  };
}

export const e4: Record<string, E4> = {
  Townsville: {
    color: "#388de7",
    ...{ ...getMarkPosition(146.816956, -19.258965) },
  },
  "Queensland - Outback": {
    color: "#de8a9e",
    ...{ ...getMarkPosition(139.4930, -20.7264) },
  },
  Cairns: {
    color: "#65d2d7",
    ...{ ...getMarkPosition(145.778061, -16.91855) },
  },
  "Central Queensland": {
    color: "#affd68",
    ...{ ...getMarkPosition(149.666270, -23.720520) },
  },
  "Logan - Beaudesert": {
    color: "#8866a7",
    ...{ ...getMarkPosition(153.109451, -27.639168) },
  },
  "Gold Coast": {
    color: "#123126",
    ...{ ...getMarkPosition(153.399994, -28.016666) },
  },
  Ipswich: {
    color: "#750d38",
    markerPosition: {
      lat: -27.63798,
      long: 152.591843,
    },
  },
  "Mackay - Isaac - Whitsunday": {
    color: "#d79df8",
    ...{ ...getMarkPosition(149.186813, -21.144337) },
  },
  "Wide Bay": {
    color: "#5b657c",
    ...{ ...getMarkPosition(152.043015, -25.510059) },
  },
  "Brisbane - South": {
    color: "#00ffff",
    ...{ ...getMarkPosition(153.068320, -27.572730) },
  },
  "Brisbane Inner City": {
    color: "#d1a23c",
    markerPosition: {
      lat: -27.457251,
      long: 153.033478,
    },
  },
  "Brisbane - West": {
    color: "#640696",
    ...{ ...getMarkPosition(152.940018, -27.507271) },
  },
  "Brisbane - North": {
    color: "#197ae1",
    ...{ ...getMarkPosition(153.038571, -27.359222) },
  },
  "Brisbane - East": {
    color: "#70418e",
    ...{ ...getMarkPosition(153.266667, -27.533333) },
  },
  "Moreton Bay - North": {
    color: "#c8a20f",
    ...{ ...getMarkPosition(152.91589823898528, -27.077196401144445) },
  },
  "Sunshine Coast": {
    color: "#786dd8",
    ...{ ...getMarkPosition(153.0671268719981, -26.649733647914605) },
  },
  Toowoomba: {
    color: "#26dac7",
    ...{ ...getMarkPosition(151.9516652668405, -27.559994127560362) },
  },
  "Moreton Bay - South": {
    color: "#11437f",
    ...{ ...getMarkPosition(152.8300, -27.2500) },
  },
};
