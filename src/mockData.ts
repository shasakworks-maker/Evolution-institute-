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
    name: "Er. S. Shah",
    role: "Physics Expert & HOD",
    subject: "Physics",
    experience: "10+ Years",
    education: "B.Tech (IET Lucknow)",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "B.Tech from IET Lucknow and our premier Physics Expert. Renowned for conceptual clarity in mechanics, optics, and electrodynamics with a track record of top-ranking results."
  },
  {
    id: "t2",
    name: "Mr. R.M Tiwari",
    role: "Senior Mathematics Faculty",
    subject: "Mathematics",
    experience: "12+ Years",
    education: "M.Sc. in Mathematics",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "A dedicated Mathematics faculty expert in Calculus, Coordinate Geometry, and Algebra. Simplifies complex proofs with intuitive graphical visual guides."
  },
  {
    id: "t3",
    name: "Er. Waris Khan",
    role: "Mathematics Faculty & HOD",
    subject: "Mathematics",
    experience: "10+ Years",
    education: "B.Tech (Engineering)",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Boasting 10+ years of high-yield experience coaching engineering aspirants. Specializes in advanced shortcut methods and competitive problem-solving strategies."
  },
  {
    id: "t4",
    name: "Ritika Thapa",
    role: "Science Faculty",
    subject: "Science",
    experience: "5+ Years",
    education: "M.Sc. in General Sciences",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "With over 5 years of rich pedagogical experience, she builds a rock-solid scientific foundation for secondary students, turning theoretical models into exciting practical insights."
  },
  {
    id: "t5",
    name: "Abdul Khair",
    role: "Biology Faculty & NEET Expert",
    subject: "Biology",
    experience: "9+ Years",
    education: "M.Sc. in Biology",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    bio: "Our primary NEET expert for Biology. Abdul Sir's detailed anatomical diagrams and custom mnemonic structures have paved the way for hundreds of successful medical admissions."
  },
  {
    id: "t6",
    name: "Md. Farukh",
    role: "Biology Faculty & NEET Mentor",
    subject: "Biology",
    experience: "11+ Years",
    education: "M.Sc. in Medical Physiology",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "A dedicated NEET mentor who works closely with students on high-scoring units like genetics and ecology. Known for customized student-focused revisions and regular diagnostic reviews."
  },
  {
    id: "t7",
    name: "Er. S. Shah",
    role: "Chemistry Faculty",
    subject: "Chemistry",
    experience: "8+ Years",
    education: "B.Tech (Chemical Sciences)",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "With 8+ years of core chemistry coaching experience, he specializes in making physical stoichiometry and complex organic pathways thoroughly clear, organic, and logical."
  },
  {
    id: "t8",
    name: "Mr. R. K. Verma",
    role: "Senior Commerce Faculty",
    subject: "Commerce",
    experience: "12+ Years",
    education: "M.Com (Accountancy Expert)",
    photoUrl: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?auto=format&fit=crop&w=400&q=80",
    bio: "Expert mentor guiding commerce and economics streams. Translates bookkeeping, statistics, and financial theory into easy real-world business scenarios."
  },
  {
    id: "t9",
    name: "Mrs. Versha Sahay",
    role: "English Faculty",
    subject: "English",
    experience: "10+ Years",
    education: "M.A. in English Literature",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8fecef2271ff?auto=format&fit=crop&w=400&q=80",
    bio: "Guides literature and core language fluency, preparing students to excel in board essay metrics as well as national level verbal evaluation exams."
  },
  {
    id: "t10",
    name: "Mr. OM Yadav",
    role: "SST Faculty",
    subject: "Social Studies (SST)",
    experience: "8+ Years",
    education: "M.A. in History & Civics",
    photoUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80",
    bio: "Breathes life into history, geography, and civics classes with story-centric models, interactive map-pointing tactics, and memorable milestone charts."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g_class1",
    title: "Evolution Premier Lecture Theater",
    category: "Classroom",
    imageUrl: "https://cdn.phototourl.com/free/2026-06-25-5b3ca132-2b4c-4960-bc36-6b79406735f7.jpg"
  },
  {
    id: "g_class2",
    title: "High-Fidelity Smart Board Lecture Hall",
    category: "Classroom",
    imageUrl: "https://cdn.phototourl.com/free/2026-06-25-a74a65ad-1369-45ff-b146-2af979017428.jpg"
  },
  {
    id: "g_class3",
    title: "Interactive Interactive Audio-Visual Classroom",
    category: "Classroom",
    imageUrl: "https://cdn.phototourl.com/free/2026-06-25-ed502732-1730-4cc4-be02-cba06d64e1db.jpg"
  },
  {
    id: "g_class4",
    title: "Dedicated Physical Batch Study Space",
    category: "Classroom",
    imageUrl: "https://cdn.phototourl.com/free/2026-06-25-ba0c3d8c-3115-456a-8e38-c1aab223204d.jpg"
  },
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
  },
  {
    id: "g7",
    title: "Official Evolution Institute Admissions Prospectus",
    category: "Pamphlets",
    imageUrl: "https://cdn.phototourl.com/free/2026-06-25-eb7638d8-fd75-41ba-896a-9a72e4e7b4ce.jpg"
  },
  {
    id: "g8",
    title: "Official Evolution Career Seminar Flyer & Admission Form",
    category: "Pamphlets",
    imageUrl: "https://cdn.phototourl.com/free/2026-06-25-9e76c12b-13e7-414f-8e3d-31b7206bc286.jpg"
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

export interface BatchStudentResult {
  name: string;
  scores: { subject: string; score: string }[];
}

export interface BatchResult {
  id: string;
  batchName: string;
  students: BatchStudentResult[];
}

export const BATCH_RESULTS: BatchResult[] = [
  {
    id: "b12",
    batchName: "Class 12th Batch (2025–26)",
    students: [
      {
        name: "Safiya Qureshi",
        scores: [
          { subject: "Biology", score: "92%" },
          { subject: "Chemistry", score: "82%" }
        ]
      },
      {
        name: "Mahi Singh",
        scores: [
          { subject: "Chemistry", score: "90%" },
          { subject: "English", score: "86%" }
        ]
      },
      {
        name: "Nandini",
        scores: [
          { subject: "English", score: "88%" },
          { subject: "Chemistry", score: "82%" }
        ]
      },
      {
        name: "Tuba Mariyam",
        scores: [
          { subject: "English", score: "88%" },
          { subject: "Biology", score: "82%" }
        ]
      },
      {
        name: "Ayan Qureshi",
        scores: [
          { subject: "Biology", score: "82%" }
        ]
      },
      {
        name: "Saqib Qureshi",
        scores: [
          { subject: "Chemistry", score: "80%" },
          { subject: "English", score: "77%" }
        ]
      }
    ]
  },
  {
    id: "b10",
    batchName: "Class 10th Batch (2025–26)",
    students: [
      {
        name: "Mohd. Altamas",
        scores: [
          { subject: "Science", score: "91%" },
          { subject: "English", score: "82%" }
        ]
      },
      {
        name: "Mohd. Arkan",
        scores: [
          { subject: "SST", score: "89%" },
          { subject: "English", score: "83%" }
        ]
      },
      {
        name: "Mohd. Navef",
        scores: [
          { subject: "English", score: "87%" }
        ]
      },
      {
        name: "Veer Singh",
        scores: [
          { subject: "Science", score: "86%" },
          { subject: "SST", score: "81%" }
        ]
      },
      {
        name: "Onik",
        scores: [
          { subject: "SST", score: "82%" },
          { subject: "Science", score: "80%" }
        ]
      },
      {
        name: "Sakshi Maurya",
        scores: [
          { subject: "English", score: "80%" }
        ]
      },
      {
        name: "Ankita Pandey",
        scores: [
          { subject: "Overall", score: "80%" }
        ]
      }
    ]
  }
];

