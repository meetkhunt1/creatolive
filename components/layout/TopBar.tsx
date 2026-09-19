import Link from "next/link";
import { announcement } from "@/lib/home-content";

/** Full-width announcement strip above the header. */
export default function TopBar() {
  if (!announcement) return null;

  const line = <span className="topbar__text">{announcement.text}</span>;

  return (
    <div className="topbar">
      <div className="container">
        {announcement.href ? (
          <Link className="topbar__link" href={announcement.href}>
            {line}
          </Link>
        ) : (
          line
        )}
      </div>
    </div>
  );
}
