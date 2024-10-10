import { ReactNode } from "react";
import Navbar from "../ui/navbar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout(props: Props) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
}
