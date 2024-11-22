import { Button } from "@/components/ui/button";
import { usersQueryOptions } from "@/queries/users";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  createFileRoute,
  ErrorComponentProps,
  Link,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/dashboard")({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(usersQueryOptions);
  },
  errorComponent: ErrorComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(usersQueryOptions);
  return (
    <div className="h-screen overflow-y-auto w-full p-10">
      <Button asChild>
        <Link to="/">Home</Link>
      </Button>
      <div className="w-full h-auto p-2 bg-slate-900 rounded-sm break-words text-background">
        Sample
        {data.map((item) => (
          <>
            <div>
              {item.name}: {item.email}
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

function ErrorComponent({ error }: ErrorComponentProps) {
  return <div>{error.message}</div>;
}
