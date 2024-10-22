# Content

- [Routes and Pages](#routes-and-pages)
- [File Structure](#file-structure)
- [Guide Line](#guide-lines)

# Routes and pages

These are the routes of the website. Feel free to add routes as you need

#### Primary

- `/landing`
- `/about`

#### Admin

- `/admin/dashboard`
- to be added

#### Authentication

- `/auth/login`
- `/auth/register`
- `/auth/forgot-password`

#### Profile

- `/profile`

#### Settings

- `/settings`
- `/settings/account`
- `/settings/profile`
- to be added

#### Track and Course Lists

- `/tracks_list`
- `/courses_list`

#### Details Pages

- `/track?id=123`
- `/course?id=123`

#### Learn Page

- `learn/?courseId=abc-001&lessonId=abc-001-001` 



#### Error Pages

- `/404`

---

# File Structure

- **assets**/
- **components**/
  - `Header.jsx`
  - `Footer.jsx`
  - **form**/
- **pages**/
  - **admin**/
    - `Dashboard.jsx`
  - **auth**/
    - `Login.jsx`
    - `Register.jsx`
    - `ForgotPassword.jsx`
  - **errors**/
    - `Error404.jsx`
  - **settings**/
    - `AccountSettings.jsx`
    - `ProfileSettings.jsx`
  - `Landing.jsx`
  - `About.jsx`
  - `Profile.jsx`
  - `TracksList.jsx`
  - `CoursesList.jsx`
  - `Track.jsx`
  - `Course.jsx`
  - `Learn.jsx`
- **layouts**/
  - `RootLayout.jsx`
  - `SettingsLayout.jsx`
  - `AdminLayout.jsx`
- **routes**/
  - `index.jsx`
- **utils**/
  - `validation.js`
- `App.jsx`
- `main.jsx`
- `index.css`

---

# Guide Lines

## Naming Conventions

- Any folder should be named in kebab-case as `my-nice-folder`
- Any file returning Component should be named in PascalCase as `MyNiceFile.jsx`
- Any js, css, html file should be camelCase as (`index.js`, `validation.js`, `header.css`)
- For a function:
  - should be named in camelCase as `getData()`
  - make sure it starts with a verb such as (`handleClick`, `getSomething`, `startWork`)
  - if the function is a custom hook, start the naming with `use` such as `useFetchData`

#### Feel free to add a guide line if you think it is important
