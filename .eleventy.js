import pugPlugin from "@11ty/eleventy-plugin-pug";
import * as sass from "sass";
import path from "path";
import fs from "fs";
import svgSprite from "svg-sprite";
import * as glob from "glob";
import prettier from "prettier";

function cleanOutputDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`Cleaned output directory: ${dir}`);
  }
  fs.mkdirSync(dir, { recursive: true });
}

async function createSvgSprite() {
  try {
    const spriter = new svgSprite({
      mode: {
        symbol: {
          sprite: "icons.svg",
          example: false,
        },
      },
    });

    const iconFiles = glob.globSync("assets/icons/*.svg");

    iconFiles.forEach((file) => {
      const svgContent = fs.readFileSync(file, "utf8");
      spriter.add(
        path.resolve(file),
        path.basename(file),
        svgContent,
      );
    });

    const result = await new Promise((resolve, reject) => {
      spriter.compile((error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });

    const outputDir = "_site/assets/icons";
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, "icons.svg");
    fs.writeFileSync(outputPath, result.symbol.sprite.contents);
    console.log(`SVG sprite created: ${outputPath}`);
  } catch (error) {
    console.error("SVG Sprite Creation Error:", error);
  }
}

function bundleJavaScript() {
  try {
    const mainJsPath = "assets/js/script.js";
    const externalJsFiles = glob.globSync("assets/js/external/*.js");

    const outputDir = "_site/assets/js";
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    let allJsContent = "";

    if (externalJsFiles.length > 0) {
      externalJsFiles.forEach((file) => {
        const content = fs.readFileSync(file, "utf8");
        allJsContent += `/* ${path.basename(file)} */\n${content}\n\n`;
      });
    }

    if (fs.existsSync(mainJsPath)) {
      const mainJsContent = fs.readFileSync(mainJsPath, "utf8");
      allJsContent += `/* script.js */\n${mainJsContent}`;
    }

    const outputPath = path.join(outputDir, "all.js");
    fs.writeFileSync(outputPath, allJsContent);

    console.log(`JavaScript files bundled: ${outputPath}`);
  } catch (error) {
    console.error("JavaScript Bundling Error:", error);
  }
}

export default function (eleventyConfig) {
  cleanOutputDir("_site");

  eleventyConfig.addPassthroughCopy({
    "assets/img": "assets/img",
    "assets/fonts": "assets/fonts",
    "README.md": "README.md",
  });

  eleventyConfig.addWatchTarget("assets/scss/**/*.scss");
  eleventyConfig.addWatchTarget("assets/js/**/*.js");
  eleventyConfig.addWatchTarget("assets/icons/**/*.svg");

  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("pages/**/*.pug").map((item) => {
      if (!item.data.permalink) {
        const filename = path.basename(item.filePathStem);
        item.data.permalink = `/${filename}.html`;
      }
      return item;
    });
  });

  eleventyConfig.addTransform("prettier", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      try {
        return await prettier.format(content, {
          parser: "html",
          printWidth: 120,
          tabWidth: 2,
          useTabs: false,
          singleQuote: false,
          bracketSameLine: true,
          htmlWhitespaceSensitivity: "css",
        });
      } catch (error) {
        console.error("HTML prettify error:", error);
        return content;
      }
    }
    return content;
  });

  eleventyConfig.addPlugin(pugPlugin);
  eleventyConfig.ignores.add("assets/**/*.html");

  eleventyConfig.on("eleventy.before", async () => {
    try {
      const sassFilePath = "assets/scss/style.scss";
      const sassContent = fs.readFileSync(sassFilePath, "utf8");

      const result = await sass.compileStringAsync(sassContent, {
        sourceMap: true,
        sourceMapIncludeSources: true,
        style: "expanded",
        url: new URL(`file://${path.resolve(sassFilePath)}`),
        loadPaths: ["node_modules"],
        quietDeps: true,
        verbose: false,
        logger: {
          warn: function (message) {
            if (message.startsWith("Deprecation Warning")) return;
            console.warn(message);
          },
        },
      });

      const outputDir = "_site/assets/css";
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const cssOutputPath = path.join(outputDir, "style.css");
      fs.writeFileSync(cssOutputPath, result.css);

      if (result.sourceMap) {
        const mapOutputPath = path.join(outputDir, "style.css.map");
        fs.writeFileSync(mapOutputPath, JSON.stringify(result.sourceMap));
        console.log(`Source map created: ${mapOutputPath}`);

        fs.appendFileSync(cssOutputPath, "\n/*# sourceMappingURL=style.css.map */");
      }

      console.log(`SCSS compiled with source map: ${sassFilePath} -> ${cssOutputPath}`);

      await createSvgSprite();

      bundleJavaScript();
    } catch (error) {
      console.error("Build Error:", error);
    }
  });

  eleventyConfig.addPassthroughCopy("README.md");


  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
      data: "_data",
    },
    htmlTemplateEngine: "pug",
    markdownTemplateEngine: "pug",
    templateFormats: ["pug", "html"],
  };
}
