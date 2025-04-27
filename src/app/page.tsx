import { ConvexHttpClient } from "convex/browser";
import { api } from "../../convex/_generated/api";

  export default async function Home() {
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
    const message = await convex.query(api.hello.hello);
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-primary">{message}</h1>
      </div>
    );
  }