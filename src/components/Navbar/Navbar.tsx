/* eslint-disable @typescript-eslint/no-misused-promises */
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import type { FC } from "react";
import LogoutIcon from "../Icons/LogoutIcon";
import SettingsIcon from "../Icons/SettingsIcon";

export const Navbar: FC = () => {
  const { data: session } = useSession();

  return (
    <div className="fixed top-0 z-10 flex h-16 min-w-full items-center bg-opacity-0 px-6">
      <div className="flex w-full items-center justify-between">
        <nav className="flex items-center">
          <Link
            href={session ? "/tasks" : "/"}
            className="bg-gradient-to-r from-danube-900 to-danube-600 bg-clip-text text-2xl font-black text-transparent"
          >
            YouDoIt
          </Link>

          {session && (
            <div className="ml-6 flex gap-6 font-medium text-danube-900">
              <Link href="/tasks">Tasks</Link>
              <Link href="/stats">Stats</Link>
            </div>
          )}
        </nav>

        {session ? (
          <div className="flex h-fit w-fit gap-6 text-danube-900">
            <button>
              <SettingsIcon height="1.25em" width="1.25em" />
            </button>
            <button onClick={() => signOut()}>
              <LogoutIcon height="1.25em" width="1.25em" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-gradient-to-l from-danube-900 to-danube-600 bg-clip-text font-semibold text-transparent"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};
