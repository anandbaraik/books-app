import { useBookContext } from "..";

export default function Profile() {
  const { user } = useBookContext();
  if (!Object.keys(user).length) return <h1>Loading...</h1>;
  return (
    <div style={{ marginTop: "1rem" }}>
      <img src={user.img} style={{ width: "80%" }} alt={user.name} />
      <h1>{user?.name}</h1>
      <p>{user?.bio}</p>
    </div>
  );
}
