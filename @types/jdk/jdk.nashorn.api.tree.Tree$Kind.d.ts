declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        class Tree$Kind extends java.lang.Enum<jdk.nashorn.api.tree.Tree$Kind> {

          public static readonly ARRAY_ACCESS: jdk.nashorn.api.tree.Tree$Kind
          public static readonly ARRAY_LITERAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly BLOCK: jdk.nashorn.api.tree.Tree$Kind
          public static readonly BREAK: jdk.nashorn.api.tree.Tree$Kind
          public static readonly CLASS: jdk.nashorn.api.tree.Tree$Kind
          public static readonly CLASS_EXPRESSION: jdk.nashorn.api.tree.Tree$Kind
          public static readonly CASE: jdk.nashorn.api.tree.Tree$Kind
          public static readonly CATCH: jdk.nashorn.api.tree.Tree$Kind
          public static readonly COMPILATION_UNIT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly CONDITIONAL_EXPRESSION: jdk.nashorn.api.tree.Tree$Kind
          public static readonly CONTINUE: jdk.nashorn.api.tree.Tree$Kind
          public static readonly DO_WHILE_LOOP: jdk.nashorn.api.tree.Tree$Kind
          public static readonly DEBUGGER: jdk.nashorn.api.tree.Tree$Kind
          public static readonly FOR_IN_LOOP: jdk.nashorn.api.tree.Tree$Kind
          public static readonly FUNCTION_EXPRESSION: jdk.nashorn.api.tree.Tree$Kind
          public static readonly ERROR: jdk.nashorn.api.tree.Tree$Kind
          public static readonly EXPRESSION_STATEMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly MEMBER_SELECT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly FOR_LOOP: jdk.nashorn.api.tree.Tree$Kind
          public static readonly IDENTIFIER: jdk.nashorn.api.tree.Tree$Kind
          public static readonly IF: jdk.nashorn.api.tree.Tree$Kind
          public static readonly INSTANCE_OF: jdk.nashorn.api.tree.Tree$Kind
          public static readonly LABELED_STATEMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly MODULE: jdk.nashorn.api.tree.Tree$Kind
          public static readonly EXPORT_ENTRY: jdk.nashorn.api.tree.Tree$Kind
          public static readonly IMPORT_ENTRY: jdk.nashorn.api.tree.Tree$Kind
          public static readonly FUNCTION: jdk.nashorn.api.tree.Tree$Kind
          public static readonly FUNCTION_INVOCATION: jdk.nashorn.api.tree.Tree$Kind
          public static readonly NEW: jdk.nashorn.api.tree.Tree$Kind
          public static readonly OBJECT_LITERAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly PARENTHESIZED: jdk.nashorn.api.tree.Tree$Kind
          public static readonly PROPERTY: jdk.nashorn.api.tree.Tree$Kind
          public static readonly REGEXP_LITERAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly TEMPLATE_LITERAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly RETURN: jdk.nashorn.api.tree.Tree$Kind
          public static readonly EMPTY_STATEMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly SWITCH: jdk.nashorn.api.tree.Tree$Kind
          public static readonly THROW: jdk.nashorn.api.tree.Tree$Kind
          public static readonly TRY: jdk.nashorn.api.tree.Tree$Kind
          public static readonly VARIABLE: jdk.nashorn.api.tree.Tree$Kind
          public static readonly WHILE_LOOP: jdk.nashorn.api.tree.Tree$Kind
          public static readonly WITH: jdk.nashorn.api.tree.Tree$Kind
          public static readonly POSTFIX_INCREMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly POSTFIX_DECREMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly PREFIX_INCREMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly PREFIX_DECREMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly UNARY_PLUS: jdk.nashorn.api.tree.Tree$Kind
          public static readonly UNARY_MINUS: jdk.nashorn.api.tree.Tree$Kind
          public static readonly BITWISE_COMPLEMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly LOGICAL_COMPLEMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly DELETE: jdk.nashorn.api.tree.Tree$Kind
          public static readonly TYPEOF: jdk.nashorn.api.tree.Tree$Kind
          public static readonly VOID: jdk.nashorn.api.tree.Tree$Kind
          public static readonly COMMA: jdk.nashorn.api.tree.Tree$Kind
          public static readonly MULTIPLY: jdk.nashorn.api.tree.Tree$Kind
          public static readonly DIVIDE: jdk.nashorn.api.tree.Tree$Kind
          public static readonly REMAINDER: jdk.nashorn.api.tree.Tree$Kind
          public static readonly PLUS: jdk.nashorn.api.tree.Tree$Kind
          public static readonly MINUS: jdk.nashorn.api.tree.Tree$Kind
          public static readonly LEFT_SHIFT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly RIGHT_SHIFT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly UNSIGNED_RIGHT_SHIFT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly LESS_THAN: jdk.nashorn.api.tree.Tree$Kind
          public static readonly GREATER_THAN: jdk.nashorn.api.tree.Tree$Kind
          public static readonly LESS_THAN_EQUAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly GREATER_THAN_EQUAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly IN: jdk.nashorn.api.tree.Tree$Kind
          public static readonly EQUAL_TO: jdk.nashorn.api.tree.Tree$Kind
          public static readonly NOT_EQUAL_TO: jdk.nashorn.api.tree.Tree$Kind
          public static readonly STRICT_EQUAL_TO: jdk.nashorn.api.tree.Tree$Kind
          public static readonly STRICT_NOT_EQUAL_TO: jdk.nashorn.api.tree.Tree$Kind
          public static readonly AND: jdk.nashorn.api.tree.Tree$Kind
          public static readonly XOR: jdk.nashorn.api.tree.Tree$Kind
          public static readonly OR: jdk.nashorn.api.tree.Tree$Kind
          public static readonly CONDITIONAL_AND: jdk.nashorn.api.tree.Tree$Kind
          public static readonly CONDITIONAL_OR: jdk.nashorn.api.tree.Tree$Kind
          public static readonly MULTIPLY_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly DIVIDE_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly REMAINDER_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly PLUS_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly MINUS_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly LEFT_SHIFT_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly RIGHT_SHIFT_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly UNSIGNED_RIGHT_SHIFT_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly AND_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly XOR_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly OR_ASSIGNMENT: jdk.nashorn.api.tree.Tree$Kind
          public static readonly SPREAD: jdk.nashorn.api.tree.Tree$Kind
          public static readonly YIELD: jdk.nashorn.api.tree.Tree$Kind
          public static readonly NUMBER_LITERAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly BOOLEAN_LITERAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly STRING_LITERAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly NULL_LITERAL: jdk.nashorn.api.tree.Tree$Kind
          public static readonly OTHER: jdk.nashorn.api.tree.Tree$Kind
          public static values(): jdk.nashorn.api.tree.Tree$Kind[]
          public static valueOf(arg0: java.lang.String): jdk.nashorn.api.tree.Tree$Kind
          public asInterface(): java.lang.Class<jdk.nashorn.api.tree.Tree>
          public isLiteral(): boolean
          public isExpression(): boolean
          public isStatement(): boolean
        }

      }
    }
  }
}
