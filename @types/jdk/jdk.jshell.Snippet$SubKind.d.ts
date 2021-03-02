declare namespace jdk {
  namespace jshell {

    class Snippet$SubKind extends java.lang.Enum<jdk.jshell.Snippet$SubKind> {
      public static readonly SINGLE_TYPE_IMPORT_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly TYPE_IMPORT_ON_DEMAND_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly SINGLE_STATIC_IMPORT_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly STATIC_IMPORT_ON_DEMAND_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly CLASS_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly INTERFACE_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly ENUM_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly ANNOTATION_TYPE_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly METHOD_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly VAR_DECLARATION_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly VAR_DECLARATION_WITH_INITIALIZER_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly TEMP_VAR_EXPRESSION_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly VAR_VALUE_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly ASSIGNMENT_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly OTHER_EXPRESSION_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly STATEMENT_SUBKIND: jdk.jshell.Snippet$SubKind
      public static readonly UNKNOWN_SUBKIND: jdk.jshell.Snippet$SubKind
      public static values(): jdk.jshell.Snippet$SubKind[]
      public static valueOf(arg0: java.lang.String | string): jdk.jshell.Snippet$SubKind
      public isExecutable(): boolean
      public hasValue(): boolean
      public kind(): jdk.jshell.Snippet$Kind
    }

  }
}
