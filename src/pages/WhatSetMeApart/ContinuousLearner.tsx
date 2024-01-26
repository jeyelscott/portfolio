import { RefreshCw } from "react-feather";

export default function ContinuousLearner() {
  return (
    <div className="rounded-md bg-gray-50 px-8 py-10">
      <div className="mb-4 flex w-20 justify-center rounded-md bg-gray-100 py-6">
        <RefreshCw />
      </div>

      <h4 className="mb-4 text-lg font-medium text-gray-700">
        Continuous Learner
      </h4>

      <p className="text-md font-normal text-gray-500">
        The tech world evolves at warp speed, and I&apos;m always hungry to
        learn new technologies and stay ahead of the curve. Learning is not a
        destination but a journey.
      </p>
    </div>
  );
}
