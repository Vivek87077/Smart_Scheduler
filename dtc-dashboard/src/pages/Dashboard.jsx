// Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { UserIcon, BusIcon, MapIcon, AlertTriangleIcon } from "lucide-react";
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import Chart from "./Chart"; // 

const stats = [
  {
    title: "Total Drivers",
    value: 120,
    icon: <UserIcon className="text-blue-600" />,
  },
  {
    title: "Buses Deployed",
    value: 58,
    icon: <BusIcon className="text-green-600" />,
  },
  {
    title: "Routes Active",
    value: 43,
    icon: <MapIcon className="text-orange-500" />,
  },
  {
    title: "Delayed Routes",
    value: 7,
    icon: <AlertTriangleIcon className="text-red-500" />,
  },
];

const Dashboard = () => {
  return (
    <main className="p-6 space-y-8">
      {/* 🔹 Welcome Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800"
      >
        Welcome, Planner 👋
      </motion.h1>

      {/* 🔹 KPI Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ title, value, icon }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
              <CardContent className="flex items-center space-x-4">
                <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{title}</p>
                  <p className="text-xl font-semibold text-gray-900">{value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* 🔹 Middle Charts + Alerts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-4 shadow-md"
        >
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            Driver Allocation
          </h2>
          <Chart />
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-4 shadow-md"
        >
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            Congestion Alerts
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li>🟠 Route 12 - Slow traffic</li>
            <li>🔴 Route 5 - Heavy congestion</li>
            <li>🟡 Route 7 - Minor delay</li>
          </ul>
        </motion.div>
      </section>

      {/* 🔹 Optional Mini Calendar Section */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-md p-4 w-full md:w-1/3 mt-8"
      >
        <h2 className="text-lg font-bold text-gray-700 mb-3">
          Today's Shift Plan
        </h2>
        <Calendar className="rounded-xl shadow-sm" />
      </motion.section>
    </main>
  );
};

export default Dashboard;
