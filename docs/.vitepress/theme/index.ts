import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const plugin = await import('@eox/map')
      app.use(plugin)
    }
  }
};
