import React from 'react';
import { FolderLayout } from './FolderLayout';

export const Experience = () => {
  return (
    <FolderLayout title="EXPERIENCE">
      <div className="space-y-12">
        {/* Hinge Health */}
        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-xl text-text-dark mb-2">Hinge Health, Inc.</h2>
          
          <div className="mb-8">
            <h3 className="font-retro text-lg text-text-dark mb-1">Head of Growth Product</h3>
            <h4 className="font-retro text-sm text-text-dark opacity-75 mb-4">January 2023 - Present</h4>
            <ul className="space-y-2 text-text-dark">
              <li className="font-retro text-xs">• Oversee 6 product and engineering pods managing marketing technology, website, and new user growth</li>
              <li className="font-retro text-xs">• Implemented growth strategies driving 33% YoY revenue increase in 2024</li>
              <li className="font-retro text-xs">• Led product strategy generating $20M incremental revenue in 2023</li>
              <li className="font-retro text-xs">• Manage Healthcare Data Platform and Partnership Integration Pod</li>
              <li className="font-retro text-xs">• Direct management of 6 product managers and 2 designers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-retro text-lg text-text-dark mb-1">Senior Product Manager, Growth</h3>
            <h4 className="font-retro text-sm text-text-dark opacity-75 mb-4">August 2021 - January 2023</h4>
            <ul className="space-y-2 text-text-dark">
              <li className="font-retro text-xs">• Managed web property for leading Healthcare/telemedicine company</li>
              <li className="font-retro text-xs">• Achieved 10% improvement in funnel conversion through optimization</li>
              <li className="font-retro text-xs">• Led CMS management and new user growth channels</li>
              <li className="font-retro text-xs">• Managed 3 product pods focused on marketing website, growth, and marketing technology</li>
              <li className="font-retro text-xs">• Spearheaded website redesign and performance improvements</li>
            </ul>
          </div>
        </div>

        {/* Udemy */}
        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-xl text-text-dark mb-2">Udemy, Inc.</h2>
          
          <div className="mb-8">
            <h3 className="font-retro text-lg text-text-dark mb-1">Manager, Product Management</h3>
            <h4 className="font-retro text-sm text-text-dark opacity-75 mb-4">June 2020 - June 2021</h4>
            <ul className="space-y-2 text-text-dark">
              <li className="font-retro text-xs">• Led team driving 10% increase in consumer retention</li>
              <li className="font-retro text-xs">• Managed sprint process for 8 engineers, designer, and UX researcher</li>
              <li className="font-retro text-xs">• Oversaw mobile adoption, video streaming, and anti-piracy initiatives</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-retro text-lg text-text-dark mb-1">Senior Product Manager, Learning and Engagement</h3>
            <h4 className="font-retro text-sm text-text-dark opacity-75 mb-4">April 2019 - June 2020</h4>
            <ul className="space-y-2 text-text-dark">
              <li className="font-retro text-xs">• Founding member defining mission, vision, OKRs, and KPIs</li>
              <li className="font-retro text-xs">• Led mobile app and learner engagement strategy</li>
              <li className="font-retro text-xs">• Achieved 10% retention increase through mobile and marketing initiatives</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-retro text-lg text-text-dark mb-1">Product Manager, Mobile</h3>
            <h4 className="font-retro text-sm text-text-dark opacity-75 mb-4">February 2018 - April 2019</h4>
            <ul className="space-y-2 text-text-dark">
              <li className="font-retro text-xs">• Grew in-app revenue by 99% year over year</li>
              <li className="font-retro text-xs">• Optimized native app marketplace and course experience</li>
              <li className="font-retro text-xs">• Implemented key analytics tools: Branch, Braze, and Amplitude</li>
            </ul>
          </div>

          <div>
            <h3 className="font-retro text-lg text-text-dark mb-1">Product Manager, Growth</h3>
            <h4 className="font-retro text-sm text-text-dark opacity-75 mb-4">March 2016 - February 2018</h4>
            <ul className="space-y-2 text-text-dark">
              <li className="font-retro text-xs">• Increased new user revenue per visitor by 8% in first 7 months</li>
              <li className="font-retro text-xs">• Achieved 3% sitewide revenue lift through page redesigns</li>
              <li className="font-retro text-xs">• Established A/B testing best practices across product teams</li>
            </ul>
          </div>
        </div>

        {/* Earlier Experience */}
        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-xl text-text-dark mb-2">Earlier Experience</h2>
          
          <div className="mb-8">
            <h3 className="font-retro text-lg text-text-dark mb-1">Optimizely, Inc.</h3>
            <h4 className="font-retro text-sm text-text-dark opacity-75 mb-4">March 2013 - November 2015</h4>
            <ul className="space-y-2 text-text-dark">
              <li className="font-retro text-xs">• Customer Success Manager managing $2M+ ARR portfolio</li>
              <li className="font-retro text-xs">• Founding team member launching Amsterdam CSM Team</li>
              <li className="font-retro text-xs">• Developed testing roadmaps for enterprise websites</li>
            </ul>
          </div>

          <div>
            <h3 className="font-retro text-lg text-text-dark mb-1">Tradecraft Bootcamp</h3>
            <h4 className="font-retro text-sm text-text-dark opacity-75 mb-4">November 2015 - February 2016</h4>
            <ul className="space-y-2 text-text-dark">
              <li className="font-retro text-xs">• Led 7-person team executing marketing campaigns for KIVA</li>
              <li className="font-retro text-xs">• Developed and taught A/B testing curriculum</li>
            </ul>
          </div>
        </div>
      </div>
    </FolderLayout>
  );
}; 