import { Link } from "react-router-dom";
let users = [
  {
    id: 0,
    firstName: "Rahul",
    lastName: "Pathak",
    age: 22,
    email: "abc@gmail.com",
  },
  {
    id: 1,
    firstName: "Rohan",
    lastName: "Patil",
    age: 42,
    email: "rohan@gmail.com",
  },
  {
    id: 2,
    firstName: "Sowmya",
    lastName: "Gudi",
    age: 32,
    email: "sowmya@gmail.com",
  },
];

function Home() {
  return (
    <div>
      <table className="table bordered">
        <thead>
          <tr>
            <th>Id </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>age</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <Link to={`/details/${user.id}`}>{user.id} </Link>
                </td>

                <td>{user.firstName}</td>

                <td>{user.lastName}</td>

                <td>{user.age}</td>

                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
