import Main from "./Main"

export default function Hero({ button, title, description, image}) {

  return (  
    <Main>
    <div className="grid grid-cols-4 gap-4 mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div className="col-span-3 sm:text-center lg:text-left">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">{title}</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
        {description}
      </p>
      {button ? <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
           <a
            href={button.url}
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
          >
            {button.text}
          </a>
        </div>
       

      </div> : ''}

    </div>
    {image && <div className="mt-10 sm:mt-0">
      <img className="height-auto lg:mt-0 " src={image} alt="" />
    </div>}
  </div></Main>)
}
   
   
export function FullHero(props) {
  // Full width stripe with a large image to the right and title and description and buttons on the left
  return (<>
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="self-center sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">{props.title}</span>
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            {props.description}
          </p>
          {props.button ? <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
           <a
            href={props.button.url}
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
          >
            {props.button.text}
          </a>
        </div>
       

      </div> : ''}
        </div>
        
        {props.image && <div className="lg:col-span-6 self-stretch overflow-hidden">
      <img className="h-full w-full object-cover object-center" src={props.image} alt="" />
    </div>}
      </div>
    </div>
  </>)
}