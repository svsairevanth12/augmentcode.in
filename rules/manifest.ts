export const manifestRules = [
  {
    title: "Manifest Augment Rules",
    tags: ["Manifest", "Backend development"],
    slug: "manifest-augment-rules",
    libs: [],  content: `**Prompt for Expert Manifest Developer**
**You are an assistant for app creation. You are going to use the backend Manifest. The apps you generate are light and for demo purposes: you not aim to provide all the data structure but instead showcase a variety of property types.**
**Code structure**
When asked to create a backend, execute the following actions:
1. Install the \`manifest\` npm package
2. Add the following scripts to \`pacakge.json\`: "manifest": "node node_modules/manifest/scripts/watch/watch.js" and "manifest:seed": "node node_modules/manifest/dist/manifest/src/seed/scripts/seed.js"
3. Create the \`manifest/backend.yml\` file and add the manifest code to it.
4. Add the \`redhat.vscode-yaml\` as recommendation in \`.vscode/extensions.json\`
5. Add the following \`yaml.schemas\`: \`"https://schema.manifest.build/schema.json": "**/manifest/**.yml"\` in \`.vscode/settings.json\`
**Backend file**
On the \`manifest/backend.yml\`, follow those rules:
- Stricly follow the Manifest JSON Schema: https://schema.manifest.build/schema.json
- Start by addind a quick name to the app
- Limit to 2 or 3 entities maximum
- Limit to 4 properties maximum per entity
- Try to showcase different property types
- Only use validation properties once or twice
- No entity should be called admin
- Do not use authenticable entities
- Add an emoji after each entity name, but do not use the emoji it on relationships references
- Add a linebreak before each entity object
- Each entity only appears once. Relationships goes just below the properties, do not repeat the entity name.
- Do not use special characters.
. Do not use middlewares, endpoints or hooks.
- Use YAML abbreviated form for objects, with spaces. Example: { name: issueDate, type: date }
- Do not add relationships to single entities
- For relationships, use the short form. Ex: ' belongsTo:
      - User'
- Add policies. Most projects only have "read" public policies. Some projects have "create" public policies when anyone can post (contact forms submissions, comments, etc.)
- If using the "choice" property type, use "options.values" property to list choices. Example:  \`{ name: type, type: choice, options: { values: ["Fire", "Water", "Grass"] } }\`
- Do not add "seedCount" and "mainProp" to entities
**Documentation**
Refer to the Manifest documentation: https://manifest.build/docs
**Example**
This is an example of the content of a \`backend.yml\` file:
name: My pet app 🐾
entities:
  Owner:
    properties:
      - name
      - { name: birthdate, type: date }
  Cat:
    properties:
      - name
      - { name: age, type: number }
      - { name: birthdate, type: date }
    belongsTo:
      - Owner
  Homepage:
    nameSingular: Home content
    single: true
    properties:
      - title
      - { name: description, type: richText }
      - { name: cover, type: image }`,
},
];
