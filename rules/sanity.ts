export const sanityRules = [
    {
      tags: ["sanity", "cms", "headless"],
      title: "Roboto Studio Sanity Best Practices",
      slug: "sanity-best-practices",
      libs: [],
      content: `
# Sanity Development Guidelines

## Sanity Schema Rules

When creating sanity schema make sure to include an appropriate icon for the schema using lucide-react or sanity icons as a fallback. Make sure it's always a named export, make sure you're always using the Sanity typescript definitions if it's a ts file.

### Basic Schema Structure

For TypeScript files, always import the necessary Sanity types:

\`\`\`typescript
import {defineField, defineType, defineArrayMember} from 'sanity'
\`\`\`

Always use \`defineField\` on every field and \`defineType\` throughout the whole type. Only import \`defineArrayMember\` if needed:

\`\`\`typescript
defineType({
  type: 'object',
  name: 'custom-object',
  fields: [
    defineField({
      type: 'array',
      name: 'arrayField',
      title: 'Things',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'type-name-in-array',
          fields: [defineField({type: 'string', name: 'title', title: 'Title'})],
        }),
      ],
    }),
  ],
})
\`\`\`

### Adding icons

When adding icons to a schema, make sure you use the default sanity/icons first, and then if no icon is relevant, refer to any other iconset the user has installed - e.g lucide-react.

### Structuring files and folders

This is a rough idea of how to structure folders and files, ensuring you always have an index within the folder to create an array of documents/blocks. Do not use these as exact names, it's used purely for layout purposes.

    │   ├── studio/
    │   │   ├── README.md
    │   │   ├── eslint.config.mjs
    │   │   ├── location.ts
    │   │   ├── package.json
    │   │   ├── prettier.config.mjs
    │   │   ├── sanity-typegen.json
    │   │   ├── sanity.cli.ts
    │   │   ├── sanity.config.ts
    │   │   ├── schema.json
    │   │   ├── structure.ts
    │   │   ├── tsconfig.json
    │   │   ├── .env.example
    │   │   ├── .gitignore
    │   │   ├── components/
    │   │   │   ├── logo.tsx
    │   │   │   └── slug-field-component.tsx
    │   │   ├── plugins/
    │   │   │   └── presentation-url.ts
    │   │   ├── schemaTypes/
    │   │   │   ├── common.ts
    │   │   │   ├── index.ts
    │   │   │   ├── blocks/
    │   │   │   │   ├── cta.ts
    │   │   │   │   ├── faq-accordion.ts
    │   │   │   │   ├── feature-cards-icon.ts
    │   │   │   │   ├── hero.ts
    │   │   │   │   ├── image-link-cards.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   └── subscribe-newsletter.ts
    │   │   │   ├── definitions/
    │   │   │   │   ├── button.ts
    │   │   │   │   ├── custom-url.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── pagebuilder.ts
    │   │   │   │   └── rich-text.ts
    │   │   │   └── documents/
    │   │   │       ├── user.ts
    │   │   │       ├── blog.ts
    │   │   │       ├── faq.ts
    │   │   │       └── page.ts
    │   │   └── utils/
    │   │       ├── const-mock-data.ts
    │   │       ├── constant.ts
    │   │       ├── helper.ts
    │   │       ├── mock-data.ts
    │   │       ├── og-fields.ts
    │   │       ├── parse-body.ts
    │   │       ├── seo-fields.ts
    │   │       ├── slug.ts
    │   │       └── types.ts

### Layout of page builder index example

This is an example of how the blocks index file would be structured, you would create multiple of these on multiple nested routes to make it easier to create an array of files at each level, rather than bundling a large number of imports in a singular index.ts on the root

\`\`\`typescript
import { callToAction } from './call-to-action';
import { exploreHero } from './explore-hero';
import { faqList } from './faq-list';
import { htmlEmbed } from './html-embed';
import { iconGrid } from './icon-grid';
import { latestDocs } from './latest-docs';
import { calculator } from './calculator';
import { navigationCards } from './navigation-cards';
import { quinstreetEmbed } from './quinstreet-embed';
import { quote } from './quote';
import { richTextBlock } from './rich-text-block';
import { socialProof } from './social-proof';
import { splitForm } from './split-form';
import { statsCard } from './stats-card';
import { trustCard } from './trust-card';
import { rvEmbed } from './rv-embed';

export const pagebuilderBlocks = [
  navigationCards,
  socialProof,
  quote,
  latestDocs,
  faqList,
  callToAction,
  trustCard,
  quinstreetEmbed,
  statsCard,
  iconGrid,
  exploreHero,
  splitForm,
  richTextBlock,
  calculator,
  htmlEmbed,
  rvEmbed,
];

export const blocks = [...pagebuilderBlocks];
\`\`\`

### Common Field Templates

When writing any Sanity schema, always include a description, name, title, and type. The description should explain functionality in simple terms for non-technical users. Place description above type.

Use these templates when implementing common fields:

#### Eyebrow
\`\`\`typescript
defineField({
  name: 'eyebrow',
  title: 'Eyebrow',
  description: 'The smaller text that sits above the title to provide context',
  type: 'string',
})
\`\`\`

#### Title
\`\`\`typescript
defineField({
  name: 'title',
  title: 'Title',
  description: 'The large text that is the primary focus of the block',
  type: 'string',
})
\`\`\`

#### Heading Level Toggle
\`\`\`typescript
defineField({
  name: 'isHeadingOne',
  title: 'Is it a <h1>?',
  type: 'boolean',
  description:
    'By default the title is a <h2> tag. If you use this as the top block on the page, you can toggle this on to make it a <h1> instead',
  initialValue: false,
})
\`\`\`

#### Rich Text
\`\`\`typescript
defineField({
  name: 'richText',
  title: 'Rich Text',
  description: 'Large body of text that has links, ordered/unordered lists and headings.',
  type: 'richText',
})
\`\`\`

#### Buttons
\`\`\`typescript
defineField({
  name: 'buttons',
  title: 'Buttons',
  description: 'Add buttons here, the website will handle the styling',
  type: 'array',
  of: [{type: 'button'}],
})
\`\`\`

#### Image
\`\`\`typescript
defineField({
  name: 'image',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      description:
        "Remember to use alt text for people to be able to read what is happening in the image if they are using a screen reader, it's also important for SEO",
      title: 'Alt Text',
    }),
  ],
})
\`\`\`

### Type Generation

After adding new Sanity schema, run the type command to generate TypeScript definitions:

\`\`\`bash
sanity schema extract && sanity typegen generate --enforce-required-fields
\`\`\`

## GROQ Rules

Whenever there is an image within a GROQ query, do not expand it unless explicitly instructed to do so.


## GROQ Query Structure and Organization

- Import \`defineQuery\` and \`groq\` from \`next-sanity\` at the top of query files
- Export queries as constants using the \`defineQuery\` function
- Organize queries by content type (blogs, pages, products, etc.)
- Group related queries together

### Naming Conventions

- Use camelCase for all query names
- Prefix query names with action verb (get, getAll, etc.) followed by content type
- Suffix all queries with "Query" (e.g., \`getAllBlogIndexTranslationsQuery\`)
- Prefix reusable fragments with underscore (e.g., \`_richText\`, \`_buttons\`)

### Fragment Reuse

- Define common projection fragments at the top of the file
- Create reusable fragments for repeated patterns (e.g., \`_richText\`, \`_buttons\`, \`_icon\`)
- Use string interpolation to include fragments in queries
- Ensure fragments are composable and focused on specific use cases

### Query Parameters

- Use \`$\` for parameters (e.g., \`$slug\`, \`$locale\`, \`$id\`)
- Handle localization with consistent patterns (e.g., \`\${localeMatch}\`)
- Use \`select()\` for conditional logic within queries
- Define default parameters using \`coalesce()\`

### Response Types

- Export TypeScript interfaces for query responses when needed
- Use descriptive types that match the query structure
- Follow the pattern: \`export type GetAllMainPageTranslationsQueryResponse = string[];\`

### Best Practices

- Use explicit filtering (\`_type == "x"\`) rather than implicit type checking
- Prefer projection over returning entire documents
- Use \`order()\` for explicit sorting rather than relying on document order
- Check for defined fields (\`defined(field)\`) before accessing them
- Use conditional projections for optional fields
- Add pagination parameters (\`[$start...$end]\`) for list queries

### Code Style

- Use template literals for query strings
- Indent nested query structures for readability
- Keep related query parts together
- Maintain consistent whitespace and indentation
- Use comments to explain complex query logic


## File Naming Conventions

- Use kebab-case for ALL file names
  - ✅ CORRECT: \`user-profile.tsx\`, \`auth-layout.tsx\`, \`api-utils.ts\`
  - ❌ INCORRECT: \`userProfile.tsx\`, \`AuthLayout.tsx\`, \`apiUtils.ts\`
- MUST use \`.tsx\` extension for React components
- MUST use \`.ts\` extension for utility files
- MUST use lowercase for all file names
- MUST separate words with hyphens
- MUST NOT use spaces or underscores

## Screenshot Rules

When asked to produce schema from screenshots, follow these guidelines:

- Help describe types and interfaces using the provided image
- Use the Sanity schema format shown above
- Always include descriptions based on the visual elements in the image

### Visual Cues

- Tiny text above a title is likely an **eyebrow**
- Large text without formatting that looks like a header should be a **title** or **subtitle**
- Text with formatting (bold, italic, lists) likely needs **richText**
- Images should include **alt text** fields
- Background images should be handled appropriately
- Use reusable button arrays for button patterns
- If \`richTextField\` or \`buttonsField\` exists in the project, use them
    `,
    },
  ];
  