import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  createProfile,
  profileSchema,
} from "@/server/functions/profiles";
import z from "zod";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { toast } from "sonner";
import { getProfileIdServerFn, setProfileIdServerFn } from "@/lib/session";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const profileId = await getProfileIdServerFn();
    if (profileId) {
      throw redirect({ to: "/quizz" });
    }
  },
  component: ProfileForm,
});
function ProfileForm() {
  const defaultValues: z.infer<typeof profileSchema> = {
    degree: "bba",
    name: "",
    college: "",
  };
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: defaultValues,
    validators: {
      onSubmit: profileSchema,
    },
    onSubmit: async ({ value }) => {
      const profile = await createProfile({
        data: {
          degree: value.degree,
          name: value.name,
        },
      });
      await setProfileIdServerFn({ data: { id: profile.id } });
      toast("Profile Created Succesfully");
      navigate({ to: "/quizz" });
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-card rounded-3xl shadow-xl p-6 mb-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-card-foreground mb-2">
              Welcome to MBTI Quiz
            </h2>
            <p className="text-sm text-muted-foreground">
              Enter your details to start the personality assessment
            </p>
          </div>

          <form
            id="profile-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup className="space-y-4">
              <form.Field
                name="name"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} className="text-foreground font-medium">
                        Name *
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Enter your name"
                        className="h-12 rounded-xl"
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              <form.Field
                name="college"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} className="text-foreground font-medium">
                        College
                      </FieldLabel>

                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ""}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter college name"
                        className="h-12 rounded-xl"
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              <form.Field
                name="degree"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} className="text-foreground font-medium">
                        Degree *
                      </FieldLabel>
                      <Select
                        value={field.state.value}
                        onValueChange={(v) => field.handleChange(v)}
                      >
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Choose your degree" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="mba">M.B.A</SelectItem>
                          <SelectItem value="bba">B.B.A</SelectItem>
                        </SelectContent>
                      </Select>

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </div>

        <div className="px-4">
          <Button 
            type="submit" 
            form="profile-form"
            className="w-full h-12 rounded-xl font-semibold text-base"
          >
            Start Quiz →
          </Button>
        </div>
      </div>
    </div>
  );
}
