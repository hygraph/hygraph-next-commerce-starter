import Stars from "./Stars"


export default function Review({ review }) {
    const { name, rating, content, _ts } = review
    const date = new Date(_ts / 1000)
    return (<section className="lg:grid grid-cols-4 py-5">
        <div className="lg:order-2">
            <Stars rating={rating} />
        </div>
        <div className="lg:order-1">
            {/* name and date */}
            <p className="text-base text-gray-900 font-semibold">{name}</p>
            <p className=" text-gray-600 font-light mt-2">{date.toLocaleDateString('en-GB')}</p>
        </div>
        <div className="col-span-2 lg:order-3">
            {/* content body */}
            <p className="text-base text-gray-900 font-light">{content}</p>
        </div>
    
    </section>)
}