import type { Framework } from "../schema.js";

export const caf40: Framework = {
  "version": "4.0",
  "title": "Cyber Assessment Framework",
  "publisher": "National Cyber Security Centre (NCSC)",
  "retrievedAt": "2026-09-12T00:00:00.000Z",
  "publishedAt": "2025-08-04",
  "homeUrl": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework",
  "pdfUrl": "https://www.ncsc.gov.uk/sites/default/files/documents/NCSC-Cyber-Assessment-Framework-4.0.pdf",
  "changelogUrl": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/changelog",
  "objectives": [
    {
      "id": "A",
      "title": "Managing security risk",
      "description": "Appropriate organisational structures, policies, processes and procedures in place to understand, assess and systematically manage security risks to network and information systems supporting essential functions.",
      "principles": [
        {
          "id": "A1",
          "objectiveId": "A",
          "title": "Governance",
          "description": "The organisation has appropriate management policies, processes and procedures in place to govern its approach to the security of network and information systems.",
          "outcomes": [
            {
              "id": "A1.a",
              "principleId": "A1",
              "title": "Board Direction",
              "description": "You have effective organisational security management led at board level and articulated clearly in corresponding policies.",
              "indicators": [
                {
                  "id": "A1.a.NA.1",
                  "outcomeId": "A1.a",
                  "level": "not-achieved",
                  "text": "The security of network and information systems related to the operation of essential function(s) is not discussed or reported on regularly at board-level.",
                  "index": 1
                },
                {
                  "id": "A1.a.NA.2",
                  "outcomeId": "A1.a",
                  "level": "not-achieved",
                  "text": "Board-level discussions on the security of network and information systems are based on partial or out-of-date information, without the benefit of expert guidance.",
                  "index": 2
                },
                {
                  "id": "A1.a.NA.3",
                  "outcomeId": "A1.a",
                  "level": "not-achieved",
                  "text": "The security of network and information systems supporting your essential function(s) are not driven effectively by the direction set at board-level.",
                  "index": 3
                },
                {
                  "id": "A1.a.NA.4",
                  "outcomeId": "A1.a",
                  "level": "not-achieved",
                  "text": "Senior management or other pockets of the organisation consider themselves exempt from some policies or expect special accommodations to be made.",
                  "index": 4
                },
                {
                  "id": "A1.a.A.1",
                  "outcomeId": "A1.a",
                  "level": "achieved",
                  "text": "Your organisation's approach and policy relating to the security of network and information systems supporting the operation of your essential function(s) are owned and managed at board-level. These are communicated, in a meaningful way, to risk management decision-makers across the organisation.",
                  "index": 1
                },
                {
                  "id": "A1.a.A.2",
                  "outcomeId": "A1.a",
                  "level": "achieved",
                  "text": "Regular board-level discussions on the security of network and information systems supporting the operation of your essential function(s) take place, based on timely and accurate information and informed by expert guidance.",
                  "index": 2
                },
                {
                  "id": "A1.a.A.3",
                  "outcomeId": "A1.a",
                  "level": "achieved",
                  "text": "There is a board-level individual who has overall accountability for the security of network and information systems and drives regular discussion at board-level.",
                  "index": 3
                },
                {
                  "id": "A1.a.A.4",
                  "outcomeId": "A1.a",
                  "level": "achieved",
                  "text": "Direction set at board-level is translated into effective organisational practices that direct and control the security of network and information systems supporting your essential function(s).",
                  "index": 4
                },
                {
                  "id": "A1.a.A.5",
                  "outcomeId": "A1.a",
                  "level": "achieved",
                  "text": "The board has the information and understanding needed in order to effectively discuss how the security and resilience of network and information systems contributes to the delivery of essential function(s) and what the potential impact from compromise of those systems would be.",
                  "index": 5
                },
                {
                  "id": "A1.a.A.6",
                  "outcomeId": "A1.a",
                  "level": "achieved",
                  "text": "Security is recognised as an important enabler for the resilience of your essential function(s) and considered in all relevant discussions.",
                  "index": 6
                }
              ]
            },
            {
              "id": "A1.b",
              "principleId": "A1",
              "title": "Roles and Responsibilities",
              "description": "Your organisation has established roles and responsibilities for the security of network and information systems at all levels, with clear and well-understood channels for communicating and escalating risks.",
              "indicators": [
                {
                  "id": "A1.b.NA.1",
                  "outcomeId": "A1.b",
                  "level": "not-achieved",
                  "text": "Key roles are missing, left vacant, or fulfilled on an ad-hoc or informal basis.",
                  "index": 1
                },
                {
                  "id": "A1.b.NA.2",
                  "outcomeId": "A1.b",
                  "level": "not-achieved",
                  "text": "Staff are assigned security responsibilities but without adequate authority or resources to fulfil them.",
                  "index": 2
                },
                {
                  "id": "A1.b.NA.3",
                  "outcomeId": "A1.b",
                  "level": "not-achieved",
                  "text": "Staff are unsure what their responsibilities are for the security of the essential function(s).",
                  "index": 3
                },
                {
                  "id": "A1.b.A.1",
                  "outcomeId": "A1.b",
                  "level": "achieved",
                  "text": "Key roles and responsibilities for the security of network and information systems supporting your essential function(s) have been identified. These are reviewed regularly to ensure they remain fit for purpose.",
                  "index": 1
                },
                {
                  "id": "A1.b.A.2",
                  "outcomeId": "A1.b",
                  "level": "achieved",
                  "text": "Appropriately capable and knowledgeable staff fill those roles and are given the time, authority, and resources to carry out their duties.",
                  "index": 2
                },
                {
                  "id": "A1.b.A.3",
                  "outcomeId": "A1.b",
                  "level": "achieved",
                  "text": "There is clarity on who in your organisation has overall accountability for the security of network and information systems supporting your essential function(s).",
                  "index": 3
                }
              ]
            },
            {
              "id": "A1.c",
              "principleId": "A1",
              "title": "Decision-making",
              "description": "You have senior-level accountability for the security of network and information systems, and delegate decision-making authority appropriately and effectively. Risks to network and information systems related to the operation of your essential function(s) are considered in the context of other organisational risks.",
              "indicators": [
                {
                  "id": "A1.c.NA.1",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "What should be relatively straightforward risk decisions are constantly referred up the chain, or not made.",
                  "index": 1
                },
                {
                  "id": "A1.c.NA.2",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "Risks are resolved informally (or ignored) at a local level when the use of a more formal risk reporting mechanism would be more appropriate.",
                  "index": 2
                },
                {
                  "id": "A1.c.NA.3",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "Decision-makers are unsure of what senior management's risk appetite is, or only understand it in vague terms such as or .",
                  "index": 3
                },
                {
                  "id": "A1.c.NA.4",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "Decision-makers are unable to justify their risk management decisions.",
                  "index": 4
                },
                {
                  "id": "A1.c.NA.5",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "Organisational structure causes risk decisions to be made in isolation. (e.g. engineering and IT do not talk to each other about risk).",
                  "index": 5
                },
                {
                  "id": "A1.c.NA.6",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "Risk priorities are too vague to make meaningful distinctions between them. (e.g. almost all risks are rated 'medium' or 'amber').",
                  "index": 6
                },
                {
                  "id": "A1.c.A.1",
                  "outcomeId": "A1.c",
                  "level": "achieved",
                  "text": "Senior management have visibility of key risk decisions made throughout the organisation.",
                  "index": 1
                },
                {
                  "id": "A1.c.A.2",
                  "outcomeId": "A1.c",
                  "level": "achieved",
                  "text": "Risk management decision-makers understand their responsibilities for making effective and timely decisions in the context of the risk appetite regarding the essential function(s), as set by senior management.",
                  "index": 2
                },
                {
                  "id": "A1.c.A.3",
                  "outcomeId": "A1.c",
                  "level": "achieved",
                  "text": "Risk management decision-making is delegated and escalated where necessary, across the organisation, to people who have the skills, knowledge, tools and authority they need.",
                  "index": 3
                },
                {
                  "id": "A1.c.A.4",
                  "outcomeId": "A1.c",
                  "level": "achieved",
                  "text": "Risk management decisions are regularly reviewed to ensure their continued relevance and validity.",
                  "index": 4
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk/principle-a1-governance"
        },
        {
          "id": "A2",
          "objectiveId": "A",
          "title": "Risk Management",
          "description": "The organisation takes appropriate steps to identify, assess and understand security risks to network and information systems supporting the operation of essential functions. This includes an overall organisational approach to risk management.",
          "outcomes": [
            {
              "id": "A2.a",
              "principleId": "A2",
              "title": "Risk Management Process",
              "description": "Your organisation has effective internal processes for managing risks to the security and resilience of network and information systems related to the operation of your essential function(s) and communicating associated activities.",
              "indicators": [
                {
                  "id": "A2.a.NA.1",
                  "outcomeId": "A2.a",
                  "level": "not-achieved",
                  "text": "Risk assessments are not based on a clearly defined set of threat assumptions.",
                  "index": 1
                },
                {
                  "id": "A2.a.NA.2",
                  "outcomeId": "A2.a",
                  "level": "not-achieved",
                  "text": "Risk assessment outputs are too complex or unwieldy to be consumed by decision-makers and are not effectively communicated in a clear and timely manner.",
                  "index": 2
                },
                {
                  "id": "A2.a.NA.3",
                  "outcomeId": "A2.a",
                  "level": "not-achieved",
                  "text": "Risk assessments for network and information systems supporting your essential function(s) are a activity or not done at all.",
                  "index": 3
                },
                {
                  "id": "A2.a.NA.4",
                  "outcomeId": "A2.a",
                  "level": "not-achieved",
                  "text": "The security elements of projects or programmes are solely dependent on the completion of a risk management assessment without any regard to the outcomes.",
                  "index": 4
                },
                {
                  "id": "A2.a.NA.5",
                  "outcomeId": "A2.a",
                  "level": "not-achieved",
                  "text": "There is no systematic process in place to ensure that identified security risks are managed effectively.",
                  "index": 5
                },
                {
                  "id": "A2.a.NA.6",
                  "outcomeId": "A2.a",
                  "level": "not-achieved",
                  "text": "Systems are assessed in isolation, without consideration of dependencies and interactions with other systems. (e.g. interactions between IT and OT environments).",
                  "index": 6
                },
                {
                  "id": "A2.a.NA.7",
                  "outcomeId": "A2.a",
                  "level": "not-achieved",
                  "text": "Security requirements and mitigations are arbitrary or are applied from a control catalogue without consideration of how they contribute to the security of network and information systems supporting your essential function(s).",
                  "index": 7
                },
                {
                  "id": "A2.a.NA.8",
                  "outcomeId": "A2.a",
                  "level": "not-achieved",
                  "text": "Risks remain unresolved on a register for prolonged periods of time awaiting senior decision-making or resource allocation to resolve.",
                  "index": 8
                },
                {
                  "id": "A2.a.PA.1",
                  "outcomeId": "A2.a",
                  "level": "partially-achieved",
                  "text": "Your organisational process ensures that security risks to network and information systems relevant to essential function(s) are identified, analysed, prioritised, and managed.",
                  "index": 1
                },
                {
                  "id": "A2.a.PA.2",
                  "outcomeId": "A2.a",
                  "level": "partially-achieved",
                  "text": "Your risk assessments are informed by an understanding of known and well understood threats and vulnerabilities in network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "A2.a.PA.3",
                  "outcomeId": "A2.a",
                  "level": "partially-achieved",
                  "text": "The output from your risk management process is a clear set of security requirements that will address the risks in line with your organisational approach to security.",
                  "index": 3
                },
                {
                  "id": "A2.a.PA.4",
                  "outcomeId": "A2.a",
                  "level": "partially-achieved",
                  "text": "Significant conclusions reached in the course of your risk management process are communicated to key security decision-makers and accountable individuals.",
                  "index": 4
                },
                {
                  "id": "A2.a.PA.5",
                  "outcomeId": "A2.a",
                  "level": "partially-achieved",
                  "text": "You conduct risk assessments when significant events potentially affect the essential function(s), such as replacing a system, introducing new or emergent technologies or a change in the cyber security threat.",
                  "index": 5
                },
                {
                  "id": "A2.a.A.1",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "Your organisational process ensures that security risks to network and information systems relevant to essential function(s) are identified, analysed, prioritised, and managed.",
                  "index": 1
                },
                {
                  "id": "A2.a.A.2",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "Your approach to risk is focused on the possibility of adverse impact to your essential function(s), leading to a detailed understanding of how such impact might arise as a consequence of possible threat actor actions and the security properties of network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "A2.a.A.3",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "Your risk assessments are based on a clearly understood set of threat assumptions, informed by an up-to-date understanding of threats to network and information systems supporting your essential function(s), your sector and wider national infrastructure.",
                  "index": 3
                },
                {
                  "id": "A2.a.A.4",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "Your risk assessments are informed by an understanding of the vulnerabilities in network and information systems supporting your essential function(s).",
                  "index": 4
                },
                {
                  "id": "A2.a.A.5",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "The output from your risk management process is a clear set of traceable and prioritised security requirements that will address the risks in line with your organisational approach to security.",
                  "index": 5
                },
                {
                  "id": "A2.a.A.6",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "Significant conclusions reached in the course of your risk management process are communicated to key security decision-makers and accountable individuals.",
                  "index": 6
                },
                {
                  "id": "A2.a.A.7",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "Your risk assessments are dynamic and readily updated in the light of relevant changes which may include technical changes to network and information systems supporting your essential function(s), change of use, the introduction of new or emergent technologies or new threat information.",
                  "index": 7
                },
                {
                  "id": "A2.a.A.8",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "The effectiveness of your risk management process is reviewed regularly, and improvements made as required.",
                  "index": 8
                },
                {
                  "id": "A2.a.A.9",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "You anticipate technological developments that could be used to adversely impact network and information systems supporting your essential function(s).",
                  "index": 9
                }
              ]
            },
            {
              "id": "A2.b",
              "principleId": "A2",
              "title": "Understanding Threat",
              "description": "You understand the capabilities, methods and techniques of threat actors and what network and information systems they may compromise to adversely impact your essential function(s). This information is used to inform security and resilience risk management decisions, adjusting, enhancing or adding security measures to better defend against threats.",
              "indicators": [
                {
                  "id": "A2.b.NA.1",
                  "outcomeId": "A2.b",
                  "level": "not-achieved",
                  "text": "You are unable to perform threat analysis.",
                  "index": 1
                },
                {
                  "id": "A2.b.NA.2",
                  "outcomeId": "A2.b",
                  "level": "not-achieved",
                  "text": "You do not understand the threats to network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "A2.b.NA.3",
                  "outcomeId": "A2.b",
                  "level": "not-achieved",
                  "text": "You do not have a clearly defined set of threat assumptions.",
                  "index": 3
                },
                {
                  "id": "A2.b.NA.4",
                  "outcomeId": "A2.b",
                  "level": "not-achieved",
                  "text": "You do not use your understanding of threat to inform your risk management decisions.",
                  "index": 4
                },
                {
                  "id": "A2.b.PA.1",
                  "outcomeId": "A2.b",
                  "level": "partially-achieved",
                  "text": "You perform threat analysis and understand how common threats apply to network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "A2.b.PA.2",
                  "outcomeId": "A2.b",
                  "level": "partially-achieved",
                  "text": "You understand common types of cyber attacks, including the methods and techniques, and how these might apply to network and information systems supporting your essential function(s). This understanding is kept up to date.",
                  "index": 2
                },
                {
                  "id": "A2.b.PA.3",
                  "outcomeId": "A2.b",
                  "level": "partially-achieved",
                  "text": "You anticipate what threat actors might target in network and information systems to cause an adverse impact to your essential function(s).",
                  "index": 3
                },
                {
                  "id": "A2.b.PA.4",
                  "outcomeId": "A2.b",
                  "level": "partially-achieved",
                  "text": "Your understanding of threat is informed by common incidents.",
                  "index": 4
                },
                {
                  "id": "A2.b.PA.5",
                  "outcomeId": "A2.b",
                  "level": "partially-achieved",
                  "text": "You apply your understanding of threat to inform your risk management decision-making.",
                  "index": 5
                },
                {
                  "id": "A2.b.A.1",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You perform detailed threat analysis and understand how this applies to network and information systems supporting your essential function(s), in the context of your sector and wider national infrastructure.",
                  "index": 1
                },
                {
                  "id": "A2.b.A.2",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "Your detailed understanding of threat includes the methods and techniques available to capable and well-resourced threat actors and how they could be used systematically against network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "A2.b.A.3",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You use appropriate techniques to develop an understanding of network and information systems supporting your essential function(s) from a threat actor's perspective. You anticipate probable attack methods and techniques, targets and objectives, and develop plausible scenarios.",
                  "index": 3
                },
                {
                  "id": "A2.b.A.4",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You understand the different steps a capable and well-resourced threat actor would need to take to reach the probable target(s).",
                  "index": 4
                },
                {
                  "id": "A2.b.A.5",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You identify and justify what measures can be used at each step to reduce the likelihood of the threat actor reaching the probable target(s) or achieving their objective(s).",
                  "index": 5
                },
                {
                  "id": "A2.b.A.6",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You maintain a detailed understanding of current threats (e.g. by threat intelligence and proactive research).",
                  "index": 6
                },
                {
                  "id": "A2.b.A.7",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You apply your detailed understanding of threat to inform your risk management decision-making.",
                  "index": 7
                },
                {
                  "id": "A2.b.A.8",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You have documented the steps required to undertake detailed threat analysis.",
                  "index": 8
                }
              ]
            },
            {
              "id": "A2.c",
              "principleId": "A2",
              "title": "Assurance",
              "description": "You have gained confidence in the effectiveness of the security of your technology, people, and processes relevant to the operation of network and information systems supporting your essential function(s).",
              "indicators": [
                {
                  "id": "A2.c.NA.1",
                  "outcomeId": "A2.c",
                  "level": "not-achieved",
                  "text": "A particular product or service is seen as a and vendor claims are taken at face value.",
                  "index": 1
                },
                {
                  "id": "A2.c.NA.2",
                  "outcomeId": "A2.c",
                  "level": "not-achieved",
                  "text": "Assurance methods are applied without appreciation of their strengths and limitations.",
                  "index": 2
                },
                {
                  "id": "A2.c.NA.3",
                  "outcomeId": "A2.c",
                  "level": "not-achieved",
                  "text": "Assurance is assumed because there have been no known problems to date.",
                  "index": 3
                },
                {
                  "id": "A2.c.A.1",
                  "outcomeId": "A2.c",
                  "level": "achieved",
                  "text": "You validate that the security measures in place to protect network and information systems supporting your essential function(s) are effective and remain effective for the lifetime over which they are needed.",
                  "index": 1
                },
                {
                  "id": "A2.c.A.2",
                  "outcomeId": "A2.c",
                  "level": "achieved",
                  "text": "You understand the assurance methods available to you and choose appropriate methods to gain confidence in the security of network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "A2.c.A.3",
                  "outcomeId": "A2.c",
                  "level": "achieved",
                  "text": "Your confidence in the security as it relates to your technology, people, and processes can be justified to, and verified by, a third party.",
                  "index": 3
                },
                {
                  "id": "A2.c.A.4",
                  "outcomeId": "A2.c",
                  "level": "achieved",
                  "text": "Security deficiencies uncovered by assurance activities are assessed, prioritised and remedied when necessary in a timely and effective way.",
                  "index": 4
                },
                {
                  "id": "A2.c.A.5",
                  "outcomeId": "A2.c",
                  "level": "achieved",
                  "text": "The methods used for assurance are reviewed to ensure they are working as intended and remain the most appropriate method to use.",
                  "index": 5
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk/principle-a2-risk-management"
        },
        {
          "id": "A3",
          "objectiveId": "A",
          "title": "Asset Management",
          "description": "Everything required to deliver, maintain or support network and information systems necessary for the operation of essential functions is determined and understood. This includes data, people and systems, as well as any supporting infrastructure (such as power or cooling).",
          "outcomes": [
            {
              "id": "A3.a",
              "principleId": "A3",
              "title": "Asset Management",
              "description": "",
              "indicators": [
                {
                  "id": "A3.a.NA.1",
                  "outcomeId": "A3.a",
                  "level": "not-achieved",
                  "text": "Inventories of assets relevant to network and information systems supporting your essential function(s) are incomplete, non-existent or inadequately detailed.",
                  "index": 1
                },
                {
                  "id": "A3.a.NA.2",
                  "outcomeId": "A3.a",
                  "level": "not-achieved",
                  "text": "Only certain domains or types of asset are documented and understood. Dependencies between assets are not understood (such as the dependencies between IT and OT).",
                  "index": 2
                },
                {
                  "id": "A3.a.NA.3",
                  "outcomeId": "A3.a",
                  "level": "not-achieved",
                  "text": "Information assets, which could include personally identifiable information and / or important / critical data, are stored for long periods of time with no clear business need or retention policy.",
                  "index": 3
                },
                {
                  "id": "A3.a.NA.4",
                  "outcomeId": "A3.a",
                  "level": "not-achieved",
                  "text": "Knowledge critical to the management, operation, or recovery of network and information systems supporting your essential function(s) is held by one or two key individuals with no succession plan.",
                  "index": 4
                },
                {
                  "id": "A3.a.NA.5",
                  "outcomeId": "A3.a",
                  "level": "not-achieved",
                  "text": "Asset inventories are neglected and out of date. Not Achieved At least one of the following statements is true",
                  "index": 5
                },
                {
                  "id": "A3.a.A.1",
                  "outcomeId": "A3.a",
                  "level": "achieved",
                  "text": "All assets relevant to the secure operation of network and information systems supporting your essential function(s) are identified and inventoried (at a suitable level of detail). The inventory is kept up-to-date.",
                  "index": 1
                },
                {
                  "id": "A3.a.A.2",
                  "outcomeId": "A3.a",
                  "level": "achieved",
                  "text": "Dependencies on supporting infrastructure (e.g. power, cooling etc) are recognised and recorded.",
                  "index": 2
                },
                {
                  "id": "A3.a.A.3",
                  "outcomeId": "A3.a",
                  "level": "achieved",
                  "text": "You have prioritised your assets according to their importance to the operation of network and information systems supporting your essential function(s).",
                  "index": 3
                },
                {
                  "id": "A3.a.A.4",
                  "outcomeId": "A3.a",
                  "level": "achieved",
                  "text": "You have assigned responsibility for managing all assets, including physical assets, relevant to the operation of network and information systems supporting your essential function(s).",
                  "index": 4
                },
                {
                  "id": "A3.a.A.5",
                  "outcomeId": "A3.a",
                  "level": "achieved",
                  "text": "Assets relevant to network and information systems supporting your essential function(s) are managed with cyber security in mind throughout their lifecycle, from creation through to eventual decommissioning or disposal.",
                  "index": 5
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk/principle-a3-asset-management"
        },
        {
          "id": "A4",
          "objectiveId": "A",
          "title": "Supply Chain",
          "description": "The organisation understands and manages security risks to network and information systems supporting the operation of essential functions that arise as a result of dependencies on suppliers. This includes ensuring that appropriate measures are employed where third party services are used.",
          "outcomes": [
            {
              "id": "A4.a",
              "principleId": "A4",
              "title": "Supply Chain",
              "description": "You understand and effectively manage the risks associated with suppliers to the security of network and information systems supporting the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "A4.a.NA.1",
                  "outcomeId": "A4.a",
                  "level": "not-achieved",
                  "text": "You do not know what data belonging to you is held by suppliers, or how it is managed.",
                  "index": 1
                },
                {
                  "id": "A4.a.NA.2",
                  "outcomeId": "A4.a",
                  "level": "not-achieved",
                  "text": "Elements of the supply chain for network and information systems supporting your essential function(s) are subcontracted and you have little or no visibility of the sub-contractors.",
                  "index": 2
                },
                {
                  "id": "A4.a.NA.3",
                  "outcomeId": "A4.a",
                  "level": "not-achieved",
                  "text": "You have no understanding of which contracts are relevant and / or relevant contracts do not specify appropriate security obligations.",
                  "index": 3
                },
                {
                  "id": "A4.a.NA.4",
                  "outcomeId": "A4.a",
                  "level": "not-achieved",
                  "text": "Suppliers have access to network and information systems that support your essential function(s) that is unrestricted, not monitored or bypasses your own security controls.",
                  "index": 4
                },
                {
                  "id": "A4.a.PA.1",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You understand the general risks suppliers may pose to network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "A4.a.PA.2",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You know the extent of your supply chain that supports network and information systems supporting your essential function(s), including sub-contractors.",
                  "index": 2
                },
                {
                  "id": "A4.a.PA.3",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "Suppliers to network and information systems that support your essential function(s) can demonstrate appropriate and proportionate levels of cyber security within the context of common threats.",
                  "index": 3
                },
                {
                  "id": "A4.a.PA.4",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You understand which contracts are relevant and you include appropriate security obligations, in relevant contracts.",
                  "index": 4
                },
                {
                  "id": "A4.a.PA.5",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You are aware of all third-party connections and have assurance that they meet your organisation's security requirements.",
                  "index": 5
                },
                {
                  "id": "A4.a.PA.6",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "Your approach to security incident management considers incidents that might arise in your supply chain.",
                  "index": 6
                },
                {
                  "id": "A4.a.PA.7",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You have confidence that information held by suppliers that is necessary for the operation of network and information systems supporting your essential function(s) is appropriately protected from common threats.",
                  "index": 7
                },
                {
                  "id": "A4.a.A.1",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "You have a deep understanding of your supply chain, including sub-contractors, and the wider risks it faces.",
                  "index": 1
                },
                {
                  "id": "A4.a.A.2",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "You consider factors such as your supplier's ownership, nationality, partnerships, competitors, other organisations with which they sub-contract and their approach to cyber security. These factors inform your risk assessment and are fully considered in your procurement lifecycle processes and purchasing decisions.",
                  "index": 2
                },
                {
                  "id": "A4.a.A.3",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "Your approach to supply chain risk management considers the risks to network and information systems supporting your essential function(s) arising from supply chain subversion by capable and well-resourced threat actors.",
                  "index": 3
                },
                {
                  "id": "A4.a.A.4",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "Critical suppliers to network and information systems supporting your essential functions(s) can demonstrate appropriate and proportionate levels of cyber security within the context of capable and well-resourced threat actors.",
                  "index": 4
                },
                {
                  "id": "A4.a.A.5",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "You have confidence that information held by suppliers that is essential to the operation of network and information systems supporting your essential function(s) is appropriately protected from capable and well-resourced threat actors.",
                  "index": 5
                },
                {
                  "id": "A4.a.A.6",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "You understand which contracts are relevant and you include appropriate security obligations, in relevant contracts.",
                  "index": 6
                },
                {
                  "id": "A4.a.A.7",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "You have a proactive approach to contract management which may include a contract management plan for relevant contracts.",
                  "index": 7
                },
                {
                  "id": "A4.a.A.8",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "Customer / supplier ownership of responsibilities is defined in contracts.",
                  "index": 8
                },
                {
                  "id": "A4.a.A.9",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "All network connections and data sharing with third parties are managed effectively and proportionately.",
                  "index": 9
                },
                {
                  "id": "A4.a.A.10",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "When appropriate, your incident management process and that of your suppliers provide mutual support in the resolution of incidents.",
                  "index": 10
                }
              ]
            },
            {
              "id": "A4.b",
              "principleId": "A4",
              "title": "Secure Software Development and Support",
              "description": "You actively maximise the use of secure and supported software, whether developed internally or sourced externally, within network and information systems supporting the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "A4.b.NA.1",
                  "outcomeId": "A4.b",
                  "level": "not-achieved",
                  "text": "Your software supplier(s) is unaware of the composition and provenance of software provided to you.",
                  "index": 1
                },
                {
                  "id": "A4.b.NA.2",
                  "outcomeId": "A4.b",
                  "level": "not-achieved",
                  "text": "Software, including updates and patches, undergoes little to no testing.",
                  "index": 2
                },
                {
                  "id": "A4.b.NA.3",
                  "outcomeId": "A4.b",
                  "level": "not-achieved",
                  "text": "Updates and patches often introduce new problems or fail to address existing issues.",
                  "index": 3
                },
                {
                  "id": "A4.b.NA.4",
                  "outcomeId": "A4.b",
                  "level": "not-achieved",
                  "text": "Vulnerabilities are discovered in software despite the negligible difficulty of implementing mitigations.",
                  "index": 4
                },
                {
                  "id": "A4.b.PA.1",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "Your software supplier leverages secure development principles and practices.",
                  "index": 1
                },
                {
                  "id": "A4.b.PA.2",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "Your software supplier(s) can demonstrate a limited understanding of the composition and provenance of software provided to you.",
                  "index": 2
                },
                {
                  "id": "A4.b.PA.3",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "You consider the security of environments (e.g. development, test and production), including source code and repositories, used in the production of software to",
                  "index": 3
                },
                {
                  "id": "A4.b.PA.4",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "be appropriate and proportionate within the context of common threats.",
                  "index": 4
                },
                {
                  "id": "A4.b.PA.5",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "The testing regime uses a range of different approaches (e.g. static and dynamic analysis, unit and integration testing and point in time assessments) that verify all aspects of the development lifecycle covering both functional and non-functional testing.",
                  "index": 5
                },
                {
                  "id": "A4.b.PA.6",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "You have arrangements in place with your software supplier to receive timely security updates, patches and notifications.",
                  "index": 6
                },
                {
                  "id": "A4.b.PA.7",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "Software, including updates and patches, is obtained from your supplier(s) via secure channels.",
                  "index": 7
                },
                {
                  "id": "A4.b.PA.8",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "Your software supplier(s) has processes in place to identify, report and mitigate security vulnerabilities.",
                  "index": 8
                },
                {
                  "id": "A4.b.PA.9",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "You have arrangements in place with your software supplier to be notified of any significant events that may adversely impact network and information systems supporting your essential function(s).",
                  "index": 9
                },
                {
                  "id": "A4.b.PA.10",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "If open-source software is used, you have taken appropriate and proportionate steps to establish and maintain sufficient confidence in its security for its use.",
                  "index": 10
                },
                {
                  "id": "A4.b.PA.11",
                  "outcomeId": "A4.b",
                  "level": "partially-achieved",
                  "text": "You have appropriate support and maintenance arrangements in place.",
                  "index": 11
                },
                {
                  "id": "A4.b.A.1",
                  "outcomeId": "A4.b",
                  "level": "achieved",
                  "text": "software, and those components are being monitored for new vulnerabilities throughout the lifespan of the product.",
                  "index": 1
                },
                {
                  "id": "A4.b.A.2",
                  "outcomeId": "A4.b",
                  "level": "achieved",
                  "text": "You consider the security of environments (e.g. development, test, and production), including source code and repositories, used in the production of software to be appropriate and proportionate within the context of capable and well-resourced threat actors .",
                  "index": 2
                },
                {
                  "id": "A4.b.A.3",
                  "outcomeId": "A4.b",
                  "level": "achieved",
                  "text": "The software development lifecycle is informed by a detailed and up to date understanding of threat and applies appropriate techniques, such as threat modelling, to identify and assess potential vulnerabilities and attack vectors .",
                  "index": 3
                },
                {
                  "id": "A4.b.A.4",
                  "outcomeId": "A4.b",
                  "level": "achieved",
                  "text": "You can attest to the authenticity and integrity of software, including updates and patches.",
                  "index": 4
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk/principle-a4-supply-chain"
        }
      ],
      "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-a-managing-security-risk"
    },
    {
      "id": "B",
      "title": "Protecting against cyber attack",
      "description": "Proportionate security measures are in place to protect the networks and information systems supporting essential functions from cyber attack.",
      "principles": [
        {
          "id": "B1",
          "objectiveId": "B",
          "title": "Service Protection Policies, Processes and Procedures",
          "description": "The organisation defines, implements, communicates and enforces appropriate policies, processes and procedures that direct its overall approach to securing systems and data that support operation of essential functions.",
          "outcomes": [
            {
              "id": "B1.a",
              "principleId": "B1",
              "title": "Policy, Process and Procedure Development",
              "description": "You have developed and continue to improve a set of cyber security and resilience policies, processes and procedures that manage and mitigate the risk of adverse impact to network and information systems supporting your essential function(s).",
              "indicators": [
                {
                  "id": "B1.a.NA.1",
                  "outcomeId": "B1.a",
                  "level": "not-achieved",
                  "text": "Your policies, processes and procedures are absent or incomplete.",
                  "index": 1
                },
                {
                  "id": "B1.a.NA.2",
                  "outcomeId": "B1.a",
                  "level": "not-achieved",
                  "text": "Policies, processes and procedures are not applied universally or consistently.",
                  "index": 2
                },
                {
                  "id": "B1.a.NA.3",
                  "outcomeId": "B1.a",
                  "level": "not-achieved",
                  "text": "People often or routinely circumvent policies, processes and procedures to achieve business objectives.",
                  "index": 3
                },
                {
                  "id": "B1.a.NA.4",
                  "outcomeId": "B1.a",
                  "level": "not-achieved",
                  "text": "Your organisation's security governance and risk management approach has no bearing on your policies, processes and procedures.",
                  "index": 4
                },
                {
                  "id": "B1.a.PA.1",
                  "outcomeId": "B1.a",
                  "level": "partially-achieved",
                  "text": "Your policies, processes and procedures document your overarching security governance and risk management approach, technical security practice and specific regulatory compliance.",
                  "index": 1
                },
                {
                  "id": "B1.a.PA.2",
                  "outcomeId": "B1.a",
                  "level": "partially-achieved",
                  "text": "You review and update policies, processes and procedures in response to major cyber security incidents.",
                  "index": 2
                },
                {
                  "id": "B1.a.PA.3",
                  "outcomeId": "B1.a",
                  "level": "partially-achieved",
                  "text": "System security is totally reliant on users' careful and consistent application of manual security processes.",
                  "index": 3
                },
                {
                  "id": "B1.a.PA.4",
                  "outcomeId": "B1.a",
                  "level": "partially-achieved",
                  "text": "Policies, processes and procedures have not been reviewed in response to major changes (e.g. technology or regulatory framework), or within a suitable period.",
                  "index": 4
                },
                {
                  "id": "B1.a.PA.5",
                  "outcomeId": "B1.a",
                  "level": "partially-achieved",
                  "text": "Policies, processes and procedures are not readily available to staff, too detailed to remember, or too hard to understand.",
                  "index": 5
                },
                {
                  "id": "B1.a.A.1",
                  "outcomeId": "B1.a",
                  "level": "achieved",
                  "text": "You fully document your overarching security governance and risk management approach, technical security practice and specific regulatory compliance.",
                  "index": 1
                },
                {
                  "id": "B1.a.A.2",
                  "outcomeId": "B1.a",
                  "level": "achieved",
                  "text": "Cyber security is integrated and embedded throughout policies, processes and procedures and key performance indicators are reported to your executive management.",
                  "index": 2
                },
                {
                  "id": "B1.a.A.3",
                  "outcomeId": "B1.a",
                  "level": "achieved",
                  "text": "Your organisation's policies, processes and procedures are developed to be practical, usable and appropriate to mitigate the risk of adverse impact to network and information systems supporting your essential function(s).",
                  "index": 3
                },
                {
                  "id": "B1.a.A.4",
                  "outcomeId": "B1.a",
                  "level": "achieved",
                  "text": "Policies, processes and procedures that rely on user behaviour are practical, appropriate and achievable.",
                  "index": 4
                },
                {
                  "id": "B1.a.A.5",
                  "outcomeId": "B1.a",
                  "level": "achieved",
                  "text": "You review and update policies, processes and procedures at suitably regular intervals to ensure they remain relevant. This is in addition to reviews following a major cyber security incident.",
                  "index": 5
                },
                {
                  "id": "B1.a.A.6",
                  "outcomeId": "B1.a",
                  "level": "achieved",
                  "text": "Any changes to the essential function(s) or the threat it faces triggers a review of policies, processes and procedures.",
                  "index": 6
                },
                {
                  "id": "B1.a.A.7",
                  "outcomeId": "B1.a",
                  "level": "achieved",
                  "text": "Your systems are designed so that they remain secure even when user security policies, processes and procedures are not always followed.",
                  "index": 7
                }
              ]
            },
            {
              "id": "B1.b",
              "principleId": "B1",
              "title": "Policy, Process and Procedure Implementation",
              "description": "You have successfully implemented your security policies, processes and procedures and can demonstrate the security benefits achieved.",
              "indicators": [
                {
                  "id": "B1.b.NA.1",
                  "outcomeId": "B1.b",
                  "level": "not-achieved",
                  "text": "Policies, processes and procedures are ignored or only partially followed.",
                  "index": 1
                },
                {
                  "id": "B1.b.NA.2",
                  "outcomeId": "B1.b",
                  "level": "not-achieved",
                  "text": "How your policies, processes and procedures support the resilience of your essential function(s) is not well understood.",
                  "index": 2
                },
                {
                  "id": "B1.b.NA.3",
                  "outcomeId": "B1.b",
                  "level": "not-achieved",
                  "text": "Staff are unaware of their responsibilities under your policies, processes and procedures.",
                  "index": 3
                },
                {
                  "id": "B1.b.NA.4",
                  "outcomeId": "B1.b",
                  "level": "not-achieved",
                  "text": "You do not attempt to detect breaches of policies, processes and procedures.",
                  "index": 4
                },
                {
                  "id": "B1.b.NA.5",
                  "outcomeId": "B1.b",
                  "level": "not-achieved",
                  "text": "Policies, processes and procedures lack integration with other organisational policies, processes and procedures.",
                  "index": 5
                },
                {
                  "id": "B1.b.NA.6",
                  "outcomeId": "B1.b",
                  "level": "not-achieved",
                  "text": "Your policies, processes and procedures are not well communicated across your organisation.",
                  "index": 6
                },
                {
                  "id": "B1.b.PA.1",
                  "outcomeId": "B1.b",
                  "level": "partially-achieved",
                  "text": "Most of your policies, processes and procedures are followed and their application is monitored.",
                  "index": 1
                },
                {
                  "id": "B1.b.PA.2",
                  "outcomeId": "B1.b",
                  "level": "partially-achieved",
                  "text": "Your policies, processes and procedures are integrated with other organisational policies, processes and procedures, including HR assessments of individuals' trustworthiness.",
                  "index": 2
                },
                {
                  "id": "B1.b.PA.3",
                  "outcomeId": "B1.b",
                  "level": "partially-achieved",
                  "text": "All staff are aware of their responsibilities under your policies, processes and procedures.",
                  "index": 3
                },
                {
                  "id": "B1.b.PA.4",
                  "outcomeId": "B1.b",
                  "level": "partially-achieved",
                  "text": "All breaches of policies, processes and procedures with the potential to adversely impact the essential function(s) are fully investigated. Other breaches are tracked, assessed for trends and action is taken to understand and address.",
                  "index": 4
                },
                {
                  "id": "B1.b.A.1",
                  "outcomeId": "B1.b",
                  "level": "achieved",
                  "text": "All your policies, processes and procedures are followed, their correct application and security effectiveness is evaluated.",
                  "index": 1
                },
                {
                  "id": "B1.b.A.2",
                  "outcomeId": "B1.b",
                  "level": "achieved",
                  "text": "Your policies, processes and procedures are integrated with other organisational policies, processes and procedures, including HR assessments of individuals' trustworthiness.",
                  "index": 2
                },
                {
                  "id": "B1.b.A.3",
                  "outcomeId": "B1.b",
                  "level": "achieved",
                  "text": "Your policies, processes and procedures are effectively and appropriately communicated across all levels of the organisation resulting in good staff awareness of their responsibilities.",
                  "index": 3
                },
                {
                  "id": "B1.b.A.4",
                  "outcomeId": "B1.b",
                  "level": "achieved",
                  "text": "Appropriate action is taken to address all breaches of policies, processes and procedures with potential to adversely impact the essential function(s) including aggregated breaches.",
                  "index": 4
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b1-service-protection-policies-processes-and-procedures"
        },
        {
          "id": "B2",
          "objectiveId": "B",
          "title": "Identity and Access Control",
          "description": "The organisation understands, documents and manages access to network and information systems supporting the operation of essential functions. Users (or automated functions) that can access data or systems are appropriately verified, authenticated and authorised.",
          "outcomes": [
            {
              "id": "B2.a",
              "principleId": "B2",
              "title": "Identity Verification, Authentication and Authorisation",
              "description": "You robustly verify, authenticate and authorise access to network and information systems supporting your essential function(s).",
              "indicators": [
                {
                  "id": "B2.a.NA.1",
                  "outcomeId": "B2.a",
                  "level": "not-achieved",
                  "text": "Initial identity verification is not robust enough to provide an acceptable level of confidence of a user's identity profile.",
                  "index": 1
                },
                {
                  "id": "B2.a.NA.2",
                  "outcomeId": "B2.a",
                  "level": "not-achieved",
                  "text": "Authorised users and systems with access to networks or information systems on which your essential function(s) depends cannot be individually identified.",
                  "index": 2
                },
                {
                  "id": "B2.a.NA.3",
                  "outcomeId": "B2.a",
                  "level": "not-achieved",
                  "text": "Unauthorised individuals or devices can access your network or information systems on which your essential function(s) depends.",
                  "index": 3
                },
                {
                  "id": "B2.a.NA.4",
                  "outcomeId": "B2.a",
                  "level": "not-achieved",
                  "text": "The number of authorised users and systems that have access to network and information systems is not limited to the minimum necessary to support your essential function(s).",
                  "index": 4
                },
                {
                  "id": "B2.a.NA.5",
                  "outcomeId": "B2.a",
                  "level": "not-achieved",
                  "text": "Your approach to authenticating users, devices and systems does not follow up to date best practice.",
                  "index": 5
                },
                {
                  "id": "B2.a.PA.1",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "necessary to support your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B2.a.PA.2",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "You use additional strong authentication mechanisms, such as multi-factor authentication (MFA), for privileged access to all network and information systems that operate or support your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B2.a.PA.3",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "You individually authenticate and authorise all remote access to all network and information systems that support your essential function(s).",
                  "index": 3
                },
                {
                  "id": "B2.a.PA.4",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "The list of users and systems with access to network and information systems supporting and delivering the essential function(s) is reviewed on a regular basis, at least annually.",
                  "index": 4
                },
                {
                  "id": "B2.a.PA.5",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "Your approach to authenticating users, devices and systems follows up to date best practice.",
                  "index": 5
                },
                {
                  "id": "B2.a.A.1",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "Your process of initial identity verification is robust enough to provide a high level of confidence of a user's identity profile before allowing an authorised user access to network and information systems that support your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B2.a.A.2",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "Only authorised and individually authenticated users can physically access and logically connect to your network or information systems on which your essential function(s) depends.",
                  "index": 2
                },
                {
                  "id": "B2.a.A.3",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "The number of authorised users and systems that have access to network and information systems is limited to the minimum",
                  "index": 3
                },
                {
                  "id": "B2.a.A.4",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "necessary to support your essential function(s).",
                  "index": 4
                },
                {
                  "id": "B2.a.A.5",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "You use additional strong authentication mechanisms, such as multi-factor authentication (MFA), for all user access, including remote access, to all network and information systems that operate or support your essential function(s).",
                  "index": 5
                },
                {
                  "id": "B2.a.A.6",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "The list of users and systems with access to network and information systems supporting and delivering the essential function(s) is reviewed on a regular basis, at least every six months.",
                  "index": 6
                },
                {
                  "id": "B2.a.A.7",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "Your approach to authenticating users, devices and systems follows up to date best practice.",
                  "index": 7
                }
              ]
            },
            {
              "id": "B2.b",
              "principleId": "B2",
              "title": "Device Management",
              "description": "You fully know and have trust in the devices that are used to access your networks, information systems and data that support your essential function(s).",
              "indicators": [
                {
                  "id": "B2.b.NA.1",
                  "outcomeId": "B2.b",
                  "level": "not-achieved",
                  "text": "Users can connect to network and information systems supporting your essential function(s) using devices that are not corporately owned and managed.",
                  "index": 1
                },
                {
                  "id": "B2.b.NA.2",
                  "outcomeId": "B2.b",
                  "level": "not-achieved",
                  "text": "Privileged users can perform privileged operations from devices that are not corporately owned and managed.",
                  "index": 2
                },
                {
                  "id": "B2.b.NA.3",
                  "outcomeId": "B2.b",
                  "level": "not-achieved",
                  "text": "You have not gained assurance in the security of any third-party devices or networks connected to your systems.",
                  "index": 3
                },
                {
                  "id": "B2.b.NA.4",
                  "outcomeId": "B2.b",
                  "level": "not-achieved",
                  "text": "Physically connecting a device to network and information systems gives that device access without device or user authentication.",
                  "index": 4
                },
                {
                  "id": "B2.b.PA.1",
                  "outcomeId": "B2.b",
                  "level": "partially-achieved",
                  "text": "Only corporately owned and managed devices can access your essential function(s) network and information systems.",
                  "index": 1
                },
                {
                  "id": "B2.b.PA.2",
                  "outcomeId": "B2.b",
                  "level": "partially-achieved",
                  "text": "All privileged operations are performed from corporately owned and managed devices. These devices provide sufficient separation, using a risk-based approach, from the activities of standard users.",
                  "index": 2
                },
                {
                  "id": "B2.b.PA.3",
                  "outcomeId": "B2.b",
                  "level": "partially-achieved",
                  "text": "You have sought to understand the security properties of third-party devices and networks before they can be connected to your systems. You have taken appropriate steps to mitigate any risks identified.",
                  "index": 3
                },
                {
                  "id": "B2.b.PA.4",
                  "outcomeId": "B2.b",
                  "level": "partially-achieved",
                  "text": "The act of connecting to a network port or cable does not grant access to any systems.",
                  "index": 4
                },
                {
                  "id": "B2.b.PA.5",
                  "outcomeId": "B2.b",
                  "level": "partially-achieved",
                  "text": "You are able to detect unknown devices being connected to network and information systems and investigate such incidents.",
                  "index": 5
                },
                {
                  "id": "B2.b.A.1",
                  "outcomeId": "B2.b",
                  "level": "achieved",
                  "text": "All privileged operations performed on network and information systems supporting your essential function(s) are conducted from highly trusted devices, such as Privileged Access Workstations, dedicated solely to those operations.",
                  "index": 1
                },
                {
                  "id": "B2.b.A.2",
                  "outcomeId": "B2.b",
                  "level": "achieved",
                  "text": "You either obtain independent and professional assurance of the security of third-party devices or networks before they connect to network and information systems, or you only allow third-party devices or networks that are dedicated to supporting network and information systems to connect.",
                  "index": 2
                },
                {
                  "id": "B2.b.A.3",
                  "outcomeId": "B2.b",
                  "level": "achieved",
                  "text": "You perform certificate-based device identity management and only allow known devices to access systems necessary for the operation of your essential function(s).",
                  "index": 3
                },
                {
                  "id": "B2.b.A.4",
                  "outcomeId": "B2.b",
                  "level": "achieved",
                  "text": "You perform regular scans to detect unknown devices and investigate any findings. Achieved",
                  "index": 4
                }
              ]
            },
            {
              "id": "B2.c",
              "principleId": "B2",
              "title": "Privileged User Management",
              "description": "You closely manage privileged user access to network and information systems supporting your essential function(s).",
              "indicators": [
                {
                  "id": "B2.c.NA.1",
                  "outcomeId": "B2.c",
                  "level": "not-achieved",
                  "text": "The identities of the individuals with privileged access to network and information systems (infrastructure, platforms, software, configuration etc) supporting your essential function(s) are not known or not managed.",
                  "index": 1
                },
                {
                  "id": "B2.c.NA.2",
                  "outcomeId": "B2.c",
                  "level": "not-achieved",
                  "text": "Privileged user access to network and information systems supporting your essential function(s) is via weak authentication mechanisms (e.g. only simple passwords).",
                  "index": 2
                },
                {
                  "id": "B2.c.NA.3",
                  "outcomeId": "B2.c",
                  "level": "not-achieved",
                  "text": "The list of privileged users has not been reviewed recently (e.g. within the last 12 months).",
                  "index": 3
                },
                {
                  "id": "B2.c.NA.4",
                  "outcomeId": "B2.c",
                  "level": "not-achieved",
                  "text": "Privileged user access is granted on a system-wide basis rather than by role or function(s).",
                  "index": 4
                },
                {
                  "id": "B2.c.NA.5",
                  "outcomeId": "B2.c",
                  "level": "not-achieved",
                  "text": "Privileged user access to network and information systems supporting your essential function(s) is via generic, shared or default name accounts.",
                  "index": 5
                },
                {
                  "id": "B2.c.PA.1",
                  "outcomeId": "B2.c",
                  "level": "partially-achieved",
                  "text": "All privileged user access to network and information systems supporting your essential function(s) requires strong authentication, such as multi-factor authentication (MFA).",
                  "index": 1
                },
                {
                  "id": "B2.c.PA.2",
                  "outcomeId": "B2.c",
                  "level": "partially-achieved",
                  "text": "The identities of the individuals with privileged access to network and information systems (infrastructure, platforms, software, configuration etc) supporting your essential function(s) are known and managed. This includes third parties.",
                  "index": 2
                },
                {
                  "id": "B2.c.PA.3",
                  "outcomeId": "B2.c",
                  "level": "partially-achieved",
                  "text": "Activity by privileged users is routinely reviewed and validated (e.g. at least annually).",
                  "index": 3
                },
                {
                  "id": "B2.c.PA.4",
                  "outcomeId": "B2.c",
                  "level": "partially-achieved",
                  "text": "Privileged users are only granted specific privileged user access rights which are essential to their business role or function.",
                  "index": 4
                },
                {
                  "id": "B2.c.A.1",
                  "outcomeId": "B2.c",
                  "level": "achieved",
                  "text": "Privileged user access to network and information systems supporting your essential function(s) is carried out from dedicated separate accounts that are closely monitored and managed.",
                  "index": 1
                },
                {
                  "id": "B2.c.A.2",
                  "outcomeId": "B2.c",
                  "level": "achieved",
                  "text": "The issuing of temporary, time-bound rights for privileged user access and / or external third-party support access is in place.",
                  "index": 2
                },
                {
                  "id": "B2.c.A.3",
                  "outcomeId": "B2.c",
                  "level": "achieved",
                  "text": "Privileged user access rights are regularly reviewed and always updated as part of your joiners, movers and leavers process.",
                  "index": 3
                },
                {
                  "id": "B2.c.A.4",
                  "outcomeId": "B2.c",
                  "level": "achieved",
                  "text": "All privileged user activity is routinely reviewed, validated and recorded for offline analysis and investigation.",
                  "index": 4
                }
              ]
            },
            {
              "id": "B2.d",
              "principleId": "B2",
              "title": "Identity and Access Management (IdAM)",
              "description": "You closely manage and maintain identity and access control for users, devices and systems accessing network and information systems supporting your essential function(s).",
              "indicators": [
                {
                  "id": "B2.d.NA.1",
                  "outcomeId": "B2.d",
                  "level": "not-achieved",
                  "text": "Greater access rights are granted than necessary.",
                  "index": 1
                },
                {
                  "id": "B2.d.NA.2",
                  "outcomeId": "B2.d",
                  "level": "not-achieved",
                  "text": "Identity validation and requirement for access of a user, device or systems is not carried out.",
                  "index": 2
                },
                {
                  "id": "B2.d.NA.3",
                  "outcomeId": "B2.d",
                  "level": "not-achieved",
                  "text": "User access rights are not reviewed when users change roles.",
                  "index": 3
                },
                {
                  "id": "B2.d.NA.4",
                  "outcomeId": "B2.d",
                  "level": "not-achieved",
                  "text": "User access rights remain active when users leave your organisation.",
                  "index": 4
                },
                {
                  "id": "B2.d.NA.5",
                  "outcomeId": "B2.d",
                  "level": "not-achieved",
                  "text": "Access rights granted to devices or systems to access other devices and systems are not reviewed on a regular basis (at least annually).",
                  "index": 5
                },
                {
                  "id": "B2.d.NA.6",
                  "outcomeId": "B2.d",
                  "level": "not-achieved",
                  "text": "Principle B3 Data Security Data stored or transmitted electronically is protected from actions such as unauthorised access, modification, or deletion that may cause an adverse impact on essential functions. Such protection extends to the means by which authorised users, devices and systems access critical data necessary for the operation of essential functions. It also covers information that would assist a threat actor, such as design details of network and information systems.",
                  "index": 6
                },
                {
                  "id": "B2.d.PA.1",
                  "outcomeId": "B2.d",
                  "level": "partially-achieved",
                  "text": "You follow a robust procedure to verify each user and issue the minimum required access rights.",
                  "index": 1
                },
                {
                  "id": "B2.d.PA.2",
                  "outcomeId": "B2.d",
                  "level": "partially-achieved",
                  "text": "You regularly review access rights and those no longer needed are revoked.",
                  "index": 2
                },
                {
                  "id": "B2.d.PA.3",
                  "outcomeId": "B2.d",
                  "level": "partially-achieved",
                  "text": "User access rights are reviewed when users change roles via your joiners, leavers and movers process.",
                  "index": 3
                },
                {
                  "id": "B2.d.PA.4",
                  "outcomeId": "B2.d",
                  "level": "partially-achieved",
                  "text": "All user, device and system access to the systems supporting the essential function(s) is logged and monitored, but it is not compared to other log data or access records.",
                  "index": 4
                },
                {
                  "id": "B2.d.A.1",
                  "outcomeId": "B2.d",
                  "level": "achieved",
                  "text": "You follow a robust procedure to verify each user and issue the minimum required access rights, and the application of the procedure is regularly audited.",
                  "index": 1
                },
                {
                  "id": "B2.d.A.2",
                  "outcomeId": "B2.d",
                  "level": "achieved",
                  "text": "User access rights are reviewed both when people change roles via your joiners, leavers and movers process and at regular intervals - at least annually.",
                  "index": 2
                },
                {
                  "id": "B2.d.A.3",
                  "outcomeId": "B2.d",
                  "level": "achieved",
                  "text": "All user, device and systems access to network and information systems supporting your essential function(s) is logged and monitored.",
                  "index": 3
                },
                {
                  "id": "B2.d.A.4",
                  "outcomeId": "B2.d",
                  "level": "achieved",
                  "text": "You regularly review access logs and correlate this data with other access records and expected activity.",
                  "index": 4
                },
                {
                  "id": "B2.d.A.5",
                  "outcomeId": "B2.d",
                  "level": "achieved",
                  "text": "Attempts by unauthorised users, devices or systems to connect to network and information systems supporting your essential function(s) are alerted, promptly assessed and investigated.",
                  "index": 5
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b2-identity-and-access-control"
        },
        {
          "id": "B3",
          "objectiveId": "B",
          "title": "Data Security",
          "description": "Data stored or transmitted electronically is protected from actions such as unauthorised access, modification, or deletion that may cause an adverse impact on essential functions. Such protection extends to the means by which authorised users, devices and systems access critical data necessary for the operation of essential functions. It also covers information that would assist a threat actor, such as design details of network and information systems.",
          "outcomes": [
            {
              "id": "B3.a",
              "principleId": "B3",
              "title": "Understanding Data",
              "description": "You have a good understanding of data important to the operation of network and information systems supporting your essential function(s), where it is stored, where it travels and how unavailability or unauthorised access, uncontrolled release, modification or deletion would adversely impact the essential function(s). This also applies to third parties storing or accessing data important to the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "B3.a.NA.1",
                  "outcomeId": "B3.a",
                  "level": "not-achieved",
                  "text": "You have incomplete knowledge of what data is used by and produced in the operation of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.a.NA.2",
                  "outcomeId": "B3.a",
                  "level": "not-achieved",
                  "text": "You have not identified the important data on which network and information systems supporting your essential function(s) relies.",
                  "index": 2
                },
                {
                  "id": "B3.a.NA.3",
                  "outcomeId": "B3.a",
                  "level": "not-achieved",
                  "text": "You have not identified who has access to data important to the operation of network and information systems supporting your essential function(s).",
                  "index": 3
                },
                {
                  "id": "B3.a.NA.4",
                  "outcomeId": "B3.a",
                  "level": "not-achieved",
                  "text": "You have not clearly articulated the impact of data compromise or lack of availability.",
                  "index": 4
                },
                {
                  "id": "B3.a.PA.1",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.a.PA.2",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "You have identified all mobile devices and media that hold data important to the operation of network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B3.a.PA.3",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "You understand and document the impact on your essential function(s) of all relevant scenarios, including unauthorised data access, uncontrolled release, modification or deletion, or when authorised users are unable to appropriately access this data.",
                  "index": 3
                },
                {
                  "id": "B3.a.PA.4",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "You occasionally validate these documented impact statements. Partially Achieved",
                  "index": 4
                },
                {
                  "id": "B3.a.A.1",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You have identified and catalogued all the data important to the operation of network and information systems supporting your essential function(s), or that would assist a threat actor.",
                  "index": 1
                },
                {
                  "id": "B3.a.A.2",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You have identified and catalogued who has access to the data important to the operation of network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B3.a.A.3",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You maintain a current understanding of the location, quantity and quality of data important to the",
                  "index": 3
                },
                {
                  "id": "B3.a.A.4",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "operation of network and information systems supporting your essential function(s).",
                  "index": 4
                },
                {
                  "id": "B3.a.A.5",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You take steps to remove or minimise unnecessary copies or unneeded historic data.",
                  "index": 5
                },
                {
                  "id": "B3.a.A.6",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You have identified all mobile devices and media that may hold data important to the operation of network and information systems supporting your essential function(s).",
                  "index": 6
                },
                {
                  "id": "B3.a.A.7",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You maintain a current understanding of the data links used to transmit data that is important to network and information systems supporting your essential function(s).",
                  "index": 7
                },
                {
                  "id": "B3.a.A.8",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You understand the context, limitations and dependencies of your important data.",
                  "index": 8
                },
                {
                  "id": "B3.a.A.9",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You understand and document the impact on your essential function(s) of all relevant scenarios, including unauthorised data access, uncontrolled release, modification or deletion, or when authorised users are unable to appropriately access this data.",
                  "index": 9
                },
                {
                  "id": "B3.a.A.10",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You validate these documented impact statements regularly, at least annually.",
                  "index": 10
                }
              ]
            },
            {
              "id": "B3.b",
              "principleId": "B3",
              "title": "Data in Transit",
              "description": "You have protected the transit of data important to the operation of network and information systems supporting your essential function(s). This includes the transfer of data to third parties.",
              "indicators": [
                {
                  "id": "B3.b.NA.1",
                  "outcomeId": "B3.b",
                  "level": "not-achieved",
                  "text": "You do not know what all your data links are, or which carry data important to the operation of the essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.b.NA.2",
                  "outcomeId": "B3.b",
                  "level": "not-achieved",
                  "text": "Data important to the operation of the essential function(s) travels without technical protection over non-trusted or openly accessible carriers.",
                  "index": 2
                },
                {
                  "id": "B3.b.NA.3",
                  "outcomeId": "B3.b",
                  "level": "not-achieved",
                  "text": "Critical data paths that could fail, be jammed, be overloaded, etc. have no alternative path.",
                  "index": 3
                },
                {
                  "id": "B3.b.PA.1",
                  "outcomeId": "B3.b",
                  "level": "partially-achieved",
                  "text": "You have identified and protected (effectively and proportionately) all the data links that carry data important to the operation of your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.b.PA.2",
                  "outcomeId": "B3.b",
                  "level": "partially-achieved",
                  "text": "You apply appropriate physical and / or technical means (e.g. cryptography) to protect data that travels over non-trusted or openly accessible carriers, but you have limited or no confidence in the robustness of the protection applied.",
                  "index": 2
                },
                {
                  "id": "B3.b.A.1",
                  "outcomeId": "B3.b",
                  "level": "achieved",
                  "text": "You have identified and protected (effectively and proportionately) all the data links that carry data important to the operation of your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.b.A.2",
                  "outcomeId": "B3.b",
                  "level": "achieved",
                  "text": "You apply appropriate physical and / or technical means (e.g. cryptography) to protect data that travels over non-trusted or openly accessible carriers, with justified confidence in the robustness of the protection applied.",
                  "index": 2
                },
                {
                  "id": "B3.b.A.3",
                  "outcomeId": "B3.b",
                  "level": "achieved",
                  "text": "Suitable alternative transmission paths are available where there is a significant risk of impact on the operation of the essential function(s) due to resource limitation (e.g. transmission equipment or function failure, or important data being blocked or jammed).",
                  "index": 3
                }
              ]
            },
            {
              "id": "B3.c",
              "principleId": "B3",
              "title": "Stored Data",
              "description": "You have protected stored soft and hard copy data important to the operation of network and information systems supporting your essential function(s).",
              "indicators": [
                {
                  "id": "B3.c.NA.1",
                  "outcomeId": "B3.c",
                  "level": "not-achieved",
                  "text": "You have no, or limited, knowledge of where data important to the operation of network and information systems supporting your essential function(s) is stored.",
                  "index": 1
                },
                {
                  "id": "B3.c.NA.2",
                  "outcomeId": "B3.c",
                  "level": "not-achieved",
                  "text": "You have not protected vulnerable stored data important to the operation of network and information systems supporting your essential function(s) in a suitable way.",
                  "index": 2
                },
                {
                  "id": "B3.c.NA.3",
                  "outcomeId": "B3.c",
                  "level": "not-achieved",
                  "text": "Backups are incomplete, untested, not adequately secured or could be inaccessible in a disaster recovery or business continuity situation.",
                  "index": 3
                },
                {
                  "id": "B3.c.PA.1",
                  "outcomeId": "B3.c",
                  "level": "partially-achieved",
                  "text": "All copies of data important to the operation of network and information systems supporting your essential function(s) are necessary. Where this important data is transferred to less secure systems, the data is provided with limited detail and / or as a read-only copy.",
                  "index": 1
                },
                {
                  "id": "B3.c.PA.2",
                  "outcomeId": "B3.c",
                  "level": "partially-achieved",
                  "text": "You have applied suitable physical and / or technical means to protect this important stored data from unauthorised access, modification or deletion.",
                  "index": 2
                },
                {
                  "id": "B3.c.PA.3",
                  "outcomeId": "B3.c",
                  "level": "partially-achieved",
                  "text": "If cryptographic protections are used you apply suitable technical and procedural means, but you have limited or no confidence in the robustness of the protection applied.",
                  "index": 3
                },
                {
                  "id": "B3.c.PA.4",
                  "outcomeId": "B3.c",
                  "level": "partially-achieved",
                  "text": "You have suitable, secured backups of data to allow the operation of network and information systems supporting your essential function(s) to continue should the original data not be available. This may include off-line or segregated backups, or appropriate alternative forms such as paper copies.",
                  "index": 4
                },
                {
                  "id": "B3.c.A.1",
                  "outcomeId": "B3.c",
                  "level": "achieved",
                  "text": "All copies of data important to the operation of network and information systems supporting your essential function(s) are necessary. Where this important data is transferred to less secure systems, the data is provided with limited detail and / or as a read-only copy.",
                  "index": 1
                },
                {
                  "id": "B3.c.A.2",
                  "outcomeId": "B3.c",
                  "level": "achieved",
                  "text": "You have applied suitable physical and / or technical means to protect this important stored data from unauthorised access, modification or deletion.",
                  "index": 2
                },
                {
                  "id": "B3.c.A.3",
                  "outcomeId": "B3.c",
                  "level": "achieved",
                  "text": "If cryptographic protections are used you apply suitable technical and procedural means, and you have justified confidence in the robustness of the protection applied.",
                  "index": 3
                },
                {
                  "id": "B3.c.A.4",
                  "outcomeId": "B3.c",
                  "level": "achieved",
                  "text": "You have suitable, secured backups of data to allow the operation of network and information systems supporting your essential function(s) to continue should the original data not be available. This may include off-line or segregated backups, or appropriate alternative forms such as paper copies.",
                  "index": 4
                },
                {
                  "id": "B3.c.A.5",
                  "outcomeId": "B3.c",
                  "level": "achieved",
                  "text": "Necessary historic or archive data is suitably secured in storage.",
                  "index": 5
                }
              ]
            },
            {
              "id": "B3.d",
              "principleId": "B3",
              "title": "Mobile Data",
              "description": "You have protected data important to the operation of network and information systems supporting your essential function(s) on mobile devices (e.g. smartphones, tablets and laptops).",
              "indicators": [
                {
                  "id": "B3.d.NA.1",
                  "outcomeId": "B3.d",
                  "level": "not-achieved",
                  "text": "You do not know which mobile devices may hold data important to the operation of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.d.NA.2",
                  "outcomeId": "B3.d",
                  "level": "not-achieved",
                  "text": "You allow data important to the operation of network and information systems supporting your essential function(s) to be stored on devices not managed by your organisation, or to at least equivalent standard.",
                  "index": 2
                },
                {
                  "id": "B3.d.NA.3",
                  "outcomeId": "B3.d",
                  "level": "not-achieved",
                  "text": "Data on mobile devices is not technically secured, or only some is secured.",
                  "index": 3
                },
                {
                  "id": "B3.d.PA.1",
                  "outcomeId": "B3.d",
                  "level": "partially-achieved",
                  "text": "You know which mobile devices hold data important to the operation of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.d.PA.2",
                  "outcomeId": "B3.d",
                  "level": "partially-achieved",
                  "text": "Data important to the operation of network and information systems supporting your essential function(s) is stored on mobile devices only when they have at least the security standard aligned to your overarching security policies.",
                  "index": 2
                },
                {
                  "id": "B3.d.PA.3",
                  "outcomeId": "B3.d",
                  "level": "partially-achieved",
                  "text": "Data on mobile devices is technically secured.",
                  "index": 3
                },
                {
                  "id": "B3.d.A.1",
                  "outcomeId": "B3.d",
                  "level": "achieved",
                  "text": "Mobile devices that hold data that is important to the operation of network and information systems supporting your essential function(s) are catalogued, are under your organisation's control and configured according to best practice for the platform, with appropriate technical and procedural policies in place.",
                  "index": 1
                },
                {
                  "id": "B3.d.A.2",
                  "outcomeId": "B3.d",
                  "level": "achieved",
                  "text": "Your organisation can remotely wipe all mobile devices holding data important to the operation of network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B3.d.A.3",
                  "outcomeId": "B3.d",
                  "level": "achieved",
                  "text": "You have minimised this data on these mobile devices. Some data may be automatically deleted off mobile devices after a certain period.",
                  "index": 3
                }
              ]
            },
            {
              "id": "B3.e",
              "principleId": "B3",
              "title": "Media / Equipment Sanitisation",
              "description": "Before reuse and / or disposal you appropriately sanitise devices, equipment and removable media holding data important to the operation of network and information systems supporting your essential function(s).",
              "indicators": [
                {
                  "id": "B3.e.NA.1",
                  "outcomeId": "B3.e",
                  "level": "not-achieved",
                  "text": "Some or all devices, equipment or removable media that hold data important to the operation of network and information systems supporting your essential function(s) are reused or disposed of without sanitisation of that data.",
                  "index": 1
                },
                {
                  "id": "B3.e.NA.2",
                  "outcomeId": "B3.e",
                  "level": "not-achieved",
                  "text": "Principle B4 System Security Network and information systems and technology critical for the operation of essential functions are protected from cyber attack. An organisational understanding of risk to essential functions informs the use of robust and reliable protective security measures to effectively limit opportunities for threat actors to compromise networks and systems.",
                  "index": 2
                },
                {
                  "id": "B3.e.PA.1",
                  "outcomeId": "B3.e",
                  "level": "partially-achieved",
                  "text": "Data important to the operations of network and information systems supporting your essential function(s) is removed from all devices, equipment and removable media before reuse and / or disposal.",
                  "index": 1
                },
                {
                  "id": "B3.e.A.1",
                  "outcomeId": "B3.e",
                  "level": "achieved",
                  "text": "You catalogue and track all devices that contain data important to the operation of network and information systems supporting your essential function(s) (whether a specific storage device or one with integral storage).",
                  "index": 1
                },
                {
                  "id": "B3.e.A.2",
                  "outcomeId": "B3.e",
                  "level": "achieved",
                  "text": "Data important to the operation of network and information systems supporting your essential function(s) is removed from all devices, equipment and removable media before reuse and / or disposal using an assured product or service.",
                  "index": 2
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b3-data-security"
        },
        {
          "id": "B4",
          "objectiveId": "B",
          "title": "System Security",
          "description": "Network and information systems and technology critical for the operation of essential functions are protected from cyber attack. An organisational understanding of risk to essential functions informs the use of robust and reliable protective security measures to effectively limit opportunities for threat actors to compromise networks and systems.",
          "outcomes": [
            {
              "id": "B4.a",
              "principleId": "B4",
              "title": "Secure by Design",
              "description": "You design security into network and information systems that support the operation of your essential function(s). You minimise their attack surface and ensure that the operation of your essential function(s) should not be impacted by the exploitation of any single vulnerability.",
              "indicators": [
                {
                  "id": "B4.a.NA.1",
                  "outcomeId": "B4.a",
                  "level": "not-achieved",
                  "text": "Network and information systems supporting the operation of the essential function(s) are not appropriately segregated from other systems.",
                  "index": 1
                },
                {
                  "id": "B4.a.NA.2",
                  "outcomeId": "B4.a",
                  "level": "not-achieved",
                  "text": "Internet services, such as browsing and email are accessible from network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B4.a.NA.3",
                  "outcomeId": "B4.a",
                  "level": "not-achieved",
                  "text": "Data flows between network and information systems supporting your essential function(s) and other systems are complex, making it hard to discriminate between legitimate and illegitimate / malicious traffic.",
                  "index": 3
                },
                {
                  "id": "B4.a.NA.4",
                  "outcomeId": "B4.a",
                  "level": "not-achieved",
                  "text": "Remote or third-party accesses circumvent some network controls to gain more direct access to network and information systems supporting the essential function(s).",
                  "index": 4
                },
                {
                  "id": "B4.a.PA.1",
                  "outcomeId": "B4.a",
                  "level": "partially-achieved",
                  "text": "You employ appropriate expertise to design network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B4.a.PA.2",
                  "outcomeId": "B4.a",
                  "level": "partially-achieved",
                  "text": "You design strong boundary defences where network and information systems interface with other organisations or the world at large.",
                  "index": 2
                },
                {
                  "id": "B4.a.PA.3",
                  "outcomeId": "B4.a",
                  "level": "partially-achieved",
                  "text": "You design simple data flows between network and information systems and any external interface to enable effective monitoring.",
                  "index": 3
                },
                {
                  "id": "B4.a.PA.4",
                  "outcomeId": "B4.a",
                  "level": "partially-achieved",
                  "text": "You design to make network and information system recovery simple.",
                  "index": 4
                },
                {
                  "id": "B4.a.PA.5",
                  "outcomeId": "B4.a",
                  "level": "partially-achieved",
                  "text": "All inputs to network and information systems supporting your essential function(s) are checked and validated at the network boundary where possible, or additional monitoring is in place for content-based attacks.",
                  "index": 5
                },
                {
                  "id": "B4.a.A.1",
                  "outcomeId": "B4.a",
                  "level": "achieved",
                  "text": "You employ appropriate expertise to design network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B4.a.A.2",
                  "outcomeId": "B4.a",
                  "level": "achieved",
                  "text": "Network and information systems are segregated into appropriate security zones (e.g. systems supporting the essential function(s) are segregated in a highly trusted, more secure zone).",
                  "index": 2
                },
                {
                  "id": "B4.a.A.3",
                  "outcomeId": "B4.a",
                  "level": "achieved",
                  "text": "The network and information systems supporting your essential function(s) are designed to have simple data flows between components to support effective security monitoring.",
                  "index": 3
                },
                {
                  "id": "B4.a.A.4",
                  "outcomeId": "B4.a",
                  "level": "achieved",
                  "text": "The network and information systems supporting your essential function(s) are designed to be easy to recover. Content-based attacks are mitigated for all inputs to network and information systems that affect the essential function(s) (e.g. via transformation and inspection / sanitisation and validation). If automated decision-making technologies are in use, you design and apply appropriate restrictions to prevent actions that could have an adverse impact on network and information systems supporting your essential function(s).",
                  "index": 4
                }
              ]
            },
            {
              "id": "B4.b",
              "principleId": "B4",
              "title": "Secure Configuration",
              "description": "You securely configure network and information systems that support the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "B4.b.NA.1",
                  "outcomeId": "B4.b",
                  "level": "not-achieved",
                  "text": "You have not identified the assets that need to be carefully configured to maintain the security of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B4.b.NA.2",
                  "outcomeId": "B4.b",
                  "level": "not-achieved",
                  "text": "Policies relating to the security of operating system builds or configuration are not applied consistently across network and information systems relating to your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B4.b.NA.3",
                  "outcomeId": "B4.b",
                  "level": "not-achieved",
                  "text": "Configuration details are not recorded or lack enough information to be able to rebuild the system or device.",
                  "index": 3
                },
                {
                  "id": "B4.b.NA.4",
                  "outcomeId": "B4.b",
                  "level": "not-achieved",
                  "text": "The recording of security changes or adjustments that affect your essential function(s) is lacking or inconsistent.",
                  "index": 4
                },
                {
                  "id": "B4.b.NA.5",
                  "outcomeId": "B4.b",
                  "level": "not-achieved",
                  "text": "Generic, shared, default name and built-in accounts have not been removed or disabled.",
                  "index": 5
                },
                {
                  "id": "B4.b.NA.6",
                  "outcomeId": "B4.b",
                  "level": "not-achieved",
                  "text": "Standard users are able to change settings that would adversely impact the security of network and information systems supporting your essential function(s).",
                  "index": 6
                },
                {
                  "id": "B4.b.PA.1",
                  "outcomeId": "B4.b",
                  "level": "partially-achieved",
                  "text": "You have identified and documented the assets that need to be carefully configured to maintain the security of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B4.b.PA.2",
                  "outcomeId": "B4.b",
                  "level": "partially-achieved",
                  "text": "Secure platform and device builds are used across the estate.",
                  "index": 2
                },
                {
                  "id": "B4.b.PA.3",
                  "outcomeId": "B4.b",
                  "level": "partially-achieved",
                  "text": "Consistent, secure and minimal system and device configurations are applied across the same types of environment.",
                  "index": 3
                },
                {
                  "id": "B4.b.PA.4",
                  "outcomeId": "B4.b",
                  "level": "partially-achieved",
                  "text": "Changes and adjustments to security configurations at security boundaries of network and information systems supporting your essential function(s) are approved and documented.",
                  "index": 4
                },
                {
                  "id": "B4.b.PA.5",
                  "outcomeId": "B4.b",
                  "level": "partially-achieved",
                  "text": "You verify software before installation is permitted.",
                  "index": 5
                },
                {
                  "id": "B4.b.PA.6",
                  "outcomeId": "B4.b",
                  "level": "partially-achieved",
                  "text": "Generic, shared, default name and built-in accounts have been removed or disabled. Where this is not possible, credentials to these accounts have been changed. Service accounts are appropriately protected.",
                  "index": 6
                },
                {
                  "id": "B4.b.PA.7",
                  "outcomeId": "B4.b",
                  "level": "partially-achieved",
                  "text": "Standard users are not able to change settings that would adversely impact the security of network and information systems supporting your essential function(s).",
                  "index": 7
                },
                {
                  "id": "B4.b.A.1",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "You have identified, documented and actively manage (e.g. maintain security configurations, patching, updating according to good practice) the assets that need to be carefully configured to maintain the security of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B4.b.A.2",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "All platforms conform to your secure, defined baseline build, or the latest known good configuration version for that environment.",
                  "index": 2
                },
                {
                  "id": "B4.b.A.3",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "You closely and effectively manage changes in your environment, ensuring that network and information systems configurations are secure and documented.",
                  "index": 3
                },
                {
                  "id": "B4.b.A.4",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "You regularly review and validate that network and information systems have the expected, secure settings and configuration.",
                  "index": 4
                },
                {
                  "id": "B4.b.A.5",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "Only permitted software can be installed.",
                  "index": 5
                },
                {
                  "id": "B4.b.A.6",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "If automated decision-making technologies are in use, their operation is well understood, and decisions can be replicated.",
                  "index": 6
                },
                {
                  "id": "B4.b.A.7",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "Generic, shared, default name and built-in accounts have been removed or disabled. Where this is not possible, credentials to these accounts have been changed. Service accounts are appropriately protected.",
                  "index": 7
                }
              ]
            },
            {
              "id": "B4.c",
              "principleId": "B4",
              "title": "Secure Management",
              "description": "You manage your organisation's network and information systems that support the operation of your essential function(s) to enable and maintain security.",
              "indicators": [
                {
                  "id": "B4.c.NA.1",
                  "outcomeId": "B4.c",
                  "level": "not-achieved",
                  "text": "Your systems and devices supporting the operation of the essential function(s) are administered or maintained from devices that are not corporately owned and managed.",
                  "index": 1
                },
                {
                  "id": "B4.c.NA.2",
                  "outcomeId": "B4.c",
                  "level": "not-achieved",
                  "text": "You do not have good or current technical documentation of network and information systems.",
                  "index": 2
                },
                {
                  "id": "B4.c.PA.1",
                  "outcomeId": "B4.c",
                  "level": "partially-achieved",
                  "text": "Your systems and devices supporting the operation of the essential function(s) are only administered or maintained by authorised privileged users from devices sufficiently separated, using a risk- based approach, from the activities of standard users.",
                  "index": 1
                },
                {
                  "id": "B4.c.PA.2",
                  "outcomeId": "B4.c",
                  "level": "partially-achieved",
                  "text": "Technical knowledge about network and information systems, such as documentation and network diagrams, is regularly reviewed and updated.",
                  "index": 2
                },
                {
                  "id": "B4.c.PA.3",
                  "outcomeId": "B4.c",
                  "level": "partially-achieved",
                  "text": "You prevent, detect and remove malware, and unauthorised software. You use technical, procedural and physical measures as necessary.",
                  "index": 3
                },
                {
                  "id": "B4.c.A.1",
                  "outcomeId": "B4.c",
                  "level": "achieved",
                  "text": "Your systems and devices supporting the operation of the essential function(s) are only administered or maintained by authorised privileged users from highly trusted devices, such as Privileged Access Workstations, dedicated solely to those operations.",
                  "index": 1
                },
                {
                  "id": "B4.c.A.2",
                  "outcomeId": "B4.c",
                  "level": "achieved",
                  "text": "You regularly review and update technical knowledge about network and information systems, such as documentation and network diagrams, and ensure they are securely stored.",
                  "index": 2
                },
                {
                  "id": "B4.c.A.3",
                  "outcomeId": "B4.c",
                  "level": "achieved",
                  "text": "You prevent, detect and remove malware, and unauthorised software. You use technical, procedural and physical measures as necessary.",
                  "index": 3
                }
              ]
            },
            {
              "id": "B4.d",
              "principleId": "B4",
              "title": "Vulnerability Management",
              "description": "You manage known vulnerabilities in network and information systems to prevent adverse impact on your essential function(s).",
              "indicators": [
                {
                  "id": "B4.d.NA.1",
                  "outcomeId": "B4.d",
                  "level": "not-achieved",
                  "text": "You do not understand the exposure of network and information systems supporting your essential function(s) to publicly-known vulnerabilities.",
                  "index": 1
                },
                {
                  "id": "B4.d.NA.2",
                  "outcomeId": "B4.d",
                  "level": "not-achieved",
                  "text": "You do not mitigate externally exposed vulnerabilities promptly.",
                  "index": 2
                },
                {
                  "id": "B4.d.NA.3",
                  "outcomeId": "B4.d",
                  "level": "not-achieved",
                  "text": "You have not recently tested to verify your understanding of the vulnerabilities of network and information systems that support your essential function(s).",
                  "index": 3
                },
                {
                  "id": "B4.d.NA.4",
                  "outcomeId": "B4.d",
                  "level": "not-achieved",
                  "text": "You have not suitably mitigated systems or software that is no longer supported.",
                  "index": 4
                },
                {
                  "id": "B4.d.NA.5",
                  "outcomeId": "B4.d",
                  "level": "not-achieved",
                  "text": "You are not pursuing replacement for unsupported systems or software.",
                  "index": 5
                },
                {
                  "id": "B4.d.PA.1",
                  "outcomeId": "B4.d",
                  "level": "partially-achieved",
                  "text": "You maintain a current understanding of the exposure of network and information systems supporting your essential function(s) to publicly-known vulnerabilities.",
                  "index": 1
                },
                {
                  "id": "B4.d.PA.2",
                  "outcomeId": "B4.d",
                  "level": "partially-achieved",
                  "text": "Announced vulnerabilities for all software packages used in network and information systems supporting your essential function(s) are tracked, prioritised and externally exposed vulnerabilities are mitigated (e.g. by patching) promptly.",
                  "index": 2
                },
                {
                  "id": "B4.d.PA.3",
                  "outcomeId": "B4.d",
                  "level": "partially-achieved",
                  "text": "Some vulnerabilities that are not externally exposed have temporary mitigations for an extended period.",
                  "index": 3
                },
                {
                  "id": "B4.d.PA.4",
                  "outcomeId": "B4.d",
                  "level": "partially-achieved",
                  "text": "You have temporary mitigations for unsupported systems and software while pursuing migration to supported technology.",
                  "index": 4
                },
                {
                  "id": "B4.d.PA.5",
                  "outcomeId": "B4.d",
                  "level": "partially-achieved",
                  "text": "You regularly test to fully understand the vulnerabilities of network and information systems that support the operation of your essential function(s).",
                  "index": 5
                },
                {
                  "id": "B4.d.A.1",
                  "outcomeId": "B4.d",
                  "level": "achieved",
                  "text": "You maintain a current understanding of the exposure of network and information systems supporting your essential function(s) to publicly-known vulnerabilities.",
                  "index": 1
                },
                {
                  "id": "B4.d.A.2",
                  "outcomeId": "B4.d",
                  "level": "achieved",
                  "text": "Announced vulnerabilities for all software packages used in network and information systems supporting your essential function(s) are tracked, prioritised and mitigated (e.g. by patching) promptly.",
                  "index": 2
                },
                {
                  "id": "B4.d.A.3",
                  "outcomeId": "B4.d",
                  "level": "achieved",
                  "text": "You regularly test to fully understand the vulnerabilities of network and information systems that support the operation of your essential function(s) and verify this understanding with third-party testing.",
                  "index": 3
                },
                {
                  "id": "B4.d.A.4",
                  "outcomeId": "B4.d",
                  "level": "achieved",
                  "text": "You actively maximise the use of supported software, firmware and hardware in network and information systems supporting your essential function(s).",
                  "index": 4
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b4-system-security"
        },
        {
          "id": "B5",
          "objectiveId": "B",
          "title": "Resilient Networks and Systems",
          "description": "The organisation builds resilience against cyber attack and system failure into the design, implementation, operation and management of systems that support the operation of your essential function(s).",
          "outcomes": [
            {
              "id": "B5.a",
              "principleId": "B5",
              "title": "Resilience Preparation",
              "description": "You are prepared to restore the operation of your essential function(s) following adverse impact to network and information systems.",
              "indicators": [
                {
                  "id": "B5.a.NA.1",
                  "outcomeId": "B5.a",
                  "level": "not-achieved",
                  "text": "You have limited understanding of all the elements that are required to restore operation of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B5.a.NA.2",
                  "outcomeId": "B5.a",
                  "level": "not-achieved",
                  "text": "You have not completed business continuity and disaster recovery plans for network and information systems, including their dependencies, supporting the operation of the essential function(s).",
                  "index": 2
                },
                {
                  "id": "B5.a.NA.3",
                  "outcomeId": "B5.a",
                  "level": "not-achieved",
                  "text": "You have not fully assessed the practical implementation of your business continuity and disaster recovery plans.",
                  "index": 3
                },
                {
                  "id": "B5.a.PA.1",
                  "outcomeId": "B5.a",
                  "level": "partially-achieved",
                  "text": "You know all network and information systems, and underlying technologies, that are necessary to restore the operation of your essential function(s) and understand their interdependence.",
                  "index": 1
                },
                {
                  "id": "B5.a.PA.2",
                  "outcomeId": "B5.a",
                  "level": "partially-achieved",
                  "text": "You know the order in which systems need to be recovered to efficiently and effectively restore the operation of the essential function(s).",
                  "index": 2
                },
                {
                  "id": "B5.a.A.1",
                  "outcomeId": "B5.a",
                  "level": "achieved",
                  "text": "You have business continuity and disaster recovery plans that have been tested for practicality, effectiveness and completeness. Appropriate use is made of different test methods (e.g. manual fail-over, table-top exercises, or red-teaming).",
                  "index": 1
                },
                {
                  "id": "B5.a.A.2",
                  "outcomeId": "B5.a",
                  "level": "achieved",
                  "text": "You use your security awareness and threat intelligence sources to identify new or heightened levels of risk, which result in immediate and potentially temporary security measures to enhance the security of network and information systems supporting your essential function(s), (e.g. in response to a widespread outbreak of very damaging malware).",
                  "index": 2
                }
              ]
            },
            {
              "id": "B5.b",
              "principleId": "B5",
              "title": "Design for Resilience",
              "description": "You design network and information systems supporting your essential function(s) to be resilient to cyber security incidents. Systems are appropriately segregated and resource limitations are mitigated.",
              "indicators": [
                {
                  "id": "B5.b.NA.1",
                  "outcomeId": "B5.b",
                  "level": "not-achieved",
                  "text": "Network and information systems supporting the operation of your essential function(s) are not appropriately segregated.",
                  "index": 1
                },
                {
                  "id": "B5.b.NA.2",
                  "outcomeId": "B5.b",
                  "level": "not-achieved",
                  "text": "Internet services, such as browsing and email, are accessible from network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B5.b.NA.3",
                  "outcomeId": "B5.b",
                  "level": "not-achieved",
                  "text": "You do not understand or lack plans to mitigate all resource limitations that could adversely affect your essential function(s).",
                  "index": 3
                },
                {
                  "id": "B5.b.PA.1",
                  "outcomeId": "B5.b",
                  "level": "partially-achieved",
                  "text": "Network and information systems supporting the operation of your essential function(s) are logically separated from your business systems (e.g. they reside on the same network as the rest of the organisation but within a DMZ).",
                  "index": 1
                },
                {
                  "id": "B5.b.PA.2",
                  "outcomeId": "B5.b",
                  "level": "partially-achieved",
                  "text": "Internet services, such as browsing and email, are not accessible from network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B5.b.PA.3",
                  "outcomeId": "B5.b",
                  "level": "partially-achieved",
                  "text": "Resource limitations (e.g. network bandwidth, single network paths) have been identified but not fully mitigated.",
                  "index": 3
                },
                {
                  "id": "B5.b.A.1",
                  "outcomeId": "B5.b",
                  "level": "achieved",
                  "text": "Network and information systems supporting the operation of your essential function(s) are segregated from other business and external systems by appropriate technical and physical means (e.g. separate network and system infrastructure with independent user administration).",
                  "index": 1
                },
                {
                  "id": "B5.b.A.2",
                  "outcomeId": "B5.b",
                  "level": "achieved",
                  "text": "Internet services, such as browsing and email, are not accessible from network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "B5.b.A.3",
                  "outcomeId": "B5.b",
                  "level": "achieved",
                  "text": "You have identified and mitigated all resource limitations (e.g. bandwidth limitations and single network paths).",
                  "index": 3
                },
                {
                  "id": "B5.b.A.4",
                  "outcomeId": "B5.b",
                  "level": "achieved",
                  "text": "You have identified and mitigated any geographical constraints or weaknesses. (e.g. systems that your essential function(s) depends upon are replicated in another location, important network connectivity has alternative physical paths and service providers).",
                  "index": 4
                },
                {
                  "id": "B5.b.A.5",
                  "outcomeId": "B5.b",
                  "level": "achieved",
                  "text": "You review and update assessments of dependencies, resource and geographical limitations and mitigations when necessary.",
                  "index": 5
                }
              ]
            },
            {
              "id": "B5.c",
              "principleId": "B5",
              "title": "Backups",
              "description": "You hold accessible and secured current backups of data and information needed to recover operation of your essential function(s) following an adverse impact to network and information systems.",
              "indicators": [
                {
                  "id": "B5.c.NA.1",
                  "outcomeId": "B5.c",
                  "level": "not-achieved",
                  "text": "Backup coverage is incomplete and does not include all relevant data and information needed to restore the operation of your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B5.c.NA.2",
                  "outcomeId": "B5.c",
                  "level": "not-achieved",
                  "text": "Backups are not frequent enough for the operation of your essential function(s) to be restored effectively.",
                  "index": 2
                },
                {
                  "id": "B5.c.NA.3",
                  "outcomeId": "B5.c",
                  "level": "not-achieved",
                  "text": "Your restoration process does not restore your essential function(s) in a suitable time frame.",
                  "index": 3
                },
                {
                  "id": "B5.c.PA.1",
                  "outcomeId": "B5.c",
                  "level": "partially-achieved",
                  "text": "You have appropriately secured backups (including data, configuration information, software, equipment, processes and knowledge). These backups will be accessible to recover from an extreme event including ransomware attack.",
                  "index": 1
                },
                {
                  "id": "B5.c.PA.2",
                  "outcomeId": "B5.c",
                  "level": "partially-achieved",
                  "text": "You routinely test backups to ensure that the backup process function(s) correctly and the backups are usable.",
                  "index": 2
                },
                {
                  "id": "B5.c.A.1",
                  "outcomeId": "B5.c",
                  "level": "achieved",
                  "text": "Your comprehensive, automatic and tested technical and procedural backups are secured at centrally accessible or secondary sites to recover from an extreme event.",
                  "index": 1
                },
                {
                  "id": "B5.c.A.2",
                  "outcomeId": "B5.c",
                  "level": "achieved",
                  "text": "Backups of all important data and information needed to recover the essential function(s) are made, tested, documented and routinely reviewed.",
                  "index": 2
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems"
        },
        {
          "id": "B6",
          "objectiveId": "B",
          "title": "Staff Awareness and Training",
          "description": "Staff have appropriate awareness, knowledge and skills to carry out their organisational roles effectively in relation to the security of network and information systems supporting the operation of your essential function(s).",
          "outcomes": [
            {
              "id": "B6.a",
              "principleId": "B6",
              "title": "Cyber Security Culture",
              "description": "You develop and maintain a positive cyber security culture and a shared sense of responsibility.",
              "indicators": [
                {
                  "id": "B6.a.NA.1",
                  "outcomeId": "B6.a",
                  "level": "not-achieved",
                  "text": "People in your organisation do not understand what they contribute to the cyber security of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B6.a.NA.2",
                  "outcomeId": "B6.a",
                  "level": "not-achieved",
                  "text": "People in your organisation do not know how to raise a concern about cyber security.",
                  "index": 2
                },
                {
                  "id": "B6.a.NA.3",
                  "outcomeId": "B6.a",
                  "level": "not-achieved",
                  "text": "People believe that reporting issues may get them into trouble.",
                  "index": 3
                },
                {
                  "id": "B6.a.NA.4",
                  "outcomeId": "B6.a",
                  "level": "not-achieved",
                  "text": "Your organisation's approach to cyber security is perceived by staff as hindering the business of the organisation and may encourage poor security behaviours.",
                  "index": 4
                },
                {
                  "id": "B6.a.NA.5",
                  "outcomeId": "B6.a",
                  "level": "not-achieved",
                  "text": "Formal or informal incentives and rewards conflict with the promotion of positive security outcomes.",
                  "index": 5
                },
                {
                  "id": "B6.a.PA.1",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "Your executive management understand and widely communicate the importance of a positive cyber security culture. Positive attitudes, behaviours and expectations are described for your organisation.",
                  "index": 1
                },
                {
                  "id": "B6.a.PA.2",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "All people in your organisation understand the contribution they make to the cyber security of network and information systems supporting your essential functions(s).",
                  "index": 2
                },
                {
                  "id": "B6.a.PA.3",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "All individuals in your organisation know who to contact and where to access more information about cyber security. They know how to raise a cyber security issue.",
                  "index": 3
                },
                {
                  "id": "B6.a.PA.4",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "You identify and address issues that inhibit people",
                  "index": 4
                },
                {
                  "id": "B6.a.PA.5",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "from behaving in a manner that supports your intended cyber security outcomes.",
                  "index": 5
                },
                {
                  "id": "B6.a.A.1",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "Your executive management clearly and effectively communicates the organisation's cyber security priorities and objectives to all staff. Your organisation displays positive cyber security attitudes, behaviours, expectations.",
                  "index": 1
                },
                {
                  "id": "B6.a.A.2",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "People in your organisation raising potential cyber security incidents and issues are treated positively.",
                  "index": 2
                },
                {
                  "id": "B6.a.A.3",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "Individuals at all levels in your organisation routinely report concerns or issues about cyber security and are recognised for their contribution to keeping the organisation secure.",
                  "index": 3
                },
                {
                  "id": "B6.a.A.4",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "Your management is seen to be committed to and",
                  "index": 4
                },
                {
                  "id": "B6.a.A.5",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "actively involved in cyber security.",
                  "index": 5
                },
                {
                  "id": "B6.a.A.6",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "Your organisation communicates openly about cyber security, with any concern being taken seriously.",
                  "index": 6
                },
                {
                  "id": "B6.a.A.7",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "People across your organisation collaborate in cyber security activities and improvements, building joint ownership and bringing knowledge of their area of expertise.",
                  "index": 7
                }
              ]
            },
            {
              "id": "B6.b",
              "principleId": "B6",
              "title": "Cyber Security Training",
              "description": "The people who support the operation of network and information systems supporting your essential function(s) are appropriately trained in cyber security.",
              "indicators": [
                {
                  "id": "B6.b.NA.1",
                  "outcomeId": "B6.b",
                  "level": "not-achieved",
                  "text": "There are teams who operate and support your essential function(s) that lack any cyber security training.",
                  "index": 1
                },
                {
                  "id": "B6.b.NA.2",
                  "outcomeId": "B6.b",
                  "level": "not-achieved",
                  "text": "Cyber security training is restricted to specific roles in your organisation.",
                  "index": 2
                },
                {
                  "id": "B6.b.NA.3",
                  "outcomeId": "B6.b",
                  "level": "not-achieved",
                  "text": "Cyber security training records for your organisation are lacking or incomplete.",
                  "index": 3
                },
                {
                  "id": "B6.b.NA.4",
                  "outcomeId": "B6.b",
                  "level": "not-achieved",
                  "text": "Training is used as a \"silver bullet\" for all user security behaviours.",
                  "index": 4
                },
                {
                  "id": "B6.b.NA.5",
                  "outcomeId": "B6.b",
                  "level": "not-achieved",
                  "text": "The success of training is only measured by the number of people reached, rather than assessing whether it has a positive impact on security behaviours.",
                  "index": 5
                },
                {
                  "id": "B6.b.NA.6",
                  "outcomeId": "B6.b",
                  "level": "not-achieved",
                  "text": "Training materials contain out of date or contradictory information, or information that conflicts with other policies, processes or procedures.",
                  "index": 6
                },
                {
                  "id": "B6.b.PA.1",
                  "outcomeId": "B6.b",
                  "level": "partially-achieved",
                  "text": "You have defined appropriate cyber security training and awareness activities for all roles in your organisation, from executives to the most junior roles.",
                  "index": 1
                },
                {
                  "id": "B6.b.PA.2",
                  "outcomeId": "B6.b",
                  "level": "partially-achieved",
                  "text": "You use a range of teaching and communication techniques for cyber security training and awareness to reach the widest audience effectively.",
                  "index": 2
                },
                {
                  "id": "B6.b.PA.3",
                  "outcomeId": "B6.b",
                  "level": "partially-achieved",
                  "text": "Cyber security information is easily available.",
                  "index": 3
                },
                {
                  "id": "B6.b.A.1",
                  "outcomeId": "B6.b",
                  "level": "achieved",
                  "text": "All people in your organisation, from the most senior to the most junior, follow appropriate cyber security training paths.",
                  "index": 1
                },
                {
                  "id": "B6.b.A.2",
                  "outcomeId": "B6.b",
                  "level": "achieved",
                  "text": "Each individuals cyber security training is tracked and refreshed at suitable intervals.",
                  "index": 2
                },
                {
                  "id": "B6.b.A.3",
                  "outcomeId": "B6.b",
                  "level": "achieved",
                  "text": "You routinely evaluate your cyber security training and awareness activities to ensure they reach the widest audience and are effective.",
                  "index": 3
                },
                {
                  "id": "B6.b.A.4",
                  "outcomeId": "B6.b",
                  "level": "achieved",
                  "text": "You make cyber security information and good practice guidance easily accessible, widely available and you know it is referenced and used within your organisation.",
                  "index": 4
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b6-staff-awareness-and-training"
        }
      ],
      "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b"
    },
    {
      "id": "C",
      "title": "Detecting cyber security events",
      "description": "Capabilities exist to ensure security defences remain effective and to detect cyber security events affecting, or with the potential to affect, essential functions.",
      "principles": [
        {
          "id": "C1",
          "objectiveId": "C",
          "title": "Security Monitoring",
          "description": "The organisation monitors the security status of network and information systems supporting the operation of essential function(s) in order to detect security events indicative of a security incident.",
          "outcomes": [
            {
              "id": "C1.a",
              "principleId": "C1",
              "title": "Sources and Tools for Logging and Monitoring",
              "description": "The data sources and tools that you include in your logging and monitoring allow for timely identification of events which might adversely affect the security or resiliency of network and information system(s) supporting the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "C1.a.NA.1",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "Data relating to the security and operation of network and information systems supporting your essential function(s) is not collected.",
                  "index": 1
                },
                {
                  "id": "C1.a.NA.2",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "You are not able to audit the activities of users and systems in relation to network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "C1.a.NA.3",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "You do not monitor traffic crossing your network boundary.",
                  "index": 3
                },
                {
                  "id": "C1.a.NA.4",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "Log data cannot be synchronised using an accurate common time source.",
                  "index": 4
                },
                {
                  "id": "C1.a.NA.5",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "Logs are stored in locations where they are not readily available to authorised users and systems.",
                  "index": 5
                },
                {
                  "id": "C1.a.NA.6",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "Your monitoring tools cannot be configured to make use of new log streams as they come online.",
                  "index": 6
                },
                {
                  "id": "C1.a.NA.7",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "Your monitoring tools are only able to make use of a fraction of the log data being collected.",
                  "index": 7
                },
                {
                  "id": "C1.a.NA.8",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "You do not understand where log data is stored or how long it should be stored for.",
                  "index": 8
                },
                {
                  "id": "C1.a.NA.9",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "You have no way of ensuring log data is being captured as expected and available when needed.",
                  "index": 9
                },
                {
                  "id": "C1.a.PA.1",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "Data relating to the security and operation of some areas of network and information systems supporting your essential function(s) is collected but coverage is not comprehensive.",
                  "index": 1
                },
                {
                  "id": "C1.a.PA.2",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "Some user and system monitoring is done, but not covering a fully agreed list of suspicious or undesirable behaviour.",
                  "index": 2
                },
                {
                  "id": "C1.a.PA.3",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "You monitor traffic crossing your network boundary (including IP address connections as a minimum).",
                  "index": 3
                },
                {
                  "id": "C1.a.PA.4",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "Some but not all log datasets can be easily queried with search tools to aid in investigations.",
                  "index": 4
                },
                {
                  "id": "C1.a.PA.5",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "Your monitoring tools work with most log data, with some configuration.",
                  "index": 5
                },
                {
                  "id": "C1.a.PA.6",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "Your monitoring tools can make use of log data that would capture all common threats.",
                  "index": 6
                },
                {
                  "id": "C1.a.PA.7",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "You ensure log data is available for analysis when needed.",
                  "index": 7
                },
                {
                  "id": "C1.a.A.1",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Monitoring is based on a thorough understanding of network and information systems supporting your essential function(s), techniques used by threat actors, and awareness of what logging and monitoring is required to detect events and incidents that could affect the operation of your essential function(s).",
                  "index": 1
                },
                {
                  "id": "C1.a.A.2",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Your monitoring data provides enough detail to promptly and reliably detect security events, incidents and support investigations. This is reviewed regularly and after a significant security event.",
                  "index": 2
                },
                {
                  "id": "C1.a.A.3",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Extensive monitoring of user and system activity in relation to network and information systems that support your essential function(s) enables you to promptly detect policy violations, suspicious or undesirable user and system behaviour, deviations from normal / routine behaviour or abnormalities indicative of adverse activity.",
                  "index": 3
                },
                {
                  "id": "C1.a.A.4",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Your logging and monitoring capability includes host-based and network monitoring.",
                  "index": 4
                },
                {
                  "id": "C1.a.A.5",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "All new network and information systems supporting your essential function(s) are considered as potential logging and monitoring data sources to maintain a comprehensive monitoring capability.",
                  "index": 5
                },
                {
                  "id": "C1.a.A.6",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Log datasets are synchronised including using an accurate common time source so that separate datasets can be correlated in appropriate ways.",
                  "index": 6
                },
                {
                  "id": "C1.a.A.7",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "You enrich log data with other network and information systems data to provide a more comprehensive picture of actions and behaviours.",
                  "index": 7
                },
                {
                  "id": "C1.a.A.8",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Your monitoring tools make use of log data to pinpoint activity.",
                  "index": 8
                },
                {
                  "id": "C1.a.A.9",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "You regularly review the data sources and tools included in your logging and monitoring strategy to ensure it remains effective.",
                  "index": 9
                }
              ]
            },
            {
              "id": "C1.b",
              "principleId": "C1",
              "title": "Securing Logs",
              "description": "You hold log data securely and grant appropriate user and system access only to accounts with a business need. Log data is held for a suitable retention period, after which it is deleted.",
              "indicators": [
                {
                  "id": "C1.b.NA.1",
                  "outcomeId": "C1.b",
                  "level": "not-achieved",
                  "text": "It is possible for log data to be easily edited or deleted by unauthorised users / systems or attackers.",
                  "index": 1
                },
                {
                  "id": "C1.b.NA.2",
                  "outcomeId": "C1.b",
                  "level": "not-achieved",
                  "text": "There is no control of the users and systems that can access log data.",
                  "index": 2
                },
                {
                  "id": "C1.b.NA.3",
                  "outcomeId": "C1.b",
                  "level": "not-achieved",
                  "text": "There is no monitoring of the access to log data.",
                  "index": 3
                },
                {
                  "id": "C1.b.NA.4",
                  "outcomeId": "C1.b",
                  "level": "not-achieved",
                  "text": "There are no policies covering access to log data.",
                  "index": 4
                },
                {
                  "id": "C1.b.PA.1",
                  "outcomeId": "C1.b",
                  "level": "partially-achieved",
                  "text": "Only authorised users and systems can access log data.",
                  "index": 1
                },
                {
                  "id": "C1.b.PA.2",
                  "outcomeId": "C1.b",
                  "level": "partially-achieved",
                  "text": "There is some monitoring of access to log data (e.g. copying, deleting or modification, or even viewing).",
                  "index": 2
                },
                {
                  "id": "C1.b.PA.3",
                  "outcomeId": "C1.b",
                  "level": "partially-achieved",
                  "text": "You have defined and implemented retention periods for log data.",
                  "index": 3
                },
                {
                  "id": "C1.b.PA.4",
                  "outcomeId": "C1.b",
                  "level": "partially-achieved",
                  "text": "You have given legitimate reasons for accessing log data in your policies.",
                  "index": 4
                },
                {
                  "id": "C1.b.A.1",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "Appropriate access to log data is limited to those users and systems with a business need.",
                  "index": 1
                },
                {
                  "id": "C1.b.A.2",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "The logging architecture has mechanisms, policies, processes and procedures to ensure that it can protect itself from threats comparable to those that it is trying to identify. This includes protecting the function itself and the data within it.",
                  "index": 2
                },
                {
                  "id": "C1.b.A.3",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "Log data analysis and normalisation is only performed on copies of the log data keeping the master copy unaltered.",
                  "index": 3
                },
                {
                  "id": "C1.b.A.4",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "All actions involving log data (e.g. copying, deleting, modification, or even viewing) can be traced back to a unique user or system.",
                  "index": 4
                },
                {
                  "id": "C1.b.A.5",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "The integrity of log data is protected, verified and any modification, including deletion, is detected and attributed.",
                  "index": 5
                }
              ]
            },
            {
              "id": "C1.c",
              "principleId": "C1",
              "title": "Generating Alerts",
              "description": "Evidence of potential security incidents contained in your monitoring data is reliably identified and where appropriate triggers alerts.",
              "indicators": [
                {
                  "id": "C1.c.NA.1",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "You do not apply updates to your detection security technologies in a timely way, after receiving them (e.g. AV signature updates, other threat signatures or Indicators of Compromise (IoCs)).",
                  "index": 1
                },
                {
                  "id": "C1.c.NA.2",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "Security alerts relating to network and information systems supporting your essential function(s) are not prioritised.",
                  "index": 2
                },
                {
                  "id": "C1.c.NA.3",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "The enrichment of security alerts within network and information systems supporting your essential function(s) cannot be performed.",
                  "index": 3
                },
                {
                  "id": "C1.c.NA.4",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "You do not confidently detect the presence of IoCs on network and information systems supporting your essential function(s), such as known malicious command and control signatures (e.g. because applying the indicator is difficult or your log data is not sufficiently detailed).",
                  "index": 4
                },
                {
                  "id": "C1.c.NA.5",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "You do not monitor for user or system abnormalities indicative of adverse activity.",
                  "index": 5
                },
                {
                  "id": "C1.c.NA.6",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "Logs are monitored infrequently.",
                  "index": 6
                },
                {
                  "id": "C1.c.PA.1",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "You easily detect the presence of Indicators of Compromise (IoCs) on network and information systems supporting your essential function(s), such as known malicious command and control signatures.",
                  "index": 1
                },
                {
                  "id": "C1.c.PA.2",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "You apply some updates, new signatures and IoCs in a timely way.",
                  "index": 2
                },
                {
                  "id": "C1.c.PA.3",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "Security alerts relating to network and information systems that support your essential function(s) are prioritised.",
                  "index": 3
                },
                {
                  "id": "C1.c.PA.4",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "The enrichment of alerts within network and information systems supporting your essential function(s) is performed but not as part of the original alert.",
                  "index": 4
                },
                {
                  "id": "C1.c.PA.5",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "Detections and alerting rely on off the shelf tooling without customisation or users reporting events and potential incidents.",
                  "index": 5
                },
                {
                  "id": "C1.c.PA.6",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "There is a documented and shared process for all users who support the operation of the essential function to report events and potential security incidents.",
                  "index": 6
                },
                {
                  "id": "C1.c.PA.7",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "Where appropriate, detections and alerting result in automated actions being taken. (e.g. malware identified by AV is quarantined).",
                  "index": 7
                },
                {
                  "id": "C1.c.PA.8",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "You monitor on an irregular basis for user or system abnormalities indicative of adverse activity.",
                  "index": 8
                },
                {
                  "id": "C1.c.PA.9",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "Logs are monitored at regular intervals.",
                  "index": 9
                },
                {
                  "id": "C1.c.A.1",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "You easily detect the presence of Indicators of Compromise (IoCs) on network and information systems supporting your essential function(s), such as known malicious command and control signatures, as well as abnormalities or behaviours indicative of adverse activity.",
                  "index": 1
                },
                {
                  "id": "C1.c.A.2",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "You apply all updates, new signatures and IoCs promptly.",
                  "index": 2
                },
                {
                  "id": "C1.c.A.3",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Security alerts relating to all network and information systems supporting your essential function(s) are prioritised and this information is used to support incident management.",
                  "index": 3
                },
                {
                  "id": "C1.c.A.4",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Alerts are routinely enriched within network and information systems supporting your essential function(s). The enrichment of these alerts is performed in almost real time and as part of the original alert.",
                  "index": 4
                },
                {
                  "id": "C1.c.A.5",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Alerts and the underlying detections are regularly reviewed and tested to ensure they are generated promptly and reliably, and it is possible to distinguish genuine security incidents from false alarms.",
                  "index": 5
                },
                {
                  "id": "C1.c.A.6",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Alerts and the underlying detection rules are customisable and tuned to reduce false positives as well as optimising responses.",
                  "index": 6
                },
                {
                  "id": "C1.c.A.7",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Detections and alerting may use off the shelf tooling and rules as well as custom tooling and / or rules.",
                  "index": 7
                },
                {
                  "id": "C1.c.A.8",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "You continuously monitor for user and system abnormalities indicative of adverse activity generating alerts based on the results of such monitoring.",
                  "index": 8
                },
                {
                  "id": "C1.c.A.9",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Logs are monitored continuously in near real time.",
                  "index": 9
                }
              ]
            },
            {
              "id": "C1.d",
              "principleId": "C1",
              "title": "Triage of Security Alerts",
              "description": "You contextualise alerts with knowledge of the threat and your systems, to identify security incidents as well as responding to all alerts appropriately.",
              "indicators": [
                {
                  "id": "C1.d.NA.1",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "You do not triage alerts from your detection security technologies (e.g. AV, IDS).",
                  "index": 1
                },
                {
                  "id": "C1.d.NA.2",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "You do not categorise alerts and incidents by type and priority / severity level.",
                  "index": 2
                },
                {
                  "id": "C1.d.NA.3",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "You do not have Standard Operating Procedures (SOPs) / Playbooks / Runbooks available for use during triage.",
                  "index": 3
                },
                {
                  "id": "C1.d.NA.4",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "You do not keep records of triage performed.",
                  "index": 4
                },
                {
                  "id": "C1.d.NA.5",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "You do not have a sufficient understanding of normal user or system behaviour to make effective decisions within triage.",
                  "index": 5
                },
                {
                  "id": "C1.d.PA.1",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "You investigate and triage alerts from some security tools and take action.",
                  "index": 1
                },
                {
                  "id": "C1.d.PA.2",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "You have created, made available and use when appropriate, Standard Operating Procedures (SOPs) / Playbooks / Runbooks covering the most common use cases. These are regularly reviewed to ensure they remain effective.",
                  "index": 2
                },
                {
                  "id": "C1.d.PA.3",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "You perform some triage and actions taken by monitoring and detection personnel are recorded.",
                  "index": 3
                },
                {
                  "id": "C1.d.PA.4",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "You categorise alerts and incidents by type and priority / severity level.",
                  "index": 4
                },
                {
                  "id": "C1.d.PA.5",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "Your understanding of normal user or system behaviour informs your decision making within triage.",
                  "index": 5
                },
                {
                  "id": "C1.d.A.1",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "You investigate and triage alerts from all security tools and take action.",
                  "index": 1
                },
                {
                  "id": "C1.d.A.2",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "You have created, made available and use when appropriate, Standard Operating Procedures (SOPs) / Playbooks / Runbooks covering all plausible use cases. These are regularly reviewed to ensure they remain effective.",
                  "index": 2
                },
                {
                  "id": "C1.d.A.3",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "You categorise alerts and incidents by type and priority / severity level.",
                  "index": 3
                },
                {
                  "id": "C1.d.A.4",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "You document all triage related activities performed by monitoring and detection personnel and these are used to drive improvements Triage provides enough information for subsequent activities to be prioritised (e.g. the containment of damaging malware).",
                  "index": 4
                },
                {
                  "id": "C1.d.A.5",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "Your understanding of normal user and system behaviour, and threats, is sufficient for effective decision making within triage.",
                  "index": 5
                }
              ]
            },
            {
              "id": "C1.e",
              "principleId": "C1",
              "title": "Personnel Skills for Monitoring and Detection",
              "description": "Monitoring and detection personnel skills and roles, including those outsourced, reflect governance and reporting requirements, expected threats and the complexities of the network or system data they need to use. Monitoring and detection personnel have sufficient knowledge of network and information systems and the essential function(s) they need to protect.",
              "indicators": [
                {
                  "id": "C1.e.NA.1",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "There are no personnel who perform a monitoring and detection function.",
                  "index": 1
                },
                {
                  "id": "C1.e.NA.2",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring and detection personnel do not have the correct specialist skills.",
                  "index": 2
                },
                {
                  "id": "C1.e.NA.3",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring and detection personnel are not capable of reporting against governance requirements.",
                  "index": 3
                },
                {
                  "id": "C1.e.NA.4",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring and detection personnel have a lack of awareness of the essential function(s) the organisation provides, what assets relate to those functions and hence the importance of the log data and security events.",
                  "index": 4
                },
                {
                  "id": "C1.e.NA.5",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring and detection personnel have no awareness of other roles or tasks outside of security monitoring and detection that are relevant to the operation of your essential function(s).",
                  "index": 5
                },
                {
                  "id": "C1.e.NA.6",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring and detection personnel are overwhelmed with the amount of data and alerts they have to work with. Alert / triage fatigue is present.",
                  "index": 6
                },
                {
                  "id": "C1.e.PA.1",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring and detection personnel have some investigative skills and a basic understanding of the data they need to work with.",
                  "index": 1
                },
                {
                  "id": "C1.e.PA.2",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring and detection personnel can report to other parts of the organisation (e.g. security directors, resilience managers).",
                  "index": 2
                },
                {
                  "id": "C1.e.PA.3",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring and detection personnel are capable of following most of the required workflow(s).",
                  "index": 3
                },
                {
                  "id": "C1.e.PA.4",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring and detection personnel are aware of some of the network and information systems and your essential function(s), and can manage alerts relating to them.",
                  "index": 4
                },
                {
                  "id": "C1.e.PA.5",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring and detection personnel have some understanding of the operational context (e.g. people, processes, network and information systems that support your essential function(s)) to enhance the security monitoring function.",
                  "index": 5
                },
                {
                  "id": "C1.e.PA.6",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring and detection personnel deal with their workload and cases effectively.",
                  "index": 6
                },
                {
                  "id": "C1.e.A.1",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "You have monitoring and detection personnel who are responsible for the proactive and reactive analysis, investigation and reporting of monitoring alerts including both security and performance.",
                  "index": 1
                },
                {
                  "id": "C1.e.A.2",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring and detection personnel have defined roles and skills that cover all parts of the monitoring and investigation process.",
                  "index": 2
                },
                {
                  "id": "C1.e.A.3",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring and detection personnel follow policies, processes and procedures that address all governance reporting requirements, internal and external.",
                  "index": 3
                },
                {
                  "id": "C1.e.A.4",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring and detection personnel are empowered to look beyond the fixed process to investigate and understand non-standard threats.",
                  "index": 4
                },
                {
                  "id": "C1.e.A.5",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring and detection personnel are aware of the network and information systems and your essential function(s), related assets and can identify and prioritise alerts and investigations that relate to them.",
                  "index": 5
                },
                {
                  "id": "C1.e.A.6",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring and detection personnel drive and shape new log data collection and can make effective use of it.",
                  "index": 6
                },
                {
                  "id": "C1.e.A.7",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring and detection personnel are capable of following all of the required workflow(s).",
                  "index": 7
                },
                {
                  "id": "C1.e.A.8",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring and detection personnel have a sufficient understanding of the operational context (e.g. people, processes, network and information systems that support your essential function) to enhance the security monitoring function.",
                  "index": 8
                },
                {
                  "id": "C1.e.A.9",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring and detection personnel deal with their workload and cases effectively as well as identifying areas for improvement.",
                  "index": 9
                }
              ]
            },
            {
              "id": "C1.f",
              "principleId": "C1",
              "title": "Understanding User's and System's Behaviour, and Threat Intelligence (within Security Monitoring)",
              "description": "Threats to the operation of network and information systems, and corresponding user and system behaviour, are sufficiently understood. These are used to detect cyber security incidents.",
              "indicators": [
                {
                  "id": "C1.f.NA.1",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "Your organisation has no sources of threat intelligence.",
                  "index": 1
                },
                {
                  "id": "C1.f.NA.2",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "You do not evaluate the usefulness of your threat intelligence or share feedback with providers or other users.",
                  "index": 2
                },
                {
                  "id": "C1.f.NA.3",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "You have no awareness of the steps necessary to make best use of threat intelligence for security monitoring.",
                  "index": 3
                },
                {
                  "id": "C1.f.NA.4",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "Threat intelligence is unreliable and / or is not actioned by the appropriate users or systems in a timely manner.",
                  "index": 4
                },
                {
                  "id": "C1.f.NA.5",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "You have no established understanding of what abnormalities to look for that might signify adverse activities.",
                  "index": 5
                },
                {
                  "id": "C1.f.NA.6",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "You do not receive updates for all your detection security technologies (e.g.",
                  "index": 6
                },
                {
                  "id": "C1.f.NA.7",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "AV, IDS).",
                  "index": 7
                },
                {
                  "id": "C1.f.NA.8",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "You do not understand normal user and system behaviour sufficiently to be able to use abnormalities to detect adverse activity.",
                  "index": 8
                },
                {
                  "id": "C1.f.NA.9",
                  "outcomeId": "C1.f",
                  "level": "not-achieved",
                  "text": "Principle C2 Threat Hunting The organisation proactively seeks to detect, within networks and information systems, adverse activity affecting, or with the potential to affect, the operation of essential functions even when the activity evades standard security prevent / detect solutions (or when standard solutions are not deployable).",
                  "index": 9
                },
                {
                  "id": "C1.f.PA.1",
                  "outcomeId": "C1.f",
                  "level": "partially-achieved",
                  "text": "You know how effective your threat intelligence is (e.g. by tracking how threat intelligence helps you identify security incidents).",
                  "index": 1
                },
                {
                  "id": "C1.f.PA.2",
                  "outcomeId": "C1.f",
                  "level": "partially-achieved",
                  "text": "Your organisation may use threat intelligence services, but you do not necessarily choose sources or providers specifically because of your business needs, or specific threats in your sector (e.g. sector-based infoshare, software vendors, anti-virus providers, specialist threat intel firms, special interest groups).",
                  "index": 2
                },
                {
                  "id": "C1.f.PA.3",
                  "outcomeId": "C1.f",
                  "level": "partially-achieved",
                  "text": "The user and system abnormalities from past attacks and threat intelligence, on your and other network and information systems, are used to signify adverse activity.",
                  "index": 3
                },
                {
                  "id": "C1.f.PA.4",
                  "outcomeId": "C1.f",
                  "level": "partially-achieved",
                  "text": "You receive regular updates for all of your detection security technologies (e.g. AV, IDS).",
                  "index": 4
                },
                {
                  "id": "C1.f.PA.5",
                  "outcomeId": "C1.f",
                  "level": "partially-achieved",
                  "text": "You do not understand normal user and system behaviour sufficiently to be able to use abnormalities to detect adverse activity.",
                  "index": 5
                },
                {
                  "id": "C1.f.A.1",
                  "outcomeId": "C1.f",
                  "level": "achieved",
                  "text": "You track the effectiveness of your threat intelligence and actively share feedback on the usefulness of Indicators of Compromise (IoCs) and other intelligence with the threat community (e.g. sector partners, threat intelligence providers, government agencies).",
                  "index": 1
                },
                {
                  "id": "C1.f.A.2",
                  "outcomeId": "C1.f",
                  "level": "achieved",
                  "text": "When using threat intelligence feeds, these have been selected using risk-based and threat-informed decisions based on your business needs and sector.",
                  "index": 2
                },
                {
                  "id": "C1.f.A.3",
                  "outcomeId": "C1.f",
                  "level": "achieved",
                  "text": "You make relevant, reliable and actionable threat intelligence available to the necessary users and systems promptly.",
                  "index": 3
                },
                {
                  "id": "C1.f.A.4",
                  "outcomeId": "C1.f",
                  "level": "achieved",
                  "text": "You contextualise threat intelligence and link it to the why and / or how attacks take place for security monitoring.",
                  "index": 4
                },
                {
                  "id": "C1.f.A.5",
                  "outcomeId": "C1.f",
                  "level": "achieved",
                  "text": "You understand normal user and system abnormalities fully, to such an extent that searching for system abnormalities is an effective way of detecting adverse activity (e.g. you fully understand which systems should and should not communicate and when).",
                  "index": 5
                },
                {
                  "id": "C1.f.A.6",
                  "outcomeId": "C1.f",
                  "level": "achieved",
                  "text": "The user and system abnormalities you monitor for are based on the nature of adverse activities likely to impact network and information systems supporting the operation of your essential function(s).",
                  "index": 6
                },
                {
                  "id": "C1.f.A.7",
                  "outcomeId": "C1.f",
                  "level": "achieved",
                  "text": "The user and system abnormalities indicative of adverse activity you use are regularly updated to reflect changes in network and information systems supporting your essential function(s) and current threat intelligence.",
                  "index": 7
                },
                {
                  "id": "C1.f.A.8",
                  "outcomeId": "C1.f",
                  "level": "achieved",
                  "text": "You possess the capability to share threat intelligence (e.g. ways to effectively detect adversaries) with the threat community / defender community (sector partners, threat intelligence providers, government agencies) when required.",
                  "index": 8
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events/principle-c1-security-monitoring"
        },
        {
          "id": "C2",
          "objectiveId": "C",
          "title": "Threat Hunting",
          "description": "The organisation proactively seeks to detect, within networks and information systems, adverse activity affecting, or with the potential to affect, the operation of essential functions even when the activity evades standard security prevent / detect solutions (or when standard solutions are not deployable).",
          "outcomes": [
            {
              "id": "C2.a",
              "principleId": "C2",
              "title": "Threat Hunting",
              "description": "",
              "indicators": [
                {
                  "id": "C2.a.NA.1",
                  "outcomeId": "C2.a",
                  "level": "not-achieved",
                  "text": "You do not know the resources required for threat hunting.",
                  "index": 1
                },
                {
                  "id": "C2.a.NA.2",
                  "outcomeId": "C2.a",
                  "level": "not-achieved",
                  "text": "You do not have access to an effective threat hunting capability.",
                  "index": 2
                },
                {
                  "id": "C2.a.NA.3",
                  "outcomeId": "C2.a",
                  "level": "not-achieved",
                  "text": "Your threat hunts do not follow any structure and few if any records are created.",
                  "index": 3
                },
                {
                  "id": "C2.a.PA.1",
                  "outcomeId": "C2.a",
                  "level": "partially-achieved",
                  "text": "You have identified the resources required to perform threat hunting and are able to deploy these, in a timely manner, on an occasional basis.",
                  "index": 1
                },
                {
                  "id": "C2.a.PA.2",
                  "outcomeId": "C2.a",
                  "level": "partially-achieved",
                  "text": "You deploy an effective threat hunting capability but not frequent enough to match the risks posed to network and information systems supporting your essential function(s) (e.g. you perform threat hunts in response to a tip off from a reputable source).",
                  "index": 2
                },
                {
                  "id": "C2.a.PA.3",
                  "outcomeId": "C2.a",
                  "level": "partially-achieved",
                  "text": "Your threat hunts follow pre-determined and documented methods (e.g. hypothesis driven, data driven, entity driven) designed to identify adverse activity not detected by automated detections.",
                  "index": 3
                },
                {
                  "id": "C2.a.PA.4",
                  "outcomeId": "C2.a",
                  "level": "partially-achieved",
                  "text": "You document details of threat hunts and post hunt analysis.",
                  "index": 4
                },
                {
                  "id": "C2.a.A.1",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "You understand the resources required to perform threat hunting and these are deployed as part of business as usual.",
                  "index": 1
                },
                {
                  "id": "C2.a.A.2",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "You deploy threat hunting resources at a frequency that matches the risks posed to network and information systems supporting your essential function(s).",
                  "index": 2
                },
                {
                  "id": "C2.a.A.3",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "Your threat hunts follow pre-determined and documented methods (e.g. hypothesis driven, data driven, entity driven) designed to identify adverse activity not detected by automated detections.",
                  "index": 3
                },
                {
                  "id": "C2.a.A.4",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "You turn threat hunts into automated detections and alerting where appropriate.",
                  "index": 4
                },
                {
                  "id": "C2.a.A.5",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "You routinely record details of previous threat hunts and post hunt activities. You use these to drive improvements in your threat hunting and security posture.",
                  "index": 5
                },
                {
                  "id": "C2.a.A.6",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "You have justified confidence in the effectiveness of your threat hunts and the threat hunting process is reviewed and updated to match the risks posed to network and information systems supporting your essential function(s).",
                  "index": 6
                },
                {
                  "id": "C2.a.A.7",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "You leverage automation to improve threat hunts where appropriate (e.g. some stages of the threat hunting process are automated).",
                  "index": 7
                },
                {
                  "id": "C2.a.A.8",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "Your threat hunts focus on the tactics, techniques and procedures (TTPs) of threats over atomic IoCs (e.g. hashes, IP addresses, domain names etc).",
                  "index": 8
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events/principle-c2-threat-hunting"
        }
      ],
      "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events"
    },
    {
      "id": "D",
      "title": "Minimising the impact of cyber security incidents",
      "description": "Capabilities exist to minimise the adverse impact of a cyber security incident on the operation of essential function(s), including the restoration of those function(s) where necessary.",
      "principles": [
        {
          "id": "D1",
          "objectiveId": "D",
          "title": "Response and Recovery Planning",
          "description": "There are well-defined and tested incident management processes in place, that aim to ensure continuity of essential function(s) in the event of system or service failure. Mitigation activities designed to contain or limit the impact of compromise are also in place.",
          "outcomes": [
            {
              "id": "D1.a",
              "principleId": "D1",
              "title": "Response Plan",
              "description": "You have an up-to-date incident response plan that is grounded in a thorough risk assessment that takes account of network and information systems supporting the operation of your essential function(s) and covers a range of incident scenarios.",
              "indicators": [
                {
                  "id": "D1.a.NA.1",
                  "outcomeId": "D1.a",
                  "level": "not-achieved",
                  "text": "Your incident response plan is not documented.",
                  "index": 1
                },
                {
                  "id": "D1.a.NA.2",
                  "outcomeId": "D1.a",
                  "level": "not-achieved",
                  "text": "Your incident response plan does not include your organisations identified essential function(s).",
                  "index": 2
                },
                {
                  "id": "D1.a.NA.3",
                  "outcomeId": "D1.a",
                  "level": "not-achieved",
                  "text": "Your incident response plan is not well understood by relevant staff.",
                  "index": 3
                },
                {
                  "id": "D1.a.PA.1",
                  "outcomeId": "D1.a",
                  "level": "partially-achieved",
                  "text": "Your incident response plan covers network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "D1.a.PA.2",
                  "outcomeId": "D1.a",
                  "level": "partially-achieved",
                  "text": "Your incident response plan comprehensively covers scenarios that are focused on likely impacts of known and well understood attacks only.",
                  "index": 2
                },
                {
                  "id": "D1.a.PA.3",
                  "outcomeId": "D1.a",
                  "level": "partially-achieved",
                  "text": "Your incident response plan is understood by all staff who are involved with your organisation's response function.",
                  "index": 3
                },
                {
                  "id": "D1.a.PA.4",
                  "outcomeId": "D1.a",
                  "level": "partially-achieved",
                  "text": "Your incident response plan is documented and shared with all relevant stakeholders.",
                  "index": 4
                },
                {
                  "id": "D1.a.PA.5",
                  "outcomeId": "D1.a",
                  "level": "partially-achieved",
                  "text": "Your incident response plan is readily accessible, even when your organisations IT systems have been adversely affected by an incident.",
                  "index": 5
                },
                {
                  "id": "D1.a.PA.6",
                  "outcomeId": "D1.a",
                  "level": "partially-achieved",
                  "text": "Your incident response plan is regularly reviewed to ensure it remains effective.",
                  "index": 6
                },
                {
                  "id": "D1.a.A.1",
                  "outcomeId": "D1.a",
                  "level": "achieved",
                  "text": "Your incident response plan is based on a clear understanding of the security risks to network and information systems supporting your essential function(s). Your incident response plan is comprehensive (i.e. covers the complete lifecycle of an incident, roles and responsibilities, and reporting) and covers likely impacts of both known attack patterns and of possible attacks, previously unseen.",
                  "index": 1
                },
                {
                  "id": "D1.a.A.2",
                  "outcomeId": "D1.a",
                  "level": "achieved",
                  "text": "Your incident response plan is documented and integrated with wider organisational business plans and supply chain response plans, as well as dependencies on supporting infrastructure (e.g. power, cooling etc).",
                  "index": 2
                },
                {
                  "id": "D1.a.A.3",
                  "outcomeId": "D1.a",
                  "level": "achieved",
                  "text": "Your incident response plan is communicated and understood by the business areas involved with the operation of your essential function(s).",
                  "index": 3
                }
              ]
            },
            {
              "id": "D1.b",
              "principleId": "D1",
              "title": "Response and Recovery Capability",
              "description": "You have the capability to enact your incident response plan, including effective limitation of impact on the operation of your essential function(s). During an incident, you have access to timely information on which to base your response decisions.",
              "indicators": [
                {
                  "id": "D1.b.NA.1",
                  "outcomeId": "D1.b",
                  "level": "not-achieved",
                  "text": "Inadequate arrangements have been made to make the right resources available to implement your response plan.",
                  "index": 1
                },
                {
                  "id": "D1.b.NA.2",
                  "outcomeId": "D1.b",
                  "level": "not-achieved",
                  "text": "Your response team members are not equipped to make good response decisions and put them into effect.",
                  "index": 2
                },
                {
                  "id": "D1.b.NA.3",
                  "outcomeId": "D1.b",
                  "level": "not-achieved",
                  "text": "Inadequate back-up mechanisms exist to allow the continued operation of your essential function(s) during an incident.",
                  "index": 3
                },
                {
                  "id": "D1.b.A.1",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "You understand the resources that will likely be needed to carry out any required response activities, and arrangements are in place to make these resources available.",
                  "index": 1
                },
                {
                  "id": "D1.b.A.2",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "You understand the types of information that will likely be needed to inform response decisions and arrangements are in place to make this information available.",
                  "index": 2
                },
                {
                  "id": "D1.b.A.3",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "Your response team members have the skills and knowledge required to decide on",
                  "index": 3
                },
                {
                  "id": "D1.b.A.4",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "the response actions necessary to limit harm, and the authority to carry them out.",
                  "index": 4
                },
                {
                  "id": "D1.b.A.5",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "Key roles are duplicated, and operational delivery knowledge is shared with all individuals involved in the operations and recovery of the essential function(s).",
                  "index": 5
                },
                {
                  "id": "D1.b.A.6",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "Back-up mechanisms are available that can be readily activated to allow continued operation of your essential function(s), although possibly at a reduced level, if primary network and information systems fail or are unavailable.",
                  "index": 6
                },
                {
                  "id": "D1.b.A.7",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "Arrangements exist to augment your organisation's incident response capabilities with external support if necessary (e.g. specialist cyber incident responders). Not Achieved",
                  "index": 7
                }
              ]
            },
            {
              "id": "D1.c",
              "principleId": "D1",
              "title": "Testing and Exercising",
              "description": "Your organisation carries out exercises to test response plans, using past incidents that affected your (and other) organisation, and scenarios that draw on threat intelligence and your risk assessment.",
              "indicators": [
                {
                  "id": "D1.c.NA.1",
                  "outcomeId": "D1.c",
                  "level": "not-achieved",
                  "text": "Exercises test only a discrete part of the process (e.g. that backups are working), but do not consider all areas.",
                  "index": 1
                },
                {
                  "id": "D1.c.NA.2",
                  "outcomeId": "D1.c",
                  "level": "not-achieved",
                  "text": "Incident response exercises are not routinely carried out or are carried out in an ad-hoc way.",
                  "index": 2
                },
                {
                  "id": "D1.c.NA.3",
                  "outcomeId": "D1.c",
                  "level": "not-achieved",
                  "text": "Outputs from exercises are not fed into the organisation's lessons learned process.",
                  "index": 3
                },
                {
                  "id": "D1.c.NA.4",
                  "outcomeId": "D1.c",
                  "level": "not-achieved",
                  "text": "Exercises do not test all parts of the response cycle.",
                  "index": 4
                },
                {
                  "id": "D1.c.A.1",
                  "outcomeId": "D1.c",
                  "level": "achieved",
                  "text": "Exercise scenarios are based on incidents experienced by your and other organisations or are composed using experience or threat intelligence.",
                  "index": 1
                },
                {
                  "id": "D1.c.A.2",
                  "outcomeId": "D1.c",
                  "level": "achieved",
                  "text": "Exercise scenarios are documented, regularly reviewed, and validated.",
                  "index": 2
                },
                {
                  "id": "D1.c.A.3",
                  "outcomeId": "D1.c",
                  "level": "achieved",
                  "text": "Exercises are routinely run, with the findings documented and used to refine incident response plans and protective security, in line with the lessons learned.",
                  "index": 3
                },
                {
                  "id": "D1.c.A.4",
                  "outcomeId": "D1.c",
                  "level": "achieved",
                  "text": "Exercises test all parts of your response cycle relating to your essential function(s) (e.g. restoration of normal function(s) levels).",
                  "index": 4
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-d/principle-d1-response-and-recovery-planning"
        },
        {
          "id": "D2",
          "objectiveId": "D",
          "title": "Lessons Learned",
          "description": "When an incident occurs, steps are taken to understand its causes and to ensure remediating action is taken to protect against future incidents.",
          "outcomes": [
            {
              "id": "D2.a",
              "principleId": "D2",
              "title": "Post Incident Analysis",
              "description": "When an incident occurs, your organisation takes steps to understand its causes, informing appropriate remediating action.",
              "indicators": [
                {
                  "id": "D2.a.NA.1",
                  "outcomeId": "D2.a",
                  "level": "not-achieved",
                  "text": "You are not usually able to resolve incidents to a root cause or identify the contributing factors within a broader systems context.",
                  "index": 1
                },
                {
                  "id": "D2.a.NA.2",
                  "outcomeId": "D2.a",
                  "level": "not-achieved",
                  "text": "You do not have a formal process for investigating causes.",
                  "index": 2
                },
                {
                  "id": "D2.a.NA.3",
                  "outcomeId": "D2.a",
                  "level": "not-achieved",
                  "text": "Investigators form theories early in the process and only seek evidence that affirms their belief.",
                  "index": 3
                },
                {
                  "id": "D2.a.NA.4",
                  "outcomeId": "D2.a",
                  "level": "not-achieved",
                  "text": "Investigations are solely focused on identifying the person(s) who can be held responsible for the incident.",
                  "index": 4
                },
                {
                  "id": "D2.a.A.1",
                  "outcomeId": "D2.a",
                  "level": "achieved",
                  "text": "Post incident analysis is conducted routinely as a key part of your lessons learned activities following an incident.",
                  "index": 1
                },
                {
                  "id": "D2.a.A.2",
                  "outcomeId": "D2.a",
                  "level": "achieved",
                  "text": "Your post incident analysis is comprehensive, considering organisational factors (e.g. policies, processes and procedures), technical factors (e.g. system design, vulnerabilities), human factors (e.g. training, security culture) and any changes to threat.",
                  "index": 2
                },
                {
                  "id": "D2.a.A.3",
                  "outcomeId": "D2.a",
                  "level": "achieved",
                  "text": "All relevant incident data is made available to the analysis team to perform post incident analysis.",
                  "index": 3
                },
                {
                  "id": "D2.a.A.4",
                  "outcomeId": "D2.a",
                  "level": "achieved",
                  "text": "Your analysis considers what could have happened under plausible, alternative circumstances (e.g. 'what if' / 'if only' scenarios).",
                  "index": 4
                }
              ]
            },
            {
              "id": "D2.b",
              "principleId": "D2",
              "title": "Using Incidents to Drive Improvements",
              "description": "Your organisation uses lessons learned from incidents to improve your security measures.",
              "indicators": [
                {
                  "id": "D2.b.NA.1",
                  "outcomeId": "D2.b",
                  "level": "not-achieved",
                  "text": "Following incidents, lessons learned are not captured or are limited in scope.",
                  "index": 1
                },
                {
                  "id": "D2.b.NA.2",
                  "outcomeId": "D2.b",
                  "level": "not-achieved",
                  "text": "Improvements arising from lessons learned following an incident are not implemented or not given sufficient organisational priority.",
                  "index": 2
                },
                {
                  "id": "D2.b.NA.3",
                  "outcomeId": "D2.b",
                  "level": "not-achieved",
                  "text": "Changes are made as a 'knee jerk' reaction to an incident without proper analysis and testing to ensure the change is appropriate.",
                  "index": 3
                },
                {
                  "id": "D2.b.NA.4",
                  "outcomeId": "D2.b",
                  "level": "not-achieved",
                  "text": "You wait until a severe or high-profile incident has occurred before you take steps to improve.",
                  "index": 4
                },
                {
                  "id": "D2.b.A.1",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "You have a documented incident review process / policy which ensures that lessons learned from each incident, including near misses, are identified, captured, and acted upon.",
                  "index": 1
                },
                {
                  "id": "D2.b.A.2",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "Lessons learned cover issues with reporting, roles, governance, skills and organisational policies, processes and procedures as well as technical aspects of network and information systems.",
                  "index": 2
                },
                {
                  "id": "D2.b.A.3",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "You use lessons learned to improve security measures, including updating and retesting response plans when necessary.",
                  "index": 3
                },
                {
                  "id": "D2.b.A.4",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "Security improvements identified as a result of lessons learned are prioritised, with the highest priority improvements completed promptly.",
                  "index": 4
                },
                {
                  "id": "D2.b.A.5",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "Analysis is fed to senior management and incorporated into risk management and continuous improvement.",
                  "index": 5
                },
                {
                  "id": "D2.b.A.6",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "Your organisation maximises the lessons learned by using the analysis into 'what if' / 'if only' scenarios.",
                  "index": 6
                },
                {
                  "id": "D2.b.A.7",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "Your organisation learns from reported incidents in your sector and the wider national infrastructure.",
                  "index": 7
                }
              ]
            }
          ],
          "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-d/principle-d2-lessons-learned"
        }
      ],
      "url": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-d"
    }
  ]
};
