module.exports = {
  
  default: {
    requireModule: ['ts-node/register'],
    
    require: [
      'src/step-definitions/**/*.ts',
      'src/hooks/**/*.ts'
    ],

    paths: [
      'features/**/*.feature'
    ]

  }

};