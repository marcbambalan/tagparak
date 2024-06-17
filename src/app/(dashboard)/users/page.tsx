import { fetchUsers } from "@/app/lib/actions";
import UsersGrid from "@/app/ui/UsersGrid";

export default async function Page() {
  const users = await fetchUsers();

  return (
    <>
      <UsersGrid rows={users} />
    </>
  );
}
