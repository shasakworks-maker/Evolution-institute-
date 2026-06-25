export interface Course {
  id: string;
  title: string;
  level: string; // e.g. "Secondary", "Higher Secondary", "Competitive"
  subjects: string[];
  description: string;
  target: string;
  features: string[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  subject: string;
  experience: string;
  education: string;
  photoUrl: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Classroom" | "Activities" | "Students" | "Pamphlets";
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  classOrExam: string;
  achievement?: string;
  stars: number;
  comment: string;
  date: string;
  avatarUrl?: string;
}

export interface ResultRecord {
  id: string;
  studentName: string;
  exam: string; // e.g. "JEE Advanced", "NEET", "CBSE Class 12"
  score: string; // e.g. "AIR 45", "99.8%", "98.4%"
  year: string;
  imageUrl: string;
}
