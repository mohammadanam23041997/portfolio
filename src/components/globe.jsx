import IconCloud from "./ui/icon-cloud";

const slugs = [
  "react",
  "angular",
  "typescript",
  "javascript",
  "html5",
  "css3",
  "nodedotjs",
  "java",
  "python",
  "mysql",
  "express",
  "azure",
  "git",
  "vercel",
  "visualstudiocode",
];


function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
