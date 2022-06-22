# My-config-prettier-eslint-husky
Всем привет, здесь выложен мой конфиг для code style

В папке Regular version вы найдете конфиг для проектов на React без Typescript
В папке With typescript вы найдете конфиг для проектов на React с Typescript

В папках лежит 4 файла 
 1. .eslintrc.json
 2. .prettierrc
 3. pre-commit - который используется husky
 4. jsconfig.json || tsconfig.json - нужны для корректной работы всего конфига

Чтобы воссоздать конфиг вам нужно:
  1. Зайти в свой репозиторий и написать следующую команду npm init @eslint/config || yarn create @eslint/config
  2. Дольше вам нужно будет выбрать: 
    a. > To check syntax, find problems, and enforce code style
    b. > JavaScript modules (import/export)
    c. > React
    d. Потом указать если в вышем проекте Typescript
    e. > Browser
    f. > Use a popular style guide
    g. > Airbnb
    h. > JSON
    i. > Yes
  3. После можете заменить свой конфиг .eslintrc.json на мой и тоже самое с .prettierrc и jsconfig.json || tsconfig.json
  4. Если у вас уже есть husky то можете просто заменить свой файл моим. 
     Если нету убедитесь что у вас добавлен Git в ваш репозиторий и пропишите следующую команду npx husky-init && npm install || npx husky-init && yarn
  5. И добавте следующие строки в файл package.json в поле scripts
    "lint": "eslint ./src --ext .js,.jsx", || "lint": "eslint ./src --ext .ts,.tsx",
    "lint:fix": "eslint ./src --ext .js,.jsx --fix", || "lint:fix": "eslint ./src --ext .ts,.tsx --fix",
  6. Так же нужно добавить после scripts в package.json
   "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "eslint --fix"
    ]
  },
     
  Приятного пользования 🥳
  
  Мой LinkedIn - https://www.linkedin.com/in/danil-kasianenko/ 
