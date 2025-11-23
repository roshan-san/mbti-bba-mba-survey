import { ModeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-foreground">
              MBTI Quiz
            </h1>
            <p className="text-xs text-muted-foreground">
              For Business Administration Students
            </p>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
