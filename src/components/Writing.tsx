import React from 'react';
import { Link } from 'react-router-dom';
import { FolderLayout } from './FolderLayout';
const essayPath = '/writing/beyond-the-sales-calendar';
const essayTitle = 'Growing Hinge Health beyond employer launches';
export const Writing = () => (
  <FolderLayout title="WRITING">
    <div className="writing-index text-text-dark">
      <p className="mb-8">What I’ve learned from building products and leading growth teams.</p>
      <article className="writing-preview">
        <p className="portfolio-label">GROWTH STRATEGY · HINGE HEALTH</p>
        <h2><Link to={essayPath}>{essayTitle}</Link></h2>
        <p>We could usually reach employees only two or three times a year. Here’s how we tested new ways to reach members while continuing to support employer launches.</p>
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
        <p className="writing-deck">How we tested search, ads, and referrals while continuing to support employer launches.</p>
      </header>
      <section>
        <h3>We could reach employees only a few times a year</h3>
        <p>At Hinge Health, employers promoted the product to employees during agreed launch periods. Enrollment rose during those launches. Between them, we had few opportunities to reach members or run experiments.</p>
        <p>If an employer delayed a launch, growth stalled. We could typically market to employees only two or three times a year, and experiments required employer approval and custom engineering work. We needed more control over when we could reach people and how quickly we could test ideas.</p>
      </section>
      <section>
        <h3>Support employer launches and test new channels</h3>
        <p>We considered three paths: improve existing employer launches, shift most resources to new channels, or test new channels while continuing to support Sales.</p>
        <p>Improving employer launches could increase enrollment, but we would still depend on employers’ schedules. Moving most resources to new channels would risk the work still responsible for most revenue.</p>
        <p>We chose to do both. We wanted to spend less time supporting each launch, help more interested people enroll, and test new channels faster. The results would help us decide where to invest next.</p>
      </section>
      <section>
        <h3>Make each experiment easier to run</h3>
        <p>Contentful let teams change landing pages without engineering help. Reusable page components made design tests easier to build. Segment standardized member identification and event tracking, while Iterable automated communications.</p>
        <p>We also built shared tools to track referral sources, check eligibility, and send rewards. Better ad tracking and easier access for search engines helped us test paid acquisition and SEO.</p>
        <p>Tools built for one experiment could be reused in the next. That reduced the time and effort needed to test ideas across several channels.</p>
      </section>
      <section>
        <h3>Work through Legal’s concerns</h3>
        <p>Legal and privacy concerns made incentives difficult to test. Colleagues were skeptical of the idea.</p>
        <p>I worked with Legal to understand the specific concerns. We chose rewards related to care, such as yoga mats, foam rollers, and exercise equipment. Employers opted in, eligibility was tracked in our customer relationship management system, and reward fulfillment was controlled.</p>
        <p>Once we understood the concerns, we could design a test that addressed them.</p>
      </section>
      <section>
        <h3>Keep testing after the first win</h3>
        <p>Many early experiments failed. Some channels looked promising until better tracking showed their actual performance. Sometimes employer adoption limited growth even when members responded.</p>
        <p>Conversion declined in the second and third launches of successful incentives. We began rotating rewards and testing again.</p>
        <p>An incentive that worked once didn’t keep producing the same result. We needed to keep testing it.</p>
      </section>
      <section>
        <h3>Results and lessons</h3>
        <p>Together, this work generated more than $30M in additional annual revenue in 2023. SEO, paid acquisition, and referrals grew from about 1% to about 10% of total enrollments.</p>
        <p>My main lesson: invest in tools that make the next experiment easier. Shared pages, tracking, and referral tools helped us test new channels while continuing to support employer launches.</p>
      </section>
      <footer><Link className="portfolio-essay-link" to="/work">View the Hinge Health projects ↗</Link></footer>
    </article>
  </FolderLayout>
);
