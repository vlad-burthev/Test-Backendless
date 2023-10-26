import { useState, type FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { T_Tab } from "../types";

interface DummyTableProps {
  tabs: T_Tab[];
}

const DummyTable: FC<DummyTableProps> = ({ tabs }) => {
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

export default DummyTable;
