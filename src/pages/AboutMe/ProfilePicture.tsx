import Image from "next/image";
export default function ProfilePicture() {
  return (
    <div className="flex justify-center pb-4">
      <Image
        className="rounded-full border-separate border border-black w-72"
        src="assets/image/profile-picture.jpg"
        alt="Profile Picture"
      />
    </div>
  );
}
