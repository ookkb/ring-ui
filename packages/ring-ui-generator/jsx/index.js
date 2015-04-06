var generators = require('yeoman-generator');

var convertToBemName = function (name) {
  return name.replace(/-./g, function (symbol) {
    return symbol.replace('-', '').toUpperCase();
  });
};

module.exports = generators.Base.extend({

  writing: function () {
    this.prompt([{
      type: 'input',
      name: 'componentName',
      message: 'What\'s your component name, my-component for example',
      default: this.appname
    }], function (answers) {
      var bemName = convertToBemName(answers.componentName);

      this.fs.copyTpl(
        this.templatePath('/component.jsx'),
        this.destinationPath(answers.componentName + '.jsx'),
        {componentName: answers.componentName, bemName: bemName}
      );

      this.fs.copyTpl(
        this.templatePath('/component.scss'),
        this.destinationPath(answers.componentName + '.scss'),
        {componentName: answers.componentName, bemName: bemName}
      );

      this.fs.copyTpl(
        this.templatePath('/component.test.jsx'),
        this.destinationPath(answers.componentName + '.test.jsx'),
        {componentName: answers.componentName, bemName: bemName}
      );

    }.bind(this));
  }
});