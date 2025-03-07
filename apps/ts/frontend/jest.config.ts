export default {
  displayName: "frontend",
  preset: "<rootDir>/jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "./tsconfig.spec.json" }],
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "<rootDir>/coverage/apps/ts/frontend",
};
