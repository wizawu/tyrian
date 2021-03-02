export declare function typeAlias(type: string): string[];
export declare function memberModifier(modifier: string, isField?: boolean): string;
export declare function safeNamespace(namespace: string): string;
export declare function qualifiedName(type: TypeContext, safe?: boolean): string;
export declare function isLambda(stat: InterfaceStat, type: TypeContext): boolean;
