export const TypeAlias = {
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

export function memberModifier(modifier: string): string {
  if (modifier === "abstract") return modifier
  if (modifier === "final") return "readonly"
  if (modifier === "private") return modifier
  if (modifier === "protected") return modifier
  if (modifier === "public") return modifier
  if (modifier === "static") return modifier
  return ""
}

// Append $ to namespace if it is a typescript keyword
export function safeNamespace(namespace: string): string {
  const invalid = ["debugger", "enum", "export", "function", "in", "is"]
  return invalid.indexOf(namespace) < 0 ? namespace : (namespace + "$")
}

export function qualifiedName(type: TypeContext, safe = false): string {
  if (safe) {
    const packages = type.packageName()?.Identifier().map(it => safeNamespace(it.getText())) || []
    return [...packages, type.Identifier().getText()].join(".")
  } else {
    return (type.packageName()?.getText().concat(".") || "") + type.Identifier().getText()
  }
}
