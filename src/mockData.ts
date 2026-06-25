import { Course, Teacher, GalleryItem, Testimonial, ResultRecord } from "./types";

export const COURSES: Course[] = [
  {
    id: "class-9",
    title: "Class 9 - Foundation",
    level: "Secondary",
    subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science", "English"],
    description: "Strong conceptual building block for board exams and competitive test preparation. Focused on deep-rooted analytical skills.",
    target: "CBSE, ICSE & Olympiads (NSEJS, IJSO)",
    features: [
      "Conceptual learning with interactive visualizations",
      "Regular subject-wise assessment & analytical tests",
      "Special orientation for early Olympiad foundations",
      "Doubt clearing sessions on weekends"
    ]
  },
  {
    id: "class-10",
    title: "Class 10 - Board Elite",
    level: "Secondary",
    subjects: ["Mathematics", "Science", "Social Science", "English & IT"],
    description: "Rigorous curriculum coverage oriented towards achieving 95%+ in Board Examinations with robust revision strategies.",
    target: "CBSE / State Boards & NTSE Stage 1 & 2",
    features: [
      "Chapter-wise previous year question (PYQ) analysis",
      "Strict pattern based mock boards with detailed correction",
      "NTSE specific MAT (Mental Ability Test) coaching",
      "Stress-management and time-allocation workshops"
    ]
  },
  {
    id: "class-11",
    title: "Class 11 - Prime (Science)",
    level: "Higher Secondary",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology", "English"],
    description: "Bridge program that transitions students from secondary level to advanced engineering/medical frameworks.",
    target: "CBSE Boards & JEE Mains/Advanced / NEET Foundation",
    features: [
      "Rigorous concept building in Mechanics, Physical Chemistry & Calculus",
      "Synchronized study material matching competitive difficulty",
      "Interactive laboratory demonstrations for scientific inquiry",
      "Weekly diagnostic tests with detailed analytics reports"
    ]
  },
  {
    id: "class-12",
    title: "Class 12 - Zenith (Science & Boards)",
    level: "Higher Secondary",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology", "Physical Education"],
    description: "Comprehensive class 12 syllabus completion before October followed by full mock cycles for board and competitive success.",
    target: "CBSE / State Boards, JEE (Mains & Advanced) & NEET-UG",
    features: [
      "Speed revision of core concepts from Class 11",
      "Special focus on board derivations & high-order thinking (HOTS) questions",
      "All-India Test Series (AITS) representation",
      "Personalized rank-booster micro-modules"
    ]
  },
  {
    id: "comp-prep",
    title: "Competitive Exam Specialists",
    level: "Competitive Prep",
    subjects: ["JEE Advanced (PCM)", "NEET-UG (PCB)", "KVPY", "Olympiads"],
    description: "Our flagship program designed for elite rank aspirations under India's finest faculty mentors.",
    target: "IITs, NITs, AIIMS, and top medical/engineering colleges",
    features: [
      "Advanced problem-solving methodologies (shortcuts, tricks)",
      "Daily practice problems (DPPs) with video explanations",
      "One-on-one mentorship by experienced IIT & Medical alumni",
      "Real-time computer-based test (CBT) interface simulations"
    ]
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "t1",
    name: "Dr. Alok Verma",
    role: "Senior HOD - Physics",
    subject: "Physics",
    experience: "15+ Years",
    education: "Ph.D. in Physics, IIT Kanpur",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Dr. Verma is renowned for making complex electromagnetic waves and mechanics concepts highly intuitive. Over 200 of his students have achieved perfect 100/100 in board exams."
  },
  {
    id: "t2",
    name: "Prof. Shalini Iyer",
    role: "Senior HOD - Chemistry",
    subject: "Chemistry",
    experience: "12+ Years",
    education: "M.Sc. Chemistry, Gold Medalist (DU)",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Prof. Iyer excels in Organic Chemistry mechanisms and Physical Chemistry stoichiometry. Her structured logic trees make chemistry formulas easy to master."
  },
  {
    id: "t3",
    name: "Er. Ramesh Kulkarni",
    role: "Senior HOD - Mathematics",
    subject: "Mathematics",
    experience: "10+ Years",
    education: "B.Tech, IIT Bombay (AIR 321)",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Ramesh sir is a mathematical wizard who teaches shortcuts for Calculus and Algebra. He is famous for his analytical approach and interactive board teaching."
  },
  {
    id: "t4",
    name: "Dr. Neha Sharma",
    role: "Senior HOD - Biology",
    subject: "Biology & Physiology",
    experience: "11+ Years",
    education: "M.D., Lady Hardinge Medical College, Delhi",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8fecef2271ff?auto=format&fit=crop&w=400&q=80",
    bio: "Dr. Neha guides medical aspirants through the structural complexities of anatomy and genetics, emphasizing clinical parallels and highly effective diagramming styles."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Interactive Smart Classroom",
    category: "Classroom",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g2",
    title: "Peer Group Discussions",
    category: "Activities",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g3",
    title: "Well-Equipped Physics & Chemistry Lab",
    category: "Classroom",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g4",
    title: "Annual Science Exhibition",
    category: "Activities",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g5",
    title: "Toppers Felicitation Ceremony",
    category: "Students",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g6",
    title: "Dedicated Self Study Library",
    category: "Classroom",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
  }
];

export const RESULTS: ResultRecord[] = [
  {
    id: "r1",
    studentName: "Aarav Singhal",
    exam: "JEE Advanced 2025",
    score: "All India Rank 24",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "r2",
    studentName: "Ananya Deshmukh",
    exam: "NEET-UG 2025",
    score: "AIR 89 (Score: 715/720)",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "r3",
    studentName: "Kabir Mehta",
    exam: "CBSE Class 12 Boards",
    score: "99.2% (Science State Rank 2)",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "r4",
    studentName: "Priyanka Chawla",
    exam: "JEE Mains 2025",
    score: "99.98 Percentile",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Rohan Gupta",
    classOrExam: "JEE Topper (IIT Roorkee)",
    achievement: "AIR 432 in JEE Advanced",
    stars: 5,
    comment: "Evolution Career Institute transformed my approach to Physics and Math. Dr. Verma's classes are legendary. The continuous mock test reviews helped me iron out my exam temperament beautifully.",
    date: "May 14, 2025",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-2",
    name: "Aditi Roy",
    classOrExam: "NEET Topper (AIIMS Delhi)",
    achievement: "Score: 708/720 in NEET-UG",
    stars: 5,
    comment: "Highly dedicated teachers, especially Dr. Neha in Biology. The doubt counters are open all day, which was a huge blessing. They treated me like family and guided me when I felt low during test series.",
    date: "June 02, 2025",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-3",
    name: "Siddharth Sen",
    classOrExam: "Class 10 CBSE Student",
    achievement: "Score: 98.4% Boards",
    stars: 5,
    comment: "The batch size is kept small, so every student gets personal attention. Ramesh sir is amazing at making mathematics fun. I joined in class 9, and the transition to boards was incredibly smooth.",
    date: "April 28, 2025",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
  }
];
