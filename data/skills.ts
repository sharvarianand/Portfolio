import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiNextdotjs, SiExpress, SiMysql, SiPython } from 'react-icons/si';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  proficiency: number; // 0-100
  experience: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Language' | 'Tools';
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: FaHtml5,
    proficiency: 95,
    experience: '3+ years',
    description: 'Semantic markup, accessibility, and modern HTML5 features',
    category: 'Frontend'
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    proficiency: 90,
    experience: '3+ years',
    description: 'Advanced layouts, animations, and responsive design',
    category: 'Frontend'
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    proficiency: 92,
    experience: '3+ years',
    description: 'ES6+, async programming, and modern JavaScript patterns',
    category: 'Language'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    proficiency: 88,
    experience: '2+ years',
    description: 'Type-safe development, generics, and advanced types',
    category: 'Language'
  },
  {
    name: 'React',
    icon: FaReact,
    proficiency: 93,
    experience: '2+ years',
    description: 'Hooks, context, performance optimization, and state management',
    category: 'Frontend'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    proficiency: 90,
    experience: '1.5+ years',
    description: 'SSR, SSG, API routes, and App Router architecture',
    category: 'Frontend'
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    proficiency: 85,
    experience: '2+ years',
    description: 'Server-side JavaScript, RESTful APIs, and microservices',
    category: 'Backend'
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    proficiency: 87,
    experience: '2+ years',
    description: 'Middleware, routing, authentication, and API development',
    category: 'Backend'
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    proficiency: 91,
    experience: '2+ years',
    description: 'Utility-first CSS, custom configurations, and design systems',
    category: 'Frontend'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    proficiency: 82,
    experience: '1.5+ years',
    description: 'NoSQL databases, aggregation pipelines, and schema design',
    category: 'Database'
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    proficiency: 80,
    experience: '2+ years',
    description: 'Relational databases, complex queries, and optimization',
    category: 'Database'
  },
  {
    name: 'Python',
    icon: SiPython,
    proficiency: 86,
    experience: '2+ years',
    description: 'Data structures, algorithms, and backend development',
    category: 'Language'
  },
  {
    name: 'Java',
    icon: FaJava,
    proficiency: 83,
    experience: '2+ years',
    description: 'OOP principles, data structures, and application development',
    category: 'Language'
  },
  {
    name: 'Git',
    icon: FaGit,
    proficiency: 89,
    experience: '3+ years',
    description: 'Version control, branching strategies, and collaboration',
    category: 'Tools'
  },
]; 