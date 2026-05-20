import type { DraftingState } from "components/Dash/Sidebar/Sidebar";
import { useOutletContext } from "react-router";

export type OutletContextType = [
  DraftingState,
  React.Dispatch<React.SetStateAction<DraftingState>>,
];

export default function FormDashboard({ path }: { path: string }) {
  const [isDrafting, setIsDrafting] = useOutletContext<OutletContextType>();
  return (
    <form className="px-2">
      <fieldset>
        <label htmlFor="useremail">E-Mail Address</label>
        <input
          type="email"
          name="email"
          id="useremail"
          className="input-field"
          onChange={() => setIsDrafting({ ...isDrafting, [path]: true })}
          onBlur={() => setIsDrafting({ ...isDrafting, [path]: false })}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="userpass">Password</label>
        <input
          type="password"
          name="password"
          id="userpass"
          className="input-field"
          onChange={() => setIsDrafting({ ...isDrafting, [path]: true })}
          onBlur={() => setIsDrafting({ ...isDrafting, [path]: false })}
        />
      </fieldset>
      <div className="text-center">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
}
