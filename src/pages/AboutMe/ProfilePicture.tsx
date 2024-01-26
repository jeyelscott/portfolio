import Image from "next/image";
export default function ProfilePicture() {
  return (
    <div className="flex justify-center pb-4">
      <Image
        className="w-72 border-separate rounded-full border border-black"
        src="/assets/image/profile-picture.jpg"
        alt="Profile Picture"
        width={288}
        height={288}
      />
    </div>
  );
}
