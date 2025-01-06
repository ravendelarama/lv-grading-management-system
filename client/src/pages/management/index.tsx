import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const Management: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h1>Management Page</h1>
          <p>Welcome to the Management section!</p>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Management;
