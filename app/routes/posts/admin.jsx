import { Link, Outlet, useLoaderData } from "@remix-run/react";

export default function Admin() {
  return (
    <div>
      I am the admin !
      <Outlet />
    </div>
  );
}
