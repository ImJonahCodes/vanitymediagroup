// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
	storage: {
		kind: "cloud",
	},
    cloud: {
      project:'vanity-media/vanitymediagroup',
    },
	collections: {
		posts: collection({
			label: "Blogs",
			slugField: "title",
			path: "src/content/blog/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				description: fields.text({ label: "Description" }),
				date: fields.datetime({ label: "Date" }),
				ogImage: fields.image({
					label: "ogImage",
					directory: "src/assets/imgs",
					publicPath: "src/assets/imgs",
				}),
				ogImageAlt: fields.text({ label: "ogImageAlt" }),
				tags: fields.array(fields.text({ label: "Tags" }), {
					label: "Tags",
					itemLabel: (props) => props.value,
				}),
				content: fields.document({
					label: "Content",
					formatting: true,
					dividers: true,
					links: true,
					images: { directory: "src/assets/imgs", publicPath: "src/assets/imgs" },
				}),
			},
		}),
	},
});