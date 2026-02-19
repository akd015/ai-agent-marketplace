# AI Agent Marketplace

This project contains a static frontend (index.html, api.js) and a Node.js backend (Express) for the AI Agent Rental Marketplace.

## Deployment: GitHub Pages (Frontend)

1. **Frontend**
   - Only the static files (`index.html`, `api.js`, and assets) can be deployed to GitHub Pages.
   - The backend (API) must be hosted separately (e.g., Render, Vercel, Heroku, or your own server).
   - Update `api.js` to point to your deployed backend API URL.

2. **Steps**
   - Place `index.html` and `api.js` in the root of your repository (or in a `/docs` folder if you prefer).
   - Commit and push to GitHub.
   - In your repository settings, enable GitHub Pages and set the source to the root or `/docs` folder.
   - Access your site at `https://<username>.github.io/<repo>/`.

3. **Backend**
   - Deploy the `/backend` folder to a Node.js hosting service.
   - Update the API URL in `api.js` to the deployed backend's public URL.

---

## Example Directory Structure

```
/ (root)
  |-- index.html
  |-- api.js
  |-- backend/
      |-- server.js
      |-- package.json
      |-- ...
```

## Notes
- GitHub Pages cannot run Node.js/Express. Only static files are supported.
- For full functionality, deploy the backend and update the frontend to use the correct API endpoint.
