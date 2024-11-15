import { Button } from "@/components/ui/button";
import React from "react";

const Tor: React.FC = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-2xl font-bold ">TOR Page</h1>
      <p className="text-xl">Welcome to the TOR section!</p>
      <div>
        <Button variant={"outline"}>Press me</Button>
      </div>
    </div>
  );
};

export default Tor;
