# Tutoring

This repository contains various web projects that I use to teach my students as part of tutoring sessions. These projects are designed to cover fundamental to intermediate topics in web development.

## Project Structure

Each folder is categorized by the technology or framework used, with individual project folders underneath. Here’s a breakdown of the current projects:

## homework

html-css/

1. **01-team**

react/

1. **01-dashboard**

## html-css

1. **01-portfolio**
   - A simple portfolio website template, designed to introduce HTML and CSS basics. Students learn about layout structures, styling, and responsive design.
2. **02-unine-landing**

## react

1. **01-todo**
   - A basic to-do list application built with React. This project introduces students to component-based architecture, state management, and handling user interactions in React. The app allows users to add, complete, and delete tasks.
   - _1.1 branch_
     - This branch introduces an extended version of the basic to-do list application. It builds upon the foundations of the original todo-app by incorporating routing and integration with a backend API (PocketBase) for persistent data storage.
   - _1.2 branch_
     - This branch refines the extended to-do list application by enhancing user authentication and session handling. It includes dynamic updates to the UI based on authentication status.
   - _1.3 branch_
     - This branch focuses on refactoring the codebase to utilize React Context for better state management. It improves code organization and reusability while maintaining the same functionality.
   - _1.4 branch_
     - Sample implementation of Supabase instead of Pocketbase. PocketBase is sufficient for smaller or personal applications, but Supabase is ideal for more advanced and scalable applications.

## nextjs

1. **01-blog**

- A blog application built with Next.js. This project introduces students to how to work with both client and server components, utilizing features like dynamic routing, data fetching, and authentication.
- _1.1 branch_
  - This branch introduces the basic principles of how Next.js works, focusing on routing and static page generation. It also covers creating dynamic pages and how generateStaticParams is used for generating dynamic routes at build time.
- _1.2 branch_
  - This branch moves from using dummy data to integrating Supabase as the backend service for managing blog posts. It shows how to use Supabase for data storage and how to fetch real data from the database to display dynamic blog content.
- _1.3 branch_
  - This branch focuses on authentication using Supabase. It covers how to implement user authentication and manage sessions in a secure manner.

## java

1. **01-basics**
2. **02-user-management**

school/

1. **01-customers-filter**
2. **02-tasks-sorter**
3. **03-crypto-gui**
