module.exports = {
  preset: 'vite',
  test: {
    globals: true,
    environment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',  // For JSX transformation
      '^.+\\.tsx?$': 'ts-jest',  // For TypeScript files (if you're using TS)
    },
  },
};
