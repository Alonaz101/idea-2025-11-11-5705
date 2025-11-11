# Project Overview

This repository implements the Mood-Based Recipe Recommendation system as detailed in Jira issues SCRUM-281 through SCRUM-287.

## Features implemented:

- **SCRUM-281:** Mood input interface (textual and emoji) and basic recipe recommendation backend API `/api/mood-recipes`.
- **SCRUM-282:** User registration, login, JWT authentication, and profile management with dietary preferences.
- **SCRUM-283:** Backend entities for Recipe, Mood, and MoodRecipeMapping, API endpoints for managing recipes and mood mappings.
- **SCRUM-284:** Sentiment analysis module to process free-text mood inputs for recommendations.
- **SCRUM-285:** Integration with external recipe APIs (e.g. Spoonacular) with caching and fallback.
- **SCRUM-286:** User recipe rating and feedback system to improve recommendations.
- **SCRUM-287:** Planning and placeholder for future AI-based custom recipe generation microservice.

## Technology stack:

- Node.js and Express for backend API
- MongoDB for data persistence
- JWT for authentication and session management
- Sentiment analysis via integrated module
- External REST API calls for enriched recipe data

## API endpoints:

- POST `/api/mood-recipes` - Get recipes based on mood input (text or emoji)
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/recipes/:id` - Fetch recipe details
- POST `/api/recipes/:id/rate` - Submit recipe rating and feedback

---

Each Jira issue is reflected in the commit history with relevant code implementations for traceability.
