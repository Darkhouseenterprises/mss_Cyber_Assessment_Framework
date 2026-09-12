import type { Framework } from "../schema.js";

export const caf32: Framework = {
  "version": "3.2",
  "title": "Cyber Assessment Framework",
  "publisher": "National Cyber Security Centre (NCSC)",
  "retrievedAt": "2026-09-12T00:00:00.000Z",
  "publishedAt": "2024-04-15",
  "homeUrl": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework",
  "pdfUrl": "https://www.ncsc.gov.uk/sites/default/files/documents/Cyber%20Assessment%20Framework%20V3.2.pdf",
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
                  "text": "Direction set at board-level is translated into effective organisational practices that direct and control the security of the network and information systems supporting your essential function(s).",
                  "index": 4
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
                  "text": "There is clarity on who in your organisation has overall accountability for the security of the network and information systems supporting your essential function(s).",
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
                  "text": "Decision-makers are unsure of what senior management's risk appetite is, or only understand it in vague terms such as \"averse\" or \"cautious\".",
                  "index": 3
                },
                {
                  "id": "A1.c.NA.4",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "Organisational structure causes risk decisions to be made in isolation. (e.g. engineering and IT don't talk to each other about risk).",
                  "index": 4
                },
                {
                  "id": "A1.c.NA.5",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "Risk priorities are too vague to make meaningful distinctions between them. (e.g. almost all risks are rated 'medium' or 'amber').",
                  "index": 5
                },
                {
                  "id": "A1.c.NA.6",
                  "outcomeId": "A1.c",
                  "level": "not-achieved",
                  "text": "Principle A2 Risk Management The organisation takes appropriate steps to identify, assess and understand security risks to the network and information systems supporting the operation of essential functions. This includes an overall organisational approach to risk management.",
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
          ]
        },
        {
          "id": "A2",
          "objectiveId": "A",
          "title": "Risk Management",
          "description": "The organisation takes appropriate steps to identify, assess and understand security risks to the network and information systems supporting the operation of essential functions. This includes an overall organisational approach to risk management.",
          "outcomes": [
            {
              "id": "A2.a",
              "principleId": "A2",
              "title": "Risk Management Process",
              "description": "Your organisation has effective internal processes for managing risks to the security of network and information systems related to the operation of your essential function(s) and communicating associated activities.",
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
                  "text": "Risk assessments for network and information systems supporting your essential function(s) are a \"one-off\" activity or not done at all.",
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
                  "text": "Security requirements and mitigations are arbitrary or are applied from a control catalogue without consideration of how they contribute to the security of the essential function(s).",
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
                  "text": "Your risk assessments are informed by an understanding of the vulnerabilities in the network and information systems supporting your essential function(s).",
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
                  "text": "You conduct risk assessments when significant events potentially affect the essential function(s), such as replacing a system or a change in the cyber security threat.",
                  "index": 5
                },
                {
                  "id": "A2.a.PA.6",
                  "outcomeId": "A2.a",
                  "level": "partially-achieved",
                  "text": "You perform threat analysis and understand how generic threats apply to your organisation.",
                  "index": 6
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
                  "text": "Your approach to risk is focused on the possibility of adverse impact to your essential function(s), leading to a detailed understanding of how such impact might arise as a consequence of possible attacker actions and the security properties of your network and information systems.",
                  "index": 2
                },
                {
                  "id": "A2.a.A.3",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "Your risk assessments are based on a clearly understood set of threat assumptions, informed by an up-to-date understanding of security threats to your essential function(s) and your sector.",
                  "index": 3
                },
                {
                  "id": "A2.a.A.4",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "Your risk assessments are informed by an understanding of the vulnerabilities in the network and information systems supporting your essential function(s).",
                  "index": 4
                },
                {
                  "id": "A2.a.A.5",
                  "outcomeId": "A2.a",
                  "level": "achieved",
                  "text": "The output from your risk management process is a clear set of security requirements that will address the risks in line with your organisational approach to security.",
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
                  "text": "Your risk assessments are dynamic and updated in the light of relevant changes which may include technical changes to network and information systems, change of use and new threat information.",
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
                  "text": "You perform detailed threat analysis and understand how this applies to your organisation in the context of the threat to your sector and the wider CNI.",
                  "index": 9
                }
              ]
            },
            {
              "id": "A2.b",
              "principleId": "A2",
              "title": "Assurance",
              "description": "You have gained confidence in the effectiveness of the security of your technology, people, and processes relevant to your essential function(s).",
              "indicators": [
                {
                  "id": "A2.b.NA.1",
                  "outcomeId": "A2.b",
                  "level": "not-achieved",
                  "text": "A particular product or service is seen as a \"silver bullet\" and vendor claims are taken at face value.",
                  "index": 1
                },
                {
                  "id": "A2.b.NA.2",
                  "outcomeId": "A2.b",
                  "level": "not-achieved",
                  "text": "Assurance methods are applied without appreciation of their strengths and limitations, such as the risks of penetration testing in operational environments.",
                  "index": 2
                },
                {
                  "id": "A2.b.NA.3",
                  "outcomeId": "A2.b",
                  "level": "not-achieved",
                  "text": "Assurance is assumed because there have been no known problems to date.",
                  "index": 3
                },
                {
                  "id": "A2.b.NA.4",
                  "outcomeId": "A2.b",
                  "level": "not-achieved",
                  "text": "Principle A3 Asset Management Everything required to deliver, maintain or support network and information systems necessary for the operation of essential functions is determined and understood. This includes data, people and systems, as well as any supporting infrastructure (such as power or cooling).",
                  "index": 4
                },
                {
                  "id": "A2.b.A.1",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You validate that the security measures in place to protect the network and information systems are effective and remain effective for the lifetime over which they are needed.",
                  "index": 1
                },
                {
                  "id": "A2.b.A.2",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "You understand the assurance methods available to you and choose appropriate methods to gain confidence in the security of essential function(s).",
                  "index": 2
                },
                {
                  "id": "A2.b.A.3",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "Your confidence in the security as it relates to your technology, people, and processes can be justified to, and verified by, a third party.",
                  "index": 3
                },
                {
                  "id": "A2.b.A.4",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "Security deficiencies uncovered by assurance activities are assessed, prioritised and remedied when necessary in a timely and effective way.",
                  "index": 4
                },
                {
                  "id": "A2.b.A.5",
                  "outcomeId": "A2.b",
                  "level": "achieved",
                  "text": "The methods used for assurance are reviewed to ensure they are working as intended and remain the most appropriate method to use.",
                  "index": 5
                }
              ]
            }
          ]
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
                  "text": "Inventories of assets relevant to the essential function(s) are incomplete, non-existent, or inadequately detailed.",
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
                  "text": "Knowledge critical to the management, operation, or recovery of the essential function(s) is held by one or two key individuals with no succession plan.",
                  "index": 4
                },
                {
                  "id": "A3.a.NA.5",
                  "outcomeId": "A3.a",
                  "level": "not-achieved",
                  "text": "Asset inventories are neglected and out of date.",
                  "index": 5
                },
                {
                  "id": "A3.a.NA.6",
                  "outcomeId": "A3.a",
                  "level": "not-achieved",
                  "text": "Principle A4 Supply Chain The organisation understands and manages security risks to network and information systems supporting the operation of essential functions that arise as a result of dependencies on external suppliers. This includes ensuring that appropriate measures are employed where third party services are used.",
                  "index": 6
                },
                {
                  "id": "A3.a.A.1",
                  "outcomeId": "A3.a",
                  "level": "achieved",
                  "text": "All assets relevant to the secure operation of essential function(s) are identified and inventoried (at a suitable level of detail). The inventory is kept up-to-date.",
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
                  "text": "You have prioritised your assets according to their importance to the operation of the essential function(s).",
                  "index": 3
                },
                {
                  "id": "A3.a.A.4",
                  "outcomeId": "A3.a",
                  "level": "achieved",
                  "text": "You have assigned responsibility for managing all assets, including physical assets, relevant to the operation of the essential function(s).",
                  "index": 4
                },
                {
                  "id": "A3.a.A.5",
                  "outcomeId": "A3.a",
                  "level": "achieved",
                  "text": "Assets relevant to the essential function(s) are managed with cyber security in mind throughout their lifecycle, from creation through to eventual decommissioning or disposal.",
                  "index": 5
                }
              ]
            }
          ]
        },
        {
          "id": "A4",
          "objectiveId": "A",
          "title": "Supply Chain",
          "description": "The organisation understands and manages security risks to network and information systems supporting the operation of essential functions that arise as a result of dependencies on external suppliers. This includes ensuring that appropriate measures are employed where third party services are used.",
          "outcomes": [
            {
              "id": "A4.a",
              "principleId": "A4",
              "title": "Supply Chain",
              "description": "",
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
                  "text": "Elements of the supply chain for essential function(s) are subcontracted and you have little or no visibility of the sub-contractors.",
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
                  "text": "Suppliers have access to systems that provide your essential function(s) that is unrestricted, not monitored or bypasses your own security controls.",
                  "index": 4
                },
                {
                  "id": "A4.a.NA.5",
                  "outcomeId": "A4.a",
                  "level": "not-achieved",
                  "text": "CAF - Objective B - Protecting against cyber attack Proportionate security measures are in place to protect the network and information systems supporting essential functions from cyber attack.",
                  "index": 5
                },
                {
                  "id": "A4.a.NA.6",
                  "outcomeId": "A4.a",
                  "level": "not-achieved",
                  "text": "Principle B1 Service Protection Policies, Processes and Procedures The organisation defines, implements, communicates and enforces appropriate policies, processes and procedures that direct its overall approach to securing systems and data that support operation of essential functions.",
                  "index": 6
                },
                {
                  "id": "A4.a.PA.1",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You understand the general risks suppliers may pose to your essential function(s).",
                  "index": 1
                },
                {
                  "id": "A4.a.PA.2",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You know the extent of your supply chain that supports your essential function(s), including sub-contractors.",
                  "index": 2
                },
                {
                  "id": "A4.a.PA.3",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You understand which contracts are relevant and you include appropriate security obligations in relevant contracts.",
                  "index": 3
                },
                {
                  "id": "A4.a.PA.4",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You are aware of all third-party connections and have assurance that they meet your organisation's security requirements.",
                  "index": 4
                },
                {
                  "id": "A4.a.PA.5",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "Your approach to security incident management considers incidents that might arise in your supply chain.",
                  "index": 5
                },
                {
                  "id": "A4.a.PA.6",
                  "outcomeId": "A4.a",
                  "level": "partially-achieved",
                  "text": "You have confidence that information shared with suppliers that is necessary for the operation of your essential function(s) is appropriately protected from well-known attacks and known vulnerabilities.",
                  "index": 6
                },
                {
                  "id": "A4.a.A.1",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "You have a deep understanding of your supply chain, including sub-contractors and the wider risks it faces. You consider factors such as supplier's partnerships, competitors, nationality and other organisations with which they sub-contract. This informs your risk assessment and procurement processes.",
                  "index": 1
                },
                {
                  "id": "A4.a.A.2",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "Your approach to supply chain risk management considers the risks to your essential function(s) arising from supply chain subversion by capable and well-resourced attackers.",
                  "index": 2
                },
                {
                  "id": "A4.a.A.3",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "You have confidence that information shared with suppliers that is essential to the operation of your function(s) is appropriately protected from sophisticated attacks.",
                  "index": 3
                },
                {
                  "id": "A4.a.A.4",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "You understand which contracts are relevant and you include appropriate security obligations in relevant contracts. You have a proactive approach to contract management which may include a contract management plan for relevant contracts.",
                  "index": 4
                },
                {
                  "id": "A4.a.A.5",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "Customer / supplier ownership of responsibilities is laid out in contracts.",
                  "index": 5
                },
                {
                  "id": "A4.a.A.6",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "All network connections and data sharing with third parties are managed effectively and proportionately.",
                  "index": 6
                },
                {
                  "id": "A4.a.A.7",
                  "outcomeId": "A4.a",
                  "level": "achieved",
                  "text": "When appropriate, your incident management process and that of your suppliers provide mutual support in the resolution of incidents.",
                  "index": 7
                }
              ]
            }
          ]
        }
      ]
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
              "description": "You have developed and continue to improve a set of cyber security and resilience policies, processes and procedures that manage and mitigate the risk of adverse impact on your essential function(s).",
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
                  "id": "B1.a.NA.5",
                  "outcomeId": "B1.a",
                  "level": "not-achieved",
                  "text": "System security is totally reliant on users' careful and consistent application of manual security processes.",
                  "index": 5
                },
                {
                  "id": "B1.a.NA.6",
                  "outcomeId": "B1.a",
                  "level": "not-achieved",
                  "text": "Policies, processes and procedures have not been reviewed in response to major changes (e.g. technology or regulatory framework), or within a suitable period.",
                  "index": 6
                },
                {
                  "id": "B1.a.NA.7",
                  "outcomeId": "B1.a",
                  "level": "not-achieved",
                  "text": "Policies, processes and procedures are not readily available to staff, too detailed to remember, or too hard to understand.",
                  "index": 7
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
                  "text": "Your organisation's policies, processes and procedures are developed to be practical, usable and appropriate for your essential function(s) and your technologies.",
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
                  "id": "B1.b.NA.7",
                  "outcomeId": "B1.b",
                  "level": "not-achieved",
                  "text": "Principle B2 Identity and Access Control The organisation understands, documents and manages access to network and information systems supporting the operation of essential functions. Users (or automated functions) that can access data or systems are appropriately verified, authenticated and authorised.",
                  "index": 7
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
          ]
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
              "description": "You robustly verify, authenticate and authorise access to the network and information systems supporting your essential function(s).",
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
                  "text": "The number of authorised users and systems that have access to your network and information systems are not limited to the minimum necessary.",
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
                  "text": "The number of authorised users and systems that have access to network and information systems is limited to the minimum necessary to support your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B2.a.PA.2",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "All authorised users and systems with access to network or information systems on which your essential function(s) depends are individually identified and authenticated.",
                  "index": 2
                },
                {
                  "id": "B2.a.PA.3",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "The number of authorised users and systems that have access to essential function(s) network and information systems is limited to the minimum necessary.",
                  "index": 3
                },
                {
                  "id": "B2.a.PA.4",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "You use additional authentication mechanisms, such as multi-factor (MFA), for privileged access to all network and information systems that operate or support your essential function(s).",
                  "index": 4
                },
                {
                  "id": "B2.a.PA.5",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "You individually authenticate and authorise all remote access to all your network and information systems that support your essential function(s).",
                  "index": 5
                },
                {
                  "id": "B2.a.PA.6",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "The list of users and systems with access to network and information systems supporting and delivering the essential function(s) is reviewed on a regular basis, at least annually.",
                  "index": 6
                },
                {
                  "id": "B2.a.PA.7",
                  "outcomeId": "B2.a",
                  "level": "partially-achieved",
                  "text": "Your approach to authenticating users, devices and systems follows up to date best practice.",
                  "index": 7
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
                  "text": "The number of authorised users and systems that have access to all your network and information systems supporting the essential function(s) is limited to the minimum necessary.",
                  "index": 3
                },
                {
                  "id": "B2.a.A.4",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "You use additional authentication mechanisms, such as multi-factor (MFA), for all user access, including remote access, to all network and information systems that operate or support your essential function(s).",
                  "index": 4
                },
                {
                  "id": "B2.a.A.5",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "The list of users and systems with access to network and information systems supporting and delivering the essential function(s) is reviewed on a regular basis, at least every six months.",
                  "index": 5
                },
                {
                  "id": "B2.a.A.6",
                  "outcomeId": "B2.a",
                  "level": "achieved",
                  "text": "Your approach to authenticating users, devices and systems follows up to date best practice.",
                  "index": 6
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
                  "text": "Users can connect to your network and information systems supporting your essential function(s) using devices that are not corporately owned and managed.",
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
                  "text": "Physically connecting a device to your network and information systems gives that device access without device or user authentication.",
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
                  "text": "You are able to detect unknown devices being connected to your network and information systems and investigate such incidents.",
                  "index": 5
                },
                {
                  "id": "B2.b.A.1",
                  "outcomeId": "B2.b",
                  "level": "achieved",
                  "text": "All privileged operations performed on your network and information systems supporting your essential function(s) are conducted from highly trusted devices, such as Privileged Access Workstations, dedicated solely to those operations.",
                  "index": 1
                },
                {
                  "id": "B2.b.A.2",
                  "outcomeId": "B2.b",
                  "level": "achieved",
                  "text": "You either obtain independent and professional assurance of the security of third-party devices or networks before they connect to your network and information systems, or you only allow third-party devices or networks that are dedicated to supporting your network and information systems to connect.",
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
                  "text": "You perform regular scans to detect unknown devices and investigate any findings.",
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
                  "text": "Privileged user access to your essential function(s) is via generic, shared or default name accounts.",
                  "index": 5
                },
                {
                  "id": "B2.c.NA.6",
                  "outcomeId": "B2.c",
                  "level": "not-achieved",
                  "text": "Where there are \"always on\" terminals which can perform privileged actions (such as in a control room), there are no additional controls (e.g. physical controls) to ensure access is appropriately restricted.",
                  "index": 6
                },
                {
                  "id": "B2.c.NA.7",
                  "outcomeId": "B2.c",
                  "level": "not-achieved",
                  "text": "There is no logical separation between roles that an individual may have and hence the actions they perform (e.g. access to corporate email and privilege user actions).",
                  "index": 7
                },
                {
                  "id": "B2.c.PA.1",
                  "outcomeId": "B2.c",
                  "level": "partially-achieved",
                  "text": "All privileged user access to network and information systems supporting your essential function(s) requires strong authentication, such as multi-factor (MFA).",
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
              "description": "You closely manage and maintain identity and access control for users, devices and systems accessing the network and information systems supporting your essential function(s).",
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
                  "text": "Principle B3 Data Security Data stored or transmitted electronically is protected from actions such as unauthorised access, modification, or deletion that may cause an adverse impact on essential functions. Such protection extends to the means by which authorised users, devices and systems access critical data necessary for the operation of essential functions. It also covers information that would assist an attacker, such as design details of network and information systems.",
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
                  "text": "All user, device and systems access to the systems supporting the essential function(s) is logged and monitored.",
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
                  "text": "Attempts by unauthorised users, devices or systems to connect to the systems supporting the essential function(s) are alerted, promptly assessed and investigated.",
                  "index": 5
                }
              ]
            }
          ]
        },
        {
          "id": "B3",
          "objectiveId": "B",
          "title": "Data Security",
          "description": "Data stored or transmitted electronically is protected from actions such as unauthorised access, modification, or deletion that may cause an adverse impact on essential functions. Such protection extends to the means by which authorised users, devices and systems access critical data necessary for the operation of essential functions. It also covers information that would assist an attacker, such as design details of network and information systems.",
          "outcomes": [
            {
              "id": "B3.a",
              "principleId": "B3",
              "title": "Understanding Data",
              "description": "You have a good understanding of data important to the operation of your essential function(s), where it is stored, where it travels and how unavailability or unauthorised access, modification or deletion would adversely impact the essential function(s). This also applies to third parties storing or accessing data important to the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "B3.a.NA.1",
                  "outcomeId": "B3.a",
                  "level": "not-achieved",
                  "text": "You have incomplete knowledge of what data is used by and produced in the operation of the essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.a.NA.2",
                  "outcomeId": "B3.a",
                  "level": "not-achieved",
                  "text": "You have not identified the important data on which your essential function(s) relies.",
                  "index": 2
                },
                {
                  "id": "B3.a.NA.3",
                  "outcomeId": "B3.a",
                  "level": "not-achieved",
                  "text": "You have not identified who has access to data important to the operation of the essential function(s).",
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
                  "text": "You regularly review location, transmission, quantity and quality of data important to the operation of network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.a.PA.2",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "You have identified and catalogued who has access to the data important to the operation of the essential function(s).",
                  "index": 2
                },
                {
                  "id": "B3.a.PA.3",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "You regularly review location, transmission, quantity and quality of data important to the operation of the essential function(s).",
                  "index": 3
                },
                {
                  "id": "B3.a.PA.4",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "You have identified all mobile devices and media that hold data important to the operation of the essential function(s).",
                  "index": 4
                },
                {
                  "id": "B3.a.PA.5",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "You understand and document the impact on your essential function(s) of all relevant scenarios, including unauthorised data access, modification or deletion, or when authorised users are unable to appropriately access this data.",
                  "index": 5
                },
                {
                  "id": "B3.a.PA.6",
                  "outcomeId": "B3.a",
                  "level": "partially-achieved",
                  "text": "You occasionally validate these documented impact statements.",
                  "index": 6
                },
                {
                  "id": "B3.a.A.1",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You have identified and catalogued all the data important to the operation of the essential function(s), or that would assist an attacker.",
                  "index": 1
                },
                {
                  "id": "B3.a.A.2",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You have identified and catalogued who has access to the data important to the operation of the essential function(s).",
                  "index": 2
                },
                {
                  "id": "B3.a.A.3",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You maintain a current understanding of the location, quantity and quality of data important to the operation of the essential function(s).",
                  "index": 3
                },
                {
                  "id": "B3.a.A.4",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You take steps to remove or minimise unnecessary copies or unneeded historic data.",
                  "index": 4
                },
                {
                  "id": "B3.a.A.5",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You have identified all mobile devices and media that may hold data important to the operation of the essential function(s).",
                  "index": 5
                },
                {
                  "id": "B3.a.A.6",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You maintain a current understanding of the data links used to transmit data that is important to your essential function(s).",
                  "index": 6
                },
                {
                  "id": "B3.a.A.7",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You understand the context, limitations and dependencies of your important data.",
                  "index": 7
                },
                {
                  "id": "B3.a.A.8",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You understand and document the impact on your essential function(s) of all relevant scenarios, including unauthorised data access, modification or deletion, or when authorised users are unable to appropriately access this data.",
                  "index": 8
                },
                {
                  "id": "B3.a.A.9",
                  "outcomeId": "B3.a",
                  "level": "achieved",
                  "text": "You validate these documented impact statements regularly, at least annually.",
                  "index": 9
                }
              ]
            },
            {
              "id": "B3.b",
              "principleId": "B3",
              "title": "Data in Transit",
              "description": "You have protected the transit of data important to the operation of your essential function(s). This includes the transfer of data to third parties.",
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
                  "text": "Critical data paths that could fail, be jammed, be overloaded, etc.",
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
                  "text": "You apply appropriate technical means (e.g. cryptography) to protect data that travels over non-trusted or openly accessible carriers, but you have limited or no confidence in the robustness of the protection applied.",
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
                  "text": "You apply appropriate physical and / or technical means to protect data that travels over non-trusted or openly accessible carriers, with justified confidence in the robustness of the protection applied.",
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
              "description": "You have protected stored soft and hard copy data important to the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "B3.c.NA.1",
                  "outcomeId": "B3.c",
                  "level": "not-achieved",
                  "text": "You have no, or limited, knowledge of where data important to the operation of the essential function(s) is stored.",
                  "index": 1
                },
                {
                  "id": "B3.c.NA.2",
                  "outcomeId": "B3.c",
                  "level": "not-achieved",
                  "text": "You have not protected vulnerable stored data important to the operation of the essential function(s) in a suitable way.",
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
                  "text": "All copies of data important to the operation of your essential function(s) are necessary. Where this important data is transferred to less secure systems, the data is provided with limited detail and / or as a read-only copy.",
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
                  "text": "If cryptographic protections are used, you apply suitable technical and procedural means, but you have limited or no confidence in the robustness of the protection applied.",
                  "index": 3
                },
                {
                  "id": "B3.c.PA.4",
                  "outcomeId": "B3.c",
                  "level": "partially-achieved",
                  "text": "You have suitable, secured backups of data to allow the operation of the essential function(s) to continue should the original data not be available. This may include off-line or segregated backups, or appropriate alternative forms such as paper copies.",
                  "index": 4
                },
                {
                  "id": "B3.c.A.1",
                  "outcomeId": "B3.c",
                  "level": "achieved",
                  "text": "All copies of data important to the operation of your essential function(s) are necessary. Where this important data is transferred to less secure systems, the data is provided with limited detail and / or as a read-only copy.",
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
                  "text": "You have suitable, secured backups of data to allow the operation of the essential function(s) to continue should the original data not be available. This may include off-line or segregated backups, or appropriate alternative forms such as paper copies.",
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
              "description": "You have protected data important to the operation of your essential function(s) on mobile devices.",
              "indicators": [
                {
                  "id": "B3.d.NA.1",
                  "outcomeId": "B3.d",
                  "level": "not-achieved",
                  "text": "You don't know which mobile devices may hold data important to the operation of the essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.d.NA.2",
                  "outcomeId": "B3.d",
                  "level": "not-achieved",
                  "text": "You allow data important to the operation of the essential function(s) to be stored on devices not managed by your organisation, or to at least equivalent standard.",
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
                  "text": "You know which mobile devices hold data important to the operation of the essential function(s).",
                  "index": 1
                },
                {
                  "id": "B3.d.PA.2",
                  "outcomeId": "B3.d",
                  "level": "partially-achieved",
                  "text": "Data important to the operation of the essential function(s) is stored on mobile devices only when they have at least the security standard aligned to your overarching security policies.",
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
                  "text": "Mobile devices that hold data that is important to the operation of the essential function(s) are catalogued, are under your organisation's control and configured according to best practice for the platform, with appropriate technical and procedural policies in place.",
                  "index": 1
                },
                {
                  "id": "B3.d.A.2",
                  "outcomeId": "B3.d",
                  "level": "achieved",
                  "text": "Your organisation can remotely wipe all mobile devices holding data important to the operation of the essential function(s).",
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
              "description": "Before reuse and / or disposal you appropriately sanitise devices, equipment and removable media holding data important to the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "B3.e.NA.1",
                  "outcomeId": "B3.e",
                  "level": "not-achieved",
                  "text": "Some or all devices, equipment or removable media that hold data important to the operation of the essential function(s) are reused or disposed of without sanitisation of that data.",
                  "index": 1
                },
                {
                  "id": "B3.e.NA.2",
                  "outcomeId": "B3.e",
                  "level": "not-achieved",
                  "text": "Principle B4 System Security Network and information systems and technology critical for the operation of essential functions are protected from cyber attack. An organisational understanding of risk to essential functions informs the use of robust and reliable protective security measures to effectively limit opportunities for attackers to compromise networks and systems.",
                  "index": 2
                },
                {
                  "id": "B3.e.PA.1",
                  "outcomeId": "B3.e",
                  "level": "partially-achieved",
                  "text": "Data important to the operations of the essential function(s) is removed from all devices, equipment and removable media before reuse and / or disposal.",
                  "index": 1
                },
                {
                  "id": "B3.e.A.1",
                  "outcomeId": "B3.e",
                  "level": "achieved",
                  "text": "You catalogue and track all devices that contain data important to the operation of the essential function(s) (whether a specific storage device or one with integral storage).",
                  "index": 1
                },
                {
                  "id": "B3.e.A.2",
                  "outcomeId": "B3.e",
                  "level": "achieved",
                  "text": "Data important to the operation of the essential function(s) is removed from all devices, equipment and removable media before reuse and / or disposal using an assured product or service.",
                  "index": 2
                }
              ]
            }
          ]
        },
        {
          "id": "B4",
          "objectiveId": "B",
          "title": "System Security",
          "description": "Network and information systems and technology critical for the operation of essential functions are protected from cyber attack. An organisational understanding of risk to essential functions informs the use of robust and reliable protective security measures to effectively limit opportunities for attackers to compromise networks and systems.",
          "outcomes": [
            {
              "id": "B4.a",
              "principleId": "B4",
              "title": "Secure by Design",
              "description": "You design security into the network and information systems that support the operation of your essential function(s). You minimise their attack surface and ensure that the operation of your essential function(s) should not be impacted by the exploitation of any single vulnerability.",
              "indicators": [
                {
                  "id": "B4.a.NA.1",
                  "outcomeId": "B4.a",
                  "level": "not-achieved",
                  "text": "Systems essential to the operation of the essential function(s) are not appropriately segregated from other systems.",
                  "index": 1
                },
                {
                  "id": "B4.a.NA.2",
                  "outcomeId": "B4.a",
                  "level": "not-achieved",
                  "text": "Internet access is available from network and information systems supporting your essential function(s).",
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
                  "text": "You employ appropriate expertise to design network and information systems.",
                  "index": 1
                },
                {
                  "id": "B4.a.PA.2",
                  "outcomeId": "B4.a",
                  "level": "partially-achieved",
                  "text": "You design strong boundary defences where your network and information systems interface with other organisations or the world at large.",
                  "index": 2
                },
                {
                  "id": "B4.a.PA.3",
                  "outcomeId": "B4.a",
                  "level": "partially-achieved",
                  "text": "You design simple data flows between your network and information systems and any external interface to enable effective monitoring.",
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
                  "text": "You employ appropriate expertise to design network and information systems.",
                  "index": 1
                },
                {
                  "id": "B4.a.A.2",
                  "outcomeId": "B4.a",
                  "level": "achieved",
                  "text": "Your network and information systems are segregated into appropriate security zones (e.g. systems supporting the essential function(s) are segregated in a highly trusted, more secure zone).",
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
                  "text": "The network and information systems supporting your essential function(s) are designed to be easy to recover.",
                  "index": 4
                },
                {
                  "id": "B4.a.A.5",
                  "outcomeId": "B4.a",
                  "level": "achieved",
                  "text": "Content-based attacks are mitigated for all inputs to network and information systems that affect the essential function(s) (e.g. via transformation and inspection).",
                  "index": 5
                }
              ]
            },
            {
              "id": "B4.b",
              "principleId": "B4",
              "title": "Secure Configuration",
              "description": "You securely configure the network and information systems that support the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "B4.b.NA.1",
                  "outcomeId": "B4.b",
                  "level": "not-achieved",
                  "text": "You haven't identified the assets that need to be carefully configured to maintain the security of the essential function(s).",
                  "index": 1
                },
                {
                  "id": "B4.b.NA.2",
                  "outcomeId": "B4.b",
                  "level": "not-achieved",
                  "text": "Policies relating to the security of operating system builds or configuration are not applied consistently across your network and information systems relating to your essential function(s).",
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
                  "id": "B4.b.PA.1",
                  "outcomeId": "B4.b",
                  "level": "partially-achieved",
                  "text": "You have identified and documented the assets that need to be carefully configured to maintain the security of the essential function(s).",
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
                  "text": "Changes and adjustments to security configuration at security boundaries with the network and information systems supporting your essential function(s) are approved and documented.",
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
                  "text": "Generic, shared, default name and built-in accounts have been removed or disabled. Where this is not possible, credentials to these accounts have been changed.",
                  "index": 6
                },
                {
                  "id": "B4.b.A.1",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "You have identified, documented and actively manage (e.g. maintain security configurations, patching, updating according to good practice) the assets that need to be carefully configured to maintain the security of the essential function(s).",
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
                  "text": "You closely and effectively manage changes in your environment, ensuring that network and system configurations are secure and documented.",
                  "index": 3
                },
                {
                  "id": "B4.b.A.4",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "You regularly review and validate that your network and information systems have the expected, secure settings and configuration.",
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
                  "text": "Standard users are not able to change settings that would impact security or the business operation.",
                  "index": 6
                },
                {
                  "id": "B4.b.A.7",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "If automated decision-making technologies are in use, their operation is well understood, and decisions can be replicated.",
                  "index": 7
                },
                {
                  "id": "B4.b.A.8",
                  "outcomeId": "B4.b",
                  "level": "achieved",
                  "text": "Generic, shared, default name and built-in accounts have been removed or disabled. Where this is not possible, credentials to these accounts have been changed.",
                  "index": 8
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
                  "text": "You do not have good or current technical documentation of your network and information systems.",
                  "index": 2
                },
                {
                  "id": "B4.c.PA.1",
                  "outcomeId": "B4.c",
                  "level": "partially-achieved",
                  "text": "Your systems and devices supporting the operation of the essential function(s) are only administered or maintained by authorised privileged users from devices sufficiently separated, using a risk-based approach, from the activities of standard users.",
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
              "description": "You manage known vulnerabilities in your network and information systems to prevent adverse impact on your essential function(s).",
              "indicators": [
                {
                  "id": "B4.d.NA.1",
                  "outcomeId": "B4.d",
                  "level": "not-achieved",
                  "text": "You do not understand the exposure of your essential function(s) to publicly-known vulnerabilities.",
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
                  "text": "You have not recently tested to verify your understanding of the vulnerabilities of the network and information systems that support your essential function(s).",
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
                  "id": "B4.d.NA.6",
                  "outcomeId": "B4.d",
                  "level": "not-achieved",
                  "text": "Principle B5 Resilient Networks and Systems The organisation builds resilience against cyber attack and system failure into the design, implementation, operation and management of systems that support the operation of essential functions.",
                  "index": 6
                },
                {
                  "id": "B4.d.PA.1",
                  "outcomeId": "B4.d",
                  "level": "partially-achieved",
                  "text": "You maintain a current understanding of the exposure of your essential function(s) to publicly-known vulnerabilities.",
                  "index": 1
                },
                {
                  "id": "B4.d.PA.2",
                  "outcomeId": "B4.d",
                  "level": "partially-achieved",
                  "text": "Announced vulnerabilities for all software packages, network and information systems used to support your essential function(s) are tracked, prioritised and externally exposed vulnerabilities are mitigated (e.g. by patching) promptly.",
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
                  "text": "You regularly test to fully understand the vulnerabilities of the network and information systems that support the operation of your essential function(s).",
                  "index": 5
                },
                {
                  "id": "B4.d.A.1",
                  "outcomeId": "B4.d",
                  "level": "achieved",
                  "text": "You maintain a current understanding of the exposure of your essential function(s) to publicly-known vulnerabilities.",
                  "index": 1
                },
                {
                  "id": "B4.d.A.2",
                  "outcomeId": "B4.d",
                  "level": "achieved",
                  "text": "Announced vulnerabilities for all software packages, network and information systems used to support your essential function(s) are tracked, prioritised and mitigated (e.g. by patching) promptly.",
                  "index": 2
                },
                {
                  "id": "B4.d.A.3",
                  "outcomeId": "B4.d",
                  "level": "achieved",
                  "text": "You regularly test to fully understand the vulnerabilities of the network and information systems that support the operation of your essential function(s) and verify this understanding with third-party testing.",
                  "index": 3
                },
                {
                  "id": "B4.d.A.4",
                  "outcomeId": "B4.d",
                  "level": "achieved",
                  "text": "You maximise the use of supported software, firmware and hardware in your network and information systems supporting your essential function(s).",
                  "index": 4
                }
              ]
            }
          ]
        },
        {
          "id": "B5",
          "objectiveId": "B",
          "title": "Resilient Networks and Systems",
          "description": "The organisation builds resilience against cyber attack and system failure into the design, implementation, operation and management of systems that support the operation of essential functions.",
          "outcomes": [
            {
              "id": "B5.a",
              "principleId": "B5",
              "title": "Resilience Preparation",
              "description": "You are prepared to restore the operation of your essential function(s) following adverse impact.",
              "indicators": [
                {
                  "id": "B5.a.NA.1",
                  "outcomeId": "B5.a",
                  "level": "not-achieved",
                  "text": "Any of the following statements are true You have limited understanding of all the elements that are required to restore operation of the essential function(s).",
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
                  "text": "You know all network and information systems, and underlying technologies, that are necessary to restore the operation of the essential function(s) and understand their interdependence.",
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
                  "text": "You have business continuity and disaster recovery plans that have been tested for practicality, effectiveness and completeness.",
                  "index": 1
                },
                {
                  "id": "B5.a.A.2",
                  "outcomeId": "B5.a",
                  "level": "achieved",
                  "text": "Appropriate use is made of different test methods (e.g. manual fail-over, table-top exercises, or red-teaming).",
                  "index": 2
                },
                {
                  "id": "B5.a.A.3",
                  "outcomeId": "B5.a",
                  "level": "achieved",
                  "text": "You use your security awareness and threat intelligence sources to identify new or heightened levels of risk, which result in immediate and potentially temporary security measures to enhance the security of your network and information systems (e.g. in response to a widespread outbreak of very damaging malware).",
                  "index": 3
                }
              ]
            },
            {
              "id": "B5.b",
              "principleId": "B5",
              "title": "Design for Resilience",
              "description": "You design the network and information systems supporting your essential function(s) to be resilient to cyber security incidents. Systems are appropriately segregated and resource limitations are mitigated.",
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
                  "text": "Internet services, such as browsing and email, are accessible from network and information systems supporting the essential function(s).",
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
                  "text": "Internet services are not accessible from network and information systems supporting the essential function(s).",
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
                  "text": "Network and information systems supporting the operation of your essential function(s) are segregated from other business and external systems by appropriate technical and physical means (e.g. separate network and system infrastructure with independent user administration). Internet services are not accessible from network and information systems supporting the essential function(s).",
                  "index": 1
                },
                {
                  "id": "B5.b.A.2",
                  "outcomeId": "B5.b",
                  "level": "achieved",
                  "text": "You have identified and mitigated all resource limitations (e.g. bandwidth limitations and single network paths).",
                  "index": 2
                },
                {
                  "id": "B5.b.A.3",
                  "outcomeId": "B5.b",
                  "level": "achieved",
                  "text": "You have identified and mitigated any geographical constraints or weaknesses. (e.g. systems that your essential function(s) depends upon are replicated in another location, important network connectivity has alternative physical paths and service providers).",
                  "index": 3
                },
                {
                  "id": "B5.b.A.4",
                  "outcomeId": "B5.b",
                  "level": "achieved",
                  "text": "You review and update assessments of dependencies, resource and geographical limitations and mitigations when necessary.",
                  "index": 4
                }
              ]
            },
            {
              "id": "B5.c",
              "principleId": "B5",
              "title": "Backups",
              "description": "You hold accessible and secured current backups of data and information needed to recover operation of your essential function(s).",
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
                  "id": "B5.c.NA.4",
                  "outcomeId": "B5.c",
                  "level": "not-achieved",
                  "text": "Principle B6 Staff Awareness and Training Staff have appropriate awareness, knowledge and skills to carry out their organisational roles effectively in relation to the security of network and information systems supporting the operation of essential functions.",
                  "index": 4
                },
                {
                  "id": "B5.c.PA.1",
                  "outcomeId": "B5.c",
                  "level": "partially-achieved",
                  "text": "You have appropriately secured backups (including data, configuration information, software, equipment, processes and knowledge). These backups will be accessible to recover from an extreme event.",
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
          ]
        },
        {
          "id": "B6",
          "objectiveId": "B",
          "title": "Staff Awareness and Training",
          "description": "Staff have appropriate awareness, knowledge and skills to carry out their organisational roles effectively in relation to the security of network and information systems supporting the operation of essential functions.",
          "outcomes": [
            {
              "id": "B6.a",
              "principleId": "B6",
              "title": "Cyber Security Culture",
              "description": "You develop and maintain a positive cyber security culture.",
              "indicators": [
                {
                  "id": "B6.a.NA.1",
                  "outcomeId": "B6.a",
                  "level": "not-achieved",
                  "text": "People in your organisation don't understand what they contribute to the cyber security of the essential function(s).",
                  "index": 1
                },
                {
                  "id": "B6.a.NA.2",
                  "outcomeId": "B6.a",
                  "level": "not-achieved",
                  "text": "People in your organisation don't know how to raise a concern about cyber security.",
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
                  "text": "Your organisation's approach to cyber security is perceived by staff as hindering the business of the organisation.",
                  "index": 4
                },
                {
                  "id": "B6.a.PA.1",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "Your executive management understand and widely communicate the importance of a positive cyber security culture.",
                  "index": 1
                },
                {
                  "id": "B6.a.PA.2",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "Positive attitudes, behaviours and expectations are described for your organisation.",
                  "index": 2
                },
                {
                  "id": "B6.a.PA.3",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "All people in your organisation understand the contribution they make to the essential function(s) cyber security.",
                  "index": 3
                },
                {
                  "id": "B6.a.PA.4",
                  "outcomeId": "B6.a",
                  "level": "partially-achieved",
                  "text": "All individuals in your organisation know who to contact and where to access more information about cyber security. They know how to raise a cyber security issue.",
                  "index": 4
                },
                {
                  "id": "B6.a.A.1",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "Your executive management clearly and effectively communicates the organisation's cyber security priorities and objectives to all staff. Your organisation displays positive cyber security attitudes, behaviours and expectations.",
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
                  "text": "Your management is seen to be committed to and actively involved in cyber security.",
                  "index": 4
                },
                {
                  "id": "B6.a.A.5",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "Your organisation communicates openly about cyber security, with any concern being taken seriously.",
                  "index": 5
                },
                {
                  "id": "B6.a.A.6",
                  "outcomeId": "B6.a",
                  "level": "achieved",
                  "text": "People across your organisation participate in cyber security activities and improvements, building joint ownership and bringing knowledge of their area of expertise.",
                  "index": 6
                }
              ]
            },
            {
              "id": "B6.b",
              "principleId": "B6",
              "title": "Cyber Security Training",
              "description": "The people who support the operation of your essential function(s) are appropriately trained in cyber security. A range of approaches to cyber security training, awareness and communications are employed.",
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
                  "text": "CAF - Objective C - Detecting cyber security events Capabilities exist to ensure security defences remain effective and to detect cyber security events affecting, or with the potential to affect, essential function(s).",
                  "index": 4
                },
                {
                  "id": "B6.b.NA.5",
                  "outcomeId": "B6.b",
                  "level": "not-achieved",
                  "text": "Principle C1 Security Monitoring The organisation monitors the security status of the network and information systems supporting the operation of essential functions in order to detect potential security problems and to track the ongoing effectiveness of protective security measures.",
                  "index": 5
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
          ]
        }
      ]
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
              "title": "Monitoring Coverage",
              "description": "The data sources that you include in your monitoring allow for timely identification of security events which might affect the operation of your essential function(s).",
              "indicators": [
                {
                  "id": "C1.a.NA.1",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "Data relating to the security and operation of your essential function(s) is not collected.",
                  "index": 1
                },
                {
                  "id": "C1.a.NA.2",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "You do not confidently detect the presence or absence of Indicators of Compromise (IoCs) on your essential function(s), such as known malicious command and control signatures (e.g. because applying the indicator is difficult or your log data is not sufficiently detailed).",
                  "index": 2
                },
                {
                  "id": "C1.a.NA.3",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "You are not able to audit the activities of users in relation to your essential function(s).",
                  "index": 3
                },
                {
                  "id": "C1.a.NA.4",
                  "outcomeId": "C1.a",
                  "level": "not-achieved",
                  "text": "You do not capture any traffic crossing your network boundary including as a minimum IP connections.",
                  "index": 4
                },
                {
                  "id": "C1.a.PA.1",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "Data relating to the security and operation of some areas of your essential function(s) is collected but coverage is not comprehensive.",
                  "index": 1
                },
                {
                  "id": "C1.a.PA.2",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "You easily detect the presence or absence of IoCs on your essential function(s), such as known malicious command and control signatures.",
                  "index": 2
                },
                {
                  "id": "C1.a.PA.3",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "Some user monitoring is done, but not covering a fully agreed list of suspicious or undesirable behaviour.",
                  "index": 3
                },
                {
                  "id": "C1.a.PA.4",
                  "outcomeId": "C1.a",
                  "level": "partially-achieved",
                  "text": "You monitor traffic crossing your network boundary (including IP address connections as a minimum).",
                  "index": 4
                },
                {
                  "id": "C1.a.A.1",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Monitoring is based on an understanding of your networks, common cyber attack methods and what you need awareness of in order to detect potential security incidents that could affect the operation of your essential function(s) (e.g. presence of malware, malicious emails, user policy violations).",
                  "index": 1
                },
                {
                  "id": "C1.a.A.2",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Your monitoring data provides enough detail to reliably detect security incidents that could affect the operation of your essential function(s).",
                  "index": 2
                },
                {
                  "id": "C1.a.A.3",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "You easily detect the presence or absence of IoCs on your essential function(s), such as known malicious command and control signatures.",
                  "index": 3
                },
                {
                  "id": "C1.a.A.4",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "Extensive monitoring of user activity in relation to the operation of your essential function(s) enables you to detect policy violations and an agreed list of suspicious or undesirable behaviour.",
                  "index": 4
                },
                {
                  "id": "C1.a.A.5",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "You have extensive monitoring coverage that includes host-based monitoring and network gateways.",
                  "index": 5
                },
                {
                  "id": "C1.a.A.6",
                  "outcomeId": "C1.a",
                  "level": "achieved",
                  "text": "All new systems are considered as potential monitoring data sources to maintain a comprehensive monitoring capability.",
                  "index": 6
                }
              ]
            },
            {
              "id": "C1.b",
              "principleId": "C1",
              "title": "Securing Logs",
              "description": "You hold log data securely and grant appropriate access only to accounts with business a need. No system or user should ever need to modify or delete master copies of log data within an agreed retention period, after which it should be deleted.",
              "indicators": [
                {
                  "id": "C1.b.NA.1",
                  "outcomeId": "C1.b",
                  "level": "not-achieved",
                  "text": "It is possible for log data to be easily edited or deleted by unauthorised users or malicious attackers.",
                  "index": 1
                },
                {
                  "id": "C1.b.NA.2",
                  "outcomeId": "C1.b",
                  "level": "not-achieved",
                  "text": "There is no controlled list of the users and systems that can view and query log data.",
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
                  "text": "There is no policy for accessing log data.",
                  "index": 4
                },
                {
                  "id": "C1.b.NA.5",
                  "outcomeId": "C1.b",
                  "level": "not-achieved",
                  "text": "Log data is not synchronised, using an accurate common time source.",
                  "index": 5
                },
                {
                  "id": "C1.b.PA.1",
                  "outcomeId": "C1.b",
                  "level": "partially-achieved",
                  "text": "Only authorised staff can view log data for investigations.",
                  "index": 1
                },
                {
                  "id": "C1.b.PA.2",
                  "outcomeId": "C1.b",
                  "level": "partially-achieved",
                  "text": "Authorised users and systems can appropriately access log data.",
                  "index": 2
                },
                {
                  "id": "C1.b.PA.3",
                  "outcomeId": "C1.b",
                  "level": "partially-achieved",
                  "text": "There is some monitoring of access to log data (e.g. copying, deleting, modifying or viewing).",
                  "index": 3
                },
                {
                  "id": "C1.b.A.1",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "The integrity of log data is protected, or any modification is detected and attributed.",
                  "index": 1
                },
                {
                  "id": "C1.b.A.2",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "The logging architecture has mechanisms, policies, processes and procedures to ensure that it can protect itself from threats comparable to those it is trying to identify. This includes protecting the essential function(s) itself, and the data within it.",
                  "index": 2
                },
                {
                  "id": "C1.b.A.3",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "Log data analysis and normalisation is only performed on copies of the data keeping the master copy unaltered.",
                  "index": 3
                },
                {
                  "id": "C1.b.A.4",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "Log data is synchronised, using an accurate common time source, so that separate datasets can be correlated in different ways.",
                  "index": 4
                },
                {
                  "id": "C1.b.A.5",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "Access to log data is limited to those with business need and no others.",
                  "index": 5
                },
                {
                  "id": "C1.b.A.6",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "All actions involving all log data (e.g. copying, deleting, modifying or viewing) can be traced back to a unique user.",
                  "index": 6
                },
                {
                  "id": "C1.b.A.7",
                  "outcomeId": "C1.b",
                  "level": "achieved",
                  "text": "Legitimate reasons for accessing log data are given in use policies.",
                  "index": 7
                }
              ]
            },
            {
              "id": "C1.c",
              "principleId": "C1",
              "title": "Generating Alerts",
              "description": "Evidence of potential security incidents contained in your monitoring data is reliably identified and triggers alerts.",
              "indicators": [
                {
                  "id": "C1.c.NA.1",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "Alerts from third party security software are not investigated (e.g.",
                  "index": 1
                },
                {
                  "id": "C1.c.NA.2",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "Anti-Virus (AV) providers).",
                  "index": 2
                },
                {
                  "id": "C1.c.NA.3",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "Logs are distributed across devices with no easy way to access them other than manual login or physical action.",
                  "index": 3
                },
                {
                  "id": "C1.c.NA.4",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "The resolution of alerts to a network asset or system is not performed.",
                  "index": 4
                },
                {
                  "id": "C1.c.NA.5",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "Security alerts relating to essential function(s) are not prioritised.",
                  "index": 5
                },
                {
                  "id": "C1.c.NA.6",
                  "outcomeId": "C1.c",
                  "level": "not-achieved",
                  "text": "Logs are reviewed infrequently.",
                  "index": 6
                },
                {
                  "id": "C1.c.PA.1",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "Alerts from third party security software are investigated, and action taken.",
                  "index": 1
                },
                {
                  "id": "C1.c.PA.2",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "Some, but not all, log data can be easily queried with search tools to aid investigations.",
                  "index": 2
                },
                {
                  "id": "C1.c.PA.3",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "The resolution of alerts to a network asset or system is performed regularly.",
                  "index": 3
                },
                {
                  "id": "C1.c.PA.4",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "Security alerts relating to some essential function(s) are prioritised.",
                  "index": 4
                },
                {
                  "id": "C1.c.PA.5",
                  "outcomeId": "C1.c",
                  "level": "partially-achieved",
                  "text": "Logs are reviewed at regular intervals.",
                  "index": 5
                },
                {
                  "id": "C1.c.A.1",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Log data is enriched with other network knowledge and data when investigating certain suspicious activity or alerts.",
                  "index": 1
                },
                {
                  "id": "C1.c.A.2",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "A wide range of signatures and indicators of compromise is used for investigations of suspicious activity and alerts.",
                  "index": 2
                },
                {
                  "id": "C1.c.A.3",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Alerts can be easily resolved to network assets using knowledge of networks and systems. The resolution of these alerts is performed in almost real time.",
                  "index": 3
                },
                {
                  "id": "C1.c.A.4",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Security alerts relating to all essential function(s) are prioritised and this information is used to support incident management.",
                  "index": 4
                },
                {
                  "id": "C1.c.A.5",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Logs are reviewed almost continuously, in real time.",
                  "index": 5
                },
                {
                  "id": "C1.c.A.6",
                  "outcomeId": "C1.c",
                  "level": "achieved",
                  "text": "Alerts are tested to ensure that they are generated reliably and that it is possible to distinguish genuine security incidents from false alarms.",
                  "index": 6
                }
              ]
            },
            {
              "id": "C1.d",
              "principleId": "C1",
              "title": "Identifying Security Incidents",
              "description": "You contextualise alerts with knowledge of the threat and your systems, to identify those security incidents that require some form of response.",
              "indicators": [
                {
                  "id": "C1.d.NA.1",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "Your organisation has no sources of threat intelligence.",
                  "index": 1
                },
                {
                  "id": "C1.d.NA.2",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "You do not apply updates in a timely way, after receiving them (e.g. AV signature updates, other threat signatures or Indicators of Compromise (IoCs)).",
                  "index": 2
                },
                {
                  "id": "C1.d.NA.3",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "You do not receive signature updates for all protective technologies such as AV and IDS or other software in use.",
                  "index": 3
                },
                {
                  "id": "C1.d.NA.4",
                  "outcomeId": "C1.d",
                  "level": "not-achieved",
                  "text": "You do not evaluate the usefulness of your threat intelligence or share feedback with providers or other users.",
                  "index": 4
                },
                {
                  "id": "C1.d.PA.1",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "Your organisation uses some threat intelligence services, but you don't necessarily choose sources or providers specifically because of your business needs, or specific threats in your sector (e.g. sector-based infoshare, ICS software vendors, anti-virus providers, specialist threat intel firms, special interest groups).",
                  "index": 1
                },
                {
                  "id": "C1.d.PA.2",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "You receive updates for all your signature based protective technologies (e.g. AV, IDS).",
                  "index": 2
                },
                {
                  "id": "C1.d.PA.3",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "You apply some updates, signatures and IoCs in a timely way.",
                  "index": 3
                },
                {
                  "id": "C1.d.PA.4",
                  "outcomeId": "C1.d",
                  "level": "partially-achieved",
                  "text": "You know how effective your threat intelligence is (e.g. by tracking how threat intelligence helps you identify security problems).",
                  "index": 4
                },
                {
                  "id": "C1.d.A.1",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "You have selected threat intelligence sources or services using risk-based and threat-informed decisions based on your business needs and sector (e.g. vendor reporting and patching, strong anti-virus providers, sector and community-based infoshare, special interest groups).",
                  "index": 1
                },
                {
                  "id": "C1.d.A.2",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "You apply all new signatures and IoCs within a reasonable (risk-based) time of receiving them.",
                  "index": 2
                },
                {
                  "id": "C1.d.A.3",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "You receive signature updates for all your protective technologies (e.g. AV, IDS).",
                  "index": 3
                },
                {
                  "id": "C1.d.A.4",
                  "outcomeId": "C1.d",
                  "level": "achieved",
                  "text": "You track the effectiveness of your intelligence feeds and actively share feedback on the usefulness of IoCs and any other indicators with the threat community (e.g. sector partners, threat intelligence providers, government agencies).",
                  "index": 4
                }
              ]
            },
            {
              "id": "C1.e",
              "principleId": "C1",
              "title": "Monitoring Tools and Skills",
              "description": "Monitoring staff skills, tools and roles, including any that are outsourced, should reflect governance and reporting requirements, expected threats and the complexities of the network or system data they need to use. Monitoring staff have knowledge of the essential function(s) they need to protect.",
              "indicators": [
                {
                  "id": "C1.e.NA.1",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "There are no staff who perform a monitoring function.",
                  "index": 1
                },
                {
                  "id": "C1.e.NA.2",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring staff do not have the correct specialist skills.",
                  "index": 2
                },
                {
                  "id": "C1.e.NA.3",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring staff are not capable of reporting against governance requirements.",
                  "index": 3
                },
                {
                  "id": "C1.e.NA.4",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring staff lack the skills to successfully perform some significant parts of the defined workflow.",
                  "index": 4
                },
                {
                  "id": "C1.e.NA.5",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring tools are only able to make use of a fraction of log data being collected.",
                  "index": 5
                },
                {
                  "id": "C1.e.NA.6",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring tools cannot be configured to make use of new logging streams, as they come online.",
                  "index": 6
                },
                {
                  "id": "C1.e.NA.7",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Monitoring staff have a lack of awareness of the essential function(s) the organisation provides, what assets relate to those functions and hence the importance of the log data and security events.",
                  "index": 7
                },
                {
                  "id": "C1.e.NA.8",
                  "outcomeId": "C1.e",
                  "level": "not-achieved",
                  "text": "Principle C2 Proactive Security Event Discovery The organisation detects, within network and information systems, malicious activity affecting, or with the potential to affect, the operation of essential functions even when the activity evades standard signature based security prevent/detect solutions (or when standard solutions are not deployable).",
                  "index": 8
                },
                {
                  "id": "C1.e.PA.1",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring staff have some investigative skills and a basic understanding of the data they need to work with.",
                  "index": 1
                },
                {
                  "id": "C1.e.PA.2",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring staff can report to other parts of the organisation (e.g. security directors, resilience managers).",
                  "index": 2
                },
                {
                  "id": "C1.e.PA.3",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring staff are capable of following most of the required workflows.",
                  "index": 3
                },
                {
                  "id": "C1.e.PA.4",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Your monitoring tools can make use of logging that would capture most unsophisticated and untargeted attack types.",
                  "index": 4
                },
                {
                  "id": "C1.e.PA.5",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Your monitoring tools work with most log data, with some configuration.",
                  "index": 5
                },
                {
                  "id": "C1.e.PA.6",
                  "outcomeId": "C1.e",
                  "level": "partially-achieved",
                  "text": "Monitoring staff are aware of some essential function(s) and can manage alerts relating to them.",
                  "index": 6
                },
                {
                  "id": "C1.e.A.1",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "You have monitoring staff, who are responsible for the analysis, investigation and reporting of monitoring alerts covering both security and performance.",
                  "index": 1
                },
                {
                  "id": "C1.e.A.2",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring staff have defined roles and skills that cover all parts of the monitoring and investigation process.",
                  "index": 2
                },
                {
                  "id": "C1.e.A.3",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring staff follow policies, processes and procedures that address all governance reporting requirements, internal and external.",
                  "index": 3
                },
                {
                  "id": "C1.e.A.4",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring staff are empowered to look beyond the fixed process to investigate and understand non-standard threats, by developing their own investigative techniques and making new use of data.",
                  "index": 4
                },
                {
                  "id": "C1.e.A.5",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Your monitoring tools make use of all log data collected to pinpoint activity within an incident.",
                  "index": 5
                },
                {
                  "id": "C1.e.A.6",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring staff and tools drive and shape new log data collection and can make wide use of it.",
                  "index": 6
                },
                {
                  "id": "C1.e.A.7",
                  "outcomeId": "C1.e",
                  "level": "achieved",
                  "text": "Monitoring staff are aware of the operation of essential function(s) and related assets and can identify and prioritise alerts or investigations that relate to them.",
                  "index": 7
                }
              ]
            }
          ]
        },
        {
          "id": "C2",
          "objectiveId": "C",
          "title": "Proactive Security Event Discovery",
          "description": "The organisation detects, within networks and information systems, malicious activity affecting, or with the potential to affect, the operation of essential functions even when the activity evades standard signature based security prevent/detect solutions (or when standard solutions are not deployable).",
          "outcomes": [
            {
              "id": "C2.a",
              "principleId": "C2",
              "title": "System Abnormalities for Attack Detection",
              "description": "You define examples of abnormalities in system behaviour that provide practical ways of detecting malicious activity that is otherwise hard to identify.",
              "indicators": [
                {
                  "id": "C2.a.NA.1",
                  "outcomeId": "C2.a",
                  "level": "not-achieved",
                  "text": "Normal system behaviour is insufficiently understood to be able to use system abnormalities to detect malicious activity.",
                  "index": 1
                },
                {
                  "id": "C2.a.NA.2",
                  "outcomeId": "C2.a",
                  "level": "not-achieved",
                  "text": "You have no established understanding of what abnormalities to look for that might signify malicious activities.",
                  "index": 2
                },
                {
                  "id": "C2.a.A.1",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "Normal system behaviour is fully understood to such an extent that searching for system abnormalities is a potentially effective way of detecting malicious activity (e.g. You fully understand which systems should and should not communicate and when).",
                  "index": 1
                },
                {
                  "id": "C2.a.A.2",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "System abnormality descriptions from past attacks and threat intelligence, on yours and other networks, are used to signify malicious activity.",
                  "index": 2
                },
                {
                  "id": "C2.a.A.3",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "The system abnormalities you search for consider the nature of attacks likely to impact on the network and information systems supporting the operation of your essential function(s).",
                  "index": 3
                },
                {
                  "id": "C2.a.A.4",
                  "outcomeId": "C2.a",
                  "level": "achieved",
                  "text": "The system abnormality descriptions you use are updated to reflect changes in your network and information systems and current threat intelligence.",
                  "index": 4
                }
              ]
            },
            {
              "id": "C2.b",
              "principleId": "C2",
              "title": "Proactive Attack Discovery",
              "description": "You use an informed understanding of more sophisticated attack methods and of normal system behaviour to monitor proactively for malicious activity.",
              "indicators": [
                {
                  "id": "C2.b.NA.1",
                  "outcomeId": "C2.b",
                  "level": "not-achieved",
                  "text": "You do not routinely search for system abnormalities indicative of malicious activity.",
                  "index": 1
                },
                {
                  "id": "C2.b.NA.2",
                  "outcomeId": "C2.b",
                  "level": "not-achieved",
                  "text": "CAF - Objective D - Minimising the impact of cyber security incidents Capabilities exist to minimise the adverse impact of a cyber security incident on the operation of essential functions, including the restoration of those function(s) where necessary.",
                  "index": 2
                },
                {
                  "id": "C2.b.NA.3",
                  "outcomeId": "C2.b",
                  "level": "not-achieved",
                  "text": "Principle D1 Response and Recovery Planning There are well-defined and tested incident management processes in place, that aim to ensure continuity of essential function(s) in the event of system or service failure. Mitigation activities designed to contain or limit the impact of compromise are also in place.",
                  "index": 3
                },
                {
                  "id": "C2.b.A.1",
                  "outcomeId": "C2.b",
                  "level": "achieved",
                  "text": "You routinely search for system abnormalities indicative of malicious activity on the network and information systems supporting the operation of your essential function(s), generating alerts based on the results of such searches.",
                  "index": 1
                },
                {
                  "id": "C2.b.A.2",
                  "outcomeId": "C2.b",
                  "level": "achieved",
                  "text": "You have justified confidence in the effectiveness of your searches for system abnormalities indicative of malicious activity.",
                  "index": 2
                }
              ]
            }
          ]
        }
      ]
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
              "description": "You have an up-to-date incident response plan that is grounded in a thorough risk assessment that takes account of your essential function(s) and covers a range of incident scenarios.",
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
                  "text": "Your incident response plan covers your essential function(s).",
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
                  "id": "D1.a.A.1",
                  "outcomeId": "D1.a",
                  "level": "achieved",
                  "text": "Your incident response plan is based on a clear understanding of the security risks to the network and information systems supporting your essential function(s).",
                  "index": 1
                },
                {
                  "id": "D1.a.A.2",
                  "outcomeId": "D1.a",
                  "level": "achieved",
                  "text": "Your incident response plan is comprehensive (i.e. covers the complete lifecycle of an incident, roles and responsibilities, and reporting) and covers likely impacts of both known attack patterns and of possible attacks, previously unseen.",
                  "index": 2
                },
                {
                  "id": "D1.a.A.3",
                  "outcomeId": "D1.a",
                  "level": "achieved",
                  "text": "Your incident response plan is documented and integrated with wider organisational business plans and supply chain response plans, as well as dependencies on supporting infrastructure (e.g. power, cooling etc).",
                  "index": 3
                },
                {
                  "id": "D1.a.A.4",
                  "outcomeId": "D1.a",
                  "level": "achieved",
                  "text": "Your incident response plan is communicated and understood by the business areas involved with the operation of your essential function(s).",
                  "index": 4
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
                  "text": "Your response team members have the skills and knowledge required to decide on the response actions necessary to limit harm, and the authority to carry them out.",
                  "index": 3
                },
                {
                  "id": "D1.b.A.4",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "Key roles are duplicated, and operational delivery knowledge is shared with all individuals involved in the operations and recovery of the essential function(s).",
                  "index": 4
                },
                {
                  "id": "D1.b.A.5",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "Back-up mechanisms are available that can be readily activated to allow continued operation of your essential function(s), although possibly at a reduced level, if primary network and information systems fail or are unavailable.",
                  "index": 5
                },
                {
                  "id": "D1.b.A.6",
                  "outcomeId": "D1.b",
                  "level": "achieved",
                  "text": "Arrangements exist to augment your organisation's incident response capabilities with external support if necessary (e.g. specialist cyber incident responders).",
                  "index": 6
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
                  "id": "D1.c.NA.5",
                  "outcomeId": "D1.c",
                  "level": "not-achieved",
                  "text": "Principle D2 Lessons Learned When an incident occurs, steps are taken to understand its root causes and to ensure appropriate remediating action is taken to protect against future incidents.",
                  "index": 5
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
          ]
        },
        {
          "id": "D2",
          "objectiveId": "D",
          "title": "Lessons Learned",
          "description": "When an incident occurs, steps are taken to understand its root causes and to ensure appropriate remediating action is taken to protect against future incidents.",
          "outcomes": [
            {
              "id": "D2.a",
              "principleId": "D2",
              "title": "Incident Root Cause Analysis",
              "description": "When an incident occurs, steps must be taken to understand its root causes and ensure appropriate remediating action is taken.",
              "indicators": [
                {
                  "id": "D2.a.NA.1",
                  "outcomeId": "D2.a",
                  "level": "not-achieved",
                  "text": "You are not usually able to resolve incidents to a root cause.",
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
                  "id": "D2.a.A.1",
                  "outcomeId": "D2.a",
                  "level": "achieved",
                  "text": "Root cause analysis is conducted routinely as a key part of your lessons learned activities following an incident.",
                  "index": 1
                },
                {
                  "id": "D2.a.A.2",
                  "outcomeId": "D2.a",
                  "level": "achieved",
                  "text": "Your root cause analysis is comprehensive, covering organisational process issues, as well as vulnerabilities in your networks, systems or software.",
                  "index": 2
                },
                {
                  "id": "D2.a.A.3",
                  "outcomeId": "D2.a",
                  "level": "achieved",
                  "text": "All relevant incident data is made available to the analysis team to perform root cause analysis.",
                  "index": 3
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
                  "id": "D2.b.A.1",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "You have a documented incident review process/policy which ensures that lessons learned from each incident are identified, captured, and acted upon.",
                  "index": 1
                },
                {
                  "id": "D2.b.A.2",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "Lessons learned cover issues with reporting, roles, governance, skills and organisational processes as well as technical aspects of network and information systems.",
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
                  "text": "Security improvements identified as a result of lessons learned are prioritised, with the highest priority improvements completed quickly.",
                  "index": 4
                },
                {
                  "id": "D2.b.A.5",
                  "outcomeId": "D2.b",
                  "level": "achieved",
                  "text": "Analysis is fed to senior management and incorporated into risk management and continuous improvement.",
                  "index": 5
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
