import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { personalityTypes } from '@/data/personality-types';
import { Badge } from '@/components/ui/badge';
import { getPersonalityTypeServerFn, getProfileIdServerFn, clearSessionServerFn } from '@/lib/session';
import { getProfile } from '@/server/functions/profiles';
import { useRef } from 'react';
import { toJpeg } from "html-to-image";


export const Route = createFileRoute('/result')({
  component: RouteComponent,
  loader: async () => {
    const personalityType = await getPersonalityTypeServerFn();
    if (!personalityType) {
      throw redirect({ to: "/" });
    }
    const profileId = await getProfileIdServerFn();
    let profile = null;
    if (profileId) {
      profile = await getProfile({ data: { id: profileId } });
    }
    return { personalityType, profile };
  },
});

function RouteComponent() {
  const navigate = useNavigate();
  const { personalityType, profile } = Route.useLoaderData();
  const typeInfo = personalityTypes[personalityType];

  const downloadImage = () => {
  if (!pageRef.current) return;

  toJpeg(pageRef.current, { quality: 0.95 })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "personality-result.jpg";
      link.href = dataUrl;
      link.click();
    })
    .catch(console.error);
}
  const handleRetakeQuiz = async () => {
    await clearSessionServerFn();
    navigate({ to: "/" });
  };

  // const handleStartNew = async () => {
  //   await clearSessionServerFn();
  //   navigate({ to: "/" });
  // };

  if (!typeInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>Personality type not found</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleRetakeQuiz}>Retake Quiz</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">
            Your Results
          </h1>
          <p className="text-xl text-primary">
            {profile?.name ? `Congratulations, ${profile.name}!` : "Congratulations!"}
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 pb-24">
        <div className="bg-card rounded-3xl shadow-xl p-6 mb-6 text-center">
          <div className="mb-4">
            <Badge 
              variant="default" 
              className="text-3xl font-bold px-6 py-3 border-2 border-primary text-primary-foreground"
            >
              {personalityType}
            </Badge>
          </div>
          <h2 className="text-2xl font-bold text-card-foreground mb-3">
            {typeInfo.name}
          </h2>
          <Badge  variant="secondary" className="text-base bg-green-200 text-primary-foreground leading-relaxed">
            {typeInfo.description}
          </Badge>
        </div>

        <div className="bg-card rounded-3xl shadow-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-card-foreground mb-4">
            Your Suitable Roles in Business are 
          </h3>
          <div className="flex flex-wrap gap-2">
            {typeInfo.traits.map((trait, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm px-2 py-2"
              >
                {trait}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-3xl shadow-xl p-6 text-center">
          <p className="text-primary-foreground font-semibold text-base">
            🎉 Thank you for completing the MBTI personality assessment!
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex gap-3">
            <Button
              onClick={handleRetakeQuiz}
              variant="outline"
              className="flex-1 h-12 rounded-xl font-semibold"
            >
              Retake Quiz
            </Button>
            <Button
              onClick={downloadImage}
              className="flex-1 h-12 rounded-xl font-semibold"
            >
              Downlooad my Card
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
