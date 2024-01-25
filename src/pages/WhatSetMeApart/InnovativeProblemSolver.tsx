import { Activity } from "react-feather";
export default function InnovativeProblemSolver() {
  return (
    <div className="bg-gray-50 px-8 py-10 rounded-md">
      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
        <Activity />
      </div>

      <h4 className="font-medium text-gray-700 text-lg mb-4">
        Innovative Problem Solver
      </h4>

      <p className="font-normal text-gray-500 text-md">
        I enjoy tackling complex problems and turning them into elegant
        solutions. I believe every challenge is an opportunity for growth.
      </p>
    </div>
  );
}
