import UserInfo from "./UserInfor";

// eslint-disable-next-line react/prop-types
export default function Container({ Children }) {
  return (
    <div>
      <p>Container do App</p>
      <UserInfo />
      {Children}
    </div>
  )
}
