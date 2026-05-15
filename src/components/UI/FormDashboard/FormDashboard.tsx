import { useOutletContext } from "react-router";

export default function FormDashboard() {
  const [isDrafting, setIsDrafting] = useOutletContext();
  return (
    <form className="px-2">
      <fieldset>
        <label htmlFor="useremail">E-Mail Address</label>
        <input
          type="email"
          name="email"
          id="useremail"
          className="input-field"
          onChange={() => setIsDrafting(!isDrafting)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="userpass">Password</label>
        <input
          type="password"
          name="password"
          id="userpass"
          className="input-field"
          onChange={() => setIsDrafting(!isDrafting)}
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
