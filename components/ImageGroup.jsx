import FeaturedImage from "./FeaturedImage";

export default function ImageGroup({ images }) {
  return (
    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <FeaturedImage
        aspectWidth={3}
        aspectHeight={2}
        alt={images[0].alt}
        src={images[0].url}
      />
    </div>
  );
}
