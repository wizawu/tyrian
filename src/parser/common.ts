export const alias = {
  "boolean": ["boolean", "java.lang.Boolean"],
  "byte": ["number", "java.lang.Byte"],
  "char": ["string", "java.lang.Character"],
  "double": ["number", "java.lang.Double"],
  "float": ["number", "java.lang.Float"],
  "int": ["number", "java.lang.Integer"],
  "long": ["number", "java.lang.Long"],
  "short": ["number", "java.lang.Short"],

  "java.lang.Boolean": ["boolean", "java.lang.Boolean"],
  "java.lang.Byte": ["number", "java.lang.Byte"],
  "java.lang.Character": ["string", "java.lang.Character"],
  "java.lang.Double": ["number", "java.lang.Double"],
  "java.lang.Float": ["number", "java.lang.Float"],
  "java.lang.Integer": ["number", "java.lang.Integer"],
  "java.lang.Long": ["number", "java.lang.Long"],
  "java.lang.Object": ["java.lang.Object", "any"],
  "java.lang.Short": ["number", "java.lang.Short"],
  "java.lang.String": ["java.lang.String", "string"],
}

export function qualifiedName(type: TypeContext) {
  return type.packageName().getText() + "." + type.Identifier().getText()
}
