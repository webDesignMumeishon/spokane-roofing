import Image from 'next/image';

import logo from '~/assets/images/spokane-roofing.png';

const Logo = () => (
  <span className="hidden md:block ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image
      src={logo.src}
      alt={'logo'}
      width={200}
      height={100}
      loading="eager"
      priority
    />
  </span>
);

export default Logo;
