import React from 'react';
import { CinematicSplitText } from '../components/CinematicSplitText';

const SKILL_GROUPS = [
  {
    id: 'programming',
    label: 'PROGRAMMING',
    items: [
      { number: '01', value: 'Java' },
      { number: '02', value: 'JavaScript' },
      { number: '03', value: 'Python' },
      { number: '04', value: 'HTML5' },
      { number: '05', value: 'CSS3' },
    ],
  },
  {
    id: 'version-control',
    label: 'TOOLS & VERSION CONTROL',
    items: [
      { number: '01', value: 'Git' },
      { number: '02', value: 'GitHub' },
    ],
  },
  {
    id: 'computer-science',
    label: 'CORE COMPUTER SCIENCE',
    items: [
      { number: '01', value: 'Data Structures & Algorithms' },
      { number: '02', value: 'DBMS' },
      { number: '03', value: 'Operating Systems' },
      { number: '04', value: 'OOPs' },
      { number: '05', value: 'Web Development' },
    ],
  },
  {
    id: 'ai-software',
    label: 'AI & SOFTWARE DEVELOPMENT',
    items: [
      { number: '01', value: 'React' },
      { number: '02', value: 'Node.js' },
      { number: '03', value: 'Express.js' },
      { number: '04', value: 'Bootstrap' },
    ],
  },
  {
    id: 'devops',
    label: 'DEVOPS & DEPLOYMENT',
    items: [
      { number: '01', value: 'MongoDB' },
      { number: '02', value: 'MySQL' },
      { number: '03', value: 'Netlify' },
      { number: '04', value: 'Vercel' },
    ],
  },
];

const ARSENAL_INDEX = [
  'PROGRAMMING',
  'VERSION CONTROL',
  'COMPUTER SCIENCE',
  'AI + SOFTWARE',
  'DEVOPS + DEPLOYMENT',
];

export const ExperienceSection: React.FC = () => {
  return (
    <div className="stage-3-layout page-container">
      <div className="stage-chapter-marker motion-reveal arsenal-chapter" data-motion-reveal="fade-up">
        <span className="stage-chapter-num"><CinematicSplitText lines={['CHAPTER 02']} splitType="words" /></span>
      </div>

      <div className="stage-3-content-grid">
        <div className="stage-3-timeline-col">
          <h2 className="section-title arsenal-title motion-reveal" data-motion-reveal="fade-up">
            <CinematicSplitText lines={['THE ARSENAL']} splitType="words" />
          </h2>

          <p className="arsenal-subtitle motion-reveal" data-motion-reveal="fade-up">
            TOOLS OF THE CRAFT
          </p>

          <div className="arsenal-statement motion-reveal" data-motion-reveal="fade-up">
            <CinematicSplitText lines={['CODE.', 'BUILD.', 'DEBUG.', 'DEPLOY.']} />
          </div>

          <p className="arsenal-description motion-reveal" data-motion-reveal="fade-up">
            Building practical systems through code, experimentation, and continuous refinement.
          </p>

          <div className="arsenal-index motion-reveal" data-motion-reveal="fade-up">
            <div className="arsenal-index-heading">
              <span className="arsenal-index-line" aria-hidden="true" />
              <span>ARSENAL // 05</span>
            </div>
            <ol className="arsenal-index-list">
              {ARSENAL_INDEX.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="arsenal-motto motion-reveal" data-motion-reveal="fade-up">
            <CinematicSplitText lines={['BUILD WITH PURPOSE.', 'IMPROVE WITH EVERY ITERATION.']} splitType="words" />
          </p>
        </div>

        <div className="stage-3-negative-space" aria-hidden="true" />

        <aside className="stage-3-principles-col motion-reveal" data-motion-reveal="fade-up">
          <div className="arsenal-groups" aria-label="Technology groups">
            {SKILL_GROUPS.map((group, index) => (
              <div
                key={group.id}
                className="arsenal-group motion-reveal"
                data-motion-reveal="fade-up"
                style={{ '--motion-reveal-delay': `${index * 120}ms` } as React.CSSProperties}
              >
                <div className="arsenal-group-header">
                  <span className="arsenal-group-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{group.label}</span>
                </div>

                <ul className="arsenal-list" aria-label={group.label}>
                  {group.items.map(item => (
                    <li key={`${group.id}-${item.number}`} className="arsenal-item">
                      <span className="arsenal-number">{item.number}</span>
                      <span className="arsenal-name">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="arsenal-footer">BUILDING THROUGH PRACTICAL PROJECTS.</p>
        </aside>
      </div>
    </div>
  );
};
