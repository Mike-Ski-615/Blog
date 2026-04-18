import { useId, useState, type FormEvent } from "react";
import { useIntl } from "react-intl";
import SectionHeader from "@/components/Center/SectionHeader";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const intl = useIntl();
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (value: string) => {
    const nextEmail = value.trim();

    if (!nextEmail) {
      return intl.formatMessage({ id: "newsletter.error.required" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextEmail)) {
      return intl.formatMessage({ id: "newsletter.error.invalid" });
    }

    return "";
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextError = validateEmail(email);
    setError(nextError);

    if (nextError) {
      setIsSubmitted(false);
      return;
    }

    setEmail("");
    setIsSubmitted(true);
  };

  return (
    <>
      <SectionHeader>
        {intl.formatMessage({ id: "newsletter.title" })}
      </SectionHeader>

      <div className="bg-striped p-4 sm:p-8">
        <form
          noValidate
          aria-label={intl.formatMessage({ id: "newsletter.formLabel" })}
          className="grid w-full gap-3 sm:grid-cols-[minmax(0,1fr)_7.5rem] sm:items-start"
          onSubmit={onSubmit}
        >
          <Field
            data-invalid={error ? true : undefined}
            className="min-w-0 gap-1"
          >
            <FieldLabel htmlFor={emailId} className="sr-only">
              {intl.formatMessage({ id: "newsletter.emailLabel" })}
            </FieldLabel>

            <div className="rounded-lg border border-border bg-background p-0.5">
              <Input
                id={emailId}
                type="email"
                autoComplete="email"
                value={email}
                placeholder={intl.formatMessage({
                  id: "newsletter.placeholder",
                })}
                aria-invalid={Boolean(error)}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                  setIsSubmitted(false);
                }}
                className="h-9.5 rounded-md border-border bg-background transition-all duration-300 placeholder:select-none autofill:shadow-[inset_0_0_0_1000px_var(--background)] autofill:[-webkit-text-fill-color:var(--foreground)]"
              />
            </div>

            {error ? <FieldError>{error}</FieldError> : null}
          </Field>

          <Button type="submit" className="h-10.5 w-full rounded-lg">
            {intl.formatMessage({ id: "newsletter.submit" })}
          </Button>
        </form>

        {isSubmitted && (
          <p className="mt-4 text-sm text-muted-foreground">
            {intl.formatMessage({ id: "newsletter.success" })}
          </p>
        )}
      </div>
    </>
  );
}
