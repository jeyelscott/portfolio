import { Activity } from "react-feather";
export default function InnovativeProblemSolver() {
  return (
    <div className="rounded-md bg-gray-50 px-8 py-10">
      <div className="mb-4 flex w-20 justify-center rounded-md bg-gray-100 py-6">
        <Activity />
      </div>

      <h4 className="mb-4 text-lg font-medium text-gray-700">
        Innovative Problem Solver
      </h4>

      <p className="text-md font-normal text-gray-500">
        I enjoy tackling complex problems and turning them into elegant
        solutions. I believe every challenge is an opportunity for growth.
      </p>
    </div>
  );
}
