import { Users } from "react-feather";

export default function CollaborativeSpirit() {
  return (
    <div className="rounded-md bg-gray-50 px-8 py-10">
      <div className="mb-4 flex w-20 justify-center rounded-md bg-gray-100 py-6">
        <Users />
      </div>

      <h4 className="mb-4 text-lg font-medium text-gray-700">
        Collaborative Spirit
      </h4>

      <p className="text-md font-normal text-gray-500">
        I thrive in collaborative environments and believe that the best results
        come from working together. Let&apos;s build something amazing as a
        team!
      </p>
    </div>
  );
}
