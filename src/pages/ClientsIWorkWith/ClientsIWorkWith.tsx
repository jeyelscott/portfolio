import Image from "next/image";

export default function ClientsIWorkWith() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
        Companies that I worked with
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="h-36 flex justify-self-center">
          <Image
            className="suysing-logo m-4 p-4 h-30 w-auto"
            src="/assets/image/clients/suysing-logo.png"
            alt="SuySing Logo"
            width={312}
            height={112}
          />
        </div>
        <div className="h-36 flex justify-self-center">
          <Image
            className="m-4 p-4 h-30 w-auto"
            src="/assets/image/clients/viva-logo.png"
            alt="Viva"
            width={250}
            height={112}
          />
        </div>
        <div className="h-36 flex justify-self-center">
          <Image
            className="m-4 p-4 h-30 w-auto"
            src="/assets/image/clients/mcdelivery-logo.png"
            alt="McDelivery Logo"
            width={288}
            height={112}
          />
        </div>
        <div className="h-36 flex justify-self-center">
          <Image
            className="m-4 p-4 h-30 w-auto"
            src="/assets/image/clients/pikapika-logo.png"
            alt="PikaPika Logo"
            width={125}
            height={112}
          />
        </div>
        <div className="h-36 flex justify-self-center">
          <Image
            className="m-4 p-4 h-30 w-auto"
            src="/assets/image/clients/nexen-logo.png"
            alt="Nexen Logo"
            width={240}
            height={112}
          />
        </div>
        <div className="h-36 flex justify-self-center">
          <Image
            className="m-4 p-4 h-30 w-auto"
            src="/assets/image/clients/asiaip-logo.png"
            alt="AsiaIP Logo"
            width={227}
            height={112}
          />
        </div>
        <div className="h-36 flex justify-self-center">
          <Image
            className="m-4 p-4 h-30 w-auto"
            src="/assets/image/clients/unilab-logo.webp"
            alt="Unilab Logo"
            width={242}
            height={112}
          />
        </div>
        <div className="h-36 flex justify-self-center">
          <Image
            className="m-4 p-4 h-30 w-auto"
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
