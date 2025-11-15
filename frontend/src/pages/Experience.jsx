import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const journeyData = [
    {
      title: "July 2025 - Present",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <span className="font-semibold">Learning Gen AI & Agentic AI</span>
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Diving deep into generative AI models and building autonomous AI agents.
          </p>
          <ul className="mb-4 space-y-1">
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Exploring advanced prompt engineering and fine-tuning techniques
            </li>
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Building agentic AI systems with multi-step reasoning capabilities
            </li>
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Implementing RAG (Retrieval-Augmented Generation) pipelines
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">LangChain</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">Hugging Face</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">OpenAI</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">Vector DB</span>
          </div>
        </div>
      ),
    },
    {
      title: "July 2024 - Mar 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <span className="font-semibold">Core Machine Learning Concepts</span>
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Mastering fundamental machine learning algorithms and data processing techniques.
          </p>
          <ul className="mb-4 space-y-1">
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Implemented supervised and unsupervised learning models from scratch
            </li>
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Performed exploratory data analysis and feature engineering on datasets
            </li>
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Built classification and regression models with optimization techniques
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">Pandas</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">NumPy</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">TensorFlow</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">Scikit-Learn</span>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <span className="font-semibold">Coding Fundamentals & College Involvement</span>
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Building strong foundation in programming and active participation in college community.
          </p>
          <ul className="mb-4 space-y-1">
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Learned core programming concepts in Python, C++, and Data Structures
            </li>
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Participated in coding competitions and hackathons at college level
            </li>
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Joined AI & ML club, contributing to workshops and seminars
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">Python</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">C++</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">DSA</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">Competitive Programming</span>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <span className="font-semibold">Joined Narula Institute of Technology</span>
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Starting my B.Tech journey in Artificial Intelligence & Machine Learning.
          </p>
          <ul className="mb-4 space-y-1">
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Enrolled in B.Tech AIML program at Narula Institute of Technology
            </li>
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Completed foundational courses in mathematics and computer science
            </li>
            <li className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Started building a strong academic foundation for AI/ML specialization
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">Education</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">NIT</span>
            <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs rounded-full">B.Tech AIML</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="w-full bg-gray-100 dark:bg-neutral-950 font-sans md:px-10">
        <Timeline data={journeyData} />
      </div>
      
      {/* View Full Resume Section */}
      <div className="w-full bg-gray-100 dark:bg-neutral-950 font-sans md:px-10">
        <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8 pl-12 md:pl-32 py-8">
          <a 
            href="/resume/Ashutosh_Resume.pdf" 
            download="Ashutosh_Resume.pdf"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <span className="text-sm md:text-base">View Full Resume</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default Experience;
