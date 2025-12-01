// User authentication and storage utility
const MAX_USERS = 20;
const USERS_STORAGE_KEY = 'viral_disease_users';
const CURRENT_USER_KEY = 'viral_disease_current_user';

export const userService = {
  // Get all users from localStorage
  getAllUsers: () => {
    try {
      const users = localStorage.getItem(USERS_STORAGE_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error reading users:', error);
      return [];
    }
  },

  // Register a new user
  registerUser: (name, email, phone, role, password) => {
    const users = userService.getAllUsers();

    // Check if user limit reached
    if (users.length >= MAX_USERS) {
      return {
        success: false,
        message: `Maximum ${MAX_USERS} users allowed. Please contact admin.`,
      };
    }

    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      return {
        success: false,
        message: 'Email already registered. Please use a different email.',
      };
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      role,
      password, // In production, hash this!
      createdAt: new Date().toISOString(),
      predictions: [], // Store user's prediction history
    };

    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    return {
      success: true,
      message: 'Registration successful!',
      user: { id: newUser.id, name, email, role },
    };
  },

  // Login user
  loginUser: (email, password) => {
    const users = userService.getAllUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password.',
      };
    }

    // Store current logged-in user
    const userSession = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userSession));

    return {
      success: true,
      message: 'Login successful!',
      user: userSession,
    };
  },

  // Get current logged-in user
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem(CURRENT_USER_KEY);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error reading current user:', error);
      return null;
    }
  },

  // Logout user
  logoutUser: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    return { success: true, message: 'Logged out successfully!' };
  },

  // Save prediction history for user
  savePrediction: (userId, prediction) => {
    const users = userService.getAllUsers();
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return { success: false, message: 'User not found.' };
    }

    const predictionRecord = {
      id: Date.now().toString(),
      ...prediction,
      timestamp: new Date().toISOString(),
    };

    users[userIndex].predictions.push(predictionRecord);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    return { success: true, message: 'Prediction saved!', prediction: predictionRecord };
  },

  // Get user's prediction history
  getUserPredictions: (userId) => {
    const users = userService.getAllUsers();
    const user = users.find((u) => u.id === userId);
    return user ? user.predictions : [];
  },

  // Check if email exists
  emailExists: (email) => {
    const users = userService.getAllUsers();
    return users.some((u) => u.email === email);
  },

  // Get total user count
  getUserCount: () => {
    return userService.getAllUsers().length;
  },

  // Check if can register (under limit)
  canRegister: () => {
    return userService.getUserCount() < MAX_USERS;
  },
};
