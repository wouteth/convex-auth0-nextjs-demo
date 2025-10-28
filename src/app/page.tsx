"use client";

import Image from "next/image";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <>
      <Authenticated>
        <p>
          {tasks?.map(({ _id, text, isCompleted }) => (
            <div key={_id}>
              <span>{text}</span>
              <span>{isCompleted ? "✅" : "❌"}</span>
            </div>
          ))}
        </p>
      </Authenticated>
      <Unauthenticated>
        <p>Please log in to see your tasks.</p>
      </Unauthenticated>
    </>
  );
}
