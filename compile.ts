export async function listFilesRecursive(
  dir: string,
  base: string = dir,
): Promise<string[]> {
  const files: string[] = [];

  for await (const entry of Deno.readDir(dir)) {
    const fullPath = `${dir}/${entry.name}`;
    const relativePath = fullPath.replace(base + "/", "");

    if (entry.isFile) {
      files.push(relativePath);
    } else if (entry.isDirectory) {
      const subFiles = await listFilesRecursive(fullPath, base);
      files.push(...subFiles);
    }
  }

  return files;
}

const paths = await listFilesRecursive("./public/");

const exportsNeeded = paths.map((path) => {
    let output;
    const ext = path.match(/\.[0-9a-z]{1,5}$/i)[0];
    if (ext == ".html" || ext == ".js" || ext == ".css" || ext == ".json") {
        output = `export const ${path.replaceAll(".", "DOT").replaceAll("/", "SLASH").replaceAll("-", "DASH")} = \`${encodeURIComponent(Deno.readTextFileSync("./public/"+path))}\`;`;
    } else  {
        const bytes = Array.from(Deno.readFileSync("./public/"+path)).join(",");
        output = `export const ${path.replaceAll(".", "DOT").replaceAll("/", "SLASH").replaceAll("-", "DASH")} = new Uint8Array([${bytes}]);\n`;
    }

    return output;
});

Deno.writeTextFileSync("publicEmbed.ts", exportsNeeded.join("\n"));

const fileThingyidk = Deno.readTextFileSync("index.ts").replace('app.use(express.static("public"));', `
    app.use(
            "",
            (
                req,
                res,
                next
            ) => {
                let data = publicEmbed[req.originalUrl.slice(1).replaceAll(".", "DOT").replaceAll("/", "SLASH").replaceAll("-", "DASH")];
    
                if (typeof data === "string") {
    
                    data = decodeURIComponent(data);
    
                    let contentType = "text";
    
                    const extension = req.originalUrl.match(/\.[0-9a-z]{1,5}$/i)[0];
                    console.log(extension);
    
                    if (extension == ".html") {
                        contentType = "text/html";
                    } else if (extension == ".css") { 
                        contentType = "text/css";
                    } else if (extension == ".js") {
                        contentType = "text/javascript";
                    }
                    
                    res.set("Content-Type", contentType);
                }
    
                res.send(data);
            }
        );
`);

Deno.writeTextFileSync("indexTemp.ts", `import * as publicEmbed from "./publicEmbed.ts";\n`+fileThingyidk);

const command = new Deno.Command(Deno.execPath(), {
    args: [
        "compile",
        "--allow-all",
        "--no-check",
        "-o", 
        "dashboard",
        "--icon",
        "public/favicon.ico",
        "indexTemp.ts",
        "production",
    ]
});

command.spawn();