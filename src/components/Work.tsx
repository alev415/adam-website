import React from 'react';
import { FolderLayout } from './FolderLayout';
import { motion } from 'framer-motion';

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
        {imageCaption && <figcaption className="mt-3 text-sm text-text-dark">{imageCaption} Click to enlarge.</figcaption>}
      </figure>}
    </div>
  </article>
);

const CompanySection: React.FC<CompanySectionProps & { chapter: number }> = ({ company, chapterTitle, context, role, period, impact, summary, projects, chapter }) => (
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
    </div>
  </section>
);

export const Work = () => {
  const companies: CompanySectionProps[] = [
    {
      company: "HINGE HEALTH",
      chapterTitle: "Driving Step-Change Growth Through Product-Led Growth",
      context: "Virtual physical therapy",
      role: "Growth Product Leadership",
      period: "2021 - 2025",
      impact: [{"value": "$30M+", "label": "Incremental revenue"}, {"value": "Nearly 100", "label": "Website experiments"}, {"value": "6", "label": "Product and engineering pods"}],
      summary: {
        title: "Driving over $30 million in incremental revenue through product-led growth",
        description: "At Hinge Health, a leading virtual physical therapy solution, I helped expand the company's member acquisition strategy beyond its traditional employer-based model. When I joined, the company had no organic or paid acquisition channels. Over my tenure, I built and scaled new growth engines—organic, paid, and referral—driving tens of millions in annual revenue. Along the way, we launched nearly 100 website experiments, created foundational systems for high-velocity execution, and introduced AI-driven product experiences to personalize the member journey."
      },
      projects: [
        {
          title: "Design System for Growth",
          description: "To enable fast, high-quality experimentation, we built a modular web design system from the ground up. This system standardized components and templates across pages, significantly accelerating our ability to launch A/B tests and landing pages. The result was faster iteration cycles, consistent UI, and greater collaboration between design, engineering, and marketing teams.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-design-system.png`,
          imageViewport: { viewBox: "256 256 798 692", width: 1310, height: 1204 },
          imageCaption: "Reusable landing page components and growth design system.",
          tags: ["Design System", "Component Library", "Experimentation", "UI/UX"]
        },
        {
          title: "A/B Testing for Conversion Optimization",
          description: "We implemented a robust A/B testing framework to drive conversion rate improvements across the web funnel. These experiments focused on messaging, design, and call-to-action optimization—ultimately driving more high-intent visitors to complete the signup flow. This experimentation engine played a key role in expanding our member base and refining our understanding of user behavior.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-conversion-testing.png`,
          imageViewport: { viewBox: "256 256 1195 821", width: 1707, height: 1333 },
          imageCaption: "Hinge Health acquisition page and coverage-check experience.",
          tags: ["A/B Testing", "CRO", "Analytics", "User Behavior"]
        },
        {
          title: "Referral Program",
          description: "I led the development and launch of Hinge Health's first member referral program, designed to leverage existing user satisfaction and word-of-mouth. The program scaled quickly, driving tens of millions in revenue annually. It became a core acquisition channel that complemented employer-based marketing while helping members advocate for care in their own communities.",
          imageSrc: "", // Add image path
          tags: ["Growth", "Referral", "User Acquisition", "Revenue"]
        },
        {
          title: "SEO and Paid Acquisition Channels",
          description: "Starting from scratch, I built and scaled both SEO and paid acquisition channels. For SEO, we created educational content, landing pages, and technical infrastructure to improve our search visibility and attract organic traffic. For paid, we tested and optimized across Google, Meta, and other channels to acquire users efficiently. These channels became critical growth levers, generating tens of millions in new revenue.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-seo-content.png`,
          imageViewport: { viewBox: "257 258 1153 920", width: 1667, height: 1434 },
          imageCaption: "Search-focused exercise content and conversion prompts.",
          tags: ["SEO", "Paid Acquisition", "Content Strategy", "Growth"]
        },
        {
          title: "Freemium Product Launch",
          description: "To expand access and drive top-of-funnel acquisition, we launched a freemium offering that allowed prospective members to explore the product before enrolling. This initiative led to a 10% increase in accepted members and served as a scalable way to reduce acquisition friction while still delivering value upfront.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-freemium.png`,
          imageViewport: { viewBox: "256 256 832 970", width: 1344, height: 1482 },
          imageCaption: "Free exercise content with pathways to covered care.",
          tags: ["Product Strategy", "Freemium", "User Acquisition", "Conversion"]
        },
        {
          title: "AI Chatbot for Injury Education",
          description: "We launched Hinge Health's first AI-powered chatbot to help prospective members better understand their pain and explore treatment options. The chatbot leveraged leading LLMs, evaluated for performance and compliance, and was one of the first HIPAA-compliant bots to go live in the healthcare space. It personalized education and triage at scale, improving the digital experience and driving conversion through helpful, interactive content.",
          imageSrc: `${import.meta.env.BASE_URL}images/hinge-ai-chatbot.png`,
          imageViewport: { viewBox: "257 256 902 842", width: 1415, height: 1354 },
          imageCaption: "AI chatbot interface for joint and muscle pain education.",
          tags: ["AI/ML", "Healthcare", "Chatbot", "User Experience"]
        }
      ]
    },
    {
      company: "ROO",
      chapterTitle: "Building and Shipping Software with AI Agents",
      context: "Veterinary staffing marketplace",
      role: "Staff Product Manager, Hospitals and Experience",
      period: "2025 - Present",
      impact: [{"value": "20%", "label": "Hospital growth in the first year"}, {"value": "Launched", "label": "Hospital mobile app"}, {"value": "Hands-on", "label": "Features shipped with coding agents"}],
      summary: {
        title: "Growing the hospital marketplace, from strategy to shipped product",
        description: "At Roo, I led the hospital experience and acquisition strategy, driving 20% hospital growth in my first year. I rebuilt the go-to-market motion and core product flows, and launched a mobile app for hospital users. Alongside this work, I used coding agents to independently ship dark mode, admin improvements, and review flows. The projects below highlight that hands-on implementation work."
      },
      projects: [
        {
          title: "Review Prompts and Feedback Loops",
          role: "Product strategy and agent-assisted implementation",
          description: "Built review prompts into the hospital dashboard to make outstanding feedback visible and give hospital users a clear next step. The experience encourages timely reviews after shifts, helping capture feedback on great experiences and informing future matches.",
          imageSrc: `${import.meta.env.BASE_URL}images/roo-review-prompts.png`,
          imageCaption: "Hospital dashboard prompt encouraging reviews within 30 days.",
          tags: ["Coding Agents", "Hospital Experience", "Feedback Loops"]
        },
        {
          title: "Rating and Review Flows",
          role: "Product strategy and agent-assisted implementation",
          description: "Implemented rating and review flows to help hospitals and veterinarians share feedback. Shift-level ratings and actionable review controls make feedback easier to find and contribute, supporting better feedback loops across the marketplace.",
          imageSrc: `${import.meta.env.BASE_URL}images/roo-rating-flows.png`,
          imageCaption: "Shift-level ratings and thumbs-up / thumbs-down review controls.",
          tags: ["Coding Agents", "Reviews", "Marketplace", "UX"]
        },
        {
          title: "Dark Mode and Admin Tools",
          role: "Hands-on implementation with coding agents",
          description: "Independently implemented dark mode and improvements to internal admin tools using coding agents. This work brought hands-on engineering execution into my product practice, allowing me to ship focused improvements directly.",
          imageSrc: `${import.meta.env.BASE_URL}images/roo-dark-mode-admin.png`,
          imageCaption: "Dark mode and admin navigation. Hospital contact records omitted.",
          tags: ["Coding Agents", "Dark Mode", "Internal Tools"]
        }
      ]
    },
    {
      company: "UDEMY",
      chapterTitle: "Driving Behavior Change Through Product Design",
      context: "Online learning platform",
      role: "Growth, Mobile, and Learner Engagement",
      period: "2016 - 2021",
      impact: [{"value": "+9.8%", "label": "Learning minutes"}, {"value": "+7.3%", "label": "Learning days"}, {"value": "iOS \u2192 Android", "label": "Reminders expanded across platforms"}],
      summary: {
        title: "Boosting engagement through timely nudges: Learning Reminders",
        description: "At Udemy, we launched a learning reminders feature to help students stay on track with their courses, particularly during brief periods of downtime. Our research showed that students valued Udemy as a productive alternative to entertainment apps, but many still struggled to return to courses consistently. Time constraints, rather than a lack of motivation, were the primary barrier. By introducing simple and well-timed push notifications, we aimed to re-engage learners and improve overall course consumption."
      },
      projects: [
        {
          title: "User Research and Problem Framing",
          description: "We began by reviewing existing research and synthesizing user insights to define the core problem. Students consistently told us they viewed Udemy as a valuable use of their time, especially when compared to social or entertainment apps. However, many users purchased multiple courses and failed to complete them, often citing a lack of time. This issue was particularly pronounced for professional learners who needed to keep up with evolving skills to remain competitive or transition into new roles.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-user-research.png`,
          imageCaption: "Research findings on learner motivation and time barriers (PDF page 4).",
          tags: ["User Research", "Problem Discovery", "Qualitative Analysis"]
        },
        {
          title: "Competitive and Opportunity Analysis",
          description: "We conducted a competitive analysis across learning, productivity, and behavior-driven apps to explore how others kept users engaged. From this work, we identified a strong opportunity to introduce timely nudges during moments when users were likely to have short windows of availability. The goal was to meet learners where they were and encourage brief, consistent engagement without overwhelming them.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-competitive-analysis.png`,
          imageCaption: "Competitive landscape and reminder examples (PDF page 12).",
          tags: ["Competitive Analysis", "Market Research", "Product Strategy"]
        },
        {
          title: "Scope Refinement and Design",
          description: "To move quickly and reduce complexity, we focused our initial experiment on iOS only. Supporting web and Android would have required significant backend, design, and frontend work. By narrowing the scope to native iOS notifications, we were able to move forward without introducing new infrastructure dependencies. We created wireframes, built prototypes, and finalized high-fidelity designs that matched Udemy's mobile interaction patterns and visual language.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-purchase-flow.png`,
          imageCaption: "MVP purchase flow and reminder setup designs (PDF page 17).",
          tags: ["Product Design", "MVP", "iOS", "UX Patterns"]
        },
        {
          title: "Build and Launch",
          description: "With a dedicated iOS engineer on the team, we developed the feature using local device scheduling to manage reminders. This approach allowed us to launch and test quickly without needing backend coordination. We conducted QA, prepared the experiment, and launched an A/B test focused exclusively on iOS users to validate the concept and measure impact.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-return-flow.png`,
          imageCaption: "Triggered reminder notification and return to My Courses (PDF page 20).",
          tags: ["iOS Development", "QA", "A/B Testing"]
        },
        {
          title: "Results and Impact",
          description: "The experiment delivered clear and statistically significant results. Average minutes consumed per session increased from 12.4 to 13.61, a 9.8 percent lift, with a p-value of 0.0000003. Learning days, defined as the number of distinct days a user engaged with course content, increased from 0.34 to 0.36, representing a 7.3 percent lift, with a p-value of 0.0000000001. These results gave us strong confidence to explore expanding the feature to Android and web as part of our broader engagement strategy.",
          imageSrc: `${import.meta.env.BASE_URL}images/udemy-results.png`,
          imageCaption: "Experiment results: minutes consumed and learning days (PDF page 27).",
          tags: ["Analytics", "User Engagement", "Product Impact"]
        }
      ]
    }
  ];

  return (
    <FolderLayout title="PORTFOLIO">
      <div className="portfolio-chapters">
        <p className="portfolio-intro">Growth strategy, product leadership, and hands-on execution. Explore the mission, impact, and selected work from each chapter.</p>
        {companies.map((company, index) => (
          <CompanySection key={company.company} chapter={index + 1} {...company} />
        ))}
      </div>
    </FolderLayout>
  );
};
