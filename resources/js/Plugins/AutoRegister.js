export default {
    install(app, options) {
        // import multiple components
        const components = import.meta.globEager("../Components/**/*.vue");

        Object.entries(components).forEach(([path, definition]) => {
            // Get name of component, based on filename
            // "./components/Fruits.vue" will become "Fruits"
            const componentName = path
                .split("/")
                .pop()
                .replace(/\.\w+$/, "");

            // Register component on this Vue instance
            app.component(componentName, definition.default);
        });
    },
};
