import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ShortNotes: React.FC = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    const notes = [
        {
            title: "Historical Foundations & Basic Concepts",
            content: [
                "Etymology: 'Oikos' (household) + 'Logos' (study)",
                "Key Historical Figures:",
                "• Theophrastus: 'Father of Botany,' authored Enquiry into Plants",
                "• Humboldt: 'Father of Biogeography,' studied organism distribution patterns",
                "• Linnaeus: Created the hierarchical classification system",
                "• Malthus: Essay on Population",
                "  - Geometric population growth vs. arithmetic food supply",
                "  - Positive checks: War, famine",
                "  - Preventive checks: Foresight, family planning"
            ]
        },
        {
            title: "Core Ecological Concepts",
            content: [
                "Definition: Study of interactions determining organism distribution and abundance",
                "Hierarchy:",
                "• From subcellular (mitochondria) to biosphere",
                "• Shows stable emergent structures at each level",
                "Species Concept: Interbreeding natural populations reproductively isolated from others",
                "Research Methods:",
                "• Laboratory experiments",
                "• Field observations",
                "• Genetic analysis",
                "• Remote sensing",
                "Sampling Techniques:",
                "• Simple random",
                "• Systematic",
                "• Quadrat",
                "• Mark-recapture (not pelt counts for absolute density)",
                "• Cover boards (specifically for herpetofauna)"
            ]
        },
        {
            title: "Population Dynamics",
            content: [
                "Measurements:",
                "• Size",
                "• Density (absolute and relative)",
                "• Juvenile mortality rate (annual deaths per 1,000 live births)",
                "Fitness Concepts:",
                "• Reproductive rate ≠ fitness",
                "• Influenced by traits (size, speed, survival)",
                "• Hamilton's Rule: rB>C (relatedness × benefit > cost)",
                "Growth Models:",
                "• Logistic Growth: S-shaped curve",
                "• Demographic Transition: Society shifts from high birth/death rates to low",
                "• Maximum Sustainable Yield: Optimal harvest point on logistic curve",
                "Population Control Factors:",
                "• Deterministic: Death rate, birth rate",
                "• Stochastic: Environmental fluctuations, random events",
                "• Ludwig's Ratchet: Increasing harvest rates under environmental pressure"
            ]
        },
        {
            title: "Community Ecology & Succession",
            content: [
                "Community Characteristics:",
                "• Species diversity",
                "• Structure",
                "• Dominance",
                "• Importance Value Index (IVI): Ranges from 0 to 300",
                "  - Calculated as sum of:",
                "  - Relative Frequency = (Species frequency / Total frequency) × 100",
                "  - Relative Density = (Species density / Total density) × 100",
                "  - Relative Dominance = (Species dominance / Total dominance) × 100",
                "Succession Types:",
                "• Primary (lithosere): Rocks to climax",
                "• Secondary: Post-disturbance",
                "• Intermediate Disturbance Hypothesis: Maximum biodiversity at intermediate disturbance levels",
                "Species Roles:",
                "• Pioneer Species: Early colonizers (size not a characteristic)",
                "• Keystone Species: Critical ecosystem role (e.g., figs)",
                "• Flagship Species: Conservation icons"
            ]
        },
        {
            title: "Ecological Interactions & Behavior",
            content: [
                "Interaction Types:",
                "• Mutualism (+,+)",
                "• Competition (-,-)",
                "• Predation (+,-)",
                "• Parasitism (+,-)",
                "• Commensalism (+,0)",
                "• Amensalism (-,0)",
                "Examples:",
                "• Protocooperation: Birds on giraffes",
                "• Allelopathy: Teak impacting vegetable plants",
                "Animal Behavior:",
                "• Allo-grooming",
                "• Ethogram construction"
            ]
        },
        {
            title: "Environmental Factors & Distribution",
            content: [
                "Range Determination:",
                "• Transplantation experiments for potential range",
                "• Liebig's Law: Growth limited by scarcest resource",
                "• Shelford's Law: Environmental tolerance limits",
                "• Match-Mismatch Hypothesis: Explains El Niño impact on fisheries",
                "Aquatic Systems:",
                "• Glacial lakes as oligotrophic examples",
                "• Resource Equation: R + G = M + F"
            ]
        },
        {
            title: "Conservation & Environmental Challenges",
            content: [
                "Conservation Strategies:",
                "• In-situ: Natural habitat",
                "• Ex-situ: Controlled environments",
                "Restoration Ecology:",
                "• Focus on ecosystem benefit (not scientist engagement)",
                "• Methods: Phytoremediation, replacement",
                "Threats (HIPPO):",
                "• Habitat loss",
                "• Invasive species",
                "• Pollution",
                "• Population growth",
                "• Overharvesting",
                "Debris Classification:",
                "• Mesodebris: 5-20 mm",
                "• Macrodebris: >20 mm"
            ]
        },
        {
            title: "Climate Change & Adaptation",
            content: [
                "Adaptation Concepts:",
                "• Adaptive Capacity: System's potential for change",
                "• Maladaptation: Changes that increase vulnerability",
                "Climate Factors:",
                "• Plate tectonics",
                "• Earth's orbit",
                "• Solar intensity",
                "Impact Assessment:",
                "• Environmental Impact: I = P × A × T",
                "• Sustainability pillars: Social, environmental, economic"
            ]
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Short Notes</h2>
            {notes.map((section, index) => (
                <div key={index} className="mb-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                    >
                        <h3 className="text-lg font-semibold">{section.title}</h3>
                        {expandedSection === index ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </div>
                    {expandedSection === index && (
                        <ul className="mt-2 list-disc list-inside">
                            {section.content.map((item, itemIndex) => (
                                <li key={itemIndex} className="ml-4 list-none">{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ShortNotes;

