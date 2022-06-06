import { Form, Link, useNavigate } from "@remix-run/react";
import type {
  ActionFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useSearchParams } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { createUserSession, register } from "~/utils/session.server";
import AuthLayout from "~/components/AuthLayout";
import logo from "../assets/logo-N.png";
import Input from "~/components/Input";
import {
  LockClosedIcon,
  LoginIcon,
  MailIcon,
  UserAddIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Button from "~/components/Button";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Register | Bauni",
  viewport: "width=device-width,initial-scale=1",
});

type ActionData = {
  formError?: string;
  fieldErrors?: {
    fullname: string | undefined;
    email: string | undefined;
    password: string | undefined;
  };
  fields?: {
    fullname: string;
    email: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

const validateFullName = (fullname: unknown) => {
  if (typeof fullname !== "string" || fullname.length < 3) {
    return "Fullname must be at least 3 characters long ";
  }
};

const validateEmail = (email: unknown) => {
  if (typeof email !== "string" || !email.includes("@") || email.length < 8) {
    return "Email not valid";
  }
};

const validatePassword = (password: unknown) => {
  if (typeof password !== "string" || password.length < 6) {
    return "Passwords must be at least 6 characters long ";
  }
};

const validateUrl = (url: any) => {
  console.log(url);
  let urls = ["/login", "/register", "/"];
  if (urls.includes(url)) {
    return url;
  }
  return "/";
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const fullname = form.get("fullname");
  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = validateUrl(form.get("redirectTo") || "/");
  if (
    typeof fullname !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { fullname, email, password };

  const fieldErrors = {
    fullname: validateFullName(fullname),
    email: validateEmail(email),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  const userExists = await db.user.findFirst({
    where: { email },
  });

  if (userExists) {
    return badRequest({
      fields,
      formError: `User with email ${email} already exists`,
    });
  }

  const user = await register({ fullname, email, password });
  if (!user) {
    return badRequest({
      fields,
      formError: `Something went wrong trying to create a new user.`,
    });
  }
  return createUserSession(user.id, redirectTo);
};

const Register = () => {
  const navigate = useNavigate();
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <AuthLayout>
      <div className="flex flex-col items-center px-6 py-10 rounded-md shadow-lg bg-black opacity-90">
        <img src={logo} alt="logo" className="w-32" />
        <p className="text-sm text-gray-300 font-medium">
          Start youre Free 30 days trial.
        </p>
        <Form method="post" className="w-full px-6 mt-12">
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get("redirectTo") ?? undefined}
          />
          <div className="flex flex-col gap-8 mb-4">
            <Input
              id="fullname"
              placeholder="Fullname"
              type="text"
              onChange={(e) => console.log(e)}
              leftIcon={
                <UserIcon className="w-5 text-gray-500 focus:text-white absolute bottom-0.5 left-0" />
              }
            />
            <Input
              id="email"
              placeholder="Email"
              type="text"
              onChange={(e) => console.log(e)}
              leftIcon={
                <MailIcon className="w-5 text-gray-500 focus:text-white absolute bottom-0.5 left-0" />
              }
            />
            <Input
              id="password"
              placeholder="Password"
              type="password"
              onChange={(e) => console.log(e)}
              leftIcon={
                <LockClosedIcon className="w-5 text-gray-500 focus:text-white absolute bottom-0.5 left-0" />
              }
            />
          </div>
          <Button
            className="mt-8 py-1.5 w-full text-xs"
            leftIcon={<UserAddIcon className="w-5" />}
            onClick={undefined}
            type="submit"
          >
            Sign Up
          </Button>
          <Button
            type={"button"}
            className="mt-4 py-1.5 w-full text-xs bg-black border border-white"
            leftIcon={<LoginIcon className="w-5" />}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Register;
