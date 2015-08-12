# Plank
Plank is the base for extend Deck App.

## Tree File Structure
````
.
├── README.md
├── api          #RESTfull API
├── assets       #Jade, JS, CSS
├── helpers      #
├── migrations   #Your own definitions
├── package.json #NPM definition
├── plank.js
├── sio
├── test
│   ├── e2e
│   └── helpers
├── views
└── web
````

## Module Package Export
You can add tools declaring the functions in the plank.js file.

## Add Functions Pipeline
Functions will be added first to Deck.</br>
The order of adding will be keep in same order that is defined in the config of Deck App.</br>
<strong>Same named functions will be override with Deck App definition</strong> for that reason we will recommend you to choose other names on self plank definitions.

## Add this package as github module
````sh
git submodule add git@github.com:MoNoApps/plank.git planks/bamboo
````

## Run migrations
node planks/bamboo/migrations/seed.js
