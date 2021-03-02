declare namespace java {
  namespace sql {

    interface DatabaseMetaData extends java.sql.Wrapper {
      public static readonly procedureResultUnknown: int
      public static readonly procedureNoResult: int
      public static readonly procedureReturnsResult: int
      public static readonly procedureColumnUnknown: int
      public static readonly procedureColumnIn: int
      public static readonly procedureColumnInOut: int
      public static readonly procedureColumnOut: int
      public static readonly procedureColumnReturn: int
      public static readonly procedureColumnResult: int
      public static readonly procedureNoNulls: int
      public static readonly procedureNullable: int
      public static readonly procedureNullableUnknown: int
      public static readonly columnNoNulls: int
      public static readonly columnNullable: int
      public static readonly columnNullableUnknown: int
      public static readonly bestRowTemporary: int
      public static readonly bestRowTransaction: int
      public static readonly bestRowSession: int
      public static readonly bestRowUnknown: int
      public static readonly bestRowNotPseudo: int
      public static readonly bestRowPseudo: int
      public static readonly versionColumnUnknown: int
      public static readonly versionColumnNotPseudo: int
      public static readonly versionColumnPseudo: int
      public static readonly importedKeyCascade: int
      public static readonly importedKeyRestrict: int
      public static readonly importedKeySetNull: int
      public static readonly importedKeyNoAction: int
      public static readonly importedKeySetDefault: int
      public static readonly importedKeyInitiallyDeferred: int
      public static readonly importedKeyInitiallyImmediate: int
      public static readonly importedKeyNotDeferrable: int
      public static readonly typeNoNulls: int
      public static readonly typeNullable: int
      public static readonly typeNullableUnknown: int
      public static readonly typePredNone: int
      public static readonly typePredChar: int
      public static readonly typePredBasic: int
      public static readonly typeSearchable: int
      public static readonly tableIndexStatistic: short
      public static readonly tableIndexClustered: short
      public static readonly tableIndexHashed: short
      public static readonly tableIndexOther: short
      public static readonly attributeNoNulls: short
      public static readonly attributeNullable: short
      public static readonly attributeNullableUnknown: short
      public static readonly sqlStateXOpen: int
      public static readonly sqlStateSQL: int
      public static readonly sqlStateSQL99: int
      public static readonly functionColumnUnknown: int
      public static readonly functionColumnIn: int
      public static readonly functionColumnInOut: int
      public static readonly functionColumnOut: int
      public static readonly functionReturn: int
      public static readonly functionColumnResult: int
      public static readonly functionNoNulls: int
      public static readonly functionNullable: int
      public static readonly functionNullableUnknown: int
      public static readonly functionResultUnknown: int
      public static readonly functionNoTable: int
      public static readonly functionReturnsTable: int
      allProceduresAreCallable(): boolean
      allTablesAreSelectable(): boolean
      getURL(): java.lang.String
      getUserName(): java.lang.String
      isReadOnly(): boolean
      nullsAreSortedHigh(): boolean
      nullsAreSortedLow(): boolean
      nullsAreSortedAtStart(): boolean
      nullsAreSortedAtEnd(): boolean
      getDatabaseProductName(): java.lang.String
      getDatabaseProductVersion(): java.lang.String
      getDriverName(): java.lang.String
      getDriverVersion(): java.lang.String
      getDriverMajorVersion(): number
      getDriverMinorVersion(): number
      usesLocalFiles(): boolean
      usesLocalFilePerTable(): boolean
      supportsMixedCaseIdentifiers(): boolean
      storesUpperCaseIdentifiers(): boolean
      storesLowerCaseIdentifiers(): boolean
      storesMixedCaseIdentifiers(): boolean
      supportsMixedCaseQuotedIdentifiers(): boolean
      storesUpperCaseQuotedIdentifiers(): boolean
      storesLowerCaseQuotedIdentifiers(): boolean
      storesMixedCaseQuotedIdentifiers(): boolean
      getIdentifierQuoteString(): java.lang.String
      getSQLKeywords(): java.lang.String
      getNumericFunctions(): java.lang.String
      getStringFunctions(): java.lang.String
      getSystemFunctions(): java.lang.String
      getTimeDateFunctions(): java.lang.String
      getSearchStringEscape(): java.lang.String
      getExtraNameCharacters(): java.lang.String
      supportsAlterTableWithAddColumn(): boolean
      supportsAlterTableWithDropColumn(): boolean
      supportsColumnAliasing(): boolean
      nullPlusNonNullIsNull(): boolean
      supportsConvert(): boolean
      supportsConvert(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      supportsTableCorrelationNames(): boolean
      supportsDifferentTableCorrelationNames(): boolean
      supportsExpressionsInOrderBy(): boolean
      supportsOrderByUnrelated(): boolean
      supportsGroupBy(): boolean
      supportsGroupByUnrelated(): boolean
      supportsGroupByBeyondSelect(): boolean
      supportsLikeEscapeClause(): boolean
      supportsMultipleResultSets(): boolean
      supportsMultipleTransactions(): boolean
      supportsNonNullableColumns(): boolean
      supportsMinimumSQLGrammar(): boolean
      supportsCoreSQLGrammar(): boolean
      supportsExtendedSQLGrammar(): boolean
      supportsANSI92EntryLevelSQL(): boolean
      supportsANSI92IntermediateSQL(): boolean
      supportsANSI92FullSQL(): boolean
      supportsIntegrityEnhancementFacility(): boolean
      supportsOuterJoins(): boolean
      supportsFullOuterJoins(): boolean
      supportsLimitedOuterJoins(): boolean
      getSchemaTerm(): java.lang.String
      getProcedureTerm(): java.lang.String
      getCatalogTerm(): java.lang.String
      isCatalogAtStart(): boolean
      getCatalogSeparator(): java.lang.String
      supportsSchemasInDataManipulation(): boolean
      supportsSchemasInProcedureCalls(): boolean
      supportsSchemasInTableDefinitions(): boolean
      supportsSchemasInIndexDefinitions(): boolean
      supportsSchemasInPrivilegeDefinitions(): boolean
      supportsCatalogsInDataManipulation(): boolean
      supportsCatalogsInProcedureCalls(): boolean
      supportsCatalogsInTableDefinitions(): boolean
      supportsCatalogsInIndexDefinitions(): boolean
      supportsCatalogsInPrivilegeDefinitions(): boolean
      supportsPositionedDelete(): boolean
      supportsPositionedUpdate(): boolean
      supportsSelectForUpdate(): boolean
      supportsStoredProcedures(): boolean
      supportsSubqueriesInComparisons(): boolean
      supportsSubqueriesInExists(): boolean
      supportsSubqueriesInIns(): boolean
      supportsSubqueriesInQuantifieds(): boolean
      supportsCorrelatedSubqueries(): boolean
      supportsUnion(): boolean
      supportsUnionAll(): boolean
      supportsOpenCursorsAcrossCommit(): boolean
      supportsOpenCursorsAcrossRollback(): boolean
      supportsOpenStatementsAcrossCommit(): boolean
      supportsOpenStatementsAcrossRollback(): boolean
      getMaxBinaryLiteralLength(): number
      getMaxCharLiteralLength(): number
      getMaxColumnNameLength(): number
      getMaxColumnsInGroupBy(): number
      getMaxColumnsInIndex(): number
      getMaxColumnsInOrderBy(): number
      getMaxColumnsInSelect(): number
      getMaxColumnsInTable(): number
      getMaxConnections(): number
      getMaxCursorNameLength(): number
      getMaxIndexLength(): number
      getMaxSchemaNameLength(): number
      getMaxProcedureNameLength(): number
      getMaxCatalogNameLength(): number
      getMaxRowSize(): number
      doesMaxRowSizeIncludeBlobs(): boolean
      getMaxStatementLength(): number
      getMaxStatements(): number
      getMaxTableNameLength(): number
      getMaxTablesInSelect(): number
      getMaxUserNameLength(): number
      getDefaultTransactionIsolation(): number
      supportsTransactions(): boolean
      supportsTransactionIsolationLevel(arg0: number | java.lang.Integer): boolean
      supportsDataDefinitionAndDataManipulationTransactions(): boolean
      supportsDataManipulationTransactionsOnly(): boolean
      dataDefinitionCausesTransactionCommit(): boolean
      dataDefinitionIgnoredInTransactions(): boolean
      getProcedures(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getProcedureColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
      getTables(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[]): java.sql.ResultSet
      getSchemas(): java.sql.ResultSet
      getCatalogs(): java.sql.ResultSet
      getTableTypes(): java.sql.ResultSet
      getColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
      getColumnPrivileges(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
      getTablePrivileges(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getBestRowIdentifier(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): java.sql.ResultSet
      getVersionColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getPrimaryKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getImportedKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getExportedKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getCrossReference(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): java.sql.ResultSet
      getTypeInfo(): java.sql.ResultSet
      getIndexInfo(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean): java.sql.ResultSet
      supportsResultSetType(arg0: number | java.lang.Integer): boolean
      supportsResultSetConcurrency(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      ownUpdatesAreVisible(arg0: number | java.lang.Integer): boolean
      ownDeletesAreVisible(arg0: number | java.lang.Integer): boolean
      ownInsertsAreVisible(arg0: number | java.lang.Integer): boolean
      othersUpdatesAreVisible(arg0: number | java.lang.Integer): boolean
      othersDeletesAreVisible(arg0: number | java.lang.Integer): boolean
      othersInsertsAreVisible(arg0: number | java.lang.Integer): boolean
      updatesAreDetected(arg0: number | java.lang.Integer): boolean
      deletesAreDetected(arg0: number | java.lang.Integer): boolean
      insertsAreDetected(arg0: number | java.lang.Integer): boolean
      supportsBatchUpdates(): boolean
      getUDTs(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int[]): java.sql.ResultSet
      getConnection(): java.sql.Connection
      supportsSavepoints(): boolean
      supportsNamedParameters(): boolean
      supportsMultipleOpenResults(): boolean
      supportsGetGeneratedKeys(): boolean
      getSuperTypes(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getSuperTables(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getAttributes(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
      supportsResultSetHoldability(arg0: number | java.lang.Integer): boolean
      getResultSetHoldability(): number
      getDatabaseMajorVersion(): number
      getDatabaseMinorVersion(): number
      getJDBCMajorVersion(): number
      getJDBCMinorVersion(): number
      getSQLStateType(): number
      locatorsUpdateCopy(): boolean
      supportsStatementPooling(): boolean
      getRowIdLifetime(): java.sql.RowIdLifetime
      getSchemas(arg0: java.lang.String | string, arg1: java.lang.String | string): java.sql.ResultSet
      supportsStoredFunctionsUsingCallSyntax(): boolean
      autoCommitFailureClosesAllResultSets(): boolean
      getClientInfoProperties(): java.sql.ResultSet
      getFunctions(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
      getFunctionColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
      getPseudoColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
      generatedKeyAlwaysReturned(): boolean
      getMaxLogicalLobSize(): number
      supportsRefCursors(): boolean
      supportsSharding(): boolean
    }

  }
}
