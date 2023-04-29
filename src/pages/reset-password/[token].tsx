import { ResetPasswordPageProps } from "@/features/auth/pages/ResetPasswordPage/ResetPasswordPage";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

export { default } from "@/features/auth/pages/ResetPasswordPage/ResetPasswordPage";

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<ResetPasswordPageProps>
> {
  const token = query.token as string;

  return {
    props: {
      token,
    },
  };
}
