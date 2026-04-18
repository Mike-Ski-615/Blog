import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/Center/SectionHeader";
import { useIntl } from "react-intl";

type Experience = {
  id: string;
  organizationId: string;
  roleId: string;
  employmentTypeId?: string;
  periodId: string;
  locationId: string;
  logoText: string;
  highlightIds: string[];
};

const experiences: Experience[] = [
  {
    id: "shanghai-byte-intern",
    organizationId: "experiences.shanghaiByteIntern.organization",
    roleId: "experiences.shanghaiByteIntern.role",
    employmentTypeId: "experiences.shanghaiByteIntern.employmentType",
    periodId: "experiences.shanghaiByteIntern.period",
    locationId: "experiences.shanghaiByteIntern.location",
    logoText: "B",
    highlightIds: [
      "experiences.shanghaiByteIntern.highlight.1",
      "experiences.shanghaiByteIntern.highlight.2",
      "experiences.shanghaiByteIntern.highlight.3",
    ],
  },
  {
    id: "shenzhen-commerce-intern",
    organizationId: "experiences.shenzhenCommerceIntern.organization",
    roleId: "experiences.shenzhenCommerceIntern.role",
    employmentTypeId: "experiences.shenzhenCommerceIntern.employmentType",
    periodId: "experiences.shenzhenCommerceIntern.period",
    locationId: "experiences.shenzhenCommerceIntern.location",
    logoText: "S",
    highlightIds: [
      "experiences.shenzhenCommerceIntern.highlight.1",
      "experiences.shenzhenCommerceIntern.highlight.2",
      "experiences.shenzhenCommerceIntern.highlight.3",
    ],
  },
  {
    id: "hangzhou-cloud-engineer",
    organizationId: "experiences.hangzhouCloudEngineer.organization",
    roleId: "experiences.hangzhouCloudEngineer.role",
    employmentTypeId: "experiences.hangzhouCloudEngineer.employmentType",
    periodId: "experiences.hangzhouCloudEngineer.period",
    locationId: "experiences.hangzhouCloudEngineer.location",
    logoText: "H",
    highlightIds: [
      "experiences.hangzhouCloudEngineer.highlight.1",
      "experiences.hangzhouCloudEngineer.highlight.2",
      "experiences.hangzhouCloudEngineer.highlight.3",
    ],
  },
];

function ExperienceItem({
  experience,
  intl,
}: {
  experience: Experience;
  intl: ReturnType<typeof useIntl>;
}) {
  return (
    <AccordionItem
      value={experience.id}
      className="group mx-1 border-b-0 px-4 transition-colors hover:bg-muted/40"
    >
      <AccordionTrigger className="hover:no-underline">
        <div className="flex w-full flex-col items-start justify-between pr-2 sm:flex-row">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border bg-background shadow-sm">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                {experience.logoText}
              </div>
            </div>

            <div className="min-w-0 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold leading-none">
                  {intl.formatMessage({ id: experience.organizationId })}
                </h3>
                {experience.employmentTypeId && (
                  <Badge variant="outline">
                    {intl.formatMessage({ id: experience.employmentTypeId })}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {intl.formatMessage({ id: experience.roleId })}
              </p>
            </div>
          </div>

          <div className="mt-2 text-sm text-muted-foreground md:mt-0 md:text-right">
            <p className="text-base font-semibold">
              {intl.formatMessage({ id: experience.periodId })}
            </p>
            <p className="text-base text-muted-foreground">
              {intl.formatMessage({ id: experience.locationId })}
            </p>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <ul className="mt-2 flex flex-col gap-2 pl-2 text-sm text-muted-foreground md:pl-5">
          {experience.highlightIds.map((highlightId) => (
            <li key={highlightId}>{intl.formatMessage({ id: highlightId })}</li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

export default function Experiences() {
  const intl = useIntl();

  return (
    <>
      <SectionHeader>
        {intl.formatMessage({ id: "introduce.experiences" })}
      </SectionHeader>

      <Accordion type="single" collapsible>
        {experiences.map((experience, index) => (
          <div key={experience.id}>
            <ExperienceItem experience={experience} intl={intl} />
            {index < experiences.length - 1 && (
              <div className="double-divider" />
            )}
          </div>
        ))}
      </Accordion>
    </>
  );
}
