export function generateConfig(auth_key, apps) {
    return /*javascript*/`
export const build_folder = 'dist';

export const auth_key = "${auth_key}";

export const chapters = {
    pages: {
        app_id: ${apps.pages.app_id},
        slug_field_id: ${apps.pages.field_list.find(field => field.name_space === 'slug').field_id},
        json_field_id: ${apps.pages.field_list.find(field => field.name_space === 'json').field_id}
    },
    team: {
        app_id: ${apps.team.app_id}
    }
}
`
}