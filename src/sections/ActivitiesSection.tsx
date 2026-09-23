import React from 'react';
import { CinematicSplitText } from '../components/CinematicSplitText';

interface ActivityItem {
  id: string;
  category: string;
  title: string;
  role: string;
  description: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 'generative-ai',
    category: 'Certification',
    title: 'Career Essentials in Generative AI',
    role: 'Microsoft and LinkedIn · October 2024',
    description:
      'Completed a career-focused introduction to generative AI concepts and their application in modern work environments.',
  },
  {
    id: 'alpha-dsa',
    category: 'Coursework',
    title: 'Alpha: DSA with Java',
    role: 'Apna College',
    description:
      'Completed comprehensive data structures and algorithms coursework using Java.',
  },
  {
    id: 'cybersecurity',
    category: 'Simulation',
    title: 'Cybersecurity Analyst Job Simulation',
    role: 'Forage',
    description:
      'Completed practical simulation work focused on Identity and Access Management.',
  },
  {
    id: 'diploma',
    category: 'Education',
    title: 'Diploma in Computer Science',
    role: 'K.L.E Society\'s C.B Kore Polytechnic · 2022 - 2025',
    description:
      'Completed a Diploma in Computer Science and Engineering with a CGPA of 8.34.',
  },
  {
    id: 'internship',
    category: 'Professional Experience',
    title: 'SPARK IT Developers',
    role: 'MERN Stack Intern · Jan 2025 - Apr 2025',
    description:
      'Developed full-stack web applications, responsive interfaces, backend services, and optimized application performance across the software development lifecycle.',
  },
  {
    id: 'school',
    category: 'Education',
    title: 'Secondary Education',
    role: 'L.E.S English Medium High School · Class of 2022',
    description:
      'Completed secondary education with 82.56%.',
  },
];

export const ActivitiesSection: React.FC = () => {
  return (
    <section
      id="activities"
      className="portfolio-section page-container"
      aria-labelledby="activities-heading"
    >
      {/* Section Header */}
      <div className="motion-reveal" data-motion-reveal="fade-up" style={{ marginBottom: 'var(--space-10)' }}>
        <div className="section-label">
          <span className="type-eyebrow">Leadership &amp; Distinction</span>
        </div>
        <h2 className="section-title" id="activities-heading">
          <CinematicSplitText lines={['BEYOND THE CODE']} splitType="words" />
        </h2>
        <p className="type-body" style={{ maxWidth: '560px', color: 'var(--color-text-muted)' }}>
          Extracurricular leadership, technical workshop organizing, and personal creative pursuits
          that shape how I communicate, coordinate, and perform.
        </p>
      </div>

      {/* Grid of Activities */}
      <div className="activities-grid">
        {ACTIVITIES.map((item, index) => (
          <article
            key={item.id}
            className="surface-card activity-card motion-reveal"
            data-motion-reveal="fade-up"
            style={{
              '--motion-reveal-delay': `${index * 90}ms`,
            } as React.CSSProperties}
          >
            <div className="activity-card-header">
              <span className="activity-category-tag">{item.category}</span>
            </div>
            <h3 className="activity-title">
              <CinematicSplitText lines={[item.title]} splitType="words" duration={0.8} stagger={0.08} />
            </h3>
            <p className="activity-role">{item.role}</p>
            <p className="activity-desc">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
