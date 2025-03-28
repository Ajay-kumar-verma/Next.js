import Link from "next/link";

export default function User() {
  return (
    <h1>
      It's me ! Notification
      <Link href="/complexDashboard">Dashboard</Link>
    </h1>
  );
}
