import { usersQueryOptions } from "@/queries/users";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, ErrorComponentProps } from "@tanstack/react-router";

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
      <p className="w-full h-auto p-2 bg-slate-900 rounded-sm break-words text-background">
        {data[0].username}
      </p>
    </div>
  );
}

function ErrorComponent({ error }: ErrorComponentProps) {
  return <div>{error.message}</div>;
}
