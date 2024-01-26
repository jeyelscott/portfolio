import Image from "next/image";

export default function ClientsIWorkWith() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <h1 className="mb-5 text-3xl font-medium text-gray-700 md:text-4xl">
        Companies that I worked with
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex h-36 justify-self-center">
          <Image
            className="suysing-logo h-30 m-4 w-auto p-4"
            src="/assets/image/clients/suysing-logo.png"
            alt="SuySing Logo"
            width={312}
            height={112}
          />
        </div>
        <div className="flex h-36 justify-self-center">
          <Image
            className="h-30 m-4 w-auto p-4"
            src="/assets/image/clients/viva-logo.png"
            alt="Viva"
            width={250}
            height={112}
          />
        </div>
        <div className="flex h-36 justify-self-center">
          <Image
            className="h-30 m-4 w-auto p-4"
            src="/assets/image/clients/mcdonalds-logo.png"
            alt="McDonalds Logo"
            width={112}
            height={112}
          />
        </div>
        <div className="flex h-36 justify-self-center">
          <Image
            className="h-30 m-4 w-auto p-4"
            src="/assets/image/clients/pikapika-logo.png"
            alt="PikaPika Logo"
            width={125}
            height={112}
          />
        </div>
        <div className="flex h-36 justify-self-center">
          <Image
            className="h-30 m-4 w-auto p-4"
            src="/assets/image/clients/nexen-logo.png"
            alt="Nexen Logo"
            width={240}
            height={112}
          />
        </div>
        <div className="flex h-36 justify-self-center">
          <Image
            className="h-30 m-4 w-auto p-4"
            src="/assets/image/clients/asiaip-logo.png"
            alt="AsiaIP Logo"
            width={227}
            height={112}
          />
        </div>
        <div className="flex h-36 justify-self-center">
          <Image
            className="h-30 m-4 w-auto p-4"
            src="/assets/image/clients/unilab-logo.webp"
            alt="Unilab Logo"
            width={242}
            height={112}
          />
        </div>
        <div className="flex h-36 justify-self-center">
          <Image
            className="h-30 m-4 w-auto p-4"
            src="/assets/image/clients/monde-logo.png"
            alt="Monde Logo"
            width={112}
            height={112}
          />
        </div>
      </div>
    </div>
  );
}
