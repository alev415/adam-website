import React from 'react';
import { FolderLayout } from './FolderLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectProps {
  title: string;
  role?: string;
  description: string;
  imageSrc: string;
  imageCaption?: string;
  imageViewport?: { viewBox: string; width: number; height: number };
  tags: string[];
}

interface CompanySectionProps {
  company: string;
  chapterTitle: string;
  context: string;
  role: string;
  period: string;
  impact: { value: string; label: string }[];
  summary: {
    title: string;
    description: string;
  };
  projects: ProjectProps[];
  learnings?: string[];
  essayPath?: string;
}

const Project: React.FC<ProjectProps & { number: number }> = ({ number, title, role, description, imageSrc, imageCaption, imageViewport, tags }) => (
  <article className="portfolio-project">
    <div className={`grid gap-8 ${imageSrc ? 'md:grid-cols-2' : ''}`}>
      {/* Content Section */}
      <div>
        <div className="portfolio-project-number">PROJECT {String(number).padStart(2, '0')}</div>
        <h3 className="font-retro text-xl text-text-dark mb-3">{title}</h3>
        {role && <p className="portfolio-project-role">{role}</p>}
        <p className="font-retro text-xs text-text-dark mb-4 whitespace-pre-line">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="portfolio-tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      {imageSrc && <figure className="relative group min-w-0 self-start w-full max-w-[480px] justify-self-center">
        <motion.div
          className="w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <a href={imageSrc} target="_blank" rel="noreferrer" aria-label={`View ${title} image at full size`}>
          {imageViewport ? (
            <svg
              viewBox={imageViewport.viewBox}
              role="img"
              aria-label={imageCaption || title}
              className="block w-full h-auto max-h-80"
            >
              <image href={imageSrc} width={imageViewport.width} height={imageViewport.height} />
            </svg>
          ) : (
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageCaption || title}
            className="block w-full h-auto max-h-80 object-contain"
          />
          )}
          </a>
        </motion.div>
        {imageCaption && <figcaption className="mt-3 text-sm text-text-dark">{imageCaption} View full-size image.</figcaption>}
      </figure>}
    </div>
  </article>
);

const CompanySection: React.FC<CompanySectionProps & { chapter: number }> = ({ company, chapterTitle, context, role, period, impact, summary, projects, learnings, essayPath, chapter }) => (
  <section className="portfolio-company" aria-labelledby={`company-${chapter}`}>
    <header className="portfolio-company-header">
      <div className="portfolio-company-meta">
        <span>CHAPTER {chapter}: {chapterTitle}</span>
        <span>{period}</span>
      </div>
      <h2 id={`company-${chapter}`} className="portfolio-company-name">{company}</h2>
      <p className="portfolio-company-role">{role}</p>
      <p className="portfolio-company-context">{context}</p>
      <div className="portfolio-overview">
        <p className="portfolio-label">THE MISSION</p>
        <h3 className="portfolio-mission">{summary.title}</h3>
        <p className="text-text-dark">{summary.description}</p>
        {essayPath && <Link className="portfolio-essay-link" to={essayPath}>Read how we approached this ↗</Link>}
      </div>
      <dl className="portfolio-impact" aria-label={`${company} impact highlights`}>
        {impact.map(item => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
    <div className="portfolio-projects">
      <div className="portfolio-work-heading">
        <h3>SELECTED WORK AT {company}</h3>
        <span>{projects.length} projects</span>
      </div>
      {projects.map((project, index) => (
        <Project key={project.title} number={index + 1} {...project} />
      ))}
      {learnings && <aside className="portfolio-learnings" aria-label={`${company} lessons learned`}>
        <h3>WHAT I LEARNED</h3>
        <ul>{learnings.map(item => <li key={item}>{item}</li>)}</ul>
      </aside>}
    </div>
  </section>
);

export const Work = () => {
  const companies: CompanySectionProps[] = [
    {
      company: "HINGE HEALTH",
      chapterTitle: "Growing enrollment beyond employer launches",
      context: "Virtual physical therapy",
      role: "Growth Product",
      period: "2021 - 2025",
      impact: [{value: "$30M+", label: "Additional annual revenue in 2023"}, {value: "~1% → ~10%", label: "Share of enrollments from SEO, paid acquisition, and referrals"}, {value: "+40%", label: "Conversion lift from incentives vs. baseline"}],
      essayPath: "/writing/beyond-the-sales-calendar",
      learnings: [
        "Shared tools made each new experiment faster and cheaper.",
        "Better tracking overturned some promising early results. Employer adoption also limited growth, even when members responded.",
        "Incentive results declined after repeated launches. We began rotating rewards."
      ],
      summary: {
        title: "Reaching members between employer launches",
        description: "Hinge Health relied on employer launch windows to reach new members. Between launches, we had few opportunities to market or run experiments. I led work on SEO, paid acquisition, and referrals while continuing to support employer launches. Together, this work generated more than $30M in additional annual revenue in 2023."
      },
      projects: [
        {
          title: "Making experiments easier to run",
          description: "We introduced Contentful so teams could update landing pages without engineering help. We also added reusable page components, standardized event tracking with Segment, and automated communications with Iterable. Shared referral tools handled attribution, eligibility, and reward fulfillment.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-design-system.png`,
          imageViewport: { viewBox: "256 256 798 692", width: 1310, height: 1204 },
          imageCaption: "Reusable landing page components.",
          tags: ["Design System", "Component Library", "Experimentation", "UI/UX"]
        },
        {
          title: "Testing the signup experience",
          description: "We tested signup messaging, page designs, and calls to action to understand which changes helped more visitors complete signup.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-conversion-testing.png`,
          imageViewport: { viewBox: "256 256 1195 821", width: 1707, height: 1333 },
          imageCaption: "Hinge Health signup page and coverage check.",
          tags: ["A/B Testing", "CRO", "Analytics", "User Behavior"]
        },
        {
          title: "Member referrals, provider referrals, and rewards",
          description: "We built referral programs for existing members and healthcare providers through electronic medical record integrations. I worked with Legal on rewards such as yoga mats and foam rollers, with employer approval and eligibility checks. Incentives increased conversion by 40% against baseline. When results declined in later launches, we began rotating the rewards.",
          imageSrc: "", // Add image path
          tags: ["Growth", "Referral", "User Acquisition", "Revenue"]
        },
        {
          title: "Growing through search, ads, and referrals",
          description: "We improved search visibility and paid-ad tracking to reach members between employer launches. SEO, paid acquisition, and referrals grew from about 1% to about 10% of total enrollments. Better tracking also showed which early experiments weren’t working.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-seo-content.png`,
          imageViewport: { viewBox: "257 258 1153 920", width: 1667, height: 1434 },
          imageCaption: "Exercise articles with prompts to check eligibility.",
          tags: ["SEO", "Paid Acquisition", "Content Strategy", "Growth"]
        },
        {
          title: "Letting people try exercises before enrolling",
          description: "We launched free exercise content so people could try Hinge Health before enrolling. The launch increased accepted members by 10%.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-freemium.png`,
          imageViewport: { viewBox: "256 256 832 970", width: 1344, height: 1482 },
          imageCaption: "Free exercises with links to check coverage and enroll.",
          tags: ["Product Strategy", "Freemium", "User Acquisition", "Conversion"]
        },
        {
          title: "Helping people understand joint and muscle pain",
          description: "We launched Hinge Health’s first AI chatbot to answer questions about joint and muscle pain and explain treatment options. We evaluated the models for performance and compliance before launch.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-ai-chatbot.png`,
          imageViewport: { viewBox: "257 256 902 842", width: 1415, height: 1354 },
          imageCaption: "AI chatbot interface for joint and muscle pain education.",
          tags: ["AI/ML", "Healthcare", "Chatbot", "User Experience"]
        }
      ]
    },
    {
      company: "ROO",
      chapterTitle: "Growing Roo’s hospital marketplace",
      context: "Veterinary staffing marketplace",
      role: "Staff Product Manager, Hospitals and Experience",
      period: "2025 - Present",
      impact: [{"value": "20%", "label": "Hospital growth in the first year"}, {"value": "Launched", "label": "Hospital mobile app"}, {"value": "Shipped", "label": "Features shipped with coding agents"}],
      summary: {
        title: "Hospital growth, a mobile app, and new features",
        description: "At Roo, I led hospital acquisition and the hospital product experience. The number of hospitals on the platform grew by 20% in my first year. I also launched the hospital mobile app and used coding agents to build review features, dark mode, and admin improvements."
      },
      projects: [
        {
          title: "Prompting hospitals to review completed shifts",
          role: "Built with coding agents",
          description: "Added dashboard prompts showing which completed shifts still needed a review.",
          imageSrc: `${import.meta.env.BASE_URL}images/roo-review-prompts.png`,
          imageCaption: "Hospital dashboard prompt encouraging reviews within 30 days.",
          tags: ["Coding Agents", "Hospital Experience", "Reviews"]
        },
        {
          title: "Making shift reviews easier to find and submit",
          role: "Built with coding agents",
          description: "Built rating and review flows so hospitals and veterinarians could share feedback on completed shifts.",
          imageSrc: `${import.meta.env.BASE_URL}images/roo-rating-flows.png`,
          imageCaption: "Shift-level ratings and thumbs-up / thumbs-down review controls.",
          tags: ["Coding Agents", "Reviews", "Marketplace", "UX"]
        },
        {
          title: "Dark Mode and Admin Tools",
          role: "Built with coding agents",
          description: "Used coding agents to independently build and ship dark mode and improvements to internal admin tools.",
          imageSrc: `${import.meta.env.BASE_URL}images/roo-dark-mode-admin.png`,
          imageCaption: "Dark mode and admin navigation. Hospital contact records omitted.",
          tags: ["Coding Agents", "Dark Mode", "Internal Tools"]
        }
      ]
    },
    {
      company: "UDEMY",
      chapterTitle: "Helping students return to their courses",
      context: "Online learning platform",
      role: "Growth, Mobile, and Learner Engagement",
      period: "2016 - 2021",
      impact: [{"value": "+9.8%", "label": "Learning minutes per session"}, {"value": "+7.3%", "label": "Learning days"}, {"value": "iOS", "label": "Initial A/B test"}],
      summary: {
        title: "Learning reminders",
        description: "Students wanted to keep learning but struggled to find time. We built reminders to help them return to their courses. An iOS A/B test increased learning minutes per session by 9.8% and learning days by 7.3%."
      },
      projects: [
        {
          title: "Understanding why students stopped learning",
          description: "Students saw Udemy as a useful way to spend spare time, but many struggled to return to courses they had bought. Research pointed to limited time as the main barrier.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-user-research.png`,
          imageCaption: "Research findings on learner motivation and time barriers.",
          tags: ["User Research", "Problem Discovery", "Qualitative Analysis"]
        },
        {
          title: "Reviewing reminders in other apps",
          description: "We reviewed learning and productivity apps to understand how they used reminders. We chose to test reminders that encouraged short learning sessions.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-competitive-analysis.png`,
          imageCaption: "Reminder examples from other apps.",
          tags: ["Competitive Analysis", "Market Research", "Product Strategy"]
        },
        {
          title: "Designing the first version",
          description: "We started with iOS because local notifications let us test reminders without backend work. We designed the setup flow to fit the existing app.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-purchase-flow.png`,
          imageCaption: "Purchase and reminder setup screens.",
          tags: ["Product Design", "MVP", "iOS", "UX Patterns"]
        },
        {
          title: "Build and Launch",
          description: "An iOS engineer built reminders using on-device scheduling. After testing the feature, we launched an A/B test.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-return-flow.png`,
          imageCaption: "A learning reminder and the My Courses screen.",
          tags: ["iOS Development", "QA", "A/B Testing"]
        },
        {
          title: "Test results",
          description: "The test increased average learning minutes per session by 9.8% and learning days by 7.3%. Learning days measured the number of distinct days a student engaged with course content. Both results were statistically significant. The results supported exploring reminders on Android and web.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-results.png`,
          imageCaption: "Test results: learning minutes and learning days.",
          tags: ["Analytics", "User Engagement", "Product Impact"]
        }
      ]
    }
  ];

  return (
    <FolderLayout title="PORTFOLIO">
      <div className="portfolio-chapters">
        <p className="portfolio-intro">Selected projects from Hinge Health, Roo, and Udemy: what we built, why we built it, and what happened.</p>
        {companies.map((company, index) => (
          <CompanySection key={company.company} chapter={index + 1} {...company} />
        ))}
      </div>
    </FolderLayout>
  );
};
