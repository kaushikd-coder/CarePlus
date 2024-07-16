import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"

export default function Home() {

  const { setTheme } = useTheme()

  return (
    <>
      <h1 className="text-blue-400" onClick={() => setTheme("light")}>Home</h1>
      <Button >Click me</Button>
    </>
  );
}
