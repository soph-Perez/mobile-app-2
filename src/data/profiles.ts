import { ImageSourcePropType } from 'react-native';

export interface Profile {
  id: number;
  image: ImageSourcePropType;
  username: String;
}

export const generalProfiles: Profile[] = [
  {
    id: 1,
    image: require("../../assets/images/pfps/pfp-blackpork.jpeg"),
    username: "chad_pork"
  },
  {
    id: 2,
    image: require("../../assets/images/pfps/pfp-girlpork.jpeg"),
    username: "girlyP0rk"
  },
  {
    id: 3,
    image: require("../../assets/images/pfps/pfp-lindapork.jpeg"),
    username: "linda_pork"
  },
]

export const personalProfiles: Profile[] = [
  {
    id: 1,
    image: require("../../assets/images/pfps/add-highlight.jpg"),
    username: "New"
  },
  {
    id: 2,
    image: require("../../assets/images/pfps/pfp-highlight1.jpeg"),
    username: "soundcloud"
  },
  {
    id: 3,
    image: require("../../assets/images/pfps/pfp-highlight2.jpg"),
    username: "porksexy"
  },
  {
    id: 4,
    image: require("../../assets/images/pfps/pfp-highlight3.jpg"),
    username: "texasLover"
  },
]