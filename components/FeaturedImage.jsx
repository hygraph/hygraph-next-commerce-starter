
export default async function FeaturedImage({aspectWidth, aspectHeight, src, alt}) {

    return (<div className={`flex imageWrap block aspect-w-${aspectWidth} aspect-h-${aspectHeight} overflow-hidden rounded-lg`}>
    <img src={src} className="object-cover object-center" alt={alt} />
</div>
)
}