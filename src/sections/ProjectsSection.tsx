import React from 'react';
import { CinematicSplitText } from '../components/CinematicSplitText';

interface Campaign {
  id: string;
  label: string;
  year: string;
  title: string;
  subtitle?: string;
  summary: string;
  classifications: string[];
  liveHref: string;
  githubHref: string;
}

const PROJECTS: Record<'fastFood' | 'coffee' | 'college', Campaign> = {
  fastFood: {
    id: '01',
    label: 'PRIMARY CAMPAIGN',
    year: '2025',
    title: 'FAST FOOD WEBSITE',
    subtitle: 'RESPONSIVE FRONTEND EXPERIENCE',
    summary:
      'A fully responsive fast-food website with 6+ interactive sections, responsive navigation, animations, image galleries, and interactive menu layouts.',
    classifications: ['HTML5', 'CSS3', 'JAVASCRIPT', 'RESPONSIVE DESIGN'],
    liveHref: 'https://fastfoodstore2.netlify.app/',
    githubHref: 'https://github.com/Pranavgorwade/Fast-Food-website',
  },
  coffee: {
    id: '02',
    label: 'COFFEE HOUSE',
    year: '2025',
    title: 'COFFEE WEBSITE',
    summary:
      'A responsive coffee shop website focused on product presentation and user engagement, with smooth scrolling, hover effects, and cross-device layouts.',
    classifications: ['HTML5', 'CSS3', 'JAVASCRIPT', 'SMOOTH SCROLLING', 'RESPONSIVE DESIGN'],
    liveHref: 'https://coffeeseed.netlify.app/',
    githubHref: 'https://github.com/Pranavgorwade/Coffee-Website-Template',
  },
  college: {
    id: '03',
    label: 'INSTITUTIONAL BUILD',
    year: '2025',
    title: 'KLECET COLLEGE WEBSITE',
    summary:
      'A responsive college website for K.L.E. College of Engineering & Technology with structured institutional content and organized academic sections.',
    classifications: ['HTML5', 'CSS3', 'JAVASCRIPT', 'ACADEMIC CONTENT', 'RESPONSIVE DESIGN'],
    liveHref: 'https://klecet.vercel.app/',
    githubHref: 'https://github.com/Pranavgorwade/collage-Project-klecet-',
  },
};

const ProjectLink: React.FC<{ project: Campaign }> = ({ project }) => (
  <div className="campaign-links">
    <a className="campaign-link" href={project.liveHref} target="_blank" rel="noopener noreferrer">
      <span>LIVE PROJECT</span>
      <span aria-hidden="true">↗</span>
    </a>
    <a className="campaign-link" href={project.githubHref} target="_blank" rel="noopener noreferrer">
      <span>GITHUB</span>
      <span aria-hidden="true">↗</span>
    </a>
  </div>
);

const ProjectVisual: React.FC<{ projectId: string; label: string }> = ({ projectId, label }) => (
  <div className={`campaign-visual campaign-visual-${projectId}`} aria-label={`${label} dossier frame`}>
    <span className="campaign-visual-corner campaign-visual-corner-top" aria-hidden="true" />
    <span className="campaign-visual-corner campaign-visual-corner-bottom" aria-hidden="true" />
    <span className="campaign-visual-line" aria-hidden="true" />
    <span className="campaign-visual-label">MISSION DOSSIER // {label}</span>
    <span className="campaign-visual-code">{projectId === '01' ? 'HTML / CSS / JS' : projectId === '02' ? 'MENU / UI / UX' : 'CAMPUS / CONTENT / WEB'}</span>
  </div>
);

const CampaignMeta: React.FC<{ project: Campaign }> = ({ project }) => (
  <div className="campaign-meta-line">
    <span><b>{project.id}</b> / {project.label}</span>
    <span>{project.year}</span>
  </div>
);

const ClassificationList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="campaign-classifications" aria-label="Project classifications">
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
);

export const ProjectsSection: React.FC = () => {
  return (
    <div className="stage-4-layout page-container">
      <div className="stage-chapter-marker motion-reveal campaigns-chapter" data-motion-reveal="fade-up">
        <span className="stage-chapter-num"><CinematicSplitText lines={['CHAPTER 03']} splitType="words" /></span>
      </div>

      <div className="campaigns-intro motion-reveal" data-motion-reveal="fade-up">
        <p className="campaigns-kicker"><CinematicSplitText lines={['THE CAMPAIGNS']} splitType="words" /></p>
        <h2 className="section-title campaigns-title">
          <CinematicSplitText lines={['THINGS I HAVE BUILT.']} splitType="words" />
        </h2>
        <p className="campaigns-supporting">From AI-powered applications to systems built for real-world problems.</p>
      </div>

      <div className="campaigns-list">
        <article className="campaign campaign-primary motion-reveal" data-motion-reveal="fade-up">
          <CampaignMeta project={PROJECTS.fastFood} />
          <div className="campaign-primary-heading">
            <h3><CinematicSplitText lines={['FAST FOOD WEBSITE']} splitType="words" /></h3>
            <h4><CinematicSplitText lines={['RESPONSIVE FRONTEND EXPERIENCE']} splitType="words" /></h4>
          </div>
          <ProjectVisual projectId={PROJECTS.fastFood.id} label="PRIMARY CAMPAIGN" />
          <div className="campaign-primary-footer">
            <ClassificationList items={PROJECTS.fastFood.classifications} />
            <div className="campaign-copy-block">
              <p>{PROJECTS.fastFood.summary}</p>
              <ProjectLink project={PROJECTS.fastFood} />
            </div>
          </div>
        </article>

        <article className="campaign campaign-secondary campaign-oda motion-reveal" data-motion-reveal="fade-up">
          <div className="campaign-secondary-copy">
            <CampaignMeta project={PROJECTS.coffee} />
            <h3><CinematicSplitText lines={['COFFEE WEBSITE']} splitType="words" /></h3>
            <p>{PROJECTS.coffee.summary}</p>
            <ClassificationList items={PROJECTS.coffee.classifications} />
            <ProjectLink project={PROJECTS.coffee} />
          </div>
          <ProjectVisual projectId={PROJECTS.coffee.id} label="COFFEE HOUSE" />
        </article>

        <article className="campaign campaign-secondary campaign-rail motion-reveal" data-motion-reveal="fade-up">
          <ProjectVisual projectId={PROJECTS.college.id} label="INSTITUTIONAL BUILD" />
          <div className="campaign-secondary-copy">
            <CampaignMeta project={PROJECTS.college} />
            <h3><CinematicSplitText lines={['KLECET COLLEGE WEBSITE']} splitType="words" /></h3>
            <p>{PROJECTS.college.summary}</p>
            <ClassificationList items={PROJECTS.college.classifications} />
            <ProjectLink project={PROJECTS.college} />
          </div>
        </article>
      </div>

      <div className="campaigns-transition motion-reveal" data-motion-reveal="fade-up">
        <span className="campaigns-transition-line" aria-hidden="true" />
        <span>03 / CAMPAIGNS COMPLETE</span>
        <span>NEXT // EXPERIENCE</span>
      </div>
    </div>
  );
};
