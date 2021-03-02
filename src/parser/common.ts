export function typeAlias(type: string): string[] {
  switch (type) {
    case "boolean": return ["boolean", "java.lang.Boolean"]
    case "byte": return ["number", "java.lang.Byte"]
    case "char": return ["string", "java.lang.Character"]
    case "double": return ["number", "java.lang.Double"]
    case "float": return ["number", "java.lang.Float"]
    case "int": return ["number", "java.lang.Integer"]
    case "long": return ["number", "java.lang.Long"]
    case "short": return ["number", "java.lang.Short"]

    case "java.lang.Boolean": return ["boolean", "java.lang.Boolean"]
    case "java.lang.Byte": return ["number", "java.lang.Byte"]
    case "java.lang.Character": return ["string", "java.lang.Character"]
    case "java.lang.Double": return ["number", "java.lang.Double"]
    case "java.lang.Float": return ["number", "java.lang.Float"]
    case "java.lang.Integer": return ["number", "java.lang.Integer"]
    case "java.lang.Long": return ["number", "java.lang.Long"]
    case "java.lang.Object": return ["java.lang.Object", "any"]
    case "java.lang.Short": return ["number", "java.lang.Short"]
    case "java.lang.String": return ["java.lang.String", "string"]

    default: return [type]
  }
}

export function memberModifier(modifier: string, isField = false): string {
  if (modifier === "abstract") return modifier
  if (modifier === "final" && isField) return "readonly"
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

export function isLambda(stat: InterfaceStat, type: TypeContext): boolean {
  let count = 0
  const bfs = [qualifiedName(type)]
  for (let i = 0; i < bfs.length; i++) {
    const current = bfs[i]
    if (stat[current]) {
      count += stat[current][0]
      stat[current].slice(1).forEach(it => {
        if (bfs.indexOf(it) < 0) bfs.push(it)
      })
    }
  }
  return count === 1
}
