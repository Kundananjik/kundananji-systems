export const skillGroups = [
  {
    name: 'Systems Engineering',
    items: [
      'Systems architecture planning',
      'Requirements analysis and technical documentation',
      'Process automation and workflow optimization',
    ],
  },
  {
    name: 'Networking',
    items: [
      'Network addressing and subnet troubleshooting',
      'Routing and switching fundamentals',
      'Network support, monitoring, and diagnostics',
    ],
  },
  {
    name: 'Backend Development',
    items: [
      'PHP application development',
      'JavaScript for dynamic interfaces',
      'MySQL schema design and query optimization',
    ],
  },
  {
    name: 'Security',
    items: [
      'Endpoint security fundamentals',
      'Security awareness and risk reduction',
      'Defensive design principles for web systems',
    ],
  },
]

export const projectGroups = [
  {
    name: 'EduTrack Attendance System',
    summary:
      'A student attendance platform engineered for consistency, traceability, and operational simplicity.',
    problem:
      'Manual attendance processes produced delayed records, poor reporting visibility, and increased error rates for institutional tracking.',
    architecture: [
      'Interface: Role-based web UI for attendance capture and dashboard summaries.',
      'Logic: PHP-driven service layer for validation, tracking, and report generation.',
      'Storage: MySQL schema optimized for student, class, and attendance history integrity.',
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL'],
  },
  {
    name: 'Revenue Management System',
    summary:
      'A Laravel-based financial management platform for tracking revenues, payments, penalties, and audit trails.',
    problem:
      'Organizations required enterprise-grade financial oversight with reliable reconciliation, role-based controls, and compliance-ready logging.',
    architecture: [
      'Interface: Responsive Tailwind-powered dashboard with role-aware modules and reporting views.',
      'Logic: Laravel services, controllers, and observers for automated financial updates and penalty workflows.',
      'Storage: Relational database model for revenues, payments, penalties, and audit records.',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL/PostgreSQL', 'Tailwind CSS', 'Pest'],
  },
  {
    name: 'BroilerTrack Management System',
    summary:
      'A lightweight PHP + MySQL dashboard for managing broiler production cycles on a local XAMPP stack.',
    problem:
      'Farm operations needed centralized tracking for expenses, feed usage, growth, sales, and profitability without complex infrastructure.',
    architecture: [
      'Interface: Session-protected role-based dashboard for admin and salesperson workflows.',
      'Logic: PHP-only computation for profitability metrics, sales balances, soft-delete protection, and audit logs.',
      'Storage: MySQL-backed batch lifecycle data across production, costs, and revenue records.',
    ],
    technologies: ['PHP', 'MySQL', 'XAMPP', 'Tailwind CSS'],
    link: 'https://broilertrack.42web.io/',
  },
]

export const certificationGroups = [
  {
    name: 'Core Certifications',
    certifications: [
      { title: 'Introduction to Cybersecurity', status: 'Completed' },
      { title: 'Networking Basics', status: 'Completed' },
      { title: 'Network Support and Security', status: 'Completed' },
      { title: 'Endpoint Security', status: 'Completed' },
      { title: 'Network Defense', status: 'Completed' },
    ],
  },
  {
    name: 'Practical Networking & Simulation',
    certifications: [
      {
        title: 'Exploring Networking with Cisco Packet Tracer',
        status: 'Completed',
      },
      {
        title: 'Networking Devices and Initial Configuration',
        status: 'Completed',
      },
      {
        title: 'Network Addressing and Basic Troubleshooting',
        status: 'Completed',
      },
      {
        title: 'Getting Started with Cisco Packet Tracer',
        status: 'Completed',
      },
    ],
  },
  {
    name: 'Emerging Tech & Foundations',
    certifications: [
      { title: 'Data Analytics Essentials', status: 'Completed' },
      { title: 'Operating Systems Basics', status: 'Completed' },
      { title: 'AI Fundamentals with IBM SkillsBuild', status: 'Completed' },
      {
        title: 'Introduction to IoT and Digital Transformation',
        status: 'Completed',
      },
      {
        title: 'Exploring Internet of Things with Cisco Packet Tracer',
        status: 'Completed',
      },
      { title: 'Introduction to Data Science', status: 'Completed' },
      { title: 'Introduction to Modern AI', status: 'Completed' },
      { title: 'Computer Hardware Basics', status: 'Completed' },
      {
        title: 'Digital Safety and Security Awareness',
        status: 'Completed',
      },
      { title: 'Digital Awareness', status: 'Completed' },
      {
        title: 'Create Digital Content, Communicate and Collaborate Online',
        status: 'Completed',
      },
    ],
  },
  {
    name: 'In Progress',
    certifications: [
      { title: 'Cyber Threat Management', status: 'In Progress' },
    ],
  },
]
