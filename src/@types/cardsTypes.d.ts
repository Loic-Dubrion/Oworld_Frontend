export default interface CardProfilProps {
  id: number;
  imgUrl: string;
  activeImgUrl: string;
  gitUrl: string;
  title: string;
  role: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}
