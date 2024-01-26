import Nav from "./Nav";
import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import CurrentPosition from "./CurrentPosition";
import AboutMe from "./AboutMe";

export default function Hero() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <Nav />
      <div className="text-center">
        <ProfilePicture />
        <ProfileName />
        <CurrentPosition />
        <AboutMe />
      </div>
    </div>
  );
}
