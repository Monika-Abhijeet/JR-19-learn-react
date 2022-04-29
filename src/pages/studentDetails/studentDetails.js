import { useParams } from "react-router-dom";

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

function StudentDetails() {
  let { id } = useParams();
  // let id = useParams().id;
  let user = users[id];
  console.log(user);

  return (
    <div>
      <h1>Student Details</h1>
      <p>firstName: {user.firstName}</p>
      <p>lastName: {user.lastName}</p>
      <p>age: {user.age}</p>
    </div>
  );
}
export default StudentDetails;
