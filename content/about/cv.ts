export interface CVItem {
  title: string;
  org: string;
  period: string;
  description?: string;
}

export interface Publication {
  authors: string;
  title: string;
  url?: string;
  venue: string;
  year: string;
  note?: string;
}

export const cv = {
  experience: [
    {
      title: "AI Researcher / Engineering",
      org: "SUN ASTERISK",
      period: "Jan 2024 – Present",
      description:
        "Focus on learning and researching AI models; implementing, operating, and applying knowledge to real-world requirements and problems.",
    },
    {
      title: "Research Assistant",
      org: "VinUniversity",
      period: "Oct 2025 – Present",
      description:
        "Building papers and projects on aquaculture and AI. Focus on selective-classification (learning to reject) methods at the intersection of aquaculture and machine learning; designing, implementing, and publishing research studies.",
    },
    {
      title: "Head of Academic Department",
      org: "AI Club (FPT University)",
      period: "Sep 2022 – Dec 2023",
      description:
        "Scheduling and teaching AI-related content; organizing sharing and discussion sessions on AI and technology.",
    },
  ] as CVItem[],
  education: [
    {
      title: "Bachelor of Artificial Intelligence",
      org: "FPT University",
      period: "Sep 2021 – 2025",
      description: "GPA: 3.2/4.0 (7.6/10)",
    },
  ] as CVItem[],
  activities: [
    {
      title: "DngBack YouTube Channel",
      org: "",
      period: "Nov 2023 – Present",
      description: "Sharing and discussing AI knowledge.",
    },
  ] as CVItem[],
};

export const publications: Publication[] = [
  {
    authors: "Nguyen Hai*, Duong Bach*, Phan Nam, Cuong Nguyen & Do Cuong",
    title: "DEGRE: Dynamic Gating Ensembles for Trust-Aware Rejection in Medical Image Diagnostics",
    venue: "40th AAAI Conference on Artificial Intelligence (AAAI 2026), Poster",
    year: "2026",
    note: "Co-First Author",
  },
  {
    authors: "Duong Bach*, Nguyen Hai*, Phan Nam*, & Do Cuong",
    title: "Enhancing Reliability in COVID-19 Classification from CT Scans using Learning to Reject",
    venue: "47th IEEE EMBC (EMBC 2025), Poster",
    year: "2025",
    note: "Co-First Author",
  },
  {
    authors: "Duong Bach, Pham Nhat Minh",
    title: "Hierarchical Patch Compression for ColPali: Efficient Multi-Vector Document Retrieval with Dynamic Pruning and Quantization",
    venue: "17th International Conference on Knowledge Discovery and Information Retrieval (KDIR 2025), Oral",
    year: "2025",
    note: "First Author",
  },
  {
    authors: "Nam Thanh Duong; Kien Trung Hoang; Khanh Quoc Duong; Dat Quoc Dinh; Hoan Duc Le; Tuan Huy Nguyen; Bach Xuan Duong; Ban Quy Tran; Anh Ngoc Bui",
    title: "Investigating Market Strength Prediction with CNNs on Candlestick Chart Images",
    venue: "ACMLC '24: 6th Asia Conference on Machine Learning and Computing",
    year: "2024",
    note: "Co-Author",
  },
];
