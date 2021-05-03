Welcome!

    1. Install wordpress (https://wordpress.org)
    2. Clone repo into: `/wp-content/themes/wpreact`
    3. Activate theme `wpreact` in admin dashboard
    4. Change permalinks settings in admin dashboard:
    ```
           -> Settings 
               -> Permalinks 
                   -> and set up Common Settings to Custom Structure: /%category%/%postname%/ 
           and Save Changes (press button)
    ```
    needed for correct work of wordpress rest-api
    5. `yarn install` or `npm install`, your choice
    6. For develop: open `proxyServer.json` and change `localhost: '{your_host_domain}'`
    7. Build bundle: `yarn build` or `npm run build`
    8. Development: `yarn dev` or `npm run dev`

Enjoy!
