import Primary from "./Primary";
import Secondary from "./Secondary";
import Tertiary from "./Tertiary";

export default function Education() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-10 lg:mb-0">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base">
            Below is a summary of the schools I studied
          </p>
        </div>

        <div className="space-y-24">
          <Tertiary />
          <Secondary />
          <Primary />
        </div>
      </div>
    </div>
  );
}
