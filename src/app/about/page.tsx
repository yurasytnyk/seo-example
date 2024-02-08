import { Metadata } from "next";

import { ROUTES } from "@/types/enums/routes.enums";

export const metadata: Metadata = {
  alternates: {
    canonical: ROUTES.ABOUT,
  },
};

export default function AboutPage() {
  return (
    <section>
      <h1>About page</h1>
    </section>
  );
}
