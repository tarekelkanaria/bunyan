import { Link } from "react-router";

export default function DashboardBtn({ path }: { path: string }) {
  return (
    <div className="p-2 text-right">
      <Link to={path} className="btn">
        Add user
      </Link>
    </div>
  );
}
