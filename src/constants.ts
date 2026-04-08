export interface Member {
  name: string;
  role: string;
  image: string;
  description: string;
  email?: string;
  links?: {
    github?: string;
    linkedin?: string;
    scholar?: string;
  };
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference';
  link?: string;
}

export interface LabInfo {
  name: string;
  fullName: string;
  university: string;
  department: string;
  location: string;
  email: string;
  phone: string;
  description: string;
}

export const LAB_INFO: LabInfo = {
  name: "SBCML",
  fullName: "Smart Bio-Communication & Machine Learning Lab",
  university: "Hanyang University",
  department: "Department of Biomedical Engineering",
  location: "Room 502, Engineering Building 2, Hanyang University, Seoul, Korea",
  email: "contact@sbcml.hanyang.ac.kr",
  phone: "+82-2-2220-XXXX",
  description: "We focus on the intersection of biological systems and advanced machine learning to create the next generation of smart communication interfaces and medical diagnostic tools."
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "biosignal-processing",
    title: "Biosignal Processing",
    description: "Advanced analysis of EEG, ECG, and EMG signals using deep learning.",
    icon: "Activity",
    details: [
      "Real-time EEG feature extraction for BCI",
      "Robust ECG monitoring in wearable devices",
      "Deep learning models for artifact removal"
    ]
  },
  {
    id: "bci",
    title: "Brain-Computer Interface",
    description: "Developing seamless communication channels between the human brain and external devices.",
    icon: "Cpu",
    details: [
      "Non-invasive BCI for rehabilitation",
      "Neural decoding of motor intentions",
      "Hybrid BCI systems combining multiple biosignals"
    ]
  },
  {
    id: "medical-ai",
    title: "Medical AI & Diagnostics",
    description: "Applying state-of-the-art machine learning to medical imaging and clinical data.",
    icon: "Brain",
    details: [
      "Automated diagnosis of neurological disorders",
      "Predictive modeling for patient outcomes",
      "Explainable AI for clinical decision support"
    ]
  },
  {
    id: "wearable-tech",
    title: "Smart Wearable Systems",
    description: "Designing intelligent wearable sensors for continuous health monitoring.",
    icon: "Watch",
    details: [
      "Low-power on-device machine learning",
      "Flexible and stretchable biosensors",
      "Internet of Medical Things (IoMT) integration"
    ]
  }
];

export const MEMBERS: Member[] = [
  {
    name: "Prof. In-Young Kim",
    role: "Principal Investigator",
    image: "https://picsum.photos/seed/professor/400/400",
    description: "Professor at the Department of Biomedical Engineering, Hanyang University. Expert in biosignal processing and medical instrumentation.",
    email: "iykim@hanyang.ac.kr"
  },
  {
    name: "Ji-Hoon Lee",
    role: "Ph.D. Candidate",
    image: "https://picsum.photos/seed/member1/400/400",
    description: "Researching deep learning architectures for real-time EEG analysis.",
    email: "jhlee@sbcml.lab"
  },
  {
    name: "Sarah Park",
    role: "Ph.D. Student",
    image: "https://picsum.photos/seed/member2/400/400",
    description: "Focusing on wearable sensor design and signal fusion.",
    email: "sarahp@sbcml.lab"
  },
  {
    name: "Min-Su Choi",
    role: "Master Student",
    image: "https://picsum.photos/seed/member3/400/400",
    description: "Exploring explainable AI in medical imaging.",
    email: "mschoi@sbcml.lab"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub1",
    title: "Deep Learning for Robust EEG Feature Extraction in Real-world Environments",
    authors: "J. Lee, I. Kim",
    venue: "IEEE Transactions on Biomedical Engineering",
    year: 2024,
    type: "Journal"
  },
  {
    id: "pub2",
    title: "A Novel Wearable Sensor for Continuous Multi-modal Biosignal Monitoring",
    authors: "S. Park, M. Choi, I. Kim",
    venue: "Sensors and Actuators A: Physical",
    year: 2023,
    type: "Journal"
  },
  {
    id: "pub3",
    title: "Explainable AI in Clinical Diagnostics: A Case Study on Neurological Disorders",
    authors: "M. Choi, J. Lee, I. Kim",
    venue: "International Conference on Machine Learning (ICML)",
    year: 2023,
    type: "Conference"
  }
];
