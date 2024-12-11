import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering chart elements
ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

function Performance() {
  // Sample data for subjects and performance
  const subjects = [
    { name: 'Mathematics', marks: 85, grade: 'A', status: 'Excellent' },
    { name: 'Physics', marks: 90, grade: 'A+', status: 'Excellent' },
    { name: 'Chemistry', marks: 78, grade: 'B', status: 'Good' },
    { name: 'Computer Science', marks: 92, grade: 'A+', status: 'Excellent' },
    { name: 'Electrical Engineering', marks: 88, grade: 'A', status: 'Excellent' },
    { name: 'Mechanical Engineering', marks: 80, grade: 'B', status: 'Good' },
  ];

  // Count the number of students in each category
  const performanceStats = subjects.reduce(
    (acc, subject) => {
      if (subject.status === 'Excellent') acc.excellent++;
      if (subject.status === 'Good') acc.good++;
      if (subject.status === 'Needs Improvement') acc.needsImprovement++;
      return acc;
    },
    { excellent: 0, good: 0, needsImprovement: 0 }
  );

  const pieData = {
    labels: ['Excellent', 'Good', 'Needs Improvement'],
    datasets: [
      {
        data: [
          performanceStats.excellent,
          performanceStats.good,
          performanceStats.needsImprovement,
        ],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'], // Green, Yellow, Red
        hoverBackgroundColor: ['#218838', '#e0a800', '#c82333'],
      },
    ],
  };

  // Pie chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Performance</h1>

      <div style={styles.subjectsContainer}>
        <h2 style={styles.heading}>Engineering Subjects</h2>

        <div style={styles.table}>
          <div style={styles.tableRow}>
            <div style={styles.tableHeader}>Subject</div>
            <div style={styles.tableHeader}>Marks</div>
            <div style={styles.tableHeader}>Grade</div>
            <div style={styles.tableHeader}>Status</div>
          </div>
          {subjects.map((subject, index) => (
            <div key={index} style={styles.tableRow}>
              <div style={styles.tableData}>{subject.name}</div>
              <div style={styles.tableData}>{subject.marks}%</div>
              <div style={styles.tableData}>{subject.grade}</div>
              <div style={styles.tableData}>{subject.status}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.performanceSummary}>
        <h3 style={styles.performanceHeading}>Overall Performance</h3>
        <p style={styles.performanceText}>
          The student has an average of <strong>85.5%</strong> across all subjects.
        </p>
      </div>

      <div style={styles.chartContainer}>
        <h3 style={styles.performanceHeading}>Performance Distribution</h3>
        <Pie data={pieData} options={options} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    backgroundColor: '#f4f7fc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '40px auto',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  subjectsContainer: {
    marginBottom: '30px',
  },
  heading: {
    fontSize: '22px',
    color: '#333',
    marginBottom: '15px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #ddd',
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#007BFF',
    flex: 1,
    textAlign: 'left',
    paddingLeft: '10px',
  },
  tableData: {
    fontSize: '14px',
    color: '#555',
    flex: 1,
    textAlign: 'left',
    paddingLeft: '10px',
  },
  performanceSummary: {
    textAlign: 'center',
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  performanceHeading: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  performanceText: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
  },
  chartContainer: {
    textAlign: 'center',
    marginTop: '30px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default Performance;
