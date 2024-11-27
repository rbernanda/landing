import { MaxWidthWrapper } from './max-width-wrapper';

const navItems = ['Kipas Angin', 'Pigura', 'Kulkas', 'Mobil'];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-6 shadow-sm bg-white">
      <MaxWidthWrapper>
        <ul className="flex gap-x-8 justify-start sm:justify-center">
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </header>
  );
};
