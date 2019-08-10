# Suntowers 2

## A site by VITS Media

### Local Development

1. Clone this repo `git clone git@github.com:vits-media/suntowers-2.git`
2. `cd suntowers-2 && npm install`
3. `npm start`

`npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run build`

Builds the app for production to the `.next` folder.

`npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

`npn run export`

Static exports into `/docs` folder. Served up on gh-pages.

### Deploy

1.  Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2.  Run `now` from your project directory. You will see a **now.sh** URL in your output like this:

    ```
    > Ready! https://your-project-dirname-tpspyhtdtk.now.sh (copied to clipboard)
    ```

You can find more details about [`now` here](https://zeit.co/now).

### Contact Form handling

Form handling is done using PHP code in `/php` folder.  This also includes _Thank You_ pages that users are presented after submitting contact forms.

[See more details](/php/README.md);

### Credit

This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).
