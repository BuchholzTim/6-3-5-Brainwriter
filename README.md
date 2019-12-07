# Quick Start

### Requirements

+ [Postgres 12](https://www.postgresql.org/) 
+ [Node 12.xx + NPM 6.xx](https://nodejs.org/en/)

It may work with older Versions, but it was never tested with any other versions.

### How to Run

+ Clone the Repo

```shell
git clone https://github.com/BuchholzTim/6-3-5-Brainwriter/
```

+ Create the Postgres-DB with the provided Script [here](https://github.com/BuchholzTim/6-3-5-Brainwriter/blob/master/Doku/Tools/FUI.sql)
+ Install Node-Dependencies

```shell
cd backend/
npm install
cd ../frontend/
npm install
```

+ Edit Configuration-Files:

  + Backend:
    Copy `.env.bkup` to `.env` in the same folder and change its contents to match your configuration
  + Frontend:
    Edit `src/config/config.js`-Contents to match your Configuration
    <u>**Note**</u>: If you set `production=false`, then you will need the [Redux-Dev Extension](https://extension.remotedev.io/) for your Browser to run the frontend. 

+ Start Dev-Version:
  Run `npm start` in the directories for backend and frontend in two separate Terminals

+ Optimized Production Build:

  + Frontend:

    Run  `npm react-script build` & `npx serve build -l PORT`, where PORT is the Port you want your Application to be run on

  + Backend:

    Run `babel-node ./bin/www`

+ <u>**Note:**</u> In Linux you can use `screen` to run the project, without killing the process, when leaving the terminal


```shell
screen
cd ./...../frontend
npx serve build -l PORT

ctrl+a, ctrl+d (to detach from screen)

screen
cd ./...../backend
npm start

ctrl+a, ctrl+d (to detach from screen)
```
