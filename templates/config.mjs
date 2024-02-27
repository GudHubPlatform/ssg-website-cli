import { components_list as GudhubComponents } from '@gudhub/ssg-web-components-library';

export const build_folder = 'dist';

export const auth_key = 'aTS7SoYTiLQvFeJ82LQMIUKa5O5anck/YjQ4AZ7M6rgAs/XRr1oKu5bES278QxYPfwliyzUEOXLF+r7K/6YmOA==';

export const index_sitemap = true;

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

export const routes = [
    
]

export const components_list = [
    ...GudhubComponents,
    {
        tag: 'contact-us-block',
        src: '/src/assets/js/components/contact-us-block/contact-us-block.js'
    },
    {
        tag: 'footer-component',
        src: '/src/assets/js/components/footer/footer.js',
    },
    {
        tag: 'header-component',
        src: '/src/assets/js/components/header/header.js',
    }
]

export const form_config = [
    {
        "id": "main",
        "title": "Leave Application",
        "subtitle": "",
        "mailConfig": {
            "to": "awesome@email.com",
            "from": "awesome@email.com",
            "subject": "%subject%"
        },
        "inputs": [
            {
                "name": "name",
                "type": "short",
                "required": "true",
                "placeholder": "Name *",
                "width": 6
            },
            {
                "name": "company",
                "type": "short",
                "required": "false",
                "placeholder": "Company",
                "width": 6
            },
            {
                "name": "email",
                "type": "email",
                "required": "true",
                "placeholder": "Email *",
                "errorText": "Enter a valid email",
                "width": 6
            },
            {
                "name": "phone",
                "type": "phone",
                "required": "false",
                "placeholder": "Phone",
                "errorText": "Enter a valid phone number",
                "width": 6
            },
            {
                "name": "message",
                "type": "textarea",
                "required": "false",
                "placeholder": "Comment",
                "width": 12
            }
        ]
    },
    {
        "id": "popup",
        "title": "Leave Application",
        "subtitle": "",
        "mailConfig": {
            "to": "awesome@email.com",
            "from": "awesome@email.com",
            "subject": "%subject%"
        },
        "inputs": [
            {
                "name": "email",
                "type": "email",
                "required": "true",
                "placeholder": "Email *",
                "errorText": "Enter a valid email",
                "width": 6
            },
            {
                "name": "phone",
                "type": "phone",
                "required": "false",
                "placeholder": "Phone",
                "errorText": "Enter a valid phone number",
                "width": 6
            },
            {
                "name": "message",
                "type": "textarea",
                "required": "false",
                "placeholder": "Comment",
                "width": 12
            }
        ]
    },
    {
        "id": "small bottom-right popup",
        "title": "Get a Free Consultation",
        "subtitle": "",
        "mailConfig": {
            "to": "awesome@email.com",
            "from": "awesome@email.com",
            "subject": "%subject%"
        },
        "inputs": [
            {
                "name": "email",
                "type": "email",
                "required": "true",
                "placeholder": "Email *",
                "errorText": "Enter a valid email",
                "width": 12
            },
            {
                "name": "phone",
                "type": "phone",
                "required": "false",
                "placeholder": "Phone",
                "errorText": "Enter a valid phone number",
                "width": 12
            }
        ]
    }
];