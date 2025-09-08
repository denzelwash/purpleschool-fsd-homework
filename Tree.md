├── .env
├── .env.example
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── app
│   │   ├── entrypoint
│   │   │   └── main.tsx
│   │   ├── layouts
│   │   │   ├── index.ts
│   │   │   └── RootLayout
│   │   │       ├── RootLayout.module.css
│   │   │       └── RootLayout.tsx
│   │   ├── providers
│   │   │   └── AuthProvider.tsx
│   │   ├── routes
│   │   │   └── routes.tsx
│   │   └── styles
│   │       ├── base.css
│   │       └── variables.css
│   ├── assets
│   │   └── react.svg
│   ├── entities
│   │   ├── ai
│   │   │   ├── api
│   │   │   │   └── requests.ts
│   │   │   ├── index.ts
│   │   │   ├── model
│   │   │   │   ├── mocks.ts
│   │   │   │   ├── store.ts
│   │   │   │   └── types.ts
│   │   │   └── ui
│   │   │       └── Message
│   │   │           ├── Message.module.css
│   │   │           ├── Message.props.ts
│   │   │           └── Message.tsx
│   │   ├── course
│   │   │   ├── api
│   │   │   │   └── requests.ts
│   │   │   ├── config
│   │   │   │   └── const.ts
│   │   │   ├── index.ts
│   │   │   ├── model
│   │   │   │   ├── mocks.ts
│   │   │   │   ├── store.ts
│   │   │   │   └── types.ts
│   │   │   └── ui
│   │   │       └── Card
│   │   │           ├── Card.module.css
│   │   │           ├── Card.props.ts
│   │   │           └── Card.tsx
│   │   └── user
│   │       ├── api
│   │       │   └── requests.ts
│   │       ├── index.ts
│   │       ├── model
│   │       │   ├── mocks.ts
│   │       │   ├── store.ts
│   │       │   └── types.ts
│   │       └── ui
│   │           ├── Avatar
│   │           │   ├── Avatar.module.css
│   │           │   ├── Avatar.props.ts
│   │           │   └── Avatar.tsx
│   │           └── Stats
│   │               ├── Stats.module.css
│   │               ├── Stats.props.ts
│   │               └── Stats.tsx
│   ├── features
│   │   ├── ai-send-message
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       └── SendMessage
│   │   │           ├── SendMessage.module.css
│   │   │           └── SendMessage.tsx
│   │   ├── courses-filter
│   │   │   ├── config
│   │   │   │   └── const.ts
│   │   │   ├── index.ts
│   │   │   ├── model
│   │   │   │   ├── store.ts
│   │   │   │   └── types.ts
│   │   │   └── ui
│   │   │       └── FilterCourses
│   │   │           ├── FilterCourses.module.css
│   │   │           └── FilterCourses.tsx
│   │   └── courses-go-to-detail-page
│   │       ├── index.ts
│   │       └── ui
│   │           └── GoToCourseDetailsButton
│   │               ├── GoToCourseDetailsButton.props.ts
│   │               └── GoToCourseDetailsButton.tsx
│   ├── pages
│   │   ├── courses
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       └── CoursesPage
│   │   │           └── CoursesPage.tsx
│   │   ├── main
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       └── MainPage
│   │   │           └── MainPage.tsx
│   │   └── storybook
│   │       ├── index.ts
│   │       └── ui
│   │           └── StorybookPage
│   │               ├── Storybook.module.css
│   │               └── StorybookPage.tsx
│   ├── shared
│   │   ├── api
│   │   │   ├── client.ts
│   │   │   └── index.ts
│   │   ├── config
│   │   │   ├── env.ts
│   │   │   ├── index.ts
│   │   │   └── routes.ts
│   │   ├── lib
│   │   │   ├── index.ts
│   │   │   └── useDebounce.ts
│   │   └── ui
│   │       ├── Button
│   │       │   ├── Button.module.css
│   │       │   ├── Button.props.ts
│   │       │   └── Button.tsx
│   │       ├── Card
│   │       │   ├── Card.module.css
│   │       │   ├── Card.props.ts
│   │       │   └── Card.tsx
│   │       ├── Checkbox
│   │       │   ├── Checkbox.module.css
│   │       │   ├── Checkbox.props.ts
│   │       │   └── Checkbox.tsx
│   │       ├── Graph
│   │       │   ├── Graph.module.css
│   │       │   ├── Graph.props.ts
│   │       │   └── Graph.tsx
│   │       ├── Icon
│   │       │   ├── Icon.tsx
│   │       │   └── icons
│   │       │       ├── check.svg
│   │       │       └── Star.svg
│   │       ├── index.ts
│   │       ├── InfoBox
│   │       │   ├── InfoBox.module.css
│   │       │   ├── InfoBox.props.ts
│   │       │   └── InfoBox.tsx
│   │       ├── Input
│   │       │   ├── Input.module.css
│   │       │   ├── Input.props.ts
│   │       │   └── Input.tsx
│   │       ├── Link
│   │       │   ├── Link.module.css
│   │       │   ├── Link.props.ts
│   │       │   └── Link.tsx
│   │       ├── Radio
│   │       │   ├── Radio.module.css
│   │       │   ├── Radio.props.ts
│   │       │   └── Radio.tsx
│   │       ├── Rating
│   │       │   ├── Rating.module.css
│   │       │   ├── Rating.props.ts
│   │       │   └── Rating.tsx
│   │       ├── Tabs
│   │       │   ├── Tabs.module.css
│   │       │   ├── Tabs.props.ts
│   │       │   └── Tabs.tsx
│   │       └── Tag
│   │           ├── Tag.module.css
│   │           ├── Tag.props.ts
│   │           └── Tag.tsx
│   ├── vite-env.d.ts
│   └── widgets
│       ├── ai
│       │   ├── index.ts
│       │   └── ui
│       │       └── Chat
│       │           ├── Chat.module.css
│       │           └── Chat.tsx
│       ├── course
│       │   ├── index.ts
│       │   └── ui
│       │       └── Catalog
│       │           ├── Catalog.module.css
│       │           └── Catalog.tsx
│       ├── sidebar
│       │   ├── index.ts
│       │   ├── model
│       │   │   └── nav.ts
│       │   └── ui
│       │       └── Sidebar
│       │           ├── Sidebar.module.css
│       │           └── Sidebar.tsx
│       └── user
│           ├── index.ts
│           └── ui
│               └── Info
│                   ├── Info.module.css
│                   └── Info.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
