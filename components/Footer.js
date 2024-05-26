import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='projects' className="w-full bg-black border-t border-lime-700">
      <div className="container px-5 py-4 md:py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2024 SMEDINAXX
        </p>
        <div className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-start animate-bounce">
        <Link href="#">
                <Image
                  src="/twitch.png"
                  width={25}
                  height={25}
                  alt="twitch"
                  className="focus:border-none active:border-none hover:brightness-125 mr-3"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/github.png"
                  width={25}
                  height={25}
                  alt="github"
                  className="focus:border-none active:border-none hover:brightness-125 mr-3"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/whatsapp.png"
                  width={27}
                  height={27}
                  alt="whatsapp"
                  className="focus:border-none active:border-none hover:brightness-125"
                />
              </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
