import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Card from "@/app/ui/card";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    id: string;
  };
};

export default async function User(props: Props) {
  const session = await getServerSession(authOptions);
  const res = await fetch(`http://localhost:8000/user/${props.params.id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const user = await res.json();
  console.log("i am session");
  console.log(session);
  console.log(user);
  if (user) {
    return (
      <div className="p-2">
        <Card user={user} />
      </div>
    );
  }
  return null;
}
