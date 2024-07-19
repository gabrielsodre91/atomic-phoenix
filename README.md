# Atomic Phoenix
A library of React components developed by [SoftPhoenix](https://www.softphoenix.tech)

## Installation

```bash
yarn add atomic-phoenix
```

## Usage

Here's an example of how to use the `LoginForm` component in your project:

```tsx
import React from 'react';
import { LoginForm } from 'atomic-phoenix';

const App: React.FC = () => {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Login data:', data);
  };

  const handleSignup = () => {
    console.log('Navigate to signup page');
  };

  const handleForgotPassword = () => {
    console.log('Navigate to forgot password page');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
        submit={handleLogin}
        signup={handleSignup}
        forgotPassword={handleForgotPassword}
      />
    </div>
  );
};

export default App;
```

## Development

### Prerequisites

- Node.js (version 14 or above)
- npm or yarn

### Build the Project

To build the project, run the following command:

```bash
yarn build
```

This will compile the TypeScript code and process the CSS files using PostCSS, generating the output in the `dist` directory.

### Updating the Package

1. Make your changes to the component or styles.

2. Ensure that the package is correctly built:

    ```bash
    yarn build
    ```

3. Verify the changes by testing the built package in a local project if necessary.

4. Update the version number in `package.json` according to semantic versioning:

    ```json
    {
      "version": "1.0.1"
    }
    ```

5. Publish the package to npm:

    ```bash
    npm publish
    ```

### Adding a New Component

1. Create a new component file in the `src/components` directory.

2. Import any necessary styles and dependencies.

3. Ensure the new component is exported in `src/index.ts`:

    ```tsx
    export { default as LoginForm } from './components/LoginForm';
    // Add your new component export here
    ```

4. Build the project:

    ```bash
    yarn build
    ```

5. Update the README to document the new component's usage.

6. Increment the version number in `package.json`.

7. Publish the updated package:

    ```bash
    npm publish
    ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes or additions.

## License

This project is licensed under the MIT License.