export enum Category {
  SAFETY_AND_WELLNESS = 1,
  DEVELOPMENT = 2,
  CULTURE = 3,
}

export enum Pillar {
  MENTAL_EMOTIONAL = 1,
  PHYSICAL = 2,
  SOCIAL = 3,
}

export enum Attribute {
  MENTAL_EMOTIONAL_SAFETY_WELLNESS_1 = 1,
  MENTAL_EMOTIONAL_SAFETY_WELLNESS_2 = 2,
  MENTAL_EMOTIONAL_DEVELOPMENT_1 = 3,
  MENTAL_EMOTIONAL_DEVELOPMENT_2 = 4,
  MENTAL_EMOTIONAL_CULTURE_1 = 5,
  MENTAL_EMOTIONAL_CULTURE_2 = 6,
  PHYSICAL_SAFETY_WELLNESS_1 = 7,
  PHYSICAL_SAFETY_WELLNESS_2 = 8,
  PHYSICAL_DEVELOPMENT_1 = 9,
  PHYSICAL_DEVELOPMENT_2 = 10,
  PHYSICAL_CULTURE_1 = 11,
  PHYSICAL_CULTURE_2 = 12,
  SOCIAL_SAFETY_WELLNESS_1 = 13,
  SOCIAL_SAFETY_WELLNESS_2 = 14,
  SOCIAL_DEVELOPMENT_1 = 15,
  SOCIAL_DEVELOPMENT_2 = 16,
  SOCIAL_CULTURE_1 = 17,
  SOCIAL_CULTURE_2 = 18,
}

export enum MentalEmotionalAttribute {
  SAFETY_WELLNESS_1 = 1,
  SAFETY_WELLNESS_2 = 2,
  DEVELOPMENT_1 = 3,
  DEVELOPMENT_2 = 4,
  CULTURE_1 = 5,
  CULTURE_2 = 6,
}

export enum PhysicalAttribute {
  SAFETY_WELLNESS_1 = 7,
  SAFETY_WELLNESS_2 = 8,
  DEVELOPMENT_1 = 9,
  DEVELOPMENT_2 = 10,
  CULTURE_1 = 11,
  CULTURE_2 = 12,
}

export enum SocialAttribute {
  SAFETY_WELLNESS_1 = 13,
  SAFETY_WELLNESS_2 = 14,
  DEVELOPMENT_1 = 15,
  DEVELOPMENT_2 = 16,
  CULTURE_1 = 17,
  CULTURE_2 = 18,
}

export const attributeNames = [
  {
    id: Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
    wellnessName: "Protection from mental and emotional abuse or harassment",
    concernName:
      "Inadequate protection from mental and emotional abuse or harassment",
    abuseName: "Vulnerability to mental and emotional abuse or harassment",
  },
  {
    id: Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
    wellnessName: "Self worth",
    concernName: "Low self worth",
    abuseName: "Neglect of self worth",
  },
  {
    id: Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
    wellnessName:
      "Mental and emotional coaching that builds a sense of self worth, belonging and healthy habits",
    concernName: "Vulnerable to harmful mental and emotional coaching",
    abuseName: "Harmful mental and emotional coaching",
  },
  {
    id: Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
    wellnessName: "Verbal guidance",
    concernName: "Vulnerable to harmful verbal guidance",
    abuseName: "Harmful verbal guidance",
  },
  {
    id: Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    wellnessName: "Treated with dignity",
    concernName: "Erosion of personal boundaries",
    abuseName: "No personal boundaries",
  },
  {
    id: Attribute.MENTAL_EMOTIONAL_CULTURE_2,
    wellnessName: "Equal opportunity for personal growth",
    concernName: "Inequality for personal growth",
    abuseName: "No opportunity for personal growth",
  },
  {
    id: Attribute.PHYSICAL_SAFETY_WELLNESS_1,
    wellnessName: "Protection from physical abuse or harassment",
    concernName: "Inadequate protection from physical abuse or harassment",
    abuseName: "Vulnerability to physical abuse or harassment",
  },
  {
    id: Attribute.PHYSICAL_SAFETY_WELLNESS_2,
    wellnessName: "Bodily integrity",
    concernName: "Poor bodily integrity",
    abuseName: "Vulnerability to bodily injury or harm",
  },
  {
    id: Attribute.PHYSICAL_DEVELOPMENT_1,
    wellnessName:
      "Share in the planning, delivery and involvement of activities",
    concernName:
      "Participant discouraged or restricted from the planning and delivery of activities",
    abuseName: "Sport participation causing undue physical harm",
  },
  {
    id: Attribute.PHYSICAL_DEVELOPMENT_2,
    wellnessName:
      "Access and inclusion to developmentally appropriate programs",
    concernName: "Lack of access to developmentally appropriate programs.",
    abuseName: "No access to developmentally appropriate programs",
  },
  {
    id: Attribute.PHYSICAL_CULTURE_1,
    wellnessName: "Self care",
    concernName: "Normalized self-harm",
    abuseName: "Normalized self-harm",
  },
  {
    id: Attribute.PHYSICAL_CULTURE_2,
    wellnessName: "Healthy personal boundaries",
    concernName: "Undignified physical touch and care",
    abuseName: "Undignified physical touch and care",
  },
  {
    id: Attribute.SOCIAL_SAFETY_WELLNESS_1,
    wellnessName: "Protection from social abuse or harassment",
    concernName: "Inadequate protection from social abuse or harassment",
    abuseName: "Vulnerability to social abuse or harassment",
  },
  {
    id: Attribute.SOCIAL_SAFETY_WELLNESS_2,
    wellnessName: "Protection of personal information",
    concernName: "Inadequate protection of personal information",
    abuseName: "Lack of privacy",
  },
  {
    id: Attribute.SOCIAL_DEVELOPMENT_1,
    wellnessName: "Freedom of expression",
    concernName: "Suppresion of speech, restriction of expression",
    abuseName: "Normalizaation of social misconduct",
  },
  {
    id: Attribute.SOCIAL_DEVELOPMENT_2,
    wellnessName: "Healthy power dynamics",
    concernName: "Power imbalance, undue influence",
    abuseName: "Sexual misconduct without consent or with a minor",
  },
  {
    id: Attribute.SOCIAL_CULTURE_1,
    wellnessName: "DEI",
    concernName: "Poor DEI",
    abuseName: "Poor DEI",
  },
  {
    id: Attribute.SOCIAL_CULTURE_2,
    wellnessName: "Fair governance",
    concernName: "Unfair governance",
    abuseName: "Unfair governance",
  },
];
