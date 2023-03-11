import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return;
    }

    console.log("submitted");
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Register;
