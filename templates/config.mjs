import { components_list as GudhubComponents } from '@gudhub/ssg-web-components-library';

export const build_folder = 'dist';

export const auth_key = 'aTS7SoYTiLQvFeJ82LQMIUKa5O5anck/YjQ4AZ7M6rgAs/XRr1oKu5bES278QxYPfwliyzUEOXLF+r7K/6YmOA==';

export const chapters = {
    pages: {
        app_id: 30916,
        slug_field_id: 708604,
        json_field_id: 708608
    },
    team: {
        app_id: 30928
    }
}

export const components_list = [
    ...GudhubComponents,
    {
        tag: 'header-component',
        src: '/src/assets/js/components/header/header.js'
    },
    {
        tag: 'footer-component',
        src: '/src/assets/js/components/footer/footer.js'
    },
    {
        tag: 'image-component',
        src: '/src/assets/js/components/image-component/image-component.js'
    },
    {
        tag: 'columns-component',
        src: '/src/assets/js/components/columns/columns.js'
    },
    {
        tag: 'team-component',
        src: '/src/assets/js/components/team/team.js'
    },
    {
        tag: 'team-person',
        src: '/src/assets/js/components/team/team-person/team-person.js'
    },
    {
        tag: 'form-component',
        src: '/src/assets/js/components/form/form.js'
    },
    {
        tag: 'hero-component',
        src: '/src/assets/js/components/hero/hero.js'
    },
    {
        tag: 'text-component',
        src: '/src/assets/js/components/text/text.js'
    },
    {
        tag: 'call-to-action',
        src: '/src/assets/js/components/call-to-action/call-to-action.js'
    },
    {
        tag: 'edit-mode',
        src: '/src/assets/js/components/edit-mode/edit-mode.js'
    },
    {
        tag: 'grid-component',
        src: '/src/assets/js/components/grid/grid.js'
    },
    {
        tag: 'a-component',
        src: '/src/assets/js/components/a.js'
    },
    {
        tag: 'b-component',
        src: '/src/assets/js/components/b.js'
    }
]