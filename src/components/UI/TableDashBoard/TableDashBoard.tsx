export default function TableDashBoard() {
  return (
    <table className="w-full p-2 mx-2">
      <thead>
        <tr className="border-b border-b-azur">
          <th scope="col" className="p-2">
            #
          </th>
          <th scope="col" className="p-2">
            First
          </th>
          <th scope="col" className="p-2">
            Last
          </th>
          <th scope="col" className="p-2">
            Handle
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-b-azur">
          <th scope="row" className="p-2">
            1
          </th>
          <td className="text-center p-2">Mark</td>
          <td className="text-center p-2">Otto</td>
          <td className="text-center p-2">@mdo</td>
        </tr>
        <tr className="border-b border-b-azur">
          <th scope="row">2</th>
          <td className="text-center p-2">Jacob</td>
          <td className="text-center p-2">Thornton</td>
          <td className="text-center p-2">@fat</td>
        </tr>
        <tr className="border-b border-b-azur">
          <th scope="row">3</th>
          <td className="text-center  p-2">John</td>
          <td className="text-center  p-2">Doe</td>
          <td className="text-center  p-2">@social</td>
        </tr>
      </tbody>
    </table>
  );
}
