import { Link } from "react-router";

export default function DashboardBtn({ roleType }: { roleType: string }) {
  return (
    <div className="p-2 text-right">
      <Link to="add" className="btn">
        Add {roleType}
      </Link>
    </div>
  );
}
