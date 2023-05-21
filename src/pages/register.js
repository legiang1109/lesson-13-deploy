import { Link, useNavigate, useNavigation } from "react-router-dom";
import Input from "../components/input/input";
import { useRef } from "react";
import { saveUser } from "../repositories/UserRepository";
import { createUser } from "../services/users";

function Register() {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const fullNameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      userNameRef.current.value == "" ||
      fullNameRef.current.value == "" ||
      phoneRef.current.value == "" ||
      passwordRef.current.value == "" ||
      passwordConfirmRef.current.value == ""
    ) {
      return;
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log("Mat khau confirm khong dung");
      return;
    }
    // saveUser({
    //   user_name: userNameRef.current.value,
    //   full_name: fullNameRef.current.value,
    //   phone_number: phoneRef.current.value,
    //   password: passwordRef.current.value,
    // });
    createUser({
      full_name: fullNameRef.current.value,
      user_name: userNameRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
    })
      .then(() => {
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log("Loi he thong xay ra" + err);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] overflow-auto">
        <div className="w-[500px] bg-gray-200 rounded-lg">
          <div className="p-10">
            <h3 className="text-3xl text-center">Register</h3>
            <div className="my-5">
              <form onSubmit={handleRegister}>
                <div className="flex flex-col	gap-y-[20px]">
                  <div>
                    <Input
                      label={"Ten tai khoan"}
                      id={"user_name"}
                      reff={userNameRef}
                    />
                  </div>
                  <div>
                    <Input label={"Full name"} reff={fullNameRef} />
                  </div>
                  <div>
                    <Input label={"Phone number"} reff={phoneRef} />
                  </div>
                  <div>
                    <Input label={"Password"} reff={passwordRef} />
                  </div>
                  <div>
                    <Input
                      label={"Password Confirm"}
                      reff={passwordConfirmRef}
                    />
                  </div>
                  <button className="p-3 w-full bg-[#fcba03]">Dang ky</button>
                </div>
              </form>
            </div>
            <p>
              Neu ban co tai khoan? hay <Link to="/sign-in">Dang nhap</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
