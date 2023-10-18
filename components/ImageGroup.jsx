import FeaturedImage from "./FeaturedImage";
// TODO: Add multi image support
export default function ImageGroup({ images }) {
  return (
    <div>
      <FeaturedImage
        aspectWidth={3}
        aspectHeight={2}
        alt={images[0].alt}
        src={images[0].url}
      />
    </div>
  );
}
