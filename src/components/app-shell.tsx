import type { PropsWithChildren } from "react";

export function AppShell({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-6xl">{children}</div>;
}
