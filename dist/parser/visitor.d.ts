export declare function generateTsDef(context: CompilationUnitContext, ifs: InterfaceStat, typeRoot: string): boolean;
export declare function typeToString(type: TypeContext, alias?: boolean): string;
export declare function declareNamespaces(type: TypeContext): [string, string];
export declare function convertMemberModifier(modifier: string, isField?: boolean): string;
export declare function convertNamespace(namespace: string): string;
export declare function qualifiedName(type: TypeContext, safe?: boolean): string;
export declare function isLambda(stat: InterfaceStat, type: TypeContext): boolean;
