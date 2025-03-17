// import { type ReactNode, useState } from "react";
// import type { ReactNode } from "react";

interface Props {
  children: string | string[];
}

export const Text = ({ children }: Props) => <p className="dark:text-slate-300">{children}</p>;
