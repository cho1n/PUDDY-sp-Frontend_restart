import { FooterNav } from "../FooterNav/FooterNav";
import { Header } from "../Header/header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showHeader: boolean;
  showFooter: boolean;
}

export const Layout = (props: LayoutProps) => {
  return (
    <div>
      {props.showHeader && <Header title={props.title} />}
      {props.children}
      {props.showFooter && <FooterNav />}
    </div>
  );
};
