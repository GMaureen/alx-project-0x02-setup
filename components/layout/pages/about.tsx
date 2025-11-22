import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="p-6 flex flex-col gap-4">
        <Button size="small" shape="rounded-sm" label="Small Rounded" />
        <Button size="medium" shape="rounded-md" label="Medium Rounded" />
        <Button size="large" shape="rounded-full" label="Large Rounded Full" />
      </div>
    </>
  );
}
