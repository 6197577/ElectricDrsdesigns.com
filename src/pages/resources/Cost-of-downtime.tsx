import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CostOfDowntimePage() {
  const [hourlyRevenue, setHourlyRevenue] = useState(260000);
  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  const pageTitle = "Electrical Cost of Downtime Calculator | Risk Assessment Tool";
  const metaDesc = "Calculate the financial impact of power outages on your facility. Our interactive Electrical Downtime Calculator reveals the true cost of business interruption.";

  useEffect(() => {
    setChartData({
      labels: ['1 Hour', '4 Hours', '8 Hours (1 Shift)', '24 Hours (1 Day)'],
      datasets: [
        {
          label: 'Potential Revenue Loss',
          data: [
            hourlyRevenue,
            hourlyRevenue * 4,
            hourlyRevenue * 8,
            hourlyRevenue * 24,
          ],
          backgroundColor: [
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(239, 68, 68, 0.7)',
            'rgba(185, 28, 28, 0.7)',
          ],
          borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(239, 68, 68, 1)',
            'rgba(185, 28, 28, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [hourlyRevenue]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Cumulative Cost of Electrical Failure',
      },
      tooltip: {
        callbacks: {
            label: function(context: any) {
                let label = context.dataset.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
            }
        }
      }
    },
    scales: {
        y: {
            ticks: {
                callback: function(value: any) {
                    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: "compact" }).format(value);
                }
            }
        }
    }
  };

  return (
    <Layout title={pageTitle} description={metaDesc}>
      <div className="bg-gray-900 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Is Your Electrical System a Ticking Time Bomb?</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Discover your facility's hidden financial risks before they bring your operations to a standstill.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Calculator Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Downtime Risk Calculator</h2>
            <p className="text-gray-600 mb-6">
              Enter your facility's estimated hourly revenue to visualize the compounding cost of an unplanned electrical outage.
            </p>

            <div className="mb-6">
              <label htmlFor="revenue" className="block text-sm font-bold text-gray-700 mb-2">
                Estimated Hourly Revenue ($)
              </label>
              <input 
                type="number" 
                id="revenue" 
                value={hourlyRevenue}
                onChange={(e) => setHourlyRevenue(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-md text-lg font-mono text-gray-900"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900">Did you know?</h4>
              <p className="text-sm text-blue-800 mt-1">
                Power-related failures are the <strong>#1 cause of critical outages</strong>, responsible for over 40% of incidents industry-wide.
              </p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 h-[400px]">
            <Bar options={options} data={chartData} />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-100 p-10 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900">Don't Wait for the Lights to Go Out</h2>
            <p className="text-lg text-gray-600 my-4 max-w-2xl mx-auto">
                A proactive maintenance plan costs a fraction of a single hour of downtime. Secure your operations today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/maintenance-advisor" className="btn">
                    Get a Proactive Maintenance Plan
                </Link>
                <a href="tel:304-410-9208" className="btn-secondary" style={{borderColor: '#333', color: '#333'}}>
                    Call for Emergency Service
                </a>
            </div>
        </div>
      </div>
    </Layout>
  );
}
