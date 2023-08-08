const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://localhost:9000',
    token : "squ_ec41b062d5d9f26ceec2da243802f7ab2c7e9315",
    options: {
      'sonar.projectName': 'week-eight',
    //   'sonar.login': 'admin',
    //   'sonar.password': 'password',
      'sonar.projectDescription': 'Week 8 Testing of NodeJS Code',
      'sonar.sources': '.',
      'sonar.tests': '.',
      'sonar.inclusions': '.'
    }
  },
  () => process.exit()
);