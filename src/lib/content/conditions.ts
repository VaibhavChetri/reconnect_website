export type Condition = {
  name: string;
  slug: string;
  shortDescription: string;
};

export const conditions: Condition[] = [
  {
    name: "Knee Osteoarthritis",
    slug: "knee-osteoarthritis",
    shortDescription:
      "Degenerative wear of knee cartilage causing pain, stiffness, and reduced mobility.",
  },
  {
    name: "Rheumatoid Arthritis",
    slug: "rheumatoid-arthritis",
    shortDescription:
      "An autoimmune condition that causes chronic inflammation and swelling in multiple joints.",
  },
  {
    name: "Osteoporosis",
    slug: "osteoporosis",
    shortDescription:
      "Loss of bone density that increases fracture risk, especially in the spine, hip, and wrist.",
  },
  {
    name: "Disc Bulge & Back Pain",
    slug: "disc-bulge-back-pain",
    shortDescription:
      "Spinal disc displacement leading to chronic lower back pain, sciatica, or nerve compression.",
  },
  {
    name: "Frozen Shoulder",
    slug: "frozen-shoulder",
    shortDescription:
      "Progressive stiffness and pain in the shoulder joint that limits range of motion.",
  },
  {
    name: "Ankylosing Spondylitis",
    slug: "ankylosing-spondylitis",
    shortDescription:
      "An inflammatory disease that can cause vertebrae to fuse, leading to a rigid spine.",
  },
  {
    name: "Cervical Spondylosis",
    slug: "cervical-spondylosis",
    shortDescription:
      "Age-related wear of the cervical spine causing neck pain, stiffness, and occasional nerve symptoms.",
  },
  {
    name: "Post-Surgical Rehabilitation",
    slug: "post-surgical-rehabilitation",
    shortDescription:
      "Guided recovery after joint replacement, ligament repair, or spinal surgery to restore strength and function.",
  },
];
