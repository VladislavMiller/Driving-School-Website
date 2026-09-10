import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const root = new URL("../", import.meta.url);
const rl = createInterface({ input, output });

try {
  const slug = (process.argv[2] ?? await rl.question("Prospect slug (e.g. city-drive): ")).trim().toLowerCase();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error("Use lowercase letters, numbers and single hyphens only.");
  const businessName = (process.argv[3] ?? await rl.question("Business name: ")).trim();
  if (businessName.length < 2) throw new Error("Business name is required.");
  const target = new URL(`src/data/prospects/${slug}.ts`, root);
  try {
    await access(target, constants.F_OK);
    throw new Error(`Prospect already exists: src/data/prospects/${slug}.ts`);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
  const template = await readFile(new URL("src/data/prospect-template.ts", root), "utf8");
  const safeName = businessName.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
  const prospect = template
    .replace('from "./site"', 'from "../site"')
    .replaceAll("REPLACE: prospect-slug", slug)
    .replaceAll("REPLACE: business name", safeName);
  await mkdir(new URL("src/data/prospects/", root), { recursive: true });
  await writeFile(target, prospect, { flag: "wx" });
  await writeFile(new URL("src/data/active-site.ts", root), `/** Active build: prospect preview '${slug}'. */\nexport { siteData } from "./prospects/${slug}";\nexport type { Course } from "./site";\n`);
  output.write(`\nCreated and activated src/data/prospects/${slug}.ts\nNext: replace every REPLACE value, add permitted assets, then run npm run qa.\n`);
} catch (error) {
  output.write(`\nCould not create prospect: ${error.message}\n`);
  process.exitCode = 1;
} finally {
  rl.close();
}
