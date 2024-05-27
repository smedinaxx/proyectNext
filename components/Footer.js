import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='projects' className="w-full bg-black border-t border-lime-700 relative top-0">
      <div className="container px-5 py-4 md:py-8 mx-auto flex items-center justify-center sm:md:justify-between md:justify-between sm:flex-row flex-col">
        <p className="text-md text-neutral-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2024 SMEDINAXX
        </p>
        <div className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-start animate-bounce">
        <Link href="https://www.twitch.tv/smedinaxx">
                <Image
                  src="/twitch.png"
                  width={25}
                  height={25}
                  alt="twitch"
                  className="focus:border-none active:border-none hover:brightness-150 mr-3"
                />
              </Link>
              <Link href="https://github.com/smedinaxx">
                <Image
                  src="/github.png"
                  width={25}
                  height={25}
                  alt="github"
                  className="focus:border-none active:border-none hover:brightness-150 mr-3"
                />
              </Link>
              <Link href="https://www.instagram.com/saul.medinax/">
                <Image
                  src="/insta.png"
                  width={25}
                  height={25}
                  alt="instagram"
                  className="focus:border-none active:border-none hover:brightness-150"
                />
              </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
