import { MaxWidthWrapper } from './max-width-wrapper';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-6 shadow-sm bg-white">
      <MaxWidthWrapper>
        <h1>Logo</h1>
      </MaxWidthWrapper>
    </header>
  );
};
