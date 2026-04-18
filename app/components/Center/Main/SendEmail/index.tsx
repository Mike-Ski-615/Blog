import { Button } from "@/components/ui/button";
import { IconMail } from "@tabler/icons-react";
import { useIntl } from "react-intl";

export default function SendEmail() {
  const intl = useIntl();

  return (
    <Button size="sm" variant="outline">
      <IconMail data-icon="inline-start" />
      {intl.formatMessage({ id: "sendEmail.cta" })}
    </Button>
  );
}
