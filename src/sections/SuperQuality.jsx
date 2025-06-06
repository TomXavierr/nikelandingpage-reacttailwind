import Button from "../components/Button"
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide you
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quailty</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmantched
          quality, innovation, and a touch of elegence.
        </p>
        <div className="mt-11 ">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality
