# React Developer Recruitment Tasks

Welcome to our recruitment process! This repository contains 5 tasks designed to evaluate your React expertise, architectural thinking, and problem-solving skills.

Select one tasks and submit your solution.

## Prerequisites
- Node.js 20+
- npm, yarn or pnpm
- Understanding of React, TypeScript, Redux, and modern web development practices

## Getting Started
1. Fork this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Complete the tasks described below
5. Push changes to GitHub and submit us link to *public* repository

## Tasks

### Task 1: Advanced Modal System Enhancement
**Objective:** Enhance the existing SimpleModal component to support multiple modal types and advanced features.

Requirements:
- Create a Modal Context/Provider to manage multiple modals
- Implement a queue system for modals (when multiple modals need to be shown)
- Add support for different animation types (fade, slide, scale)
- Implement keyboard navigation and accessibility features (ARIA labels, focus trap)
- Write unit tests for the modal system
- Add TypeScript types for all new features

Time estimate: 2-3 hours


### Task 2: Performance Optimization Challenge
**Objective:** Optimize application performance and implement advanced rendering strategies.

Requirements:
- Implement virtualization for large lists (create a custom virtualization hook)
- Add intelligent data prefetching
- Implement progressive loading for images
- Create a performance monitoring system using React Profiler
- Optimize bundle size using code splitting and lazy loading
- Document performance improvements with metrics

Time estimate: 2-3 hours

### Task 3: Real-time Data Synchronization
**Objective:** Implement a real-time collaborative feature using WebSocket.

Requirements:
- Create a new `CollaborativeList` component that synchronizes data between multiple users
- Implement optimistic updates in Redux
- Handle conflict resolution when multiple users edit the same item
- Add error recovery and offline support
- Implement proper WebSocket connection management (reconnection, error handling)
- Write integration tests for the synchronization logic

Time estimate: 3-4 hours


### Task 4: Advanced Form System
**Objective:** Create a dynamic form system with complex validation and state management.

Requirements:
- Implement a form builder that can generate forms from JSON schema
- Add support for nested form fields and arrays
- Create custom form controls with complex validation rules
- Implement form state persistence and recovery
- Add support for multi-step forms with validation
- Create comprehensive test suite for the form system

Time estimate: 3-4 hours

### Task 5: Custom Hook and State Management
**Objective:** Design and implement advanced custom hooks and state management solutions.

Requirements:
- Create a `useDataFetching` hook with caching and request deduplication
- Implement a `useUndo` hook for managing state history
- Create a `useWebWorker` hook for offloading heavy computations
- Implement a custom state management solution using React Context and useReducer
- Add TypeScript types and documentation
- Write tests for all custom hooks

Time estimate: 2-3 hours

## Evaluation Criteria
- Code quality and organization
- TypeScript usage and type safety
- Testing coverage and quality
- Performance considerations
- Error handling and edge cases
- Git commit history and messages
- Bonus points for additional features and improvements

## Submission Guidelines
1. Create a new branch for your solution
2. Commit your changes with clear, descriptive messages
3. Create a pull request to the main branch
4. Include a summary of your changes and any additional notes
5. Make sure all tests pass and there are no linting errors

Good luck with the tasks! We're looking forward to seeing your solutions.
