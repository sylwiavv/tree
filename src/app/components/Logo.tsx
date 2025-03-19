import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex justify-center ">
      <Image
        src="/tree_logo.svg"
        width={90}
        height={90}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Logo;
