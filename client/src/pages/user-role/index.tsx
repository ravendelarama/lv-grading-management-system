// src/pages/user-roles/index.tsx

import React, { useEffect, useState } from "react";

type UserRole = "registrar" | "instructor" | "program-head" | "chancellor";

// Simulate fetching the user's role (this can come from an API, context, or localStorage)
const getUserRole = (): UserRole => {
  // This could be a dynamic check; for now, just simulate a role
  return "instructor"; // Change to simulate different roles
};

const UserRolePage: React.FC = () => {
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    // Simulate fetching user role on component mount
    const userRole = getUserRole();
    setRole(userRole);
  }, []);

  // Conditional rendering based on user role
  const renderRoleContent = () => {
    switch (role) {
      case "registrar":
        return <div><h2>Registrar Dashboard</h2><p>Manage student registrations and reports.</p></div>;
      case "instructor":
        return <div><h2>Instructor Dashboard</h2><p>View courses, assignments, and student progress.</p></div>;
      case "program-head":
        return <div><h2>Program Head Dashboard</h2><p>Manage programs, staff, and curriculum.</p></div>;
      case "chancellor":
        return <div><h2>Chancellor Dashboard</h2><p>Oversee financials and institutional reports.</p></div>;
      default:
        return <div><h2>Welcome to the User Role Dashboard</h2><p>Role not recognized.</p></div>;
    }
  };

  return (
    <div>
      <h1>User Role Based Content</h1>
      {role ? renderRoleContent() : <p>Loading...</p>}
    </div>
  );
};

export default UserRolePage;
