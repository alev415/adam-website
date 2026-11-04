import React from 'react';
import { Link } from 'react-router-dom';
import { FolderLayout } from './FolderLayout';

const essayPath = '/writing/beyond-the-sales-calendar';
const essayTitle = 'Lowering the Cost of Learning: Building Growth Beyond the Sales Calendar';

export const Writing = () => (
  <FolderLayout title="WRITING">
    <div className="writing-index text-text-dark">
      <p className="mb-8">Reflections on growth strategy, product decisions, and building systems that keep improving.</p>
      <article className="writing-preview">
        <p className="portfolio-label">GROWTH STRATEGY · HINGE HEALTH</p>
        <h2><Link to={essayPath}>{essayTitle}</Link></h2>
        <p>How we supported a working sales engine while building always-on acquisition channels, and why reusable experimentation infrastructure mattered as much as any individual channel.</p>
        <Link className="portfolio-essay-link" to={essayPath}>Read the essay ↗</Link>
      </article>
    </div>
  </FolderLayout>
);

export const GrowthEssay = () => (
  <FolderLayout title="FIELD NOTES">
    <article className="writing-essay text-text-dark" aria-labelledby="essay-title">
      <header>
        <p className="portfolio-label">GROWTH STRATEGY · HINGE HEALTH</p>
        <h2 id="essay-title">{essayTitle}</h2>
        <p className="writing-byline">By Adam Levinson</p>
        <p className="writing-deck">A reflection on building durable growth alongside an established sales-led business.</p>
      </header>

      <section>
        <h3>A working engine with a structural ceiling</h3>
        <p>At Hinge Health, employer launches were a powerful growth engine. Clients would advocate for the platform to their employees during pre-negotiated launch windows. When those windows opened, enrollment rose. Between them, our ability to reach members and run experiments was constrained.</p>
        <p>If an employer delayed a launch, growth stalled. We could typically market to members only two or three times a year, and experiments required client approval and custom engineering work. The challenge was bigger than improving a landing page: we needed more control over when we could grow and how quickly we could learn.</p>
      </section>

      <section>
        <h3>The decision: pursue a parallel strategy</h3>
        <p>We considered three paths. We could keep optimizing individual sales-led flows, shift most of our resources into new channels, or build new capabilities while continuing to support Sales.</p>
        <p>Continuing to optimize deployments offered incremental gains but left the dependency on employer calendars intact. A full pivot to new channels would have put a working engine, still responsible for most revenue, at unnecessary risk.</p>
        <p>We chose the parallel strategy. The aim was to lower the cost of supporting deployments, lift conversion across existing demand, and make new acquisition channels easier to prototype. Evidence from those experiments could then guide future investment.</p>
      </section>

      <section>
        <h3>Build capabilities that improve the next experiment</h3>
        <p>That decision shaped what we built. Contentful made landing pages easier to change without engineering support. A modular design system made UI experiments more reusable. Segment standardized identity and events, while Iterable supported automated communications.</p>
        <p>Referral infrastructure brought together attribution, eligibility, and fulfillment. Better paid tracking and improved site crawlability supported experiments in paid acquisition and SEO.</p>
        <p>These investments served several channels at once. A page, event, or fulfillment capability built for one experiment could reduce the effort required for the next. Lowering the cost of learning became an important part of the growth strategy itself.</p>
      </section>

      <section>
        <h3>Turn disagreement into design constraints</h3>
        <p>Incentives were one of the hardest alignment problems. There were legitimate legal and privacy concerns, and the initial organizational response was skeptical.</p>
        <p>I partnered with Legal to understand the specific constraints. That work pointed us toward non-monetary, care-aligned incentives such as yoga mats, foam rollers, and exercise equipment, supported by client-level opt-ins, CRM eligibility tracking, and controlled fulfillment.</p>
        <p>The useful move was to make the concerns concrete enough to design around. It gave us a path to test an idea while respecting the operating constraints of the business.</p>
      </section>

      <section>
        <h3>What the first results did not settle</h3>
        <p>Many early experiments failed. Some channels looked promising until better tracking revealed their actual performance. Sometimes the limiting factor was client adoption rather than member response.</p>
        <p>Even successful incentives needed iteration. Conversion declined in second and third deployments as their freshness wore off. We treated that decline as a product problem and introduced an incentive rotation model.</p>
        <p>A first win tells you a mechanism can work under certain conditions. Sustaining it requires paying attention to what changes as the audience, exposure, and novelty change.</p>
      </section>

      <section>
        <h3>The outcome, and the lesson I carry forward</h3>
        <p>The work generated over $30M in incremental annual revenue in 2023. SEO, paid acquisition, and referrals grew from roughly 1% to roughly 10% of total enrollments. Incentives delivered a 40% conversion lift against baseline, and provider referrals through EMR integrations converted significantly better than traditional employer deployments.</p>
        <p>Those results came from a combination of channel development, reusable capabilities, and organizational alignment. They should not be attributed to a single tactic.</p>
        <p>The lesson I carry forward is to look beyond the next channel launch. Ask which capabilities will make future experiments easier, which constraints are structural, and how to preserve the working business while creating room for a different growth model.</p>
      </section>

      <footer><Link className="portfolio-essay-link" to="/work">Explore the Hinge Health portfolio ↗</Link></footer>
    </article>
  </FolderLayout>
);
