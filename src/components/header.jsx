import { appTitle } from '@/visual-data/data';
import { TypographyH3 } from './ui/typography';
import { MaxWidthDivFrame } from './frames';
import { Menu } from './menu';
import { NavBar } from './navbar';

const Header = ({ links, logoutButton }) => {
  return (
    <header className="border-b w-full">
      <MaxWidthDivFrame className="py-3 px-4 flex-row justify-between">
        <TypographyH3>{appTitle}</TypographyH3>

        {links?.length && (
          <>
            <NavBar
              className="hidden md:block"
              links={links}
              logoutButton={logoutButton}
            />
            <Menu
              className="md:hidden"
              links={links}
              logoutButton={logoutButton}
            />
          </>
        )}
      </MaxWidthDivFrame>
    </header>
  );
};

export default Header;
