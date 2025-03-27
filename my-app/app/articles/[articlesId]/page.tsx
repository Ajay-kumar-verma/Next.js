"use client";
import { use } from "react";

export default function Articles({
  params,
  searchparams,
}: {
  params: Promise<{ articlesId: string }>;
  searchparams: Promise<{ lang?: "" }>;
}) {
  const { articlesId } = use(params);
  const { lang } = use(searchparams);

  return (
    <h1>
      News Articles {articlesId}
      {JSON.stringify(lang)}
    </h1>
  );
}
