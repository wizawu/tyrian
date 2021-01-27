declare interface JavaClass {
  isInterface: boolean
  modifiers: string[]
  type: JavaType
  extends?: JavaType
  implements: JavaType[]
  constructors: JavaClassConstructor[]
  members: JavaClassMember[]
  methods: JavaClassMethod[]
}

declare interface JavaType {
  packageName: string
  identifier: string
  arguments: "[]" | JavaTypeArgument[]
}

declare interface JavaTypeArgument {
  identifier: string
  super?: JavaType
  extends?: JavaType
}

declare interface JavaClassConstructor {
  modifiers: string[]
  arguments: JavaMethodArgument[]
}

declare interface JavaClassMember {
  modifiers: string[]
  type: JavaType
  identifier: string
}

declare interface JavaClassMethod {
  modifiers: string[]
  templateArguments: JavaTypeArgument[]
  returnType: JavaType
  identifier: string
  arguments: JavaMethodArgument[]
  throws: JavaType[]
}

declare type JavaMethodArgument = JavaType | "..."
