// // Create a utility file: src/utils/api.js

// export const apiCall = async (url, options = {}) => {
//   const token = localStorage.getItem('token');
  
//   const headers = {
//     'Content-Type': 'application/json',
//     ...options.headers,
//   };

//   // Add Authorization header if token exists
//   if (token) {
//     headers['Authorization'] = `Bearer ${token}`;
//   }

//   try {
//     const response = await fetch(url, {
//       ...options,
//       headers,
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       // Handle 401 Unauthorized (invalid/expired token)
//       if (response.status === 401) {
//         localStorage.removeItem('token');
//         localStorage.removeItem('userPhone');
//         window.location.href = '/login';
//       }
//       throw new Error(data.message || 'API request failed');
//     }

//     return data;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// };

// // Example usage in your components:

// // Get user profile
// export const getUserProfile = async () => {
//   return apiCall('http://localhost:7000/protected/profile', {
//     method: 'GET',
//   });
// };

// // Submit OPD Reimbursement
// export const submitReimbursement = async (data) => {
//   return apiCall('http://localhost:7000/protected/opd-reimbursement', {
//     method: 'POST',
//     body: JSON.stringify(data),
//   });
// };