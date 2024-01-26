import Primary from "./Primary";
import Secondary from "./Secondary";
import Tertiary from "./Tertiary";

export default function Education() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="mb-10 lg:mb-0">
          <h1 className="mb-5 text-3xl font-medium text-gray-700 md:text-4xl">
            Education
          </h1>

          <p className="text-xs font-normal text-gray-500 md:text-base">
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
