import type { Project } from "@/types";

/**
 * Static project data — used as fallback when CMS is unavailable,
 * and as seed data for the Sanity import script.
 */
export const PROJECTS: Project[] = [
  {
    _id: "proj-01",
    title: "Engaged Scholarship: Narratives of Change",
    slug: { current: "engaged-scholarship-narratives-of-change" },
    shortDescription:
      "A comparative project investigating how engaged scholarship can contribute to the societal inclusion of refugees across South Africa, the US, and the Netherlands.",
    fullDescription:
      "A comparative research project investigating co-operation between academy and society — labelled 'engaged scholarship' — across South Africa, the US, and the Netherlands. The project collects narratives from both refugees and engaged academics on academic engagement's contribution and challenges in the lives of refugees.",
    theme: "migration",
    status: "ongoing",
    year: "Ongoing",
    researchers: [
      "Halleh Ghorashi",
      "Elena Ponzoni",
      "Phoebe Kisubi Mbasalaki",
      "Maria Rast",
      "Miriam Ocadiz",
      "Fabian Holle",
      "Alexandra Greene",
      "Sajad Salmanpour",
    ],
    partners: [
      "Comparative institutions in South Africa, US, and the Netherlands",
    ],
    methods: [
      "Qualitative research methodology",
      "Comparative analysis",
      "Participatory sites",
      "Narrative inquiry",
    ],
    geographicScope: "Comparative / 3 continents",
  },
  {
    _id: "proj-02",
    title: "The House of Stories (Het Verhalenhuis)",
    slug: { current: "het-verhalenhuis" },
    shortDescription:
      "A creative collaboration giving people with refugee backgrounds professional guidance to share their unheard stories on stage — transformed into podcasts and live performances.",
    fullDescription:
      "A creative collaboration between Story Academy and Refugee Academy, providing a platform for people with refugee backgrounds to receive professional guidance and share their unheard stories on stage. The project unfolds in twelve phases of six storytelling workshops each, enabling self-reflection and challenging existing narratives about migrants. Stories are transformed into podcasts and performances.",
    theme: "migration",
    status: "ongoing",
    year: "Ongoing",
    researchers: [
      "Elena Ponzoni",
      "Halleh Ghorashi",
      "Fabian Holle",
      "Miriam Ocadiz",
    ],
    partners: ["Story Academy", "Refugee Academy", "Theatre Spui (The Hague)"],
    methods: [
      "Storytelling workshops",
      "Podcast production",
      "Performance",
      "Reflective research",
      "Dialogue",
    ],
    externalLink: "https://rosestories.nl/podcast-verhalenhuis/",
    geographicScope: "Story Academy × Refugee Academy",
  },
  {
    _id: "proj-03",
    title: "2incING Project",
    slug: { current: "2incing-project" },
    shortDescription:
      "Bridging policymakers and refugee/migrant-led organisations across four EU countries to create policies genuinely grounded in community realities.",
    fullDescription:
      "An EU AMIF-funded project fostering exchange and cooperation between policymakers and refugee/migrant-led organisations across Croatia, Malta, Belgium, Greece, and the Netherlands. The project delivers national workshops, G100 conferences, masterclasses for policymakers, steering committees, shadow reports, and policy meetings — all to ground policy in the daily realities and needs of migrant communities.",
    theme: "migration",
    status: "ongoing",
    year: "Ongoing · EU AMIF funded",
    researchers: ["Elena Ponzoni"],
    partners: [
      "Centre for Peace Studies (Croatia)",
      "Aditus Foundation (Malta)",
      "ECRE (Belgium)",
      "Greek Forum of Refugees",
      "Syrian Volunteers in the Netherlands (SYVNL)",
      "Refugee Academy (VU Amsterdam)",
    ],
    methods: [
      "Masterclasses",
      "Participatory workshops",
      "Advocacy academy",
      "Shadow reports",
      "Policy dialogues",
    ],
    fundingBody: "EU AMIF",
    geographicScope: "EU AMIF funded · 5 countries",
  },
  {
    _id: "proj-04",
    title: "Common Ground Dialogues",
    slug: { current: "common-ground-dialogues" },
    shortDescription:
      "Bringing together people across political and social divides through Storytelling Circles — using fiction and play to address polarising issues with empathy.",
    fullDescription:
      "A Creative Europe-funded project addressing deeply dividing issues through storytelling as artistic practice. During ten Storytelling Circles across 2023–2024, the CGD methodology is researched and refined. Participants from different socio-economic and political backgrounds share personal stories and co-create fiction to explore real-world polarising issues through empathy and play.",
    theme: "storytelling",
    status: "ongoing",
    year: "2023–2025 · Creative Europe",
    researchers: ["Timo Korstenbroek", "Lise Woensdregt"],
    partners: [
      "Space Explorers",
      "European Commission Creative Europe programme",
    ],
    methods: [
      "Storytelling circles",
      "Arts-based research",
      "Participatory narrative",
      "Co-created fiction",
    ],
    externalLink: "https://cgd.spaceexplorers.nl/",
    fundingBody: "Creative Europe",
    geographicScope: "2023–2025 · Creative Europe",
  },
  {
    _id: "proj-05",
    title: "LIMBO",
    slug: { current: "limbo" },
    shortDescription:
      "A workshop series centring queer refugee stories through creative practices, co-creating knowledge about resilience and the role of engaged scholarship.",
    fullDescription:
      "A creative research collaboration between queer refugee community organisers/artists and Refugee Academy. LIMBO is a workshop series centring queer refugee stories through creative practices, co-creating knowledge on the challenges and resilience of queer refugees and the role of engaged scholarship. Funded by ILGA Europe (September 2024–June 2025). Workshops are hosted by Makers Unite.",
    theme: "violence",
    status: "ongoing",
    year: "Sep 2024–Jun 2025 · ILGA Europe",
    researchers: ["Fabian Holle (PhD researcher & initiator)"],
    partners: ["Makers Unite", "ILGA Europe (funder)", "Framer Framed"],
    methods: [
      "Creative workshops",
      "Community art",
      "Narrative inquiry",
      "Engaged scholarship",
      "Safer spaces facilitation",
    ],
    fundingBody: "ILGA Europe",
    geographicScope: "Sep 2024–Jun 2025 · ILGA Europe",
  },
  {
    _id: "proj-06",
    title: "Leadership & Resilience: Co-Creation with Undocumented Youth",
    slug: { current: "leadership-resilience-undocumented-youth" },
    shortDescription:
      "Undocumented youth and VU researchers working together to create more inclusive educational environments.",
    fullDescription:
      "A co-creative research group of undocumented youth, VU researchers, activists, and social workers exploring how to create inclusive educational environments. Topics include mental well-being at university, transitions from higher education to work, and institutional inclusiveness.",
    theme: "youth",
    status: "ongoing",
    year: "Ongoing · NWA funded",
    researchers: [
      "dr. K Maeve Powlick",
      "Evelyn Vlasman",
      "Gabriel Briar (VU Amsterdam)",
      "Ruben Boers (De Haagse Hogeschool)",
    ],
    partners: [
      "ASKV",
      "Stichting Leergeld Amsterdam",
      "De Haagse Hogeschool",
      "Framer Framed",
    ],
    methods: [
      "Arts-based research",
      "Co-creative research group",
      "Participatory workshops for educators",
    ],
    fundingBody: "NWA Route Resilience",
    geographicScope: "NWA Route Resilience",
  },
  {
    _id: "proj-07",
    title: "Boundaries in Art-Based Research",
    slug: { current: "boundaries-art-based-research" },
    shortDescription:
      "A refugee-led project creating space to collectively articulate the conditions for meaningful co-creation in art and research.",
    fullDescription:
      "A small, refugee-led project making a first step in collectively articulating the complexity of participating in art-based projects for people with refugee backgrounds. Two workshops bring together people with refugee experience of art-based projects to create collective knowledge and articulate conditions for reciprocally meaningful co-creation.",
    theme: "violence",
    status: "ongoing",
    year: "Ongoing · Refugee-led",
    researchers: ["Idris Alhassan", "Husniya Kedr"],
    partners: ["Refugee community networks"],
    methods: [
      "Participatory workshops",
      "Collective knowledge-making",
      "Video-lecture production",
    ],
    geographicScope: "Refugee-led",
  },
  {
    _id: "proj-08",
    title: "Economic Pathways for Queer Men in Nairobi",
    slug: { current: "economic-pathways-queer-nairobi" },
    shortDescription:
      "Community-led research exploring financial resilience and queer entrepreneurship among financially vulnerable queer men in Nairobi.",
    fullDescription:
      "Using Community-Led Research and Action (CLRA), this project explores how queer men in Nairobi can create pathways to financial independence within 'hustle economies' — and how queer entrepreneurship might offer alternatives.",
    theme: "economy",
    status: "ongoing",
    year: "Jun 2024–Aug 2025 · Wenner-Gren",
    researchers: ["dr. Lise Woensdregt"],
    partners: ["Queer community organisations in Nairobi, Kenya"],
    methods: [
      "Community-led research and action (CLRA)",
      "Collaborative anthropology",
      "Community-shaped dissemination",
    ],
    fundingBody: "Wenner-Gren",
    geographicScope: "Jun 2024–Aug 2025 · Wenner-Gren",
  },
  {
    _id: "proj-09",
    title: "Trans Healthcare in Den Haag",
    slug: { current: "trans-healthcare-den-haag" },
    shortDescription:
      "Mapping the barriers transgender youth face in accessing care in The Hague, integrating youth and professional perspectives.",
    fullDescription:
      "Using Community-Led Research and Action (CLRA), this project maps the barriers and opportunities transgender youth experience in accessing adequate care and support in The Hague. The research integrates both youth perspectives and those of caregivers and professionals.",
    theme: "youth",
    status: "ongoing",
    year: "Ongoing · Municipality of The Hague",
    researchers: ["VU Amsterdam researchers (CIK Lab)"],
    partners: [
      "Municipality of The Hague",
      "Healthcare professionals and networks in Den Haag",
    ],
    methods: [
      "Community-led research and action (CLRA)",
      "Qualitative interviews",
      "Professional evaluation",
    ],
    geographicScope: "Municipality of The Hague",
  },
  {
    _id: "proj-10",
    title: "Magazine for Global Reparations",
    slug: { current: "magazine-global-reparations" },
    shortDescription:
      "A community magazine by Aralez presenting a manifesto for reparations, connecting decolonisation activism with academic reflection.",
    fullDescription:
      "A magazine fostering community initiatives and conversation on reparations and decolonization, produced by Aralez — a pan-decolonial network & grassroots organisation in Amsterdam. It presents a manifesto for reparations from two yearly conferences and connects to ongoing academic work.",
    theme: "violence",
    status: "ongoing",
    year: "Target: March 2025",
    researchers: ["Aralez community", "CIK Lab"],
    partners: ["Aralez (pan-decolonial network, Amsterdam)"],
    methods: [
      "Community publishing",
      "Manifesto co-creation",
      "Academic-community bridge",
      "Conference series",
    ],
    geographicScope: "Aralez × CIK Lab",
  },
  {
    _id: "proj-11",
    title: "Exhibition: Wounded Storytellers",
    slug: { current: "wounded-storytellers-exhibition" },
    shortDescription:
      "A photo-voice study with 32 gang-violence survivors in Cape Town, co-curating an exhibition that centres their stories of healing.",
    fullDescription:
      "A Participatory Action Research project with 32 gang members who acquired spinal cord injuries through gang-related violence in Cape Town, South Africa. Co-researchers created photo-stories depicting the causes and consequences of violence. The 2025 exhibition in Cape Town will be co-curated by the co-researchers themselves.",
    theme: "violence",
    status: "new",
    year: "Exhibition 2025 · Cape Town",
    researchers: ["Helenard Louw (PhD researcher)"],
    partners: ["Community organisations and stakeholders in Cape Town"],
    methods: [
      "Participatory action research",
      "Photovoice",
      "Co-curated exhibition",
      "Community dissemination",
    ],
    geographicScope: "Exhibition 2025 · Cape Town",
  },
  {
    _id: "proj-12",
    title: "Memory Workshops in Colombia",
    slug: { current: "memory-workshops-colombia" },
    shortDescription:
      "Co-producing local knowledge about armed conflict with rural Colombian communities using creative memory tools.",
    fullDescription:
      "A project proposing memory workshops as an alternative for the co-production of data and local knowledge in rural Colombian communities affected by armed conflict. Using creative tools — memory web creation, collective timeline drawing, and emotional biography exploration.",
    theme: "violence",
    status: "ongoing",
    year: "Ongoing · Colombia",
    researchers: ["Dr. Daniel Gómez Uribe"],
    partners: ["Rural communities in Colombia"],
    methods: [
      "Memory workshops",
      "Creative participatory methods",
      "Collective timeline drawing",
      "Emotional biography",
    ],
    geographicScope: "Colombia",
  },
  {
    _id: "proj-13",
    title: "Climate Mobility: North–South Perspectives",
    slug: { current: "climate-mobility-north-south" },
    shortDescription:
      "Building a scholar-activist network across Europe and Latin America to address the power dynamics shaping climate mobility.",
    fullDescription:
      "An exploratory partnership building a network between critical scholars from the Global South and North to address power dynamics at the intersection of climate change, community resilience, and climate (im)mobility.",
    theme: "violence",
    status: "ongoing",
    year: "Ongoing · North–South partnership",
    researchers: ["Dr. Robert Larruina"],
    partners: [
      "Critical scholars in development studies, disaster studies, environmental governance (Europe and Latin America)",
    ],
    methods: [
      "Engaged scholarship",
      "Network building",
      "Comparative North-South dialogue",
      "Grant preparation",
    ],
    geographicScope: "North–South partnership",
  },
  {
    _id: "proj-14",
    title: "Library of In-Between Stories",
    slug: { current: "library-in-between-stories" },
    shortDescription:
      "Young people growing up between worlds co-create a digital library of in-between narratives and a masterclass for youth professionals.",
    fullDescription:
      "A collaboration between VU, Hogeschool van Amsterdam, Hogeschool InHolland, Stichting Sitara, Criminal Minded, and Sociaal Cement. Young people growing up between different life worlds co-create a digital library of in-between narratives.",
    theme: "youth",
    status: "ongoing",
    year: "Ongoing · Multi-institution",
    researchers: ["Elena Ponzoni"],
    partners: [
      "Hogeschool van Amsterdam",
      "Hogeschool InHolland",
      "Stichting Sitara",
      "Criminal Minded",
      "Sociaal Cement",
    ],
    methods: [
      "Participatory qualitative study",
      "Digital library co-creation",
      "Youth-taught masterclass",
    ],
    geographicScope: "Multi-institution collaboration",
  },
  {
    _id: "proj-15",
    title: "Consultative Panel on Social Assistance",
    slug: { current: "consultative-panel-social-assistance" },
    shortDescription:
      "A participatory think tank bringing together welfare researchers, policymakers, and recipients to make social assistance research more relevant.",
    fullDescription:
      "A stakeholder 'think tank' collaboratively creating knowledge for research related to the Dutch social assistance system. The group includes researchers, policymakers, representatives of people receiving social assistance, and welfare recipients themselves.",
    theme: "economy",
    status: "ongoing",
    year: "Ongoing · Netherlands",
    researchers: ["Boudewijn Goos", "Arjen de Wit"],
    partners: [
      "Policymakers",
      "Social welfare representatives",
      "Welfare recipients (Netherlands)",
    ],
    methods: [
      "Participatory think tank",
      "Collaborative knowledge-making",
      "Policy dialogue",
    ],
    geographicScope: "Netherlands",
  },
  {
    _id: "proj-16",
    title: "Our Cloud: Data Centre Activists & NGOs",
    slug: { current: "our-cloud-data-centre" },
    shortDescription:
      "Connecting grassroots data centre resistance movements with digital rights NGOs to co-develop democratic alternatives.",
    fullDescription:
      "In response to the massive boom in data centre construction and strong local resistance movements in the Netherlands and beyond, this project bridges local data centre activists with NGOs working on digital rights and public infrastructure.",
    theme: "economy",
    status: "ongoing",
    year: "Ongoing",
    researchers: ["Dr. Julia Rone"],
    partners: [
      "Local activist groups",
      "Digital rights NGOs (Netherlands, Chile, Ireland, Luxembourg, Spain)",
    ],
    methods: [
      "Participatory network building",
      "Engaged scholarship",
      "Community-NGO bridging",
    ],
    geographicScope: "Netherlands + international",
  },
  {
    _id: "proj-17",
    title: "In Search of an In-Between Space",
    slug: { current: "in-between-space-amsterdam" },
    shortDescription:
      "Co-creative action research building new chains of trust between Amsterdam residents, frontline workers, and policymakers.",
    fullDescription:
      "A project investigating whether and how co-creation based on epistemic plurality can strengthen democratic relationships and generate creative solutions to inequality in Amsterdam. Through action research in co-creative sessions, the project builds 'chains of trust' between active residents, frontline professionals, civil servants, and researchers.",
    theme: "economy",
    status: "new",
    year: "Started Sep 2024 · Amsterdam",
    researchers: ["Halleh Ghorashi", "Elena Ponzoni", "dr. Lise Woensdregt"],
    partners: [
      "E-Co/Samen Vooruit",
      "Vrijwilligersacademie Amsterdam",
      "Onderzoeksbureau Amsterdam Meetellen",
      "UvA",
      "Hogeschool van Amsterdam",
      "Municipality of Amsterdam",
    ],
    methods: [
      "Action research",
      "Co-creative sessions",
      "Epistemic plurality",
      "Democratic collaboration learning trajectory",
    ],
    geographicScope: "Sep 2024 · Amsterdam",
  },
];
