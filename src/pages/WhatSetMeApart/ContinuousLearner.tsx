import { RefreshCw } from "react-feather";

export default function ContinuousLearner() {
  return (
    <div className="bg-gray-50 px-8 py-10 rounded-md">
      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
        <RefreshCw />
      </div>

      <h4 className="font-medium text-gray-700 text-lg mb-4">
        Continuous Learner
      </h4>

      <p className="font-normal text-gray-500 text-md">
        The tech world evolves at warp speed, and I'm always hungry to learn new
        technologies and stay ahead of the curve. Learning is not a destination
        but a journey.
      </p>
    </div>
  );
}
