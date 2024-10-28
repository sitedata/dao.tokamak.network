const operatorManagerFactoryFunctionsOfTypeA = [
];

const operatorManagerFactoryFunctionsOfTypeB = [
  {
    'params': {
      'aboutParam0': 'address _depositManager: The depositManager address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
      'aboutParam1': 'address _ton: The ton address',
      'exampleParam1': '0x0000000000000000000000000000000000000000',
      'aboutParam2': 'address _wton: The wton address',
      'exampleParam2': '0x0000000000000000000000000000000000000000',
      'aboutParam3': 'address _layer2Manager: The layer2Manager address',
      'exampleParam3': '0x0000000000000000000000000000000000000000',
    },
    'name': 'setAddresses',
    'title': '(Operator Manager Factory)Set addresses.',
    'prettyName': '',
    'disabled': false,
    'explanation': 'This function allows you to set the addresses used in operator manager factory contract.',
  },
  {
    'params': {
      'aboutParam0': 'address newOperatorManagerImp: the operatorManager implementation address',
      'exampleParam0': '0x0000000000000000000000000000000000000000',
    },
    'name': 'changeOperatorManagerImp',
    'title': '(Layer2 Manager)Change the operatorManager implementation address',
    'prettyName': '',
    'disabled': false,
    'explanation': 'This function allows you to change the operatorManager implementation address as an input value (Param1)',
  },
];

module.exports.operatorManagerFactoryFunctionsOfTypeA = operatorManagerFactoryFunctionsOfTypeA;
module.exports.operatorManagerFactoryFunctionsOfTypeB = operatorManagerFactoryFunctionsOfTypeB;
