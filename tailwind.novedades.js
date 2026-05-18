tailwind.config = {
    corePlugins: {
        preflight: false,
    },
    prefix: 'tw-',
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#7f1d1d",
                "background-light": "#f6f7f8",
                "background-dark": "#101822",
            },
            fontFamily: {
                "display": ["Inter"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        },
    },
}