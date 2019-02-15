export function getPropertyInfo(name) {
    return properties.hasOwnProperty(name) ? properties[name] : null;
  }
  
  function PropertyInfoRecord(
    name,
    type,
    mustUseProperty,
    attributeName,
    attributeNamespace,
  ) {
    // this.acceptsBooleans =
    //   type === BOOLEANISH_STRING ||
    //   type === BOOLEAN ||
    //   type === OVERLOADED_BOOLEAN;
    this.attributeName = attributeName;
    this.attributeNamespace = attributeNamespace;
    this.mustUseProperty = mustUseProperty;
    this.propertyName = name;
    this.type = type;
  }

  const properties = {};

  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(([name, attributeName]) => {
    properties[name] = new PropertyInfoRecord(
      name,
    //   STRING,
      false, // mustUseProperty
      attributeName, // attributeName
      null, // attributeNamespace
    );
    // console.log(properties[name])
  });