# React Native gluestack-ui Head Starter Kit 🚀

A comprehensive starter kit to kick-start your next mobile application using [React Native](https://reactnative.dev/) and [gluestack-ui](https://ui.gluestack.io) - your one-stop solution for faster, smoother, and better mobile and web development.

## 👩‍💻 Built with

- [gluestack-ui](https://ui.gluestack.io)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 🌟 Features

- **Seamless Integration**: Get up and running with React Native and gluestack-ui in no time.
- **Modular Architecture**: Built with scalability in mind to cater to both small and large projects.
- **Preconfigured Navigation**: Includes preconfigured navigation patterns using [React Navigation](https://reactnavigation.org/).
- **Theming & Styling**: Customizable themes using gluestack-ui components.
- **Detailed Documentation**: Comprehensive documentation to guide you through every step.
- **Extensive form handling**: Extensive implementation of handling forms and validations.
- **Preconfigured linting rules**: Comprehensive linting rules.
- **Preconfigured editor configurations**: Widely accepted editor configuration.

## 📷 Screenshots

Please find the screenshots in the `head-starter-kit-screenshots` folder.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Installation

```bash
# Clone the repository

## Using SSH
git clone git@github.com:gluestack/react-native-head-starter-kit.git

## Using HTTPS
git clone https://github.com/gluestack/react-native-head-starter-kit.git

# Navigate into the directory
cd react-native-head-starter-kit

# Install dependencies
npm install

# Start the React Native development server
npm start
```

## 🌈 Applying Fonts in your application

You already have the font loaded in your application, now you can apply the font in your application.

Add the font name in the `gluestack.config.js` file in the `fonts` object.

```javascript
fonts: {
  heading: "inter",
  body: "inter",
  mono: "monospace",
},
```

## 📖 Documentation

For a deep dive into the components, structure, and configurations, please refer to our [detailed documentation](https://ui.gluestack.io/docs/getting-started/installation).

## 🧪 Testing

We've set up Jest as the testing framework for this project to ensure the reliability of your codebase. You can run the tests using the following commands:

### Setting Up Jest with React Native

To install `react-native-testing-library` in your project, run the following command:

```bash
npm install --save-dev @testing-library/react-native @types/jest jest
```

### Writing Test Cases

To write your own test cases, refer to the [React Native Testing Library documentation](https://testing-library.com/docs/react-native-testing-library/intro/) for comprehensive guidance and best practices.

### Running Tests

To run tests, use the following command:

```bash
npm run test
```

We've added an example of a Jest snapshot test case for the `SplashScreen` component. This test case uses Jest's `jest.mock` to mock a dependency and then renders the `SplashScreen` component within a `StyledProvider`. Finally, it asserts that the rendered component matches the previously saved snapshot.

You can add more test cases as needed for your other components and features. This section serves as a starting point for incorporating testing into your project using Jest.

## 🙌 Contributing

We welcome contributions! Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo, make changes and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## ❤️ Acknowledgments

- Thanks to the [React Native team](https://reactnative.dev/) for creating an amazing platform.
- Shoutout to [gluestack-ui contributors](https://gluestack.io/) for their outstanding work.

```

```
