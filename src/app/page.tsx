"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759137242806-49caa8f9.jpg"
          buttonText="Buy MemeCoin"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
          ]}
        />
      </div>

      <div id="hero" className="scroll-mt-24">
        <BillboardHero
          title="MemeCoin Frenzy"
          subtitle="Join the fun with our community-driven memecoin!"
        />
      </div>

      <div id="about" className="scroll-mt-24">
        <SplitAbout
          description="Discover the possibilities with MemeCoin Frenzy!"
        />
      </div>

      <div id="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            {
              position: "1",
              image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759137237594-8e42b5b4.jpg",
              title: "Step 1",
              description: "Connect your wallet",
            },
            {
              position: "2",
              image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759137239305-c725929f.jpg",
              title: "Step 2",
              description: "Choose your amount",
            },
            {
              position: "3",
              image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759137241151-d8f5789c.jpg",
              title: "Step 3",
              description: "Confirm your purchase",
            },
          ]}
        />
      </div>

      <div id="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Understanding the distribution and supply of MemeCoin."
          kpiItems={[
            { value: "10M", description: "Total Supply", longDescription: "The total supply of MemeCoin is fixed at 10 million.", icon: "Coins" },
            { value: "5M", description: "Market Cap", longDescription: "The market cap is 5 million.", icon: "Chart" },
            { value: "2M", description: "Liquidity", longDescription: "Liquidity is retained for users to trade effortlessly.", icon: "Wallet" },
          ]}
        />
      </div>

      <div id="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759137242806-49caa8f9.jpg"
          logoAlt="MemeCoin Frenzy Logo"
          columns={[
            {
              items: [
                { label: "Privacy Policy", onClick: () => {} },
                { label: "Terms of Service", onClick: () => {} },
              ],
            },
            {
              items: [
                { label: "Community", onClick: () => {} },
                { label: "Support", onClick: () => {} },
              ],
            },
            {
              items: [
                { label: "Contact Us", onClick: () => {} },
                { label: "About", onClick: () => {} },
              ],
            },
          ]}
          copyrightText="© 2023 MemeCoin Frenzy. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}