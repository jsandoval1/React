# My React and Tailwind CSS Project

<!-- Table of contents -->
## Table of Contents
- [About the Project](#about-the-project)
  - [Why I Created This Project](#why-i-created-this-project)
  - [What I Learned](#what-i-learned)
  - [Technologies Used](#technologies-used)
  - [Key Features](#key-features)

## Why I Created This Project
This project was created as a practice to hone my skills in React and Tailwind CSS. I thoroughly enjoyed the level of personalization that Tailwind CSS offers. Despite the initial learning curve, I found it to be a powerful tool for building custom user interfaces.

## What I Learned
One of the key advantages of using Tailwind CSS is its impact on performance. Tailwind CSS is a utility-first CSS framework, which means it provides low-level utility classes that let you build completely custom designs. This approach can result in smaller overall file sizes as you only need to include the styles you actually use.

## Technologies Used
For this project, I used several libraries including:

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [React Icons](https://react-icons.github.io/react-icons/)

## Key Features
The main focus of this project was to create a responsive navigation bar. Here are some key features:

- **Active Link Feedback**: This feature changes the style of the navigation link that corresponds to the current page. This visual cue helps users understand where they are in the application. I achieved this by using the `NavLink` component from `react-router-dom` and customizing its `activeClassName` prop.

- **Responsive Design**: The navigation bar adjusts its layout based on the screen size. On larger screens, it displays horizontally, and on smaller screens, it switches to a mobile-friendly vertical layout. This was achieved using Tailwind CSS's responsive design utilities, which allow for easy adjustments based on screen width.

- **Content Centering**: I ensured that the content always stays centered on the page, regardless of the screen size or margin. This was achieved by using a combination of Tailwind CSS utilities such as `mx-auto` for horizontal centering, and `flex` along with `justify-center` and `items-center` for vertical centering.

These features combined create a user-friendly navigation experience that adapts to various screen sizes and provides clear feedback to the user.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/jsandoval1/React.git
    ```

2. Navigate to the project folder:
    ```bash
    cd React/ReactPlayground/TaailwindNavBar
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```
    This will open the application in your default browser. If it doesn't, navigate to [http://localhost:3000](http://localhost:3000) in your browser.

5. Enjoy and feel free to leave feedback!
