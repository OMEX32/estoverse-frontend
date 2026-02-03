# Backend Integration Guide

## Quick Start

### 1. Set Your Backend URL

Create a `.env` file in the root of your project:

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` and set your backend URL:

```env
REACT_APP_API_URL=http://localhost:3001/api
```

Replace `http://localhost:3001/api` with your actual backend URL.

### 2. Restart Your Dev Server

After changing `.env`, restart:

```bash
# Stop the server (Ctrl+C)
# Then start again
npm start
```

---

## Expected API Endpoints

Your backend should have these endpoints:

### Register Endpoint
```
POST /api/auth/register
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "commander01",
  "email": "user@example.com",
  "password": "securePassword123",
  "role": "coach",
  "game": "valorant",
  "teamName": "Alpha Squad",
  "region": "na",
  "acceptedTerms": true,
  "marketingConsent": false
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "username": "commander01"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Login Endpoint
```
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "username": "commander01"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## Customizing the API Service

If your backend has different field names or structure, edit `src/services/api.js`:

### Change Endpoint Paths

```javascript
// In src/services/api.js

async register(userData) {
  return this.request('/auth/register', {  // Change this path
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

async login(credentials) {
  return this.request('/auth/login', {  // Change this path
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}
```

### Change Field Names

If your backend expects different field names, modify the components:

**In `Login.js`:**
```javascript
const response = await ApiService.login({
  email: formData.email,      // Change to match your API
  password: formData.password, // Change to match your API
});
```

**In `Register.js`:**
```javascript
const registrationData = {
  firstName: formData.firstName,  // Adjust these to match
  lastName: formData.lastName,    // your backend's expected
  username: formData.username,    // field names
  // ... etc
};
```

### Handle Different Response Structure

If your backend returns data differently, update how you handle the response:

```javascript
// Example: If token is in response.data.token instead of response.token
if (response.data?.token) {
  ApiService.saveToken(response.data.token);
}
```

---

## CORS Configuration

If you get CORS errors, your backend needs to allow requests from `http://localhost:3000`.

### Example Express.js CORS Setup:

```javascript
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### Example for Production:

```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com'],
  credentials: true
}));
```

---

## Authentication Flow

### How It Works:

1. **User fills out login/register form**
2. **Form submits → Calls `ApiService.login()` or `ApiService.register()`**
3. **API service sends request to your backend**
4. **Backend validates and returns token + user data**
5. **Token is saved to `localStorage`**
6. **User is redirected**

### Token Storage

Tokens are stored in localStorage:
```javascript
// Saved automatically by ApiService
localStorage.setItem('authToken', token);
localStorage.setItem('user', JSON.stringify(user));
```

### Using Token for Protected Routes

The API service automatically adds the token to requests:

```javascript
// In api.js - automatically adds Authorization header
const token = localStorage.getItem('authToken');
if (token) {
  config.headers['Authorization'] = `Bearer ${token}`;
}
```

---

## Testing Without a Backend

### Option 1: Mock API (Temporary Testing)

Edit `src/services/api.js` and add mock mode:

```javascript
// At the top of the file
const MOCK_MODE = true; // Set to false when backend is ready

async login(credentials) {
  if (MOCK_MODE) {
    // Simulate successful login
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: { id: '1', email: credentials.email, username: 'testuser' },
          token: 'mock-token-12345'
        });
      }, 1000);
    });
  }
  
  // Real API call
  return this.request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}
```

### Option 2: Use JSON Server (Quick Mock Backend)

```bash
# Install json-server
npm install -g json-server

# Create db.json
echo '{"users": []}' > db.json

# Run mock server
json-server --watch db.json --port 3001
```

---

## Common Issues

### Issue: "Network Error" or "Failed to Fetch"

**Causes:**
- Backend not running
- Wrong URL in `.env`
- CORS not configured

**Solution:**
1. Check backend is running
2. Verify URL in `.env` matches your backend
3. Add CORS to your backend

### Issue: 401 Unauthorized

**Cause:** Backend rejecting the request

**Solution:**
- Check credentials are correct
- Verify backend endpoint exists
- Check request format matches what backend expects

### Issue: Token not persisting

**Cause:** localStorage not saving

**Solution:**
- Check browser privacy settings
- Verify token is returned from backend
- Check browser console for errors

---

## Next Steps

1. ✅ Set up `.env` file with your backend URL
2. ✅ Ensure backend has CORS enabled
3. ✅ Test registration flow
4. ✅ Test login flow
5. ✅ Build dashboard page for authenticated users
6. ✅ Add protected routes (routes that require login)
7. ✅ Add logout functionality

---

## Example: Complete Backend Integration Checklist

- [ ] Backend is running
- [ ] Created `.env` file with correct API URL
- [ ] Backend has `/api/auth/register` endpoint
- [ ] Backend has `/api/auth/login` endpoint
- [ ] Backend returns JWT token
- [ ] CORS is enabled on backend
- [ ] Tested registration from React app
- [ ] Tested login from React app
- [ ] Token is saved to localStorage
- [ ] Can see token in browser DevTools → Application → Local Storage

---

**You're all set! Your React app is now connected to your backend.** 🚀
