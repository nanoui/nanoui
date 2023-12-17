# nanoui.github.io


If Storybook can't detect your React project, it might be due to a few reasons. Here are some steps you can take to troubleshoot:

1. Ensure React and ReactDOM are installed: Your `package.json` shows that `react` and `react-dom` are installed as devDependencies. However, they should be installed as dependencies. Run `npm install react react-dom` to ensure they are installed correctly.

2. Check your project structure: Storybook expects a certain project structure. Make sure you have a `.storybook` directory in your project root, and a `stories` directory with your story files.

3. Install Storybook for React: If you haven't done so already, install Storybook for React by running `npx sb init --type react`.

4. Check Storybook version: Ensure you're using a version of Storybook that's compatible with your version of React.

5. Check for errors: Run Storybook and check the console for any error messages. These can give you clues about what's going wrong.

If you're still having trouble, please provide more details about the issue you're experiencing.

npx storybook@latest init
npm i rollup rollup-plugin-babel rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-terser @rollup/plugin-node-resolve --save-dev
npm i @babel/core @babel/preset-react --save-dev

# Docs
[nanoui](https://www.unpkg.com/nanoui/storybook-static/index.html)