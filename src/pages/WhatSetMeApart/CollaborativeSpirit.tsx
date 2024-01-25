import { Users } from "react-feather";

export default function CollaborativeSpirit() {
  return (
    <div className="bg-gray-50 px-8 py-10 rounded-md">
      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
        <Users />
      </div>

      <h4 className="font-medium text-gray-700 text-lg mb-4">
        Collaborative Spirit
      </h4>

      <p className="font-normal text-gray-500 text-md">
        I thrive in collaborative environments and believe that the best results
        come from working together. Let's build something amazing as a team!
      </p>
    </div>
  );
}
