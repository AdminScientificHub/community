import {
  TFullDataItem,
  TPublicationFieldData,
  TPublicationStatus,
  TPublicationType,
} from './_types'

export const PUBLICATION_TYPE_FULL_DATA: TFullDataItem<TPublicationType>[] = [
  {
    label: 'Article',
    value: 'ARTICLE',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_types%2FARTICLE.jpg?alt=media&token=ceccff23-f8a1-44b0-86e2-b0a729dacbc1',
    url: 'article',
    description: '',
  },
  {
    label: 'Paper',
    value: 'PAPER',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_types%2FPAPER.jpg?alt=media&token=5c9cc7bc-5b0b-4a48-a250-ccab8668a08d',
    url: 'paper',
    description: '',
  },
  {
    label: 'Thesis',
    value: 'THESIS',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_types%2FTHESIS.jpg?alt=media&token=37aa6ac1-f22c-4c91-a2e5-cac4441f6457',
    url: 'thesis',
    description: '',
  },
]

export const PUBLICATION_STATUS_TO_STR: { [key in TPublicationStatus]: string } = {
  DRAFT: 'Draft',
  PUBLISHED: 'Published',
}

export const PUBLICATION_FIELD_FULL_DATA: TPublicationFieldData[] = [
  {
    title: 'Natural sciences',
    areas: [
      {
        label: 'Mathematics',
        value: 'MATHEMATICS',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FMATHEMATICS-min.jpg?alt=media&token=bb126680-cbbb-4432-a6fd-f7489f104cea',
        url: 'mathematics',
        description:
          'Includes the study of such topics as quantity (number theory), structure, space (geometry), and change (analysis). It has no generally accepted definition.',
      },
      {
        label: 'Computer and information sciences',
        value: 'COMPUTER_AND_INFORMATION_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FCOMPUTER_AND_INFORMATION_SCIENCES-min.jpg?alt=media&token=e1f661b8-0656-469f-ad5d-b7e32c61d5ed',
        url: 'computer-and-information-sciences',
        description:
          'ICS or CIS is a field that emphasizes both computing and informatics, upholding the strong association between the fields of information sciences and computer sciences and treating computers as a tool rather than a field.',
      },
      {
        label: 'Physical sciences',
        value: 'PHYSICAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FPHYSICAL_SCIENCES-min.jpg?alt=media&token=74e14689-d2a4-44ec-86a9-2dd7a4f57e7e',
        url: 'physical-sciences',
        description:
          'It\'s a branch of natural science that studies non-living systems, in contrast to life science. It in turn has many branches, each referred to as a "physical science", together called the "physical sciences".',
      },
      {
        label: 'Chemical sciences',
        value: 'CHEMICAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FCHEMICAL_SCIENCES.jpg?alt=media&token=498cd87c-9a20-4623-ba6d-ca7429069f4c',
        url: 'chemical-sciences',
        description:
          "It's the scientific study of the properties and behavior of matter. It is a natural science that covers the elements that make up matter to the compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.",
      },
      {
        label: 'Earth and related environmental sciences',
        value: 'EARTH_AND_RELATED_ENVIRONMENTAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FEARTH_AND_RELATED_ENVIRONMENTAL_SCIENCES-min.jpg?alt=media&token=5c10676c-dc4c-42c0-9707-27c592ed37a9',
        url: 'earth-and-related-environmental-sciences',
        description:
          'Includes all fields of natural science related to planet Earth. This is a branch of science dealing with the physical and chemical constitution of Earth and its atmosphere. These sciences can be considered to be a branch of planetary science, but with a much older history.',
      },
      {
        label: 'Biological sciences',
        value: 'BIOLOGICAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FBIOLOGICAL_SCIENCES-min.jpg?alt=media&token=f80221a2-6e5d-497b-b4c3-48d64b275065',
        url: 'biological-sciences',
        description:
          "It's the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field. Another major theme is evolution, which explains the unity and diversity of life. Finally, all organisms require energy to move, grow, and reproduce, as well as to regulate their own internal environment.",
      },
      {
        label: 'Other natural sciences',
        value: 'OTHER_NATURAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FOTHER_NATURAL_SCIENCES-min.jpg?alt=media&token=7c173517-fe14-4f82-ab84-cfd474e2953f',
        url: 'other-natural-sciences',
        description: 'Includes all others fields from the Natural sciences field.',
      },
    ],
  },
  {
    title: 'Engineering and technology',
    areas: [
      {
        label: 'Civil engineering',
        value: 'CIVIL_ENGINEERING',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FCIVIL_ENGINEERING.jpg?alt=media&token=69046ded-9cac-4905-8e55-1a4393bd9c40',
        url: 'civil-engineering',
        description:
          "It's a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.",
      },
      {
        label: 'Electrical, electronic and information engineering',
        value: 'ELECTRICAL_ENGINEERING_AND_ELECTRONIC_ENGINEERING_AND_INFORMATION_ENGINEERING',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FELECTRICAL_ENGINEERING_AND_ELECTRONIC_ENGINEERING_AND_INFORMATION_ENGINEERING.jpg?alt=media&token=045ab706-98a9-48f4-8629-0a87960fcf1b',
        url: 'electrical-electronic-and-information-engineering',
        description: 'Includes all electrical, electronic and information engineering field.',
      },
      {
        label: 'Mechanical engineering',
        value: 'MECHANICAL_ENGINEERING',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FMECHANICAL_ENGINEERING.jpg?alt=media&token=55adf1ea-a7c9-4e2e-8742-0c3e5436391d',
        url: 'mechanical-engineering',
        description:
          "It's an engineering branch that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems. It is one of the oldest and broadest of the engineering branches.",
      },
      {
        label: 'Materials engineering',
        value: 'MATERIALS_ENGINEERING',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FMATERIALS_ENGINEERING.jpg?alt=media&token=b09192b8-91e9-4ee9-8131-d2adf95bfcb2',
        url: 'materials-engineering',
        description:
          'The interdisciplinary field of materials science, also commonly termed materials science and engineering, covers the design and discovery of new materials, particularly solids. Materials science still incorporates elements of physics, chemistry, and engineering.',
      },
      {
        label: 'Medical engineering',
        value: 'MEDICAL_ENGINEERING',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FMEDICAL_ENGINEERING.jpg?alt=media&token=73592a76-d64f-4ef5-bab0-281628f1d089',
        url: 'medical-engineering',
        description:
          'It\'s the application of engineering principles and design concepts to medicine and biology for healthcare purposes (e.g., diagnostic or therapeutic). Also traditionally known as "bioengineering", but this term has come to also refer to biological engineering. This field seeks to close the gap between engineering and medicine, combining the design and problem-solving skills of engineering with medical biological sciences to advance health care treatment, including diagnosis, monitoring, and therapy.',
      },
      {
        label: 'Environmental engineering',
        value: 'ENVIRONMENTAL_ENGINEERING',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FENVIRONMENTAL_ENGINEERING.jpg?alt=media&token=2affd517-28c4-45d1-bae6-04a4f6ced518',
        url: 'environmental-engineering',
        description:
          "It's a job type that is a professional engineering discipline and takes from broad scientific topics like chemistry, biology, ecology, geology, hydraulics, hydrology, microbiology, and mathematics to create solutions that will protect and also improve the health of living organisms and improve the quality of the environment. Environmental engineering is a sub-discipline of civil engineering and chemical engineering.",
      },
      {
        label: 'Systems engineering',
        value: 'SYSTEMS_ENGINEERING',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FSYSTEMS_ENGINEERING.jpg?alt=media&token=9128c5f5-8c4c-4ce3-9cf6-fcac2000702f',
        url: 'systems-engineering',
        description:
          "It's an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge. The individual outcome of such efforts, an engineered system, can be defined as a combination of components that work in synergy to collectively perform a useful function.",
      },
      {
        label: 'Environmental biotechnology',
        value: 'ENIRONMENTAL_BIOTECHNOLOGY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FENIRONMENTAL_BIOTECHNOLOGY.jpg?alt=media&token=51fab8e5-f139-4324-8011-f0d10be6399b',
        url: 'environmental-biotechnology',
        description:
          'Environmental biotechnology is biotechnology that is applied to and used to study the natural environment. Environmental biotechnology could also imply that one try to harness biological process for commercial uses and exploitation.',
      },
      {
        label: 'Industrial biotechnology',
        value: 'INDUSTRIAL_BIOTECHNOLOGY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FINDUSTRIAL_BIOTECHNOLOGY.jpg?alt=media&token=b12d8a96-44db-4f59-aa9e-641ebcb1db56',
        url: 'industrial-biotechnology',
        description:
          "It's the application of biotechnology for industrial purposes, including industrial fermentation. It includes the practice of using cells such as microorganisms, or components of cells like enzymes, to generate industrially useful products in sectors such as chemicals, food and feed, detergents, paper and pulp, textiles and biofuels.",
      },
      {
        label: 'Nano technology',
        value: 'NANO_TECHNOLOGY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FNANO_TECHNOLOGY.jpg?alt=media&token=e6d04771-c600-4760-b3a2-66e761953cb6',
        url: 'nano-technology',
        description:
          "It's the use of matter on an atomic, molecular, and supramolecular scale for industrial purposes. The earliest, widespread description of nanotechnology referred to the particular technological goal of precisely manipulating atoms and molecules for fabrication of macroscale products, also now referred to as molecular nanotechnology.",
      },
      {
        label: 'Other engineering and technologies',
        value: 'OTHER_ENGINEERING_AND_TECHNOLOGIES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FOTHER_ENGINEERING_AND_TECHNOLOGIES.jpg?alt=media&token=5267732e-aeb9-4c26-a48d-3e1f690180c1',
        url: 'other-engineering-and-technologies',
        description: 'Includes all others fields from Engineering and Technologies.',
      },
    ],
  },
  {
    title: 'Medical and health sciences',
    areas: [
      {
        label: 'Basic medicine',
        value: 'BASIC_MEDICINE',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FBASIC_MEDICINE-min.jpg?alt=media&token=27551a28-8c41-4add-87ba-b4db35c2763c',
        url: 'basic-medicine',
        description:
          "It's the science and practice of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.",
      },
      {
        label: 'Clinical medicine',
        value: 'CLINICAL_MEDICINE',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FCLINICAL_MEDICINE-min.jpg?alt=media&token=c7040937-f22c-4bca-ba90-27f83e9a0bcb',
        url: 'clinical-medicine',
        description:
          "It's a field of medicine that deals primarily with the practice and study of medicine based on the direct examination of the patient.",
      },
      {
        label: 'Health sciences',
        value: 'HEALTH_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FHEALTH_SCIENCES-min.jpg?alt=media&token=6e94762a-36f5-424a-9500-f1e727e1af15',
        url: 'health-sciences',
        description:
          'All sciences which focus on health, or health care, as core parts of their subject matter. These two subject matters relate to multiple academic disciplines,(and as such) both STEM disciplines, as well as emerging patient safety disciplines (such as social care research), and are both relevant to current health science knowledge.',
      },
      {
        label: 'Health biotechnology',
        value: 'HEALTH_BIOTECHNOLOGY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FHEALTH_BIOTECHNOLOGY-min.jpg?alt=media&token=c218d291-433b-4f11-96cc-c50431971ddf',
        url: 'health-biotechnology',
        description:
          "It's a branch of medicine that uses living cells and cell materials to research and then produce pharmaceutical and diagnosing products. ",
      },
      {
        label: 'Other medical sciences',
        value: 'OTHER_MEDICAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FOTHER_MEDICAL_SCIENCES-min.jpg?alt=media&token=0fb83c0c-365f-443d-85fb-b9f0767afb7e',
        url: 'other-medical-sciences',
        description: 'Includes all others fields from medical sciences.',
      },
    ],
  },
  {
    title: 'Agricultural sciences',
    areas: [
      {
        label: 'Agriculture, forestry, and fisheries',
        value: 'AGRICULTURE_AND_FORESTRY_AND_FISHERIES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FAGRICULTURE_AND_FORESTRY_AND_FISHERIES-min.jpg?alt=media&token=168a9c21-11d3-48f2-84ee-b3a2791ca124',
        url: 'agriculture-forestry-and-fisheries',
        description:
          'It comprises establishments primarily engaged in growing crops, raising animals, harvesting timber, and harvesting fish and other animals from a farm, ranch, or their natural habitats.',
      },
      {
        label: 'Animal and dairy science',
        value: 'ANIMAL_AND_DAIRY_SCIENCE',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FANIMAL_AND_DAIRY_SCIENCE-min.jpg?alt=media&token=dbc5ccb2-d8b3-49e5-9ed6-d15c7fb85fd8',
        url: 'animal-and-dairy-science',
        description:
          "It's a multidisciplinary science that focuses on livestock and companion animal growth, health and safety, as well as food and fiber production. Professionals in the diverse fields of animal and dairy sciences strive to provide healthy and wholesome food as well as quality fiber products to support the growing population.",
      },
      {
        label: 'Veterinary science',
        value: 'VETERINARY_SCIENCE',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FVETERINARY_SCIENCE-min.jpg?alt=media&token=54c5955f-9a86-4200-a492-2f4ed0e1373f',
        url: 'veterinary-science',
        description:
          'Deals with the health and wellbeing of animals. Like medical degrees, this encompasses everything from preventative care to psychological analysis and complex surgical procedures.',
      },
      {
        label: 'Agricultural biotechnology',
        value: 'AGRICULTURAL_BIOTECHNOLOGY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FAGRICULTURAL_BIOTECHNOLOGY-min.jpg?alt=media&token=ef30e2c1-4138-4bfc-8aca-021443171efd',
        url: 'agricultural-biotechnology',
        description:
          "It's a range of tools, including traditional breeding techniques, that alter living organisms, or parts of organisms, to make or modify products; improve plants or animals; or develop microorganisms for specific agricultural uses.",
      },
      {
        label: 'Other agricultural sciences',
        value: 'OTHER_AGRICULTURAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FOTHER_AGRICULTURAL_SCIENCES-min.jpg?alt=media&token=a411da5c-b81d-4af6-bd31-0d812712fb34',
        url: 'other-agricultural-sciences',
        description: 'Includes all others fields from agricutural sciences.',
      },
    ],
  },
  {
    title: 'Social science',
    areas: [
      {
        label: 'Psychology',
        value: 'PSYCHOLOGY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FPSYCHOLOGY-min.jpg?alt=media&token=1de60314-cde3-43a1-a510-935fcbcc31b0',
        url: 'psychology',
        description:
          "It's the study of the mind and behavior, according to the American Psychological Association. It is the study of the mind, how it works, and how it affects behavior.",
      },
      {
        label: 'Economics and business',
        value: 'ECONOMICS_AND_BUSINESS',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FECONOMICS_AND_BUSINESS-min.jpg?alt=media&token=30ec25c8-544a-42f7-97df-78dfea99a4a0',
        url: 'economics-and-business',
        description:
          'Field of applied economics that studies the financial, organizational, market-related, and environmental issues faced by corporations. Business economics encompasses subjects such as the concept of scarcity, product factors, distribution, and consumption.',
      },
      {
        label: 'Educational sciences',
        value: 'EDUCATIONAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FEDUCATIONAL_SCIENCES-min.jpg?alt=media&token=77e2212c-3691-46bd-a712-82d7f7fa21c5',
        url: 'educational-sciences',
        description:
          'It seek to describe, understand, and prescribe education policy and practice. Education sciences include many topics, such as pedagogy, andragogy, curriculum, learning, and education policy, organization and leadership.',
      },
      {
        label: 'Sociology',
        value: 'SOCIOLOGY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FSOCIOLOGY-min.jpg?alt=media&token=e31a2c45-aba4-4ab7-946b-a6602f1423a3',
        url: 'sociology',
        description:
          'Sociology is the study of human social relationships and institutions. Sociology’s subject matter is diverse, ranging from crime to religion, from the family to the state, from the divisions of race and social class to the shared beliefs of a common culture, and from social stability to radical change in whole societies.',
      },
      {
        label: 'Law',
        value: 'LAW',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FLAW-min.jpg?alt=media&token=f8d4a467-f1d5-4511-8acf-7d9383712517',
        url: 'law',
        description:
          'The law is legislation created and enforced through social or governmental institutions to regulate behavior,with its precise definition a matter of longstanding debate.',
      },
      {
        label: 'Political science',
        value: 'POLITICAL_SCIENCE',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FPOLITICAL_SCIENCE-min.jpg?alt=media&token=6c71d5e8-b6f0-48e7-a1a9-8b235b0facd9',
        url: 'political-science',
        description:
          'It focuses on the theory and practice of government and politics at the local, state, national, and international levels. We are dedicated to developing understandings of institutions, practices, and relations that constitute public life and modes of inquiry that promote citizenship.',
      },
      {
        label: 'Social and economic geography',
        value: 'SOCIAL_AND_ECONOMIC_GEOGRAPHY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FSOCIAL_AND_ECONOMIC_GEOGRAPHY.jpg?alt=media&token=7620c946-9d06-46df-8372-4fb43e543320',
        url: 'social-and-economic-geography',
        description:
          "It's at once the way the economic activities of companies and people are organized geographically and an academic field that seeks to understand and explain the location and geographic organization of economic activity.",
      },
      {
        label: 'Media and communications',
        value: 'MEDIA_AND_COMMUNICATIONS',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FMEDIA_AND_COMMUNICATIONS-min.jpg?alt=media&token=e1b11cc8-b419-436e-8f03-1cf2e494b525',
        url: 'media-and-communications',
        description:
          'Cover the history and effects on society of various forms of media as well as the way that they can be used to communicate different messages.',
      },
      {
        label: 'Other social sciences',
        value: 'OTHER_SOCIAL_SCIENCES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FOTHER_SOCIAL_SCIENCES.jpg?alt=media&token=dab27900-9172-4c8f-b579-5a77c987ad80',
        url: 'other-social-sciences',
        description: 'Includes all others fields from social sciences.',
      },
    ],
  },
  {
    title: 'Humanities',
    areas: [
      {
        label: 'History and archaeology',
        value: 'HISTORY_AND_ARCHAEOLOGY',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FHISTORY_AND_ARCHAEOLOGY-min.jpg?alt=media&token=848073c1-2677-4386-9256-7e41010f0792',
        url: 'history-and-archaeology',
        description:
          'Field studing human activity through the recovery and analysis of material culture.',
      },
      {
        label: 'Languages and literature',
        value: 'LANGUAGES_AND_LITERATURE',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FLANGUAGES_AND_LITERATURE-min.jpg?alt=media&token=c862e5d1-7dce-448b-b478-12cc23c0d1a2',
        url: 'languages-and-literature',
        description:
          'It introduces the critical study and interpretation of written and spoken texts from a wide range of literary forms and non literary text-types',
      },
      {
        label: 'Philosophy, ethics and religion',
        value: 'PHISOLOPHY_AND_ETHICS_AND_RELIGION',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FPHISOLOPHY_AND_ETHICS_AND_RELIGION-min.jpg?alt=media&token=1685199b-2d8c-46b2-9635-73388d2db5c4',
        url: 'philosophy-ethics-and-religion',
        description:
          'Examines the fundamental life questions that have interested human beings for centuries. ',
      },
      {
        label: 'Arts (arts, history of arts, performing arts, music)',
        value: 'ARTS_AND_HISTORY_OF_ARTS_AND_PERFORMING_ARTS_AND_MUSIC',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FARTS_AND_HISTORY_OF_ARTS_AND_PERFORMING_ARTS_AND_MUSIC-min.jpg?alt=media&token=1ae9969d-c664-423d-b818-a4b305494fc4',
        url: 'arts',
        description:
          'Very wide range of human practices of creative expression, storytelling and cultural participation. They encompass multiple diverse and plural modes of thinking, doing and being, in an extremely broad range of media.',
      },
      {
        label: 'Other humanities',
        value: 'OTHER_HUMANITIES',
        coverUrl:
          'https://firebasestorage.googleapis.com/v0/b/scientifichub-a905b.appspot.com/o/publication_fields%2FOTHER_HUMANITIES-min.jpg?alt=media&token=ed3ea577-43fe-4ffd-bc13-e8976e432ddc',
        url: 'other-humanities',
        description: 'Includes all others fields from humanities sciences.',
      },
    ],
  },
]
