export default function Home() {
  return (
    <div className="relative hidden h-screen flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(/home.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
