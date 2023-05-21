import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input/input";
import { getUser } from "../services/users";
import { useRef } from "react";

function Login() {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onHandelSignIn = (e) => {
    e.preventDefault();
    if (userNameRef.current.value == "" || passwordRef.current.value == "") {
      console.log("Khong dc bo trong");
      return;
    }
    getUser(userNameRef.current.value, passwordRef.current.value)
      .then(({ data }) => {
        if (
          data.length > 0 &&
          data[0].user_name === userNameRef.current.value &&
          data[0].password === passwordRef.current.value
        ) {
          localStorage.setItem("user_token", data[0].id);
          navigate("/");
        } else {
          console.error("Ten tai khoan hoac mat khau ko dung");
        }
      })
      .catch((err) => {
        console.log("Loi he thong xay ra" + err);
      });
  };
  return (
    <div className="flex justify-center items-center h-[100vh] overflow-auto">
      <div className="w-[500px] h-[500px] bg-gray-200 rounded-lg">
        <div className="p-10">
          <h3 className="text-3xl text-center">Login</h3>
          <div className="my-5">
            <form onSubmit={onHandelSignIn}>
              <div className="flex flex-col	gap-y-[20px]">
                <div>
                  <Input label={"User name"} reff={userNameRef} />
                </div>
                <div>
                  <Input label={"Password"} reff={passwordRef} />
                </div>
                <button className="p-3 w-full bg-[#fcba03]">Dang nhap</button>
              </div>
            </form>
          </div>
          <p>
            Neu ban chua co tai khoan? hay <Link to="/sign-up">Dang ky</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
