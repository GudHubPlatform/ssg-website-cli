export function generateConfig(auth_key, apps) {
    return /*javascript*/`
export { chapters } from './config/chapters.mjs';
export { routes } from './config/routes.mjs';
export { components_list } from './config/components-list.mjs';

// PLACE CONSTANTS UNDER THIS LINE AND ADD COMMENT TO EXPLAIN WHAT YOUR CONSTANT DO
export const build_folder = 'dist'; // to server have path to build
export const auth_key = "${auth_key.replace(/\n/g, "\\n")}";    
export const index_sitemap = true; // if false, server will not generate index sitemap

// ClientConfig
export * as clientConfig from './client-config.mjs';
`
}

export function generateChapters(apps) {
    const slug_field_id = apps.pages.field_list.find(field => field.name_space === 'slug').field_id;
    return /*javascript*/`
export const chapters = {
    pages: {
        app_id: ${apps.pages.app_id},
        slug_field_id: ${slug_field_id},
        json_field_id: ${apps.pages.field_list.find(field => field.name_space === 'json').field_id},
        title_field_id: ${apps.pages.field_list.find(field => field.name_space === 'title').field_id},
        heading_field_id: ${apps.pages.field_list.find(field => field.name_space === 'h1').field_id},
        description_field_id: ${apps.pages.field_list.find(field => field.name_space === 'description').field_id},
        image_field_id: ${apps.pages.field_list.find(field => field.name_space === 'meta_image_src').field_id},
        sitemap: {
            status_field_id: ${apps.pages.field_list.find(field => field.name_space === 'status').field_id},
            frequency: 'weekly',
            priority: 0.8,
            sitemapName: 'pages',
            cases: [
                {
                    case: '/',
                    priority: 1,
                    frequency: 'weekly'
                },
                {
                    case: '/about-us/',
                    priority: 0.5,
                    frequency: 'monthly'
                },
                {
                    case: '/contact-us/',
                    priority: 0.5,
                    frequency: 'monthly'
                }
            ],
            filter: function(items) {
                const status_field_id = this.status_field_id;
                return items.filter(item => {
                    const field = item.fields.find(field => field.field_id == status_field_id);
                    if(field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            }
        }
    }
}`;
}