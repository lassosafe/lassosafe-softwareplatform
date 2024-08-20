import { Category, Pillar, Attribute } from "./tiers";

export type ConcernQuestion = {
  id: number;
  question: string;
  categoryId: Category;
  helpText?: string;
  under18Question?: string;
};

export type ConcernQuestionNew = {
  id: number;
  question: string;
  categoryIds: Category[];
  pillarIds: Pillar[];
  attributeIds: Attribute[];
  helpText?: string;
  under18Question?: string;
};

export type AbuseQuestion = {
  id: number;
  question: string;
  attributeIds: Attribute[];
  helpText?: string;
  under18Question?: string;
};

export type AbuseQuestionNew = {
  id: number;
  question: string;
  categoryIds: Category[];
  pillarIds: Pillar[];
  attributeIds: Attribute[];
  helpText?: string;
  under18Question?: string;
};

export type AbuseQuestionMultiCheckboxNew = {
  id: number;
  question: string;
  checkboxes: string[];
  categoryIds: Category[];
  pillarIds: Pillar[];
  attributeIds: Attribute[];
  helpText?: string;
  under18Question?: string;
  under18Checkboxes?: string[];
};

export type AbuseQuestionMultiCheckbox = {
  id: number;
  question: string;
  checkboxes: string[];
  attributeIds: Attribute[];
  helpText?: string;
  under18Question?: string;
  under18Checkboxes?: string[];
};

export type WellnessQuestion = {
  id: number;
  question: string;
  categoryIds: Category[];
  pillarIds: Pillar[];
  attributeIds: Attribute[];
  helpText?: string;
  under18Question?: string;
  under18HelpText?: string;
};

export const wellnessQuestions: WellnessQuestion[] = [
  {
    id: 1,
    question:
      "My team’s authority figures support me out loud, letting me know how I am doing in a fair way.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
  },
  {
    id: 2,
    question:
      "There is little to no emotional harassment, violence or abuse in my team culture.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
    helpText:
      "What is emotional harassment, violence or abuse in sport? Harassment is repeated behaviors that make fun of, pressure or put down others. Emotional violence is when someone says or does things that scare you, confuse you, or make you feel bad about yourself. Emotional violence can include when someone embarrasses you in public, threatens to hurt you or someone you care about, or damage something you own. Abuse is a pattern of behaviors that make people feel worthless, flawed or unwanted. Abuse can be actions against someone or actions that make people feel abandoned or invisible, like being benched. In sports, people have value for who they are, not just what they are worth to the team/sport, even if they have roles that reflect their talents and skills.",
  },
  {
    id: 3,
    question:
      "My team’s authority figures help me recognize, understand, cope with and communicate my thoughts and feelings. It makes me feel like I matter and belong on my team.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
  },
  {
    id: 4,
    question:
      "No matter how I do or perform, I feel cared about, even when I need to be corrected or get feedback.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
  },
  {
    id: 5,
    question:
      "I feel like my opinion and feedback matters, even to my team’s authority figures. The persons in authority consider my perspective, provides appropriate and meaningful feedback and offers opportunities for choice.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.PHYSICAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_2,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
    helpText:
      "Personal autonomy is a key part of an athlete’s development and refers to a person's sense of self-determination and ability to make choices regarding the direction of their own actions. In other words, my self-determination is free from controlling interferences by others that could limit or prevent personal, meaningful choices. This sense of personal autonomy helps protect me from mental, emotional, physical and social harassment or abuse.",
    under18Question:
      "I feel like my opinion and feedback matters, even to my team’s authority figures. I get to make some of my own choices.",
  },
  {
    id: 6,
    question:
      "People don’t say negative things about my body or body shape, especially the authority figures on my team. Any comments are constructive criticism about my skill or form.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
    helpText:
      "My form and skills may need improvement, but no one is inappropriate or negative about my body shape, eating habits, or a specific body part. I feel like self-love is supported.",
  },
  {
    id: 7,
    question:
      "All my team members are treated fairly, even if they are treated differently because of their skills. Everyone matters.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_1,
    ],
    helpText:
      "I practice and compete without being subject to discrimination on the basis of race, colour, body shape, religion, age, sex, sexual orientation, disability, language, political or other opinion, national or social origin, property, birth or other immutable status.",
  },
  {
    id: 8,
    question:
      "I feel like I am worthy for who I am; my team culture prioritizes people over performance or position. I feel that I can speak up, even against people with more authority or power.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.SOCIAL_CULTURE_1,
      Attribute.SOCIAL_CULTURE_2,
    ],
    helpText:
      "Athletes are people first and their worth, esteem and rights are measured by who they are, not what they do or their leadership roles. From judges and coaches to beginner athletes, people will be different in their skill levels or accomplishments, but we all have equal human worth even if we are different in these areas.",
  },
  {
    id: 9,
    question:
      "I feel like I belong on my team because my authority figures, teammates and I are regarded as individual people who are worthy of equality. This feeling is not used to coerce or control me.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.SOCIAL_CULTURE_1,
    ],
  },
  {
    id: 10,
    question:
      "I have access to developmentally appropriate programs; My team’s authority figures treat all of my team members fairly.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL, Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_1,
    ],
    helpText:
      "Of course, some team members will be recognized differently for their accomplishments, but my team’s authority figures treat everyone fairly.",
  },
  {
    id: 11,
    question:
      "I have access to fluid and nutrition when training and playing. Denial of fluids or nutrition is not normal, and I am encouraged to care for my health.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_2,
      Attribute.PHYSICAL_CULTURE_1,
    ],
  },
  {
    id: 12,
    question:
      "I feel like my team’s authority figures have appropriate goals for me given my age, ability and current fitness levels.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.DEVELOPMENT],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_2,
    ],
  },
  {
    id: 13,
    question:
      "I feel like my team’s authority figures have appropriate goals for me given my age, ability and current fitness levels.",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [Attribute.PHYSICAL_SAFETY_WELLNESS_1],
  },
  {
    id: 14,
    question:
      "I have never seen someone in authority touch a team member (including me) in a harmful or painful way or act in a scary way.",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [Attribute.PHYSICAL_SAFETY_WELLNESS_1],
    helpText:
      "Harmful or painful touch includes hitting, pinching, shoving and kicking. Actions meant to cause fear include throwing of equipment, “near misses” aggressive touch and posturing to intimidate.",
  },
  {
    id: 15,
    question:
      "No one in authority has ever grabbed my or my teammates’ helmet or gear, aggressively spotted us, shoved us, or touched us in a hurtful way that embarrassed, scared or intimidated us.  ",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_2,
    ],
  },
  {
    id: 16,
    question:
      "I feel as though my coaches (and teammates) are happy and willing to make adapt arrangements to help me when I ask and to ensure that I can continue to participate in my sport.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_2,
      Attribute.SOCIAL_CULTURE_1,
    ],
  },
  {
    id: 17,
    question:
      "My team’s physical safety is a priority. Spotting, safety instructions, safety equipment and focused coaching are available when it's appropriate. My team teaches me about physical abuse in sport and how to stay safe.",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [Attribute.PHYSICAL_SAFETY_WELLNESS_1],
  },
  {
    id: 18,
    question:
      "My team culture supports and respects my body, my rights and my choices.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.DEVELOPMENT],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
    ],
    helpText:
      "My team’s authority figures empower bodily integrity- self-determination over my own body, personal autonomy, and freedom from physical, non-consented acts. To support me, they give me information about my rights, appropriate boundaries, and appropriate expectations of the people in charge, encouraging me to talk about it when I am uncomfortable.",
    under18Question:
      " I can decide about my own body and make choices about my health without putting up with people who touch me or make me do things I don’t want to do (outside of regular, expected activities like trainings and practices). ",
    under18HelpText:
      "My team’s authority figures help me by teaching us about our rights, appropriate boundaries, and appropriate expectations of the people in charge, encouraging us to talk about it when we don’t understand or are uncomfortable.",
  },
  {
    id: 19,
    question:
      "I feel like my opinion and feedback matters, even to my team’s authority figures. The persons in authority consider my perspective, provides appropriate and meaningful feedback and offers opportunities for choice.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.DEVELOPMENT],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
    ],
    helpText:
      "Personal autonomy is a key part of an athlete’s development and refers to a person's sense of self-determination and ability to make choices regarding the direction of their own actions. In other words, my self-determination is free from controlling interferences by others that could limit or prevent personal, meaningful choices. This sense of personal autonomy helps protect me from mental, emotional, physical and social harassment or abuse. ",
    under18Question:
      " I feel like my opinion and feedback matters, even to my team’s authority figures. I get to make some of my own choices.",
  },
  {
    id: 20,
    question: "My team culture promotes self-care.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_CULTURE_1,
    ],
    under18Question: "My team’s authority figures want me to care for myself.",
  },
  {
    id: 21,
    question:
      "I know there is no tolerance for inappropriate behavior on my team and I can report it. This includes treatment such as public humiliation, threats, intimidation and unwanted touch. ",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_2,
    ],
    helpText:
      "Other types of inappropriate behavior are joking at others expense, constant heckling or teasing in public to provoke anger, and any form of unwanted, uninvited or inappropriate physical touch or acts between a team’s authority figure and member. It may also include any behavior designed to upset you in front of others. If this does happen to me or a teammate, I know I can report it without fear of retaliation.",
    under18Question:
      "I know there is no tolerance for inappropriate behavior on my team and I can report it. This includes comments, pictures, jokes and behavior that should be private or make me uncomfortable.",
    under18HelpText:
      "Other types of inappropriate behavior are teasing that makes me feel embarrassed or angry, jokes and comments about a teammate’s or my body or a body part, sharing pictures or videos that should stay private or being touched when or where I don’t want to be. If this does happen to me or a teammate, I know how to report it and I'm not scared to.",
  },
  {
    id: 22,
    question:
      "My team culture informs me on and respects personal boundaries. If I report a boundary violation, I can remain anonymous, and I know my personal information is protected.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_2,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_2,
    ],
    helpText:
      "There are three types of personal boundaries: physical, emotional and behavioral. Physical boundaries include who can touch you, how much they can touch you and where they can touch you. Emotional boundaries include how close you feel to a person, how much time you spend with them and what information you share with them. Behavioral boundaries include the things you will do and won’t do, including rules you follow.",
    under18Question:
      "On my team I learn about boundaries. I know who can touch me, how much they can touch me and where they can touch me. I feel safe to say no or find another adult to help me when I feel uncomfortable or scared.",
  },
  {
    id: 23,
    question:
      "My team culture supports and respects my body, my rights and my choices. ",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
    helpText:
      "My team’s authority figures empower bodily integrity- self-determination over my own body, personal autonomy, and freedom from physical, non-consented acts. To support me, they give me information about my rights, appropriate boundaries, and appropriate expectations of the people in charge, encouraging me to talk about it when I am uncomfortable.",
    under18Question:
      "I can decide about my own body and make choices about my health without putting up with people who touch me or make me do things I don’t want to do (outside of regular, expected activities like trainings and practices). ",
    under18HelpText:
      "My team’s authority figures help me by teaching us about our rights, appropriate boundaries, and appropriate expectations of the people in charge, encouraging us to talk about it when we don’t understand or are uncomfortable.",
  },
  {
    id: 24,
    question:
      "Everyone on my team has enough privacy and freedom from unwanted interference or intrusion. This includes protection of: personal information (examples: physical statistics, medical records and wearable data), physical privacy (examples: locker rooms, medical and therapeutic treatments and overnight accommodations), uniform design.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.SOCIAL, Pillar.PHYSICAL],
    attributeIds: [
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_2,
      Attribute.PHYSICAL_CULTURE_2,
    ],
    helpText:
      "Privacy enables us to create barriers and manage boundaries to protect ourselves from unwarranted interference in our lives, which allows us to negotiate who we are and how we want to interact with the world around us. Privacy helps us establish boundaries to limit who has access to our bodies, places and things, as well as our communications and our information.",
  },
  {
    id: 25,
    question:
      "When minors are around there should be no inappropriate social or sexual behavior or comments. I know and I can report it if it happens.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.SOCIAL_CULTURE_2,
    ],
    under18Question:
      "I know that my teammates and I are youth or U18 athletes and I should not put up with behavior that is meant to make me feel embarrassed, angry or scared. I know who to tell if it happens.",
  },
  {
    id: 26,
    question:
      "There are always at least two adults with the minors. No minor is isolated with an adult.",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [Attribute.SOCIAL_SAFETY_WELLNESS_1],
  },
  {
    id: 27,
    question:
      "There are always at least two adults with the minors. No minor is isolated with an adult.",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [Attribute.SOCIAL_SAFETY_WELLNESS_1],
  },
];

export const concernQuestions: ConcernQuestionNew[] = [
  {
    id: 1,
    question:
      "My team’s authority figures often use verbal and/or physical communication that makes me or my teammates feel less important or less worthy of respect; or they let my teammates treat each other this way. This can happen in person or online. I don’t feel comfortable speaking up.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.PHYSICAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_2,
    ],
  },
  {
    id: 2,
    question:
      "I feel like my opinion and feedback are discouraged or disregarded by my team’s authority figures. I would feel more comfortable if I had more opportunities for choice.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL, Pillar.PHYSICAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.PHYSICAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_2,
    ],
  },
  {
    id: 3,
    question: "Witness name calling or demeaning statements.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
    helpText:
      "I often see my team’s authority figures call my teammates names or put them down, or they let my teammates do it. It can be online or in-person. Sometimes it's about how they look or how they do in practice and competition.",
  },
  {
    id: 4,
    question:
      "Some of my team members or I have been treated unfairly, even in consideration of our different skills and team position. Sometimes some people are treated less importantly. ",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
    ],
    helpText:
      "My teammate or I practice and compete being subject to discrimination on the basis of race, color, body shape, religion, age, sex, sexual orientation, disability, language, political or other opinion, national or social origin, property, birth or other immutable status.",
  },
  {
    id: 5,
    question:
      "Sometimes I see questionable behavior and I don’t feel comfortable reporting it; some reasons may be that I don’t know how, I don’t think it will make a difference or it can even make things worse, or I fear identification and retaliation.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.PHYSICAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_2,
    ],
  },
  {
    id: 6,
    question:
      "I feel dependent on my team’s authority figures and put their approval before my own.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
  },
  {
    id: 7,
    question:
      "Some people on my team do not have enough privacy protection of personal information or physical privacy in training, therapy and competition environments. Our culture encourages an erosion of personal boundaries.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL, Pillar.PHYSICAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
    under18Question:
      "Some people on my team don’t have enough privacy, especially online or when we are training, traveling, in therapy or at competitions. No one is helping us with it and we don’t feel like we can say no.",
  },
  {
    id: 8,
    question:
      "My team’s authority figure(s) have one or more team favorites. The team favorite(s) get extra attention, time outside of training, special privileges, compliments, gifts or more. ",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_1,
    ],
  },
  {
    id: 9,
    question: "Negative team rivalry is encouraged.",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
    ],
    helpText:
      "My team’s authority figures try to get us to compete negatively with each other.",
  },
  {
    id: 10,
    question:
      "It's normal for my team to value persons in authority over me or my teammates. ",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.SOCIAL_CULTURE_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
    ],
    helpText:
      "Prestige/position of coach, instructor or staff member takes precedence over the welfare of the athlete. Athlete welfare is not the highest priority ",
  },
  {
    id: 11,
    question:
      "Involvement in sport causing social isolation of athlete because... High level of involvement in sport prevents athlete from developing social relationships, Excessive training routines, Excessive travel schedule",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2],
  },
  {
    id: 12,
    question: "Equipment is inadequate, poorly maintained or unsafe",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.DEVELOPMENT],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_2,
    ],
  },
  {
    id: 13,
    question: "Travels are not properly staffed or supervised",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.DEVELOPMENT],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_2,
    ],
  },
  {
    id: 14,
    question:
      "Sometimes I feel like my participation in sport is hurting or injuring my body and this is normal on my team. I would like to be supported in making more choices about my own body and health, and I’d like to learn more about my physical safety.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_2,
      Attribute.PHYSICAL_CULTURE_2,
    ],
    helpText:
      "Some examples are self-inflicted punish practices, starvation, fluid restriction, extreme weight loss goals, self-injury to avoid training/competition or self-injury from over-exertion in training/practice.",
  },
  {
    id: 15,
    question:
      "My team does not or rarely receives information about our rights, appropriate boundaries and appropriate expectations of the people in charge. We are not encouraged to talk about it when we are uncomfortable.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.DEVELOPMENT],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
    ],
  },
  {
    id: 16,
    question:
      "My teammates and/or I get secret rewards from an authority figure on our team. This can be extra food, equipment, gifts, drugs, alcohol and more.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_CULTURE_1,
    ],
  },
  {
    id: 17,
    question:
      "Sexualized comments, material, images, humor, or behavior are normal on my team.",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [Attribute.SOCIAL_SAFETY_WELLNESS_1],
    under18Question:
      "I know what bad or wrong comments, pictures, jokes or behavior are and they are normal on my team.",
  },
  {
    id: 18,
    question:
      "It is normal for my teammates or me to think about hurting ourselves.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.SOCIAL, Pillar.PHYSICAL],
    attributeIds: [
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_CULTURE_1,
    ],
    helpText:
      "Some examples are thoughts of self-inflicted punish practices, starvation, fluid restriction, extreme weight loss goals, self-injury to avoid training/competition or self-injury from over-exertion in training/practice.",
  },
  {
    id: 19,
    question:
      "I would like to be able to attend sports programs that are better suited to my abilities, fitness level and goals.",
    categoryIds: [Category.DEVELOPMENT, Category.CULTURE],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 20,
    question: "Injuries are not properly treated.",
    categoryIds: [Category.DEVELOPMENT],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [Attribute.PHYSICAL_DEVELOPMENT_2],
  },
  {
    id: 21,
    question: "Control outside of sport.",
    categoryIds: [Category.DEVELOPMENT],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [Attribute.SOCIAL_DEVELOPMENT_2],
  },
  {
    id: 22,
    question: "Control through pressures and demands.",
    categoryIds: [Category.DEVELOPMENT],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [Attribute.SOCIAL_DEVELOPMENT_2],
    helpText:
      "My team’s authority figures often use their power through pressures and demands to control me or my teammates.",
  },
  {
    id: 23,
    question:
      "Unreasonable requests as a form of punishment or a way of creating athlete discipline (example: “punishment practice”)",
    categoryIds: [Category.CULTURE],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [Attribute.PHYSICAL_CULTURE_2],
  },
];

export const emotionalWellnessConcernQuestions: ConcernQuestion[] = [
  {
    question:
      "I feel like my opinion and feedback are discouraged or disregarded by my team's authority figures. I would feel more comfortable if I had more opportunities for choice.",
    categoryId: 1,
    id: 1,
    helpText:
      "My teammate or I practice and compete being subject to discrimination on the basis of race, color, body shape, religion, age, sex, sexual orientation, disability, language, political or other opinion, national or social origin, property, birth or other immutable status.",
  },
  {
    question:
      "My team's authority figures often use verbal and/or physical communication that makes me or my teammates feel less important or less worthy of respect; or they let my teammates treat each other this way. This can happen in person or online. I don't feel comfortable speaking up.",
    categoryId: 1,
    id: 2,
  },
  {
    question:
      "Some of my team members or I have been treated unfairly, even in consideration of our different skills and team position. Sometimes some people are treated less importantly.",
    categoryId: 1,
    id: 3,
  },
  {
    question:
      "Sometimes I see questionable behavior and I don't feel comfortable reporting it; some reasons may be that I don't know how, I don't think it will make a difference or I fear identification and retaliation.",
    categoryId: 1,
    id: 4,
  },
];

export const physicalWellnessConcernQuestions: ConcernQuestion[] = [
  {
    question:
      "Sometimes I feel like my participation in sport is hurting or injuring my body and this is normal on my team. I would like to learn more about my physical safety and make more choices about my own body and health. ",
    categoryId: 1,
    id: 1,
  },
  {
    question:
      "I would like to be able to attend sports programs that are better suited to my abilities, fitness level and goals.",
    categoryId: 1,
    id: 2,
  },
  {
    question:
      "Sometimes I see questionable behavior and I don’t feel comfortable reporting it; some reasons may be that I don’t know how, I don’t think it will make a difference or I fear identification and retaliation.",
    id: 3,
    categoryId: 1,
  },
];

export const socialWellnessConcernQuestions: ConcernQuestion[] = [
  {
    question:
      "My team’s authority figure(s) have one or more team favorites. The team favorite(s) get extra attention, time outside of training, special privileges, compliments, gifts or more.",
    categoryId: 1,
    id: 1,
  },
  {
    question:
      "My teammates and/or I get secret rewards from an authority figure on our team. This can be extra food, equipment, gifts, drugs, alcohol and more.",
    categoryId: 1,
    id: 2,
  },
  {
    question:
      "Some people on my team do not have enough privacy protection of personal information or physical privacy in training, therapy and competition environments. Our culture encourages an erosion of personal boundaries.  ",
    id: 3,
    categoryId: 1,
    under18Question:
      "Some people on my team don’t have enough privacy, especially online or when we are training, traveling, in therapy or at competitions. No one is helping us with it and we don’t feel like we can say no. ",
  },
  {
    question:
      "My team does not or rarely receive information about our rights, appropriate boundaries and appropriate expectations of the people in charge. We are not encouraged to talk about it when we are uncomfortable.",
    categoryId: 1,
    id: 4,
  },
  {
    question:
      "Sexualized comments, material, images, humor, or behavior are normal on my team.",
    categoryId: 1,
    id: 5,
    under18Question:
      "Sexualized comments, material, images, humor, or behavior are normal on my team.",
  },
  {
    question:
      "I feel dependent on my team’s authority figures and put their approval before my own.",
    id: 6,
    categoryId: 1,
  },
  {
    question:
      "Sometimes I see questionable behavior and I don't feel comfortable reporting it; some reasons may be that I don't know how, I don't think it will make a difference or I fear identification and retaliation.",
    id: 7,
    categoryId: 1,
  },
];

export const abuseQuestionsSingleAnswer: AbuseQuestionNew[] = [
  {
    id: 1,
    question: "I am called names or put down. ",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
    helpText:
      "It is normal for my team’s authority figures to call me names or put me down or let my teammates do it. It can be online or in-person. Sometimes it's about how I look or how I do in practice and competition.   ",
  },
  {
    id: 2,
    question: "I experience body shaming, “fat talks”.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
  },
  {
    id: 3,
    question: "I feel controlled through pressures and demands.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
    helpText:
      "My team’s authority figures often use their power through pressures and demands to control me or my teammates. ",
  },
  {
    id: 4,
    question: "I feel controlled outside of sport.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
    helpText:
      "My team’s authority figures often try to control things in my life, or my teammates, that is not part of our sport or team.",
  },
  {
    id: 5,
    question: "I experience withdrawn attention or neglect.",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.DEVELOPMENT],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
    ],
    helpText:
      "My team’s authority figures withdraw attention or deny emotional responsiveness as a form of punishment (example: “silent treatment”, ignore me, keep me away from people who care about me- parents, family, friends).  ",
  },
  {
    id: 6,
    question:
      "There are demeaning statements continually made against me or my teammates.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
    ],
  },
  {
    id: 7,
    question: "Train and/or compete when injured or in pain",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 8,
    question: "Injuries are not properly treated",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 9,
    question: "Bullying among peers is tolerated or not effectively remedied.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 10,
    question:
      "Use of hurtful touch to cause intimidation, humiliation or discomfort (examples: aggressive spotting, grabbing athlete’s helmet/hat/gear, or shoving)",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_2,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 11,
    question:
      "Use of hurtful touch causing physical pain (examples: slapping, kicking, throwing equipment)",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_2,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 12,
    question: "Normalized excessive exercise",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_2,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 13,
    question:
      "Excessive scheduling (inhibits adequate recovery time and/or promotes overuse injury)",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 14,
    question:
      "I have experienced or witnessed denial of fluids and/or nutrition.",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
    under18Question:
      "I have experienced or witnessed not being allowed enough water or food",
  },
  {
    id: 15,
    question:
      "Unreasonable requests as a form of punishment or a way of creating athlete discipline (example: “punishment practice”)",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 16,
    question: "Isolated interactions",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.SOCIAL_CULTURE_1,
    ],
    helpText:
      "This could include ridesharing to/from practice, trainings outside of scheduled times, tutoring and dinners that separate the targeted team member from teammates and family. ",
  },
  {
    id: 17,
    question: "Normalization/desensitization to sexual content",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.SOCIAL_CULTURE_1,
    ],
    helpText:
      "This could include asking the targeted team member questions about their sexual experiences/relationships, talk about sexual things they had done, dirty jokes, sexual education, accidental or inappropriate touching, showing sexual material and desensitizing/increasing physical touch, social media stalking, sexual cyber-harassment. ",
  },
  {
    id: 18,
    question: "Normalization/desensitization to physical content",
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.CULTURE],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_CULTURE_1,
    ],
    helpText:
      "In some sports, physical contact between authority figure(s) and participants is needed for safety and coaching or in therapeutic context. If you participate in this type of sport, healthy cultures limit physical touch to these parameters. A concerning culture could normalize/desensitize physical touch by using it inappropriately or allowing it to be used inappropriately. Examples are: congratulatory butt-slaps, kisses or elongated hugs  therapeutic physical contact by a non-licensed authority figure therapeutic physical contact by a licensed authority figure that is outside of their modality's guidelines any kind of physical contact by authority figures or allowed by authority figures that the athlete does not consent to or is outside of professional guidelines ",
  },
  {
    id: 19,
    question: "Post abuse maintenance",
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.SOCIAL_CULTURE_1,
    ],
    helpText:
      "Examples are encouraging secrets, persuasion that its normal, “I love you” statements, misstated moral standards, make victim feel responsible and threats of less playing time or removal from team. ",
  },
  {
    id: 20,
    question:
      "Sexual violence, exploitation or abuse against me or a teammate. I have reported this to my team authorities or the police",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [Attribute.PHYSICAL_SAFETY_WELLNESS_1],
    under18Question:
      "I know what my private parts are and my team’s authority figure has tried to see or touch them or wants me to see or touch theirs. I have reported this to my team authorities or the police.",
    helpText:
      "World Health Organization defines sexual violence as any sexual act, attempt to obtain a sexual act, unwanted sexual comments or advances, or acts to traffic or otherwise directed against a person’s sexuality using coercion, by any person regardless of their relationship to the victim, in any setting. Sexual exploitation or abuse is any sexual relations with a child, in any context, defined as a human being below the age of 18 years. ",
  },
  {
    id: 21,
    question: "Sexual misconduct without consent or with a minor",
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [Attribute.PHYSICAL_SAFETY_WELLNESS_1],
    under18Question:
      "Inappropriate harassment or bullying, specifically about private things about the body or body parts (Talking about someone’s body or specific body parts not related to sport, Touch or hug without asking permission, Online pictures without parents’/caregivers’ permission, Online messaging or texting without parents’/caregivers’ permission, especially about private things)",
    helpText:
      "Sexual misconduct is any behavior engaged in, or attention given, that is sexual in nature and done without consent or with a minor. Consent does not look like pressure, tricking, persuading, guilting/shaming or bribing.",
  },
  {
    id: 22,
    question: "It is normal for my teammates or me to hurt ourselves.",
    categoryIds: [Category.CULTURE],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [Attribute.PHYSICAL_CULTURE_1],
    helpText:
      "Some examples are self-inflicted punish practices, starvation, fluid restriction, extreme weight loss goals, self-injury to avoid training/competition or self-injury from over-exertion in training/practice.",
  },
];

export const abuseQuestionsMultiAnswer: AbuseQuestionMultiCheckboxNew[] = [
  {
    id: 1,
    question:
      "It is normal for my team’s authority figures to treat my teammates or myself differently, or allow peer to peer misconduct, because of our...",
    checkboxes: [
      "race",
      "color",
      "religion",
      "age",
      "sex",
      "sexual orientation",
      "disability",
      "language",
      "political or other opinion",
      "national or social origin",
      "property",
      "birth or other immutable status",
    ],
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_1,
    ],
  },
  {
    id: 2,
    question: "I have seen my governing officials...",
    checkboxes: [
      "Retaliate against a whistleblower on our team",
      "Retaliate against an alleged victim of misconduct/abuse on our team",
      "Retaliate against another governing official for reporting misconduct/abuse allegations on our team",
      "Disregard allegations or reports of misconduct/abuse on our team",
      "Delay processing of misconduct/abuse reports or investigations",
      "Impede processing of misconduct/abuse reports or investigations",
      "Judge an accused team member without due process",
      "Restrict the rights of an accused team member without due process",
    ],
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.MENTAL_EMOTIONAL, Pillar.PHYSICAL, Pillar.SOCIAL],
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
      Attribute.PHYSICAL_CULTURE_2,
      Attribute.SOCIAL_CULTURE_1,
      Attribute.SOCIAL_CULTURE_2,
    ],
  },
  {
    id: 3,
    question: "Normalized violence and harassment",
    checkboxes: [
      "Over-emphasized competitive culture is fueled by violent or aggressive attributes. These attributes are accepted and/or expected, disguised and excused by a mindset of “a highly masculine” sport culture, “mental toughness” or “win at all costs”",
      "Harassment, such as sledging or pranks; again, these can be disguised as “just what is done around here” ",
      "Online or face-to-face bullying – unwanted, repeated and intentional, aggressive behavior (between authority figure and athlete or among peers) ",
    ],
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.PHYSICAL],
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_DEVELOPMENT_1,
      Attribute.PHYSICAL_CULTURE_2,
    ],
  },
  {
    id: 4,
    question:
      "Favoritism with a vulnerable team member.  The vulnerable team member has: ",
    checkboxes: [
      "a physical or mental disability",
      "a hard time talking, not good at it",
      "a hard time getting rides to practice or is picked up late",
      "a bad relationship with parents or caregivers",
      "an easy-going personality and listens to direction well",
    ],
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.SOCIAL_CULTURE_2,
    ],
  },
  {
    id: 5,
    question: "My team’s authority figure shows favoritism by:",
    checkboxes: [
      "being extra nice",
      "giivng gifts",
      "spending extra time",
      "giving priveleges other teammates don't have",
    ],
    categoryIds: [
      Category.SAFETY_AND_WELLNESS,
      Category.DEVELOPMENT,
      Category.CULTURE,
    ],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_2,
      Attribute.SOCIAL_CULTURE_2,
    ],
  },
  {
    id: 6,
    question: "I have witnessed...",
    checkboxes: [
      "Encouraged sexualized look and behavior (example: hiking up leotard, tight uniform, suggestive gestures)",
      "Ignored sexualized behavior between authority figures or peers",
      "Stalking with phone calls or online messages/texts",
      "Sexualized conversations, especially involving minors",
      "Exploited situations",
      "Inappropriate overnight accommodations (examples: shared room between minors and unapproved adults, lack of private space for dressing/showering)",
      "“Peeping” at minor",
      "Possession of child pornography",
      "Solicitation of minor athlete through the internet",
      "Sexual jokes",
      "Teasing about physical characteristics",
      "Graphic sexual descriptions",
      "Name calling",
      "Comments on physical development",
      "Solicitation",
      "Unwanted romantic advances",
      "Sexting",
    ],
    under18Question:
      "My team’s authority figures do this, or allow peers on my team to do this:",
    under18Checkboxes: [
      "Like it when I wear tight or revealing uniforms/clothes, sometimes they suggest I change how I look or act to be more attractive",
      "Don't speak up when they should, especially about unusual or uncomfortable situations between authority figures and teammates, or between teammates",
      "Chat with me privately online through gaming, sharing pictures/videos or apps",
      "Privately personal message, text or call me",
      "Get me to do things I normally would say no to because they help me become a better athlete",
      "Visit me in my room when we travel, especially when no one else is with us (or I’ve seen it happen with a teammate)",
      "Visit me in the locker room, office or other private area, especially when no one else is with us (or I’ve seen it happen with a teammate)",
      "Show me or my teammates pictures or videos of minors that made me feel uncomfortable",
      "Promise to give me something if I send them pictures or videos online, or video chat with them online",
      "Make jokes that make me feel uncomfortable",
      "Make jokes about my look, body or body parts",
      "Talk about private things about my body or body parts",
      "Call me names",
      "Talk about my body growing and developing",
      "Tell me they will give me something special (example: more playing time, gifts, food) if I let them look at me or touch me in ways that are not normal in my sport",
      "Talk to me or touch me in ways that make me feel uncomfortable",
      "Text or message me about things outside of sport",
    ],
    categoryIds: [Category.SAFETY_AND_WELLNESS, Category.DEVELOPMENT],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_DEVELOPMENT_1,
    ],
  },
  {
    id: 7,
    question:
      "My team’s authority figures do this or allow a peer on my team to do this:",
    checkboxes: [
      "Give me sexualized attention",
      "Want sexualized attention from me",
      "Use pressure, bribes or manipulate me for sexualized attention, behavior or favors, even when I say “no”",
      "Make me feel guilty or embarassed if I don't engage in sexualized attention, behaviors or favors",
      "Talk about my body or specific body parts (or a teammates) with a sexualized tone",
      "Have a sexualized relationship with a minor",
    ],
    under18Question:
      "My team’s authority figures do this or allow a peer on my team to do this:",
    under18Checkboxes: [
      "Give me (or a teammate) special attention that makes me feel uncomfortable and isn’t normal on our team",
      "Want me (or a teammate) to give them special attention that makes me feel uncomfortable and isn’t normal on our team",
      "Pressure or bribe me (or a teammate) to let them do things with me that make me feel uncomfortable, even when I say “no”",
      "Make me feel bad or embarrassed if I don’t let them do things with me that make me feel uncomfortable",
      "Talk about my body or specific body parts (or a teammate) not related to sports",
      "Have a special relationship with me (or my teammate) outside of sport, we talk or spend time together without anyone else from my team",
    ],
    categoryIds: [Category.SAFETY_AND_WELLNESS],
    pillarIds: [Pillar.SOCIAL],
    attributeIds: [Attribute.SOCIAL_SAFETY_WELLNESS_1],
  },
];

export const emotionalAbuseQuestionsSingleAnswer: AbuseQuestion[] = [
  {
    id: 1,
    question: "I have been called names or put down. ",
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
    ],
    helpText:
      "It is normal for my team’s authority figures to call me names or put me down or let my teammates do it. It can be online or in-person. Sometimes it's about how I look or how I do in practice and competition.  ",
  },
  {
    id: 2,
    question: "I have witnessed name calling. ",
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
    ],
    helpText:
      ": I often see my team’s authority figures call my teammates names or put them down, or they let my teammates do it. It can be online or in-person. Sometimes it's about how they look or how they do in practice and competition.  ",
  },
  {
    id: 3,
    question: 'I have experienced body shaming and/or "fat talks".',
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
    ],
  },
  {
    id: 4,
    question: "I have experienced control through pressures and demands.",
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
    ],
    helpText:
      "My team’s authority figures often use their power through pressures and demands to control me or my teammates.",
  },
  {
    id: 4,
    question: "I have experienced control outside of my sport.",
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
    ],
    helpText:
      "My team’s authority figures often try to control things in my life, or my teammates, that is not part of our sport or team.",
  },
  {
    id: 5,
    question: "I have experienced withdrawn attention or neglect.",
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_1,
      Attribute.MENTAL_EMOTIONAL_SAFETY_WELLNESS_2,
    ],
    helpText:
      "My team’s authority figures withdraw attention or deny emotional responsiveness as a form of punishment (example: “silent treatment”, ignore me, keep me away from people who care about me- parents, family, friends). ",
  },
  {
    id: 6,
    question:
      "I have experienced demeaning statements continually made against athletes.",
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_1,
      Attribute.MENTAL_EMOTIONAL_DEVELOPMENT_2,
    ],
  },
  {
    id: 7,
    question:
      "I have experienced valuing of persons in authority over athletes.",
    attributeIds: [
      Attribute.MENTAL_EMOTIONAL_CULTURE_1,
      Attribute.MENTAL_EMOTIONAL_CULTURE_2,
    ],
    helpText:
      "Prestige/position of coach, instructor or staff member takes precedence over the welfare of 	the athlete. Athlete welfare is not the highest priority",
  },
];

export const emotionalAbuseQuestionsMultiAnswer: AbuseQuestionMultiCheckbox[] =
  [
    {
      id: 1,
      question: "I have experienced...",
      checkboxes: [
        "social isolation",
        "high level of involvement in sport preventing athlete from developing social relationships",
        "excessive training routines",
        "excessive training schedule",
      ],
      attributeIds: [],
    },
    {
      id: 2,
      question:
        "It is normal for my team’s authority figures to treat my teammates or myself differently, or allow peer to peer misconduct, because of our...",
      checkboxes: [
        "race",
        "color",
        "religion",
        "age",
        "sex",
        "sexual orientation",
        "disability",
        "language",
        "political or other opinion",
        "national or social origin",
        "property",
        "birth or other immutable status",
      ],
      attributeIds: [],
    },
    {
      id: 3,
      question: "I have seen my governing officials...",
      checkboxes: [
        "Retaliate against a whistleblower on our team",
        "Retaliate against an alleged victim of misconduct/abuse on our team",
        "Retaliate against another governing official for reporting misconduct/abuse allegations on our team",
        "Disregard allegations or reports of misconduct/abuse on our team",
        "Delay processing of misconduct/abuse reports or investigations",
        "Impede processing of misconduct/abuse reports or investigations",
        "Judge an accused team member without due process",
        "Restrict the rights of an accused team member without due process",
      ],
      attributeIds: [],
    },
  ];

export const physicalAbuseQuestionsSingleAnswer: AbuseQuestion[] = [
  {
    id: 1,
    question: "I have had to train and/or compete when injured or in pain",
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_2,
    ],
  },
  {
    id: 2,
    question: "Injuries are not properly trated.",
    attributeIds: [
      Attribute.PHYSICAL_SAFETY_WELLNESS_1,
      Attribute.PHYSICAL_SAFETY_WELLNESS_2,
    ],
  },
  {
    id: 3,
    question: "Equipment is inadequate, poorly maintaned or unsafe.",
    attributeIds: [],
  },
  {
    id: 4,
    question: "Road trips are not properly staffed or supervised.",
    attributeIds: [],
  },
  {
    id: 5,
    question: "Bullying among teammates is allowed.",
    attributeIds: [],
  },
  {
    id: 6,
    question: "It is normal for my teammates or I to hurt ourselves",
    attributeIds: [Attribute.PHYSICAL_CULTURE_1],
    helpText:
      "Some examples are self-inflicted punish practices, starvation, fluid restriction, extreme weight loss goals, self-injury to avoid training/competition or self-injury from over-exertion in training/practice.",
  },
  {
    id: 7,
    question:
      "I have experienced or witnessed the use of hurtful touch to cause intimidation, humiliation or discomfort (examples: aggressive spotting, grabbing athlete’s helmet/hat/gear, or shoving)",
    attributeIds: [Attribute.PHYSICAL_CULTURE_2],
  },
  {
    id: 8,
    question:
      "I have experienced or witnessed the use of hurtful touch causing physical pain (examples: slapping, kicking, throwing equipment)",
    attributeIds: [Attribute.PHYSICAL_CULTURE_2],
  },
  {
    id: 9,
    question: "I have experienced or witnessed normalized excessive exercise.",
    attributeIds: [],
  },
  {
    id: 10,
    question:
      "I have experienced or witnessed excessive scheduling that inhibits adequate recovery time and/or promotes overuse injury.",
    attributeIds: [],
  },
  {
    id: 11,
    question:
      "I have experienced or witnessed denial of fluids and/or nutrition.",
    attributeIds: [],
    under18Question:
      "I have experienced or witnessed not being allowed enough water or food",
  },
  {
    id: 12,
    question:
      "I have experienced or witnessed denial of fluids and/or nutrition.",
    attributeIds: [],
    under18Question:
      "I have experienced or witnessed not being allowed enough water or food",
  },
  {
    id: 13,
    question:
      "I have experienced or witnessed unreasonable requests as a form of punishment or a way of creating athlete discipline (example: “punishment practice”).",
    attributeIds: [Attribute.PHYSICAL_CULTURE_1, Attribute.PHYSICAL_CULTURE_2],
  },
];

export const physicalAbuseQuestionsMultiAnswer: AbuseQuestionMultiCheckbox[] = [
  {
    id: 1,
    question: "I have experienced or witnessed...",
    checkboxes: [
      "Normalized violence and harassment",
      "Over-emphasized competitive culture is fueled by violent or aggressive attributes. These attributes are accepted and/or expected, disguised and excused by a mindset of 'a highly masculine' sport culture, 'mental toughness' or 'win at all costs'",
      "Harassment, such as sledging or pranks; again, these can be disguised as 'just what is done around here'",
      "Online or face-to-face bullying – unwanted, repeated and intentional, aggressive behavior (between authority figure and athlete or among teammates)",
    ],
    attributeIds: [],
  },
  {
    id: 1,
    question: "I have seen my governing officials...",
    checkboxes: [
      "Retaliate against a whistleblower on our team",
      "Retaliate against an alleged victim of misconduct/abuse on our team",
      "Retaliate against another governing official for reporting misconduct/abuse allegations on our team",
      "Disregard allegations or reports of misconduct/abuse on our team",
      "Delay processing of misconduct/abuse reports or investigations",
      "Impede processing of misconduct/abuse reports or investigations",
      "Judge an accused team member without due process",
      "Restrict the rights of an accused team member without due process",
    ],
    attributeIds: [Attribute.PHYSICAL_CULTURE_1],
  },
];

export const socialAbuseQuestionsSingleAnswer: AbuseQuestion[] = [];

export const socialAbuseQuestionsMultiAnswer: AbuseQuestionMultiCheckbox[] = [
  {
    id: 1,
    question: "I have witnessed favoritism with a vulnerable team member...",
    checkboxes: [
      "Retaliate against a whistleblower on our team",
      "Retaliate against an alleged victim of misconduct/abuse on our team",
      "Retaliate against another governing official for reporting misconduct/abuse allegations on our team",
      "Disregard allegations or reports of misconduct/abuse on our team",
      "Delay processing of misconduct/abuse reports or investigations",
      "Impede processing of misconduct/abuse reports or investigations",
      "Judge an accused team member without due process",
      "Restrict the rights of an accused team member without due process",
    ],
    attributeIds: [Attribute.PHYSICAL_CULTURE_1],
  },
  {
    id: 1,
    question: "I have witnessed...",
    checkboxes: [
      "Encouraged sexualized look and behavior (example: hiking up leotard, tight uniform, suggestive gestures)",
      "Ignored sexualized behavior between authority figures or peers",
      "Stalking with phone calls or online messages/texts",
      "Sexualized conversations, especially involving minors",
      "Exploited situations",
      "Inappropriate overnight accommodations (examples: shared room between minors and unapproved adults, lack of private space for dressing/showering)",
      "“Peeping” at minor",
      "Possession of child pornography",
      "Solicitation of minor athlete through the internet",
      "Sexual jokes",
      "Teasing about physical characteristics",
      "Graphic sexual descriptions",
      "Name calling",
      "Comments on physical development",
      "Solicitation",
      "Unwanted romantic advances",
      "Sexting",
    ],
    under18Question:
      "My team’s authority figures do this, or allow peers on my team to do this:",
    under18Checkboxes: [
      "Like it when I wear tight or revealing uniforms/clothes, sometimes they suggest I change how I look or act to be more attractive",
      "Don't speak up when they should, especially about unusual or uncomfortable situations between authority figures and teammates, or between teammates",
      "Chat with me privately online through gaming, sharing pictures/videos or apps",
      "Privately personal message, text or call me",
      "Get me to do things I normally would say no to because they help me become a better athlete",
      "Visit me in my room when we travel, especially when no one else is with us (or I’ve seen it happen with a teammate)",
      "Visit me in the locker room, office or other private area, especially when no one else is with us (or I’ve seen it happen with a teammate)",
      "Show me or my teammates pictures or videos of minors that made me feel uncomfortable",
      "Promise to give me something if I send them pictures or videos online, or video chat with them online",
      "Make jokes that make me feel uncomfortable",
      "Make jokes about my look, body or body parts",
      "Talk about private things about my body or body parts",
      "Call me names",
      "Talk about my body growing and developing",
      "Tell me they will give me something special (example: more playing time, gifts, food) if I let them look at me or touch me in ways that are not normal in my sport",
      "Talk to me or touch me in ways that make me feel uncomfortable",
      "Text or message me about things outside of sport",
    ],
    attributeIds: [
      Attribute.SOCIAL_SAFETY_WELLNESS_1,
      Attribute.SOCIAL_SAFETY_WELLNESS_2,
    ],
  },
  {
    id: 1,
    question:
      "My team’s authority figures do this or allow a peer on my team to do this:",
    checkboxes: [
      "Give me sexualized attention",
      "Want sexualized attention from me",
      "Use pressure, bribes or manipulate me for sexualized attention, behavior or favors, even when I say “no”",
      "Make me feel guilty or embarassed if I don't engage in sexualized attention, behaviors or favors",
      "Talk about my body or specific body parts (or a teammates) with a sexualized tone",
      "Have a sexualized relationship with a minor",
    ],
    under18Question:
      "My team’s authority figures do this or allow a peer on my team to do this:",
    under18Checkboxes: [
      "Give me (or a teammate) special attention that makes me feel uncomfortable and isn’t normal on our team",
      "Want me (or a teammate) to give them special attention that makes me feel uncomfortable and isn’t normal on our team",
      "Pressure or bribe me (or a teammate) to let them do things with me that make me feel uncomfortable, even when I say “no”",
      "Make me feel bad or embarrassed if I don’t let them do things with me that make me feel uncomfortable",
      "Talk about my body or specific body parts (or a teammate) not related to sports",
      "Have a special relationship with me (or my teammate) outside of sport, we talk or spend time together without anyone else from my team",
    ],
    attributeIds: [Attribute.SOCIAL_DEVELOPMENT_2],
  },
];
