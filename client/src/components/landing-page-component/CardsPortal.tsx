import React from 'react'
import { Link } from 'react-router-dom'
import { Folder, Settings, FileText } from 'lucide-react'

interface CardProps {
  to: string
  title: string
  description: string
  icon: React.ReactNode
}

const Card: React.FC<CardProps> = ({ to, title, description, icon }) => (
  <Link
    to={to}
    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="text-primary mb-4">{icon}</div>
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </Link>
)

export const CardPortal: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      <Card
        to="/automation"
        title="Class Record"
        description="Explore the class record features of the system."
        icon={<Folder size={24} />}
      />
      <Card
        to="/management"
        title="Management"
        description="Access management tools and settings."
        icon={<Settings size={24} />}
      />
      <Card
        to="/tor"
        title="TOR"
        description="View the Transcript of Records section."
        icon={<FileText size={24} />}
      />
    </div>
  )
}