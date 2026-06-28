const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
  jsonDir: "reports/cucumber-report",
  reportPath: "reports/html-report",

  pageTitle: "Playwright Automation Report",
  reportName: "Playwright Cucumber Execution Report",

  displayDuration: true,
  displayReportTime: true,

  metadata: {
    browser: {
      name: "Chromium",
      version: "Latest"
    },
    device: "Local Machine",
    platform: {
      name: "Windows",
      version: "11"
    }
  },

  customData: {
    title: "Execution Information",
    data: [
      {
        label: "Project",
        value: "Playwright + Cucumber"
      },
      {
        label: "Environment",
        value: "QA"
      },
      {
        label: "Execution Time",
        value: new Date().toLocaleString()
      }
    ]
  }
});