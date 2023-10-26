import { useEffect, type FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { T_Tab } from "../types";

interface DummyChartProps {
  tabs: T_Tab[];
}

const DummyChart: FC<DummyChartProps> = ({ tabs }) => {
  const [tab, setTab] = useState<T_Tab | null>(null);

  const { pathname } = useLocation();
  const id = pathname.split("/").pop();

  useEffect(() => {
    const foundTab = tabs.find((t) => t.id === id);
    if (foundTab) {
      setTab(foundTab);
    }
  }, [tabs, id]);

  return (
    <table>
      <tbody>
        <tr>
          <td>{tab?.title.split(" ")[0]}</td>
          <td>{tab?.title.split(" ")[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DummyChart;
