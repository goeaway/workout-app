module.exports = {
    testEnvironment: "jest-environment-jsdom-global",
    transform: {
      ".(ts|tsx)": "ts-jest"
    },
    testRegex: "(testing/tests/.*|\\.(test|spec))\\.(ts|tsx)$",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    coverageDirectory: "./testing/reports",
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "/testing/",
      "/wwwroot/",
      "/utils/polyfills.js"
    ],
    coverageReporters: [
      "json",
      "text",
      "text-summary"
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/testing/mocks/assets/style.js"
    },
    setupFilesAfterEnv: [
      "<rootDir>/testing/setup/post-env-setup.js"
    ]
}