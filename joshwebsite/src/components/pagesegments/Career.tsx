import { useState } from "react";
import type { ReactNode } from "react";

type AccordionItemProps = {
    title: string;
    company: string;
    dateRange: string;
    isPresent?: boolean;
    details: ReactNode[];
};

const AccordionItem = ({ title, company, dateRange, isPresent = false, details, defaultOpen = false }: AccordionItemProps & { defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="relative flex gap-6">
            {/* Timeline line and dot */}
            <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full border-4 border-base-100 shadow-lg z-10 ${
                    isPresent ? "bg-success" : "bg-primary"
                }`} />
                <div className="w-0.5 h-full bg-base-300 -mt-1" />
            </div>

            {/* Content card */}
            <div className="flex-1 pb-8">
                <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="card-body p-5">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div>
                                <h3 className="card-title text-lg font-semibold text-base-content">
                                    {title}
                                </h3>
                                <p className="text-base-content/70 text-sm">{company}</p>
                            </div>
                            <span className={`badge badge-sm ${
                                isPresent ? "badge-success gap-1" : "badge-outline"
                            }`}>
                                {isPresent && <span className="w-2 h-2 rounded-full bg-success animate-pulse" />}
                                {dateRange}
                            </span>
                        </div>

                        {/* Clean inline expand/collapse */}
                        <div className="mt-2">
                            {isOpen ? (
                                <div className="space-y-2 animate-fade-in">
                                    {details}
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(true)}
                                    className="text-sm text-secondary hover:text-secondary/80 font-medium transition-colors"
                                >
                                    + View details
                                </button>
                            )}
                            {isOpen && (
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm text-base-content/50 hover:text-base-content/70 font-medium transition-colors mt-2"
                                >
                                    − Hide details
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Career = () => {
    return (
        <div id="careerseg" className="scroll-mt-20">
            <div className="max-w-3xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-section font-bold text-base-content">Career</h2>
                    <p className="text-base-content/60 mt-2">My professional journey</p>
                </div>

                {/* Timeline */}
                <div className="pl-4">
                    <AccordionItem
                        title="Principal Cloud Architect"
                        company="Objective Corporation"
                        dateRange="July 2023 - Present"
                        isPresent={true}
                        defaultOpen={true}
                        details={[
                            <li key="1" className="text-sm text-base-content/80">Develop cloud strategy, adoption roadmaps, CI/CD best practices for Objective products</li>,
                            <li key="2" className="text-sm text-base-content/80">Lead platform design for AI development initiatives, container systems, leading edge technology</li>,
                            <li key="3" className="text-sm text-base-content/80">Work with CTO, CISO and Platform Directors on overarching cloud strategy</li>,
                            <li key="4" className="text-sm text-base-content/80">Design systems compliant to ISM/IRAP, PCI DSS, ISO27001, NZ-ISM</li>,
                            <li key="5" className="text-sm text-base-content/80">Senior point of reference for customer due diligence and security reviews</li>
                        ]}
                    />

                    <AccordionItem
                        title="Global DevOps Team Lead"
                        company="Objective Corporation"
                        dateRange="May 2018 - July 2023"
                        details={[
                            <li key="1" className="text-sm text-base-content/80">Team lead for engineers in Australia and overseas</li>,
                            <li key="2" className="text-sm text-base-content/80">Responsible for application performance, stability and security decisions</li>,
                            <li key="3" className="text-sm text-base-content/80">Daily operations across Australia, USA, UK, New Zealand and Asia</li>,
                            <li key="4" className="text-sm text-base-content/80">Hands-on building, design, creation of new systems</li>,
                            <li key="5" className="text-sm text-base-content/80">Mentorship and education of team members</li>,
                            <li key="6" className="text-sm text-base-content/80">Trusted SME for executive decisions on technology strategy</li>
                        ]}
                    />

                    <AccordionItem
                        title="Payments Cloud Services Team Lead"
                        company="MYOB"
                        dateRange="April 2017 - May 2018"
                        details={[
                            <li key="1" className="text-sm text-base-content/80">Responsible for high availability PCI DSS Level 1 environment in AWS</li>,
                            <li key="2" className="text-sm text-base-content/80">Led annual PCI DSS Level 1 assessments</li>,
                            <li key="3" className="text-sm text-base-content/80">Key role in DevOps/CI/CD for payment systems servicing 65 million credit cards monthly</li>,
                            <li key="4" className="text-sm text-base-content/80">Built highly skilled engineering team after acquisition of Paycorp International</li>
                        ]}
                    />

                    <AccordionItem
                        title="Global Operations Manager"
                        company="Paycorp International"
                        dateRange="November 2015 - January 2018"
                        details={[
                            <li key="1" className="text-sm text-base-content/80">Day to day operations of payments platform (credit card and bank transactions)</li>,
                            <li key="2" className="text-sm text-base-content/80">Managed teams in Sydney and Sri Lanka</li>,
                            <li key="3" className="text-sm text-base-content/80">Led annual PCI DSS Level 1 assessments and ongoing company security</li>,
                            <li key="4" className="text-sm text-base-content/80">Engineering design for next-gen payments platforms in AWS and Azure</li>,
                            <li key="5" className="text-sm text-base-content/80">Built integrations for banks and enterprise customers</li>
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Career;