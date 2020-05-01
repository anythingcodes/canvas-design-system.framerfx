# Canvas Design System

> **Note:** This is a work in progress.

HubSpot's [Canvas design system](https://canvas.hubspot.com/) as a Framer X package.

![Canvas design system](https://github.com/anythingcodes/canvas-design-system.framerfx/raw/master/metadata/background.png 'Canvas design system')

#### Sections

All components have been split into sections with the intention to replicate the Canvas documentation page.

![Sections](https://github.com/framer/baseui.framerfx/raw/master/metadata/sections.png 'Sections')

#### Known Issues 🚧

- Select's dropdowns are sometimes rendered below other components. There seems to be a z-index problem here.
- File Uploader currently does nothing.
- Theming support is to be considered a work in progress.

#### Faq

- What is the `code/generated` folder?

  `canvas-design-system.framerfx` was created using the [@framerjs/component-importer](https://www.npmjs.com/package/@framerjs/component-importer). This folder should be cleaned up at some point since many of the generated files are not used anymore. The `importer.config.json` is also a product of the `component-importer` and should also be cleaned up at some point.
