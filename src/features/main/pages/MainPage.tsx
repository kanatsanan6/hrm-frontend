import { NextPageWithLayout } from "@/types/common";
import { MainLayout } from "@/components/layout/MainLayout";

const Home: NextPageWithLayout = () => {
  return <div></div>;
};

export default Home;

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;
