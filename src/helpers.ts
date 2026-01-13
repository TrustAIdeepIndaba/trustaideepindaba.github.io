import moment from "moment";

export const isMobile = window.innerWidth <= 981;

export const dateFormatter = (date) =>
  moment(date).format("MMM Do YYYY, h:mm:ss a");

export const dateFormatterNoTime = (date) => moment(date).format("MMM Do YYYY");

export const projects = [{ label: "Trust AI Deep", value: "taid" }];

export const settings = [
  {
    name: "TrustAI @ Indaba 2025",
    path: "TrustAIIndaba2025",
  },
  {
    name: "TrustAI @ IJCAI 2024",
    path: "TrustAIIJCAI2024",
  },
  {
    name: "TrustAI @ Indaba 2023",
    path: "TrustAIIndaba2023",
  },
  {
    name: "TrustAI @ Indaba 2022",
    path: "TrustAIIndaba2022",
  },
];

export const papers = [
  {
    title: "The Impact of Domain Adaptation on the Activation Space of LLMs.",
    author: "Assala Benmalek, Celia Cintas, Miriam Rateike, Skyler Speakman",
    link: "",
  },
  {
    title:
      "Sentiment Analysis Approach for Gender-Based Issues: A Deep Learning Solution for Underserved African Communities",
    author: "Thatohatsi Tilodi",
    link: "",
  },
  {
    title: "Geopolitics of Tin: The DR Congo in the Age of AI",
    author: "Laure Gnassou",
    link: "",
  },
  {
    title:
      "Auditing AI Fairness in African Health Diagnostics: A Case Study of CAD4TB at Zambia’s University Teaching Hospital",
    author: "Billy Peter Munyenyembe, Precious Zulu",
    link: "",
  },
  {
    title: "Against 'softmaxing' culture",
    author: "Daniel Mwesigwa",
    link: "",
  },
  {
    title:
      "Operationalizing Pluralistic Values in Large Language Model Alignment Reveals Trade-offs in Safety, Inclusivity, and Model Behavior",
    author: "Dalia Ali, Dora Zhao, Allison Koenecke, Orestis Papakyriakopoulos",
    link: "",
  },
];

export const activeSchedule = "2025";
export const activeCfp = "2025";
export const activeOrganizers = "2025";
export const activePage = "taid2025";
export const sociallinks = [
  {
    name: "bluesky",
    link: "https://bsky.app/profile/trustai.bsky.social",
  },
  {
    name: "twitter",
    link: "https://x.com/TrustAI_Indaba",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/trust-ai-workshop?trk=public_post_feed-actor-name",
  },
];

export const workshops = {
  taid2025: {
    name: "TrustAIDeepLIndaba2025",
    title: "TrustAI Workshop: Building Public Awareness and Engagement",
    year: 2025,
    datetime: "August 21st, 9 am to 4pm",
    location: "Deep Learning Indaba 2025",
    locationimage: "/images/2022/indaba.jpg",
    about:
      "Trustworthy AI seeks to ensure that AI systems are aligned with ethical principles, particularly in their societal impact. Given the unique historical and structural challenges of the African continent, it is vital that AI systems are developed to be culturally and ethically relevant, reflecting the continent’s diverse values, and effectively addressing its specific challenges in sectors like healthcare, agriculture, and finance. This full-day workshop offers a platform for researchers to learn, discuss, and engage with the challenges of developing and deploying trustworthy AI systems—especially for and within Africa. This year, the focus is on “Building Public Awareness and Engagement”. By bringing together researchers, ML practitioners, and stakeholders, we aim to strengthen the ecosystem for African centered trustworthy AI. Through this platform, we hope to inspire initiatives that ensure AI development in Africa is trustworthy, inclusive, and impactful, benefiting marginalized communities and fostering a more diverse, culturally relevant global AI landscape.",
    speakers: [
      {
        name: "Kush R. Varshney",
        image: "/images/2025/kushvarshney.png",
        bio: "Dr. Varshney is an IBM Fellow based at the Thomas J. Watson Research Center, Yorktown Heights, NY, where he directs Human-Centered Trustworthy AI research. He was a visiting scientist at IBM Research - Africa, Nairobi, Kenya in 2019. He was the founding co-director of the IBM Science for Social Good initiative from 2015-2023. He applies data science and predictive analytics to human capital management, healthcare, olfaction, computational creativity, public affairs, international development, and algorithmic fairness, which has led to independently-published a book entitled 'Trustworthy Machine Learning' in 2022. He is currently the general chair for the 2025 AAAI/ACM Conference on Artificial Intelligence, Ethics, and Society.",
        topic: "",
        expanded: false,
        link: "https://krvarshney.github.io/",
        affiliate: "Fellow at IBM Research",
      },
      {
        name: "Kutoma Wakunuma",
        image: "/images/2025/KutomaWakunuma.jpg",
        bio: "Dr Kutoma Wakunuma is an Associate Professor at De Montfort University and Co-Director of the Centre for Computing and Social Responsibility. She specialises in the social and ethical implications of emerging technologies, responsible innovation and AI governance in both the Global North and the Global South. She has co-edited influential books including Responsible AI in Africa and Trustworthy AI: African Perspectives. Dr Wakunuma serves as a European Commission Ethics Advisor and Evaluator. She is a member of Centre for AI and Digital Policy (CAIDP) Global Academic Network. Dr Wakunuma is also a member of UNESCO’s Women for Ethical AI as well as UNESCO’s AI Ethics Experts Without Borders. She is recognised among the Top 100 Brilliant Women in AI Ethics in the 2025. Dr Wakunuma is a passionate advocate for an inclusive and globally representative AI discourse and is frequently invited to speak at high-level international forums, including the UNs Science Summit of the General Assembly; the UN Academic Impact Commission as well as the African Commission’s Human and People’s Rights on AI and other Emerging Technologies, where her insights inform and inspire cross-sector conversations on AI, ethics and society. Dr Wakunuma has facilitated and conducted AI training workshops aimed at parliamentarians, policymakers and civil society organisations in the Global South and has contributed to Zambia’s National AI Strategy by bringing critical perspectives on responsible AI, ethics, inclusion, diversity and equitable AI development, access and use.",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Associate Professor at De Montfort University and Co-Director of the Centre for Computing and Social Responsibility",
      },
      {
        name: "Mercy Asiedu",
        image: "/images/2025/mercyasiedu.png",
        bio: "Mercy Asiedu is a senior research scientist at Google Research, San Francisco, where she works on using machine learning and generative AI for impact driven research for health. Before that, she was a Schmidt Science Postdoctoral Research Fellow at MIT working on interdisciplinary research projects using generative AI methods to improve mobile ultrasound imaging. She also worked on projects researching the use of language models to improve comprehension of health notes for breast oncology patients. She received her PhD in Biomedical Engineering and a certificate in Global health from Duke University. Her dissertation focused on the research and development of a low-cost imaging device and machine learning algorithms to reduce barriers to cervical cancer screening. She has won several awards for her work including the Inaugural Patrick J. McGovern Tech for Humanity Changemaker Awards, the Lemelson-MIT Graduate Student Inventor Award, and Velji Emerging Leader in Global Health award. Additionally, she is a co-founder of GAPHealth Technologies. She received her bachelor’s degree in Biomedical Engineering from the University of Rochester, and high school degree from Holy Child Secondary School, Cape Coast, Ghana.",
        topic: "",
        expanded: false,
        link: "https://mercynasiedu.com/",
        affiliate:
          "Senior Research Scientist at Google Research, San Francisco",
      },
    ],
    cfp: {
      title: "Trustworthy AI Workshop @ Deep Learning Indaba 2025",
      description:
        "The Trustworthy AI Workshop at Deep Learning Indaba 2025 aims to foster meaningful discussions on trustworthy AI, covering topics such as fairness, interpretability, robustness, privacy, and accountability, with a particular emphasis on African perspectives and context. As machine learning (ML) models play an increasingly central role in high-stakes decision-making across sectors like healthcare, education, and finance, ensuring that these technologies align with ethical principles to build trust is essential for their responsible deployment. This workshop seeks to provide a platform for researchers to engage with the challenges of developing and deploying AI systems, with a focus on addressing systemic inequalities and building trust in these technologies, particularly from an African perspective or within the African context.",
      topics: [
        {
          title: "System Development:",
          description:
            "Advances in algorithms and metrics for ensuring fairness, robustness, interpretability, or privacy in ML systems",
        },
        {
          title: "Auditing:",
          description:
            "Audit techniques for assessing fairness, robustness, interpretability, or privacy in data and ML models",
        },
        {
          title: "Legal Frameworks:",
          description:
            "Analysis of data protection and privacy and  non-discrimination laws in Africa, AI governance and regulatory frameworks",
        },
        {
          title: "Social Science Perspectives:",
          description:
            "Case studies on the impact of AI on marginalized communities, historical perspectives on discrimination, perceptions of fairness and AI",
        },
        {
          title: "Philosophical Perspectives:",
          description:
            "Identification and reflections on values embedded in AI systems, ethical frameworks for AI deployment",
        },
      ],
      othertopics: [],
      topicofsub:
        "We invite submissions that explore the themes enlisted on the left side of this section, focusing on the unique challenges and opportunities for building trust in AI. Submissions outside of these themes but still related to trust in AI will also be considered. However, submissions unrelated to trust in AI will not be considered.",
      additionalinfo:
        "All accepted submissions will have the opportunity to present their work as a poster. Additionally, selected submissions will be invited to present their work through a short contributed talk during the workshop.",
      formatting:
        "We accept extended abstracts of up to 4 pages, plus unlimited pages for references. The abstract must follow the same Latex format as Deep Learn Indaba  formatting guidelines (PMLR) available here:",
      formatname: "CTAN",
      old_sub_date: "June 25th",
      abstractsubdate: "July 9th, 23:59 AoE",
      old_notification_date: "July 28th",
      notificationdate: "August 4th, 23:59 AoE",
      submitname: "Microsoft CMT",
      call_for_reviewers:
        "In addition to submissions, we’re also seeking volunteers to contribute to the workshop's success by serving as reviewers. Reviewers will be asked to provide thoughtful and constructive feedback on approximately 1-3 submitted papers. If you are interested in volunteering for our Program Committee, please complete the sign-up form at",
      whycmt:
        "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.",
      submitinstruction:
        "Authors are required to register an account on the CMT (Conference Management Toolkit) system in order to submit their extended abstracts. If you do not have a CMT account, please create one by following the instructions provided",
      submittype: "cmt",
      dualsubpolicy:
        "It is permitted to submit work that is under review or has been accepted for publication elsewhere. If your work has already been accepted at another venue, please submit a de-anonymized version and indicate this in the CMT submission form.",
      anonymization:
        "Our peer review process is fully anonymous, meaning reviewers will not know the authors’ identities, and authors will not know the reviewers' identities. Please ensure that you anonymize your submission. This means that the submitted PDF should not include the authors' names, and any references to your own work should be cited in a way that does not reveal that it was authored by you. Submissions that are not properly anonymized may be rejected without review.",
      submitinstructionlink:
        "https://cmt3.research.microsoft.com/docs/help/general/account-creation.html",
      submissionlink:
        "https://cmt3.research.microsoft.com/TrustAIDeepIndaba2025",
      formatlink: "https://ctan.org/tex-archive/macros/latex/contrib/jmlr",
      tutoriallink:
        "https://www.youtube.com/watch?v=2wNEfoxcRYw&ab_channel=FES-CongressonFoodandEnvironmentalSecurity",
    },
    panelists: [
      {
        name: "Nyalleng Moorosi",
        image: "/images/2025/nyallengmoorosi.jpg",
        bio: "Nyalleng is a research fellow at The Distributed Artificial Intelligence Research (DAIR) institute. Her research focuses on AI Ethics, specifically, technical and social enhancements that developers make when they build for their communities. Prior to her position at DAIR, she was a research software engineer at Google and a senior researcher at the South African Council for Scientific and Industrial Research. Outside of formal work, she works as an advisor to several humanitarian and scientific institutions. Nyalleng is also a co-founder of the Deep Learning Indaba.",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "A research fellow at The Distributed Artificial Intelligence Research (DAIR) institute",
      },
      {
        name: "Orestis Papakyriakopoulos",
        image: "/images/2025/orestis.jpg",
        bio: "Orestis Papakyriakopoulos is an Assistant Professor of Societal Computing at the Technical University of Munich and Principal Investigator of the Civic Machines Lab at the TUM Think Tank. His experience spans almost 10 years of interdisciplinary research in academia and industry with a focus in the societal impact of AI, algorithmic fairness, and the development of tools for participatory socio-algorithmic ecosystems. Orestis’ research has won academic awards, including a best paper award in ICML and is  widely cited by researchers, media outlets and policy institutions such as the U.S Federal Trade Commission and the European Commission.",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Assistant Professor of Societal Computing at the Technical University of Munich",
      },
      {
        name: "Rose Nakasi",
        image: "/images/2025/nakasi_rose.jpg",
        bio: "Dr. Rose Nakasi is an Artificial Intelligence Research Scientist and Lecturer at Makerere University, where she leads groundbreaking work at the intersection of AI and global health. As the Head of the Makerere University AI Health Lab, she drives innovative projects that harness AI for healthcare especially in LMICs. Dr. Nakasi also spearheads the Topic Group on AI-based Malaria Detection under the WHO/WIPO/ ITU Global Initiative AI for Health (GIAI4H) and serves on the CODATA International Data Policy Committee, shaping ethical and policy frameworks for data-driven healthcare solutions. With a PhD in Computer Science from Makerere University, her work exemplifies a relentless commitment to leveraging technology for equitable, life-saving healthcare innovation.",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Artificial Intelligence Research Scientist and Lecturer at Makerere University",
      },
    ],
    isls: [
      {
        name: "George Ogoh",
        image: "/images/2025/georgeogoh.jpg",
        bio: "George Ogoh is a Senior Research Fellow at the School of Computer Science, University of Nottingham. George has a background in Computing and Information Systems. His research explores the ethical and societal implications of emerging technologies, with a focus on digital responsibility and Responsible Research and Innovation (RRI)/Responsible Innovation. He is particularly interested in embedding ethical considerations into the development, deployment, and use of technology to promote fairness, accountability, and societal benefit.",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Senior Research Fellow at the School of Computer Science, University of Nottingham",
      },
      {
        name: "Damian Eke",
        image: "/images/2025/damianeke.png",
        bio: "Damian Eke is an Assistant Prof., University of Nottingham. Damian has a Philosophy of science background with a PhD in Computer Ethics. He has close to two decades of experience and expertise in ethics and governance of data and emerging technologies. He was the data governance coordinator for the EU Human Brain Project and has PI roles on a number of projects working on responsible innovation. His works on ethics and governance of AI in Africa is particularly from a decoloniality perspective.",
        topic: "",
        expanded: false,
        link: null,
        affiliate: "Assistant Prof at University of Nottingham",
      },
      {
        name: "Kutoma Wakunuma",
        image: "/images/2025/KutomaWakunuma.jpg",
        bio: "Dr Kutoma Wakunuma is an Associate Professor at De Montfort University and Co-Director of the Centre for Computing and Social Responsibility. She specialises in the social and ethical implications of emerging technologies, responsible innovation and AI governance in both the Global North and the Global South. She has co-edited influential books including Responsible AI in Africa and Trustworthy AI: African Perspectives. Dr Wakunuma serves as a European Commission Ethics Advisor and Evaluator. She is a member of Centre for AI and Digital Policy (CAIDP) Global Academic Network. Dr Wakunuma is also a member of UNESCO’s Women for Ethical AI as well as UNESCO’s AI Ethics Experts Without Borders. She is recognised among the Top 100 Brilliant Women in AI Ethics in the 2025. Dr Wakunuma is a passionate advocate for an inclusive and globally representative AI discourse and is frequently invited to speak at high-level international forums, including the UNs Science Summit of the General Assembly; the UN Academic Impact Commission as well as the African Commission’s Human and People’s Rights on AI and other Emerging Technologies, where her insights inform and inspire cross-sector conversations on AI, ethics and society. Dr Wakunuma has facilitated and conducted AI training workshops aimed at parliamentarians, policymakers and civil society organisations in the Global South and has contributed to Zambia’s National AI Strategy by bringing critical perspectives on responsible AI, ethics, inclusion, diversity and equitable AI development, access and use.",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Associate Professor at De Montfort University and Co-Director of the Centre for Computing and Social Responsibility",
      },
      {
        name: "Simisola Akintoye",
        image: "/images/2025/simisolaakintoye.jpg",
        bio: "Dr Simisola Akintoye is an Associate Professor of Law at Northumbria University School of Law. She is interested in multidisciplinary research around legal and ethical regulation of Emerging Technologies and Corporate Sustainability. Her research covers critical issues at the intersection of law and technology including Data Governance, Privacy and Data Protection, Ethics of Emerging Technologies and Responsible Research and Innovation (RRI). Simi is an International Privacy Practitioner and was the Data Protection Officer for the European Union Future and Emerging Technologies Human Brain Project (HBP). She is involved in multi-disciplinary Policy Expert Reports on the future implications of AI and societal benefit. Over the years, Simi has formed consortia that contributes to the furtherance of knowledge, practice and public policy in applied contexts of research, teaching, consultancy and business. Her current research investigates the legal, ethical and socio-cultural implications of AI in Africa towards developing an inclusive, equitable and sustainable AI ecosystem for Africa. Simi is currently the co-chair of the Policy and Governance Working Group developing the National Artificial Intelligence Strategy for Nigeria.",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Associate Professor of Law at Northumbria University School of Law",
      },
    ],
    organizers: [
      {
        name: "Miriam Rateike",
        affiliate:
          "Research Scientist at IBM Research Africa, Nairobi, Kenya and PhD Student at Saarland University, Germany",
        image: "/images/2025/miriamrateike.jpg",
        bio: "Miriam is a research scientist at IBM Research Africa, and an ELLIS PhD student at Saarland University. In her PhD, her research focuses on creating algorithms for fair decision making under feedback loops. She is also enrolled in legal studies and thus particularly interested in the intersection of fairness and law. Miriam received the Google AI Fellowship 2023 in Machine Learning. She was an organizer of four NeurIPS Algorithmic Fairness workshops 2021 - 2024, the ELLIS workshop on Causethial Machine Learning 2021, the Causethical Machine Learning Seminar 2021/22, and the TReND Python Course 2021-2022. More here: https://research.ibm.com/people/miriam-rateike",
        link: "https://sites.google.com/view/miriam-rateike/about",
        expanded: false,
      },
      {
        name: "Brian A. Mboya",
        affiliate:
          "Affiliate Researcher at Wolfram Institute and Senior Software Engineer at Soapbox Inc",
        image: "/images/2025/brianmboya.jpg",
        bio: "Brian Mboya is an Affiliate Researcher at Wolfram Institute and a senior software engineer at Soapbox Inc.; and student of computer science in Dedan Kimathi University of Technology in Kenya. He is a programmer with 6+ years of industry experience and academic experience in data annotation and analysis used to understand the social perceptions of facial AI systems. His current work explores the behavior of Cellular Automata and Turing machines to identify rules that produce complex behaviours in simple programs and reveal insights into intelligent attributes. He received several scholarships for attending different summer schools, including TReND Computational Neuroscience and Machine Learning in Africa 2023, Simons Computational Neuroscience Imbizo 2024 and Explore and create projects at the frontiers of science, technology and innovation, Wolfram Research 2024.",
        link: "https://asheux.com/",
        expanded: false,
      },
      {
        name: "Dr. John Wamburu",
        affiliate: "Research Engineer at Google, Nairobi, Kenya",
        image: "/images/2025/johnwamburu.jpeg",
        bio: "Dr. John Wamburu is a Research Engineer at Google. His current work focuses on building and applying ML models to forecast global food insecurity. Previously, he was a Research Scientist at IBM where he focused on trustworthy AI and anomalous pattern discovery. He was a co-organizer of the Practical ML for Low Resource Settings Workshop at ICLR and the Trustworthy AI Workshop at IJCAI, both in 2024. He received his Ph.D. in 2023 from the University of Massachusetts Amherst.",
        link: null,
        expanded: false,
      },
      {
        name: "Aisha Alryeh Mkean Alaagib",
        affiliate: "Applied researcher at a private ARD in Saudi Arabia",
        image: "/images/2025/aisha.jpeg",
        bio: "Aisha Alaagib is an applied researcher at a private ARD in Saudi Arabia, specializing in LLM evaluation, synthetic data generation, and video anomaly detection. In her current role, she works on advancing innovative solutions in artificial intelligence. Previously, she was a research assistant at the German Research Center for Artificial Intelligence (DFKI), where she contributed to studies on representation learning for remote sensing data under the guidance of Prof. Sebastian Vollmer and Prof. Seth Flaxman. Aisha has also completed research internships at Mila Quebec AI Institute and Vector Institute, where she honed her skills in AI development and data science. She holds two M.Sc. degrees in Mathematical Sciences and Machine Intelligence from AIMS Cameroon and AIMS Rwanda, respectively, and a bachelor’s degree in Mathematics and Computer Science from the University of Khartoum, Sudan.",
        link: "https://aishaalaagib.netlify.app/",
        expanded: false,
      },
      {
        name: "Deborah Dormah Kanubala",
        affiliate: "Doctoral Researcher at Saarland University in Germany",
        image: "/images/2025/kanubala.jpg",
        bio: "Deborah Dormah Kanubala is a Doctoral Researcher at Saarland University in Germany and co-organizer of WiMLDS Accra-Ghana. Deborah is passionate about ensuring that machine learning systems are fair, inclusive, and meet societal expectations. Prior to her PhD, she worked as an NLP Engineer at Proto and also lectured at the Academic City University in Accra, Ghana. She is passionate about getting more women and underrepresented groups of people involved in the AI industrial revolution. Her work and leadership have been widely recognized, and she has been featured in “100 Brilliant Women in AI Ethics” (2024), “120+ Women Spearheading Advances in AI”, and “80 African Women Advancing AI”.  She is also an active member of the AI Grid network for AI Talents.",
        link: null,
        expanded: false,
      },
    ],
    coc: {},
    schedule: [
      {
        starttime: "09:00",
        endtime: "09:10",
        title: "Opening remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "09:10",
        endtime: "09:50",
        title:
          "Keynote with Q&A: Paisa Fund AI Works: Enabling Cooperatives to Decolonialize AI",
        abstract:
          "Can AI truly serve the needs of communities beyond the Western sociotechnical context? In this talk, I argue for a reimagining of AI development centered on democratically governed AI cooperatives. Drawing on the history of the cooperative movement and my own family’s legacy in the swadeshi movement, I introduce the Paisa Fund AI Works: a proposal to empower communities with tools to build, govern, and align AI to their own values, knowledge systems, and economic goals. This idea includes a cooperative AI development kit and an extension ecosystem to spark bottom-up innovation. Bringing together ideas from agritech to octopus conservation in Madagascar to jewelry making in Nairobi, I explore how cooperative AI can combat coloniality in AI alignment, avoid the “farmer’s market trap,” and chart a more just, inclusive AI future by and for the people it aims to uplift.",
        speakername: "Dr. Kush R. Varshney",
        speakerlink: null,
      },
      {
        starttime: "09:50",
        endtime: "10:00",
        title: "Short Break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "10:00",
        endtime: "10:40",
        title: "Contributed Talks with Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "10:40",
        endtime: "10:50",
        title: "Short Break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "10:50",
        endtime: "11:30",
        title:
          "Keynote with Q&A: African Perspectives on Trustworthy AI and the role of Public Awareness and Engagement",
        abstract:
          "As AI becomes an integral part of global technological advancement, the demand for systems that are trustworthy, transparent and inclusive is more urgent than ever. In the African context, characterised by diverse cultural norms, dynamic socio-economic landscapes and uneven digital infrastructure, the path to trustworthy AI requires locally grounded approaches that reflect the continent’s unique realities. This talk will explore how African perspectives can enrich global conversations on AI ethics by putting at the centre, values such as community, equity and contextual relevance. It will highlight the pivotal role of public awareness, civic education and inclusive stakeholder engagement in fostering trust in AI systems. Across the continent, promising initiatives are emerging that illustrate how what trustworthy AI could look like, from for example national AI strategies and policies, either in development or already adopted, to regional frameworks like the ‘African Union’s AI Continental Strategy’ or ‘The Africa Declaration on Artificial Intelligence’. These efforts signal that the continent is charting a path towards trustworthy AI by considering sustainable, inclusive and ethical AI for the continent. This talk will draw on these and other examples to demonstrate how public engagement is not just a communication exercise but a democratic imperative. It will argue that meaningful public participation serves as a safeguard against misuse, amplifies marginalised voices, and ensures that AI technologies are aligned with African priorities and public interests. Ultimately, trustworthy AI in Africa must be co-created with the people it aims to serve, grounded in context, guided by ethic and empowered by inclusive dialogue.",
        speakername: "Dr. Kutoma Wakunuma",
        speakerlink: null,
      },
      {
        starttime: "11:30",
        endtime: "12:00",
        title: "Tea Break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "12:00",
        endtime: "13:00",
        title:
          "Interactive Session: AI Ethics Ideation Hackathon with RRI Prompt Cards",
        abstract:
          "This 60-minute interactive hackathon invites participants to critically explore some of the most urgent ethical and societal challenges posed by Artificial Intelligence. Working in small groups, attendees will engage with one of two key themes: (1) Decoloniality of AI – examining how AI systems can reinforce global power imbalances, perpetuate problematic extraction of raw minerals, and embed Western-centric values. (2) Public Awareness of AI Ethics – addressing the challenges of bias, privacy, accountability, and the role of AI in shaping public trust and misinformation. Guided by the Responsible Research and Innovation (RRI) Prompt and Practice Cards, you'll engage in a structured ideation process using the AREA+ framework: Anticipate potential impacts, Reflect on ethical responsibilities, Engage with diverse perspectives, and Act to design responsible responses. Each group will identify key challenges, explore practical consequences, and collaboratively create innovative strategies or conceptual solutions. This session fosters active collaboration, critical thinking, and creative problem-solving, equipping you with a practical framework for addressing AI ethics in real-world contexts.",
        speakername:
          "George Ogoh, Damian Eke, Kutoma Wakunuma and Simisola Akintoye",
        speakerlink: null,
      },
      {
        starttime: "13:00",
        endtime: "14:30",
        title: "Lunch Break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "14:30",
        endtime: "15:10",
        title:
          "Keynote with Q&A: AI's Hippocratic Oath: Is 'Do No Harm' Possible in a World of Biased Data?",
        abstract:
          "Applications of artificial intelligence (AI) in healthcare have accelerated exponentially. While AI has the potential to improve healthcare for the better, like other advancements in medical technology, it also has the potential to increase health disparities. Historically, medical technology has not been created with the needs of underserved settings in mind and this has led to limited access in low/middle income countries. Reduced access to these healthcare tools leads to downstream gaps in data used to train machine learning models, and by extension, the potential for machine learning biases, should these models be used on individuals from historically excluded settings. In this talk I will provide an overview of our work on a health equity toolbox for evaluating large language models for surfacing model harms and bias, the development of the AfriMed-QA and TRINDS -  African-focussed health datasets for LLM evaluation and tuning, and the Nteasee Study, a mixed methods study to understand general population and expert perspectives on AI for health in Africa, including a deep dive on algorithmic fairness and colonialism. I will end with brief examples of considerations for beneficial applications of AI for health equity. Overall, I hope to make a case for considering geo-contextual perspectives for the ecosystem of AI development and evaluation for health.",
        speakername: "Mercy Asiedu",
        speakerlink: null,
      },
      {
        starttime: "15:10",
        endtime: "15:50",
        title: "Panel",
        abstract: "",
        speakername:
          "Nyalleng Moorosi, Orestis Papakyriakopoulos and Rose Nakasi",
        speakerlink: null,
      },
      {
        starttime: "15:50",
        endtime: "16:00",
        title: "Closing Remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
    ],
    advisors: [
      {
        name: "Dr. Celia Cintas",
        affiliate:
          "Staff Research Scientist at IBM Research Africa, Nairobi, Kenya",
        image: "/images/2025/celiacintas.jpg",
        bio: "Dr. Celia Cintas is a Staff Research Scientist at IBM Research Africa, based in Nairobi. She is a member of the AI Science team at the Kenya Lab. Her current research focuses on the improvement of ML techniques to address challenges in global health and exploring subset scanning for anomaly detection under generative models. Previously, she was a grantee from the National Scientific and Technical Research Council (CONICET), working on Deep Learning for populations studies at LCI-UNS and IPCSH-CONICET (Argentina) as part of the Consortium for Analysis of the Diversity and Evolution of Latin America (CANDELA). During her PhD, she was a visitor student at the University College of London (UK). She was also a Postdoc researcher visitor at Jaén University (Spain). She holds a Ph.D. in Computer Science from the Universidad del Sur (Argentina). Co-chair of several Scipy Latinamerica conferences, Financial Aid Co-Chair for the SciPy (USA) Committee (2016-2019), and Diversity Co-Chair for SciPy (2020-2022). Workshop Co-Chair at ICLR 2023, Diversity Co-chair for ISBI-IEEE 2023 and 2024, MICCAI 2026. Co-Organizer of multiple workshops at Deep Learning Indaba, ICLR, IJCAI, and MICCAI, among others. A detailed list of talks, publications, and events is available at Personal Website.",
        link: "https://celiacintas.io",
        expanded: false,
      },
      {
        name: "Siobhan Mackenzie Hall",
        affiliate:
          "Ph.D. student at the University of Oxford, Oxford, United Kingdom",
        image: "/images/2025/siobhan.jpeg",
        bio: "Siobhan Mackenzie Hall is a Ph.D. student at the University of Oxford as part of the Oxford Neural Interfacing Group, where she investigates the stimulation of the somatosensory cortex in brain-computer interfaces. In addition to her Ph.D., Siobhan is a part of the Oxford Artificial Intelligence Student Labs, where students collaborate in the field of fairness for vision-language models. She completed her undergraduate and master’s degrees in South Africa. Siobhan has previously been a co-organiser for two editions of the Trustworthy AI workshop, at the Deep Learning Indaba 2023, and IJCAI 2024.",
        link: null,
        expanded: false,
      },
      {
        name: "Dr. Skyler Speakman",
        affiliate:
          "Senior Research Scientist, Manager at IBM Research Africa in Nairobi, Kenya",
        image: "/images/2025/speakman_small.jpg",
        bio: "Dr. Speakman manages the AI Sciences team at the Kenya lab of IBM Research Africa. He has worked on a wide range of topics spanning financial inclusion, maternal newborn child health, representation engineering, and anomalous pattern detection. He received his PhD from Carnegie Mellon University in 2014. He also holds masters degrees in Public Policy (2014), Machine Learning (2012), and Statistics (2008).",
        link: null,
        expanded: false,
      },
    ],
  },
  taid2023: {
    name: "TrustAIDeepLIndaba2023",
    title: null,
    year: 2023,
    datetime: null,
    location: "Deep Learning Indaba 2023",
    locationimage: "/images/2022/indaba.jpg",
    about:
      "Recent years have seen an overwhelming body of work on fairness and robustness in machine learning (ML) models. This is not unexpected, as it is an increasingly important concern as ML models are used to support decision-making in high-stakes applications such as mortgage lending, hiring, and diagnosis in healthcare. Trustworthy AI aims to provide an explainable, robust, and fair decision-making process. In addition, transparency and security also play a significant role in improving the adoption and impact of ML solutions. Currently, most ML models assume ideal conditions and rely on the assumption that test/clinical data comes from the same distribution of the training samples. However, this assumption is not satisfied in most real-world applications; in a clinical setting, we can find different hardware devices, diverse patient populations, or samples from unknown medical conditions. On the other hand, we need to assess potential disparities in outcomes that can be translated and deepened in our ML solutions. Particularly, data and models are often imported from external sources in addressing solutions in developing countries, thereby risking potential security issues. The divergence of data and model from a population at hand also poses a lack of transparency and explainability in the decision-making process. In this second edition of the workshop, we aim to bring researchers, policymakers, and regulators to discuss ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical considerations and governance guidelines.",
    speakers: [
      {
        name: "Prof. Jerry John Kponyo",
        image: "/images/2023/Jerry_Kponyo.jpeg",
        bio: "Prof. Jerry John Kponyo is the Dean of the Quality Assurance and Planning Office of the Kwame Nkrumah University of Science and Technology (KNUST) under the Vice-Chancellor’s Office. He is the former Dean of the Faculty of Electrical and Computer Engineering, KNUST. Prior to becoming Dean of the Faculty of Electrical and Computer Engineering he was Head of Electrical Engineering Department. He is currently the Project Lead of the KNUST Engineering Education Project (KEEP), a 5.5 Million Dollar Africa Center of Excellence (ACE) Impact project sponsored by the World Bank with a focus on Digital Development and Energy. He is Co-Founder of the Responsible AI Network (RAIN) Africa, which is a collaborative effort between KNUST and TUM Germany. Between 2016 and 2019 he was a visiting Professor at ESIGELEC, France on a staff mobility programme where he taught postgraduate courses in Business Intelligence and conducted research with staff of ESIGELEC. He has done extensive research in IoT, intelligent systems and AI and currently leads the Emerging Networks and Technologies Research Laboratory at the Faculty of Electrical and Computer Engineering, KNUST which focuses on digital development technologies research. Prof Kponyo’s Ph.D. research focused on applying AI to solving a traffic problem in Vehicular Ad hoc Networks (VANETs). He has published over 50 articles in refereed Journals and Conference proceedings. He is a member of the Ghana Institution of Engineers. Prof. Jerry John Kponyo is currently the coordinator of the West Africa Sustainable Engineering Network for Development (WASEND). Prof Kponyo is the PI and Scientific Director of the Responsible Artificial Intelligence Lab which is a 1 Million Canadian Dollar grant sponsored by IDRC and GIZ. He is also PI for the Partner-Afrika project which is sponsored by BMZ.",
        topic:
          "A Quantitative Approach to Measuring Responsible AI, Reflections from RAIN",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Abeba Birhane",
        image: "/images/2023/Abeba_Birhane.jpg",
        bio: "Abeba Birhane is a cognitive scientist researching human behaviour, social systems, and responsible and ethical Artificial Intelligence. Her interdisciplinary research sits at the intersections of embodied cognitive science, complexity science, critical data and algorithm studies, and afro-feminist theories. Her work includes audits of computational models and large scale datasets. Birhane is a Senior Fellow in Trustworthy AI at Mozilla Foundation and an Adjunct Assistant professor at the school of computer science and statistics at Trinity College Dublin, Ireland.",
        topic: "Larger isn’t always better",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Nicolas Papernot",
        image: "/images/2023/Nicolas_Papernot.jpeg",
        bio: "Nicolas Papernot is an Assistant Professor of Computer Engineering and Computer Science at the University of Toronto. He also holds a Canada CIFAR AI Chair at the Vector Institute and is a faculty affiliate at the Schwartz Reisman Institute. His research interests span the security and privacy of machine learning. Some of his group’s recent projects include proof-of-learning, collaborative learning beyond federation, dataset inference, and machine unlearning. Nicolas is an Alfred P. Sloan Research Fellow in Computer Science. His work on differentially private machine learning was awarded an outstanding paper at ICLR 2022 and a best paper at ICLR 2017. He serves as an associate chair of the IEEE Symposium on Security and Privacy (Oakland), and an area chair of NeurIPS. He co-created and co-chaired the first IEEE Conference on Secure and Trustworthy Machine Learning (SaTML) in 2023. Nicolas earned his Ph.D. at the Pennsylvania State University, working with Prof. Patrick McDaniel and supported by a Google PhD Fellowship. Upon graduating, he spent a year at Google Brain where he still spends some of his time.",
        topic: "Training Dynamics and Trust in Machine Learning",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Dr. Aisha Walcott",
        image: "/images/2023/aisha_walcott_Bryant.jpg",
        bio: "Dr. Aisha Walcott is a Senior Staff Research Scientist and head of Google Research Kenya. She has over a decade of experience working in Africa and leading teams to develop innovative technologies that leverage AI and computing to address some of Africa’s most pressing challenges. Her current work focuses on challenges of Africa’s food systems and exploring ways in which advances in AI tools can make an impact on food security through building resilience in food systems. Prior to her time at Google, she was a Senior Technical Staff Member at IBM Research Africa, and led projects in developing AI tools for global health, water management and access, as well as transportation. Currently, she serves on the board for the African Institute for Mathematical Sciences (AIMS) doctoral research program in data science, and is a Workshops co-chair for the International Conference on Learning and Representations 2023 (ICLR’23) - to be held in Rwanda May 2023. Dr. Walcott earned her PhD in the Electrical Engineering and Computer Science Department at MIT with a focus on robotics.",
        topic: "TBD",
        expanded: false,
        link: null,
        affiliate: null,
      },
    ],
    panelists: [
      {
        name: "Rosanne Liu",
        image: null,
        bio: "",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Google DeepMind",
      },
      {
        name: "Tyna Eloundou",
        image: null,
        bio: "",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "OpenAI",
      },
      {
        name: "Pelonomi Moiloa",
        image: null,
        bio: "",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Lelapa AI",
      },
      {
        name: "Siobhan Mackenzie Hall",
        image: null,
        bio: "",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "University of Oxford",
      },
          {
        name: "Jerry John Kponyo",
        image: null,
        bio: "",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "Kwame Nkrumah University of Science and Technology",
      },
      {
        name: "Nathi Ndlovu (Moderator)",
        image: null,
        bio: "",
        topic: "",
        expanded: false,
        link: null,
        affiliate:
          "South Africa Council for Scientific and Industrial Research",
      }
    ],
    isls: [],
    organizers: [
      {
        name: "Aisha Alryeh Mkean Alaagib",
        affiliate: "German Research Center for Artificial Intelligence",
        image: null,
        bio: "",
        link: "https://aishaalaagib.netlify.app/",
        expanded: false,
      },
      {
        name: "Lameck Amugongo",
        affiliate: "Namibia University of Science and Technology",
        image: null,
        bio: "",
        link: "https://mbangula.github.io/",
        expanded: false,
      },
      {
        name: "Siobhan Mackenzie Hall",
        affiliate: "University of Oxford",
        image: null,
        bio: "",
        link: null,
        expanded: false,
      },
      {
        name: "Nathi Ndlovu",
        affiliate:
          "Emerging Digital Technologies for 4IR (EDT4IR) Research Centre, CSIR",
        image: null,
        bio: "",
        link: null,
        expanded: false,
      },
      {
        name: "Tejumade Afonja",
        affiliate: "CISPA Helmholtz Center for Information Security",
        image: null,
        bio: "",
        link: null,
        expanded: false,
      },
      {
        name: "Celia Cintas",
        affiliate: "IBM Research Africa",
        image: null,
        bio: "",
        link: "https://celiacintas.io/",
        expanded: false,
      },
    ],
    advisors: null,
    cfp: {
      title: "Trustworthy AI Workshop 2023",
      description:
        "Recent years have seen an overwhelming body of work on fairness and robustness in machine learning (ML) models. This is not unexpected, as it is an increasingly important concern as ML models are used to support decision-making in high-stakes applications such as mortgage lending, hiring, and diagnosis in healthcare. Trustworthy AI aims to provide an explainable, robust, and fair decision-making process. In addition, transparency and security also play a significant role in improving the adoption and impact of ML solutions. We need to assess potential disparities in outcomes that can be translated and deepened in our ML solutions. Particularly, data and models are often imported from external sources in addressing solutions in developing countries, thereby risking potential security issues. The divergence of data and model from a population at hand also poses a lack of transparency and explainability in the decision-making process. This workshop aims to bring researchers, policymakers, and regulators to discuss ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical considerations and governance guidelines. We’re looking for extended abstracts that will be presented as contributed talks (10 to 15 minutes) related to",
      topics: [
        {
          title: "",
          description: "Audit techniques in data and ML models",
        },
        {
          title: "",
          description: "Advances in algorithms and metrics for robust ML",
        },
        {
          title: "",
          description:
            "Uncertainty quantification techniques and Fairness studies",
        },
        {
          title: "",
          description:
            "Applications and research in data and model Privacy/Security",
        },
        {
          title: "",
          description:
            "Methodologies or case studies for explainable and transparent AI",
        },
      ],
      othertopics: [],
      topicofsub: "",
      additionalinfo: "",
      formatting: "The short paper must be formatted using the",
      formatname: "DLI Author Kit",
      abstractsubdate: "July 28th, 2023",
      notificationdate: "",
      submitname: "Microsoft CMT",
      call_for_reviewers: null,
      whycmt:
        "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.",
      submitinstruction:
        "Authors are required to register an account on the CMT (Conference Management Toolkit) system in order to submit their extended abstracts. If you do not have a CMT account, please create one by following the instructions provided",
      submittype: "cmt",
      dualsubpolicy: "",
      anonymization:
        "Our peer review process is fully anonymous, meaning reviewers will not know the authors’ identities, and authors will not know the reviewers' identities. Please ensure that you anonymize your submission.  This means that the submitted PDF should not include the authors' names, and any references to your own work should be cited in a way that does not reveal that it was authored by you. Submissions that are not properly anonymized may be rejected without review.",
      submitinstructionlink:
        "https://cmt3.research.microsoft.com/docs/help/general/account-creation.html",
      submissionlink:
        "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FTrustMLDeepIndaba2023",
      formatlink:
        "https://drive.google.com/drive/folders/1K8yBWIkQMO0D5o_XfY6K63MI3RzGopAf",
      tutoriallink:
        "https://www.youtube.com/watch?v=2wNEfoxcRYw&ab_channel=FES-CongressonFoodandEnvironmentalSecurity",
    },
    coc: {
      source:
        "https://deeplearningindaba.com/mentorship/code-of-ethics-and-conduct/#:~:text=Code%20of%20Conduct%3A%20Every%20participant,%2C%20religion%2C%20or%20socioeconomic%20status.",
    },
    schedule: [
      {
        starttime: "11:00AM",
        endtime: "11:05AM",
        title: "Opening remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "11:05AM",
        endtime: "11:35AM",
        title:
          "Keynote: A Quantitative Approach to Measuring Responsible AI, Reflections from RAIN",
        abstract: "",
        speakername: "Prof. Jerry John Kponyo",
        speakerlink: null,
      },
      {
        starttime: "11:35AM",
        endtime: "11:45AM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "11:45AM",
        endtime: "11:55AM",
        title:
          "Phonocardiogram Classification: Leveraging 1D Inception Time Convolutional Neural Networks with Explainable AI using Grad-CAM",
        abstract: "",
        speakername: "Bjørn-Jostein Singstad, Antony M. Gitau",
        speakerlink: null,
      },
      {
        starttime: "11:55AM",
        endtime: "12:05PM",
        title:
          "On Diagnostics for Understanding Agent Training Behaviour in Cooperative MARL",
        abstract: "",
        speakername:
          "Wiem Khlifi, Siddarth Singh, Omayma Mahjoub, Ruan de Rock, Abidine Vall, Rihab Gorsane, Arnu Pretorius",
        speakerlink: null,
      },
      {
        starttime: "12:05PM",
        endtime: "12:15PM",
        title: "Fairness in Credit Scoring",
        abstract: "",
        speakername: "Nokuthula K., Nathi N., Nadiera M., Siyanda N",
        speakerlink: null,
      },
      {
        starttime: "12:15PM",
        endtime: "12:30PM",
        title: "Morning Session Q&A ",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "12:30PM",
        endtime: "2:00PM",
        title: "Network Session & Lunch break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "2:00PM",
        endtime: "2:20PM",
        title: "Keynote: Larger isn’t always better",
        abstract: "",
        speakername: "Dr. Abeba Birhane",
        speakerlink: null,
      },
      {
        starttime: "2:20PM",
        endtime: "2:30PM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "2:30PM",
        endtime: "2:40PM",
        title:
          "Investigating the Robustness of Arabic Offensive Language Transformer-based Classifiers To Adversarial Attacks",
        abstract: "",
        speakername: "Maged Abdelaty, Ahmed El-Sayed Mahmoud, Shaimaa Lazem",
        speakerlink: null,
      },
      {
        starttime: "2:40PM",
        endtime: "2:50PM",
        title:
          "Algorithmic Techniques for Mitigating Gender Bias in Word Embeddings",
        abstract: "",
        speakername: "Victor Ashioya",
        speakerlink: null,
      },
      {
        starttime: "2:50PM",
        endtime: "3:10PM",
        title: "Afternoon Session  Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "3:10PM",
        endtime: "3:30PM",
        title: "Keynote: Thinking of Trust beyond Data and Models",
        abstract: "",
        speakername: "Dr. Aisha Walcott",
        speakerlink: null,
      },
      {
        starttime: "3:30PM",
        endtime: "3:40PM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "3:40PM",
        endtime: "4:00PM",
        title: "Keynote: Training Dynamics and Trust in Machine Learning",
        abstract: "",
        speakername: "Dr. Nicolas Papernot",
        speakerlink: null,
      },
      {
        starttime: "4:00PM",
        endtime: "4:10PM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "4:10PM",
        endtime: "4:30PM",
        title: "Network Session & Coffee break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "4:30PM",
        endtime: "5:50PM",
        title:
          "Panel Discussion** Going beyond buzzwords and metrics: What will it *actually* take to achieve equitable, accessible and transparent AI?",
        abstract: "",
        speakername:
          "Panelist: Rosanne Liu (Google DeepMind), Tyna Eloundou (OpenAI), Pelonomi Moiloa (Lelapa AI), Siobhan Mackenzie Hall (University of Oxford), Jerry John Kponyo (Kwame Nkrumah University of Science and Technology). Moderator: Nathi Ndlovu ( South Africa Council for Scientific and Industrial Research).",
        speakerlink: null,
      },
      {
        starttime: "5:50PM",
        endtime: "6:00PM",
        title: "Closing remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "6:00PM",
        endtime: "",
        title: "End of the Workshop",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
    ],
  },
  taid2022: {
    name: "TrustAIDeepLIndaba2022",
    title: null,
    year: 2022,
    datetime: null,
    location: "Deep Learning Indaba 2022",
    locationimage: "/images/2022/indaba.jpg",
    about:
      "Trustworthy AI aims to provide explainable, robust and fair decision making process. In addition, transparency and security also plays a significant role to improve the adoptability and impact of ML solutions. Particularly, data and models often imported from external sources in addressing solutions in developing countries, thereby  risking potential security issues.   The  divergence of data and model from population at hand also poses a lack of transparency and explainabilty of the decision making process. Thus,  a  workshop at Deep Indaba 2022 on this specific theme aims to bring researchers, policy makers and regulators to discuss on ways to ensure security and transparency while addressing fundamental problems in developing countries, particularly, when data and models are imported and/or collected locally with less focus on ethical consideraions and governance guidelines.",
    speakers: [
      {
        name: "Anis Yazidi",
        image: "/images/2022/keynote1.png",
        bio: "Anis Yazidi is currently the deputy head of OsloMet AI lab, and the leader for the research group on Applied Artificial Intelligence (AI2) at OsloMet. He is a full Professor in Machine Learning at OsloMet. He is also a Senior Researcher at Oslo University Hospital (OuS) and research Professor in Data Science at the Norwegian University of Science and Technology NTNU. He has more than 190 publications, including more than 80 journal articles in prestigious venues and 2 book chapters. Anis Yazidi received the M.Sc. and Ph.D. degrees from the University of Agder, Grimstad, Norway, in 2008 and 2012, respectively.  In 2015 he was selected as the promising researcher of the year, TKD Faculty OsloMet. In 2019 he won the Prize for top 50 in Norway most productive researcher for all disciplines for the years 2015-2018. He also won the Best Paper Award  in SMARTGIFG 2017, in ACM RACS 2017 and in CSE 2014 and Best Paper Award Runner in SMC 2016. He is IEEE senior member. He is associate editor for Springer Journal on Pattern Analysis and Applications, associate editor for Frontiers in Artificial Intelligence and associate editor for Frontiers in Computational Physiology and Medicine. He is leading the master program in Data Science at OsloMet. He  is currently PI in the Horizon 2020 AI-Mind project and he is also PI from the Norwegian side in different international and national projects. He is the co-director of the Excellence Academic Environment NordSTAR on Trustworthy and Sustainbe AI at OsloMet",
        topic: "Adaptive Learning with Artificial Barriers",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Chinasa T. Okolo",
        image: "/images/2022/keynote2.jpeg",
        bio: "Chinasa T. Okolo is a fifth-year Ph.D. Candidate in the Department of Computer Science at Cornell University. Before coming to Cornell, she graduated from Pomona College with a degree in Computer Science. Her research interests include explainable AI, human-AI interaction, global health, and information & communication technologies for development (ICTD). Within these fields, she works on projects to understand how frontline healthcare workers in rural India perceive and value artificial intelligence (AI) and examines how explainability can be best leveraged in AI-enabled technologies deployed throughout the Global South, with a focus on healthcare",
        topic: "Adaptive Learning with Artificial Barriers",
        expanded: false,
        link: null,
        affiliate: null,
      },
      {
        name: "Shakir Mohamed",
        image: "/images/2022/keynote3.jpg",
        bio: "Shakir Mohamed works on technical and sociotechnical questions in machine learning research, working on problems in machine learning principles, applied problems in healthcare and environment, and ethics and diversity. Shakir is a Director for research at DeepMind in London, an Associate Fellow at the Leverhulme Centre for the Future of Intelligence, and a Honorary Professor of University College London. Shakir is also a founder and trustee of the Deep Learning Indaba. Shakir also serves on the Board of Directors for the largest conferences in the field of AI (ICML, ICLR, NeurIPS), and a member of the Royal Society diversity committee. Shakir is from South Africa and received his PhD from the University of Cambridge, and his masters and undergraduate degrees in Electrical and Information engineering from the University of the Witwatersrand, Johannesburg",
        expanded: false,
        link: null,
        affiliate: null,
      },
    ],
    panelists: [],
    isls: [],
    organizers: [
      {
        name: "Aisha Alryeh Mkean Alaagib",
        affiliate: "German Research Center for Artificial Intelligence",
        image: null,
        bio: "",
        link: "https://aishaalaagib.netlify.app/",
        expanded: false,
      },
      {
        name: "Girmaw Abebe Tadesse",
        affiliate: "",
        image: null,
        bio: "",
        link: "https://researcher.watson.ibm.com/researcher/view.php?person=ibm-Girmaw.Abebe.Tadesse",
        expanded: false,
      },
      {
        name: "Luis Oala",
        affiliate: "",
        image: null,
        bio: "",
        link: "https://luisoala.net/",
        expanded: false,
      },
      {
        name: "Celia Cintas",
        affiliate: "IBM Research Africa",
        image: null,
        bio: "",
        link: "https://celiacintas.io/",
        expanded: false,
      },
    ],
    advisors: null,
    cfp: {
      title: "Trustworthy AI Workshop 2022",
      description: "",
      topics: [
        {
          title: "",
          description: "Audit techniques in data and ML models",
        },
        {
          title: "",
          description: "Advances in algorithms and metrics for robust ML",
        },
        {
          title: "",
          description:
            "Uncertainty quantification techniques and Fairness studies",
        },
        {
          title: "",
          description:
            "Applications and research in data and model Privacy/Security",
        },
        {
          title: "",
          description:
            "Methodologies or case studies for explainable and transparent AI",
        },
      ],
      othertopics: [],
      topicofsub: "",
      additionalinfo: "",
      formatting: "The short paper must be formatted using the",
      formatname: "DLI Author Kit",
      abstractsubdate: "1st of August 2022",
      notificationdate: null,
      submitname: "Form",
      call_for_reviewers: null,
      whycmt: "",
      submitinstruction: "",
      submittype: "form",
      dualsubpolicy: "",
      anonymization:
        "Our peer review process is fully anonymous, meaning reviewers will not know the authors’ identities, and authors will not know the reviewers' identities. Please ensure that you anonymize your submission.  This means that the submitted PDF should not include the authors' names, and any references to your own work should be cited in a way that does not reveal that it was authored by you. Submissions that are not properly anonymized may be rejected without review.",
      submitinstructionlink: null,
      submissionlink: "https://forms.gle/19aJixpRX4PpvZZt8",
      formatlink:
        "https://drive.google.com/drive/folders/1K8yBWIkQMO0D5o_XfY6K63MI3RzGopAf",
      tutoriallink: null,
    },
    coc: {
      source:
        "https://deeplearningindaba.com/mentorship/code-of-ethics-and-conduct/#:~:text=Code%20of%20Conduct%3A%20Every%20participant,%2C%20religion%2C%20or%20socioeconomic%20status.",
    },
    schedule: [
      {
        starttime: "8:30AM",
        endtime: "8:35AM",
        title: "Opening remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "8:35AM",
        endtime: "8:55AM",
        title: "Keynote: Adaptive Learning with Artificial Barriers",
        abstract:
          "In this talk, we will present some new advances in reinforcement learning in which artificial barriers are imposed to confine the action probabilities in order to avoid absorbing states. We will also some of the applications of this new paradigm in multi-agent systems. Furthermore, we will show some connections between reinforcement learning and dynamical systems using the theory of two-time scale stochastic approximation. Some applications of distributed learning in sensor fusion without knowledge of ground truth will be presented.",
        speakername: "Anis Yazidi",
        speakerlink: null,
      },
      {
        starttime: "8:55AM",
        endtime: "9:00AM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "9:00AM",
        endtime: "9:10AM",
        title:
          "Towards trustworthy AI-based algorithms in healthcare: A case of medical images",
        abstract: "",
        speakername: "Mbangula Lameck Amugongo",
        speakerlink: null,
      },
      {
        starttime: "9:10AM",
        endtime: "9:20AM",
        title:
          "Adversarial Robustness of Different Federated Learning (FL) Frameworks : case of Tensorflow-federated",
        abstract: "",
        speakername: "Loic Elnathan Tiokou Fangang",
        speakerlink: null,
      },
      {
        starttime: "9:20AM",
        endtime: "9:30AM",
        title: "Morning Session Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "9:30AM",
        endtime: "9:50AM",
        title:
          "Keynote: Making AI Explainable for Novice Technology Users in Low-Resource Settings",
        abstract:
          "As researchers and technology companies rush to develop artificial intelligence (AI) applications that aid the health of marginalized communities, it is critical to consider the needs of the community health workers (CHWs) who will be increasingly expected to operate tools that incorporate these technologies. My previous work has shown that these users have low levels of AI knowledge, form incorrect mental models about how AI works, and at times, may trust algorithmic decisions more than their own. This is concerning, given that AI applications targeting the work of CHWs are already in active development and early deployments in low-resource healthcare settings have already reported failures that created additional workflow inefficiencies and inconvenienced patients. Explainable AI (XAI) can help avoid such pitfalls, but nearly all prior work has focused on users that live in relatively resource-rich settings (e.g., the US and Europe) and that arguably have substantially more experience with digital technologies such as AI. My research works to develop XAI for people with low levels of formal education and technical literacy, with a focus on healthcare in low-resource domains. This work involves demoing interactive prototypes with CHWs to understand what aspects of model decision-making need to be explained and how they can be explained most effectively, with the goal of improving how current XAI methods serve novice technology users.",
        speakername: "Chinasa T. Okolo",
        speakerlink: null,
      },
      {
        starttime: "9:50AM",
        endtime: "10:00AM",
        title: "Keynote: Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "10:00AM",
        endtime: "2:00PM",
        title: "Network Session & Coffee break",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "2:00PM",
        endtime: "2:10PM",
        title:
          "A Prompt Array Keeps the Bias Away: Debiasing Vision-Language Models with Adversarial Learning",
        abstract: "",
        speakername: "Siobhan Mackenzie Hall",
        speakerlink: null,
      },
      {
        starttime: "2:10PM",
        endtime: "2:20PM",
        title: "Roles of weights in a trained deep learning algorithm",
        abstract: "",
        speakername: "Deogratias Mzurikwao",
        speakerlink: null,
      },
      {
        starttime: "2:20PM",
        endtime: "2:30PM",
        title: "Afternoon Session Q&A",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "2:30PM",
        endtime: "2:50PM",
        title: "Keynote: Trustworthy AI as Decolonial AI",
        abstract:
          "We'll use some cases of historical stories of technology development to explore some of the dimensions of trustworthy technologies, specifically using examples of AI in water management, and climate change. These examples will expose harms that arise from algorithmic systems and part of trustworthy technologies is to consider alternative paths and actions that can be taken at individual and institutional levels. I'll explore a few topics that arise from a decolonial approach to thinking about AI and the advantages of historical hindsight in building trustworthy technology.",
        speakername: "Shakir Mohamed",
        speakerlink: null,
      },
      {
        starttime: "2:50PM",
        endtime: "3:50PM",
        title:
          "Panel Discussion with Wiebke Toussaint (University of Delft), Essa Mohamedali (Tanzania AI Lab), Amal Rannen Triki (DeepMind), Caleb Robinson (Microsoft AI for Good) &  Shakir Mohamed (DeepMind)",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "3:50PM",
        endtime: "4:00PM",
        title: "Closing remarks",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
      {
        starttime: "4:00PM",
        endtime: "",
        title: "End of the Workshop",
        abstract: "",
        speakername: "",
        speakerlink: null,
      },
    ],
  },
};
