import Link from "next/link";

export default function User() {
  return (
    <h1>
      It's me !<Link href="/complexDashboard">Dashboard</Link>
    </h1>
  );
}
