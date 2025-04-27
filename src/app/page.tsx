"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

  export default function Home() {
    const message = useQuery(api.hello.hello);
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-primary">
          {message ?? "Loading..."}
        </h1>
      </div>
    );
  }