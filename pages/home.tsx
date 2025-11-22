import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6 grid gap-4">
      <Card
        title="Welcome to the Dashboard"
        content="This is your home page where you can view quick summaries."
      />

      <Card
        title="Recent Updates"
        content="Here you will see your latest notifications or changes."
      />

      <Card
        title="Profile Overview"
        content="Manage your personal information and preferences."
      />
    </div>
  );
}
