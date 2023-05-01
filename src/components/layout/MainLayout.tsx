import { CommonLayout } from "./CommonLayout";

type MainLayoutProps = {
  children: React.ReactNode;
  isHideSidebar?: boolean;
};

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <CommonLayout isHideSidebar={props.isHideSidebar}>
      {props.children}
    </CommonLayout>
  );
};
