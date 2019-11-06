import gordon from '../assets/images/gordon.jpg';
import joker from '../assets/images/joker.jpg';
import matrix from '../assets/images/matrix.jpg';
import glad from '../assets/images/glad.jpg';
import walker from '../assets/images/walker.jpg';

import defaultPalette from './defaultPalette';
import buildDefaultOverrides from './defaultOverrides';

const images = {
  banners: {
    Cover: glad,
    Career: matrix,
    Comedy: joker,
    Commerce: gordon,
  },
  profile: walker,

};

const palette = {
  mainBackground: defaultPalette.gray.f5,
  // backgroundTile:
  ...defaultPalette
}

const defaultOverrides = buildDefaultOverrides(palette);

const overrides = {
  ...defaultOverrides
};


const edgeLord = {
  images,
  palette,
  overrides,
};

export default edgeLord;