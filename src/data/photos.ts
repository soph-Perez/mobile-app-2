import { ImageSourcePropType } from 'react-native';

export interface Photo {
  id: number;
  image: ImageSourcePropType;
}

export const fypPhotos: Photo[] = [
  {
    id: 1,
    image: require("../../assets/images/posts/fyp-gothpork1.jpeg")
  },
  {
    id: 2,
    image: require("../../assets/images/posts/fyp-gothpork2.jpeg")
  },
  {
    id: 3,
    image: require("../../assets/images/posts/fyp-gothpork3.jpeg")
  },
  {
    id: 4,
    image: require("../../assets/images/posts/fyp-gothpork4.jpeg")
  },
  {
    id: 5,
    image: require("../../assets/images/posts/fyp-gothpork5.jpeg")
  },
  {
    id: 6,
    image: require("../../assets/images/posts/fyp-gothpork6.jpeg")
  },
  {
    id: 7,
    image: require("../../assets/images/posts/fyp-gothpork7.jpeg")
  },
  {
    id: 8,
    image: require("../../assets/images/posts/fyp-gothpork8.jpeg")
  },
  {
    id: 9,
    image: require("../../assets/images/posts/fyp-gothpork9.jpeg")
  },
]

export const personalPhotos: Photo[] = [
  {
    id: 1,
    image: require("../../assets/images/posts/post-johnpork1.jpeg")
  },
  {
    id: 2,
    image: require("../../assets/images/posts/post-johnpork2.jpeg")
  },
  {
    id: 3,
    image: require("../../assets/images/posts/post-johnpork3.jpeg")
  },
  {
    id: 4,
    image: require("../../assets/images/posts/post-johnpork4.jpeg")
  },
  {
    id: 5,
    image: require("../../assets/images/posts/post-johnpork5.jpeg")
  },
  {
    id: 6,
    image: require("../../assets/images/posts/post-johnpork6.jpeg")
  },
]