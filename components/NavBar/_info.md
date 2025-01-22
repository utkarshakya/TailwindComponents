# How To Use This Navbar Tailwind Component?

_Note -> We assume that tailwind is already set-up and running in you project properly._

## Here Are The Steps To Add The Navbar

1. Copy and paste the `nav.html` content in to you html file body.

2. Add the tailwind classes inside your body tag like given below.

    ```html
    <body class="flex flex-col items-center dark:bg-gray-900 dark:text-white">
    ```

3. Copy the `nav.js` script to you project and add it in you body.

4. The logo folder containes all the logo (mostly SVGs) used in the navigation bar.

5. You can use those file and reference them in the nav.html Or You can also use the SVGs diractly as given in the file.

---

_Note -> Our all components support dark mode, below is the one time set-up given for using dark mode._

### Here Are The Steps To Enble Dark Mode

1. Add the `darkMode: 'class'` inside the `module.exports = {}` object of you `tailwind.config.js` file like the given below

   ```js
   module.exports = {
       content: ["./src/**/*.{php, html, js}"],
       theme: {
           extend: {},
       },
       plugins: [],
       darkMode: 'class',
   }
   ```

2. Now add the `class='dark'` in the html tag, like this

   ```html
   <html class="dark">
   ```
