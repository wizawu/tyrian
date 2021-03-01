grammar Javap;

// https://github.com/antlr/antlr4/blob/master/tool-testsuite/test/org/antlr/v4/test/tool/Java.g4

compilationUnit
    : (sourceDeclaration | classOrInterface)* EOF?
    ;

sourceDeclaration
    : 'Compiled from' '"' .*? '"'
    ;

classOrInterface
    : classDeclaration
    | interfaceDeclaration
    ;

classDeclaration
    : classModifier* 'class' type
      ('extends' type)?
      ('implements' typeList)?
      classBody
    ;

interfaceDeclaration
    : interfaceModifier* 'interface' type
      ('extends' typeList)?
      interfaceBody
    ;

classModifier
    : 'public'
    | 'private'
    | 'protected'
    | 'abstract'
    | 'final'
    ;

interfaceModifier
    : 'public'
    | 'private'
    | 'protected'
    ;

typeList
    : type ((','|', ') type)*
    ;

type
    : (packageName '.')? Identifier typeArguments?
    ;

packageName
    : Identifier ('.' Identifier)*
    ;

typeArguments
    : '[' ']'
    | '<' typeArgument ((','|', ') typeArgument)* '>'
    ;

typeArgument
    : type
    | Identifier 'extends' type
    | '?' 'extends' type
    | '?' 'super' type
    | '?'
    ;

Identifier
    : [a-zA-Z$_] [a-zA-Z$_0-9]*
    ;

classBody
    : '{' classMember* '}'
    ;

interfaceBody
    : '{' interfaceMember* '}'
    ;

modifier
    : 'abstract'
    | 'default'
    | 'final'
    | 'native'
    | 'private'
    | 'protected'
    | 'public'
    | 'static'
    | 'strictfp'
    | 'synchronized'
    | 'transient'
    | 'volatile'
    ;

classMember
    : constructorDeclaration
    | fieldDeclaration
    | methodDeclaration
    | 'static' '{}' ';'
    ;

interfaceMember
    : fieldDeclaration
    | methodDeclaration
    | 'static' '{}' ';'
    ;

constructorDeclaration
    : modifier* type '(' methodArguments ')' throwsException? ';'
    ;

fieldDeclaration
    : modifier* type Identifier ';'
    ;

methodDeclaration
    : modifier* typeArguments? type Identifier '(' methodArguments ')' throwsException? ';'
    ;

throwsException
    : 'throws' typeList
    ;

varargs
    : type '...'
    ;

methodArguments
    : typeList?
    | typeList (','|', ') varargs
    | varargs
    ;

WS
    : [ \t\r\n]+ -> skip
    ;
