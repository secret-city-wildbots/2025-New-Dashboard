import * as esbuild from "https://deno.land/x/esbuild@v0.20.0/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.9.0/mod.ts";
import chalk from "npm:chalk";

export async function build(entryPoint:string, outfile:string) {
    await esbuild.build({
        entryPoints: [entryPoint],
        bundle: true,
        outfile: outfile.replace(".tsx",".js"),
        format: "esm",
        platform: "browser",
        plugins: [...denoPlugins()],
        jsxFactory: "h",
        jsxFragment: "Fragment",
        jsx: "transform",
    });

    esbuild.stop();
    console.log("Build complete: "+outfile.replace(".tsx",".js"));
}

export async function buildAll() {
    await build("pages/indexLoader.tsx", "public/index.js");
    console.info(chalk.cyan("Preact build completed"));
}