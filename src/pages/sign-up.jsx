import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import Contact from "@/widgets/layout/contact";

export function SignUp() {
  return (
    <>
      <img
        src="/img/a_home_bcg.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute left-2/4 top-2/4 w-full max-w-[80%] -translate-x-2/4 -translate-y-2/4">
          <CardBody className="flex flex-col gap-4">
            <Contact />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
