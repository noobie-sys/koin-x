import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutCoin = () => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-lg mt-10 p-10 rounded-md">
      <h1 className="text-2xl tracking-wider font-bold">About Bitcoin</h1>

      <div className="mb-2 border-b pb-5 border-muted-foreground/50 ">
        <h1 className="text-xl tracking-wider font-medium pb-2">Bitcoin</h1>
        <p className="text-lg leading-normal text-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officia
          similique repellendus facere perferendis aliquam cum obcaecati. Iste
          doloribus, eos iusto quas nostrum possimus dolorum voluptatibus. Nisi
          eos magnam magni?
        </p>
      </div>
      <div className="flex flex-col w-full gap-4 border-b border-muted-foreground/50 pb-5">
        <h1 className="text-xl font-medium leading-3">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit
          optio, eius dolorem maiores iste vero distinctio hic quibusdam, natus
          placeat praesentium possimus reprehenderit. Tempora ut magnam dolorum
          minima sint!
        </p>
        <p className="font-normal text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio
          eum nihil repellat iure aperiam rerum nulla quasi quisquam iusto, esse
          quod? Similique, cupiditate, molestias consectetur minus ipsam
          quibusdam accusamus quae minima ex, voluptates iusto maxime tenetur
          beatae provident quasi!
        </p>
        <p className="font-normal text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellat doloremque, deserunt dolorum laboriosam atque corporis
          consequatur, nihil perspiciatis iure in quia fuga natus ipsa obcaecati
          porro? Aperiam dolorum unde delectus aspernatur distinctio odit
          commodi fuga at nemo recusandae nulla officiis, eos itaque voluptate
          culpa consequatur impedit, eveniet nihil totam! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Perferendis accusamus perspiciatis
          non ab sit a cum, sequi, deleniti fuga maxime dolorem molestiae
          incidunt pariatur totam ex, tenetur officiis suscipit libero!
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 border-b pb-10 border-muted-foreground/50">
        <div className="w-full">
          <Link
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/image-4.jpg"
              alt="Image"
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet consectetur.
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <Link
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/image-4.jpg"
              alt="Image"
              width={400}
              height={400}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem. Repudiandae iusto nam aspernatur consequatur, numquam impedit? Beatae vel vero natus corporis assumenda molestias mollitia iure, aspernatur ab cum id eum, illum dolorem veniam, pariatur ipsum numquam enim earum fugiat!</h1>
      </div>
    </div>
  );
};

export default AboutCoin;
