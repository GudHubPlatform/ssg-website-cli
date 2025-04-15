
// it`s template, it will be replaced by generated values
export const chapters = {
    pages: {
        app_id: 33958,
        slug_field_id: 807588,
        json_field_id: 807589,
        heading_field_id: 807587,
        description_field_id: 807598,
        image_field_id: 807599,
        sitemap: {
            status_field_id: 823627,
            frequency: "weekly",
            priority: 0.8,
            sitemapName: "pages",
            cases: [
                {
                    case: "/",
                    priority: 1,
                    frequency: "weekly",
                },
                {
                    case: "/pro-nas/",
                    priority: 0.5,
                    frequency: "monthly",
                },
                {
                    case: "/kontakty/",
                    priority: 0.5,
                    frequency: "monthly",
                },
            ],
            filter: function (items) {
                const status_field_id = this.status_field_id;
                return items.filter((item) => {
                    const field = item.fields.find(
                        (field) => field.field_id == status_field_id
                    );
                    if (field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            },
        }
    }
}