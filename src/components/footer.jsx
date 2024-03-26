import { appTitle } from '@/visual-data/data';
import {
  TypographyH3,
  TypographyList,
  TypographyP,
  TypographySmall,
} from './ui/typography';
import { MaxWidthDivFrame } from './frames';
import { Menu } from './menu';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white border-t">
      <MaxWidthDivFrame>
        <div className="w-full grid grid-cols-2 gap-6 justify-between sm:grid-cols-4 py-8">
          <TypographyH3 className="m-0">{appTitle}</TypographyH3>
          <TypographyList className="m-0 list-none">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Contact</li>
            <li>FAQs</li>
          </TypographyList>
          <TypographyList className="m-0 list-none">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Disclaimer</li>
          </TypographyList>
          <TypographyList className="m-0 list-none">
            <li>
              <a
                href="https://www.instagram.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <i className="fi fi-brands-instagram mr-2"></i> Instagram
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <i className="fi fi-brands-facebook mr-2"></i> Facebook
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <i className="fi fi-brands-twitter mr-2"></i> Twitter
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <i className="fi fi-brands-linkedin mr-2"></i> LinkedIn
                </span>
              </a>
            </li>
          </TypographyList>
        </div>
        <TypographySmall className="text-center mt-6 text-muted">
          © {currentYear} {appTitle} Team. All Rights Reserved.
        </TypographySmall>
      </MaxWidthDivFrame>
    </footer>
  );
};

export default Footer;
