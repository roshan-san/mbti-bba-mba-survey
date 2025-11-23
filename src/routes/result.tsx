import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { personalityTypes } from '@/data/personality-types';
import { Badge } from '@/components/ui/badge';
import { getPersonalityTypeServerFn, getProfileIdServerFn, clearSessionServerFn } from '@/lib/session';
import { getProfile } from '@/server/functions/profiles';

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

  const handleRetakeQuiz = async () => {
    await clearSessionServerFn();
    navigate({ to: "/" });
  };

  const handleStartNew = async () => {
    await clearSessionServerFn();
    navigate({ to: "/" });
  };

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

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile App Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-lg font-bold text-foreground">
            Your Results
          </h1>
          <p className="text-sm text-muted-foreground">
            {profile?.name ? `Congratulations, ${profile.name}!` : "Congratulations!"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6 pb-24">
        {/* Personality Type Card */}
        <div className="bg-card rounded-3xl shadow-xl p-6 mb-6 text-center">
          <div className="mb-4">
            <Badge 
              variant="outline" 
              className="text-3xl font-bold px-6 py-3 border-2 border-primary text-primary"
            >
              {personalityType}
            </Badge>
          </div>
          <h2 className="text-2xl font-bold text-card-foreground mb-3">
            {typeInfo.name}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {typeInfo.description}
          </p>
        </div>

        {/* Traits Card */}
        <div className="bg-card rounded-3xl shadow-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-card-foreground mb-4">
            Key Traits
          </h3>
          <div className="flex flex-wrap gap-2">
            {typeInfo.traits.map((trait, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm px-4 py-2"
              >
                {trait}
              </Badge>
            ))}
          </div>
        </div>

        {/* Thank You Message */}
        <div className="bg-primary rounded-3xl shadow-xl p-6 mb-6 text-center">
          <p className="text-primary-foreground font-semibold text-base">
            🎉 Thank you for completing the MBTI personality assessment!
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
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
              onClick={handleStartNew}
              className="flex-1 h-12 rounded-xl font-semibold"
            >
              New Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
