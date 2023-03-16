declare namespace java {
  namespace sql {
    interface DatabaseMetaData extends java.sql.Wrapper {
      readonly procedureResultUnknown: int
      readonly procedureNoResult: int
      readonly procedureReturnsResult: int
      readonly procedureColumnUnknown: int
      readonly procedureColumnIn: int
      readonly procedureColumnInOut: int
      readonly procedureColumnOut: int
      readonly procedureColumnReturn: int
      readonly procedureColumnResult: int
      readonly procedureNoNulls: int
      readonly procedureNullable: int
      readonly procedureNullableUnknown: int
      readonly columnNoNulls: int
      readonly columnNullable: int
      readonly columnNullableUnknown: int
      readonly bestRowTemporary: int
      readonly bestRowTransaction: int
      readonly bestRowSession: int
      readonly bestRowUnknown: int
      readonly bestRowNotPseudo: int
      readonly bestRowPseudo: int
      readonly versionColumnUnknown: int
      readonly versionColumnNotPseudo: int
      readonly versionColumnPseudo: int
      readonly importedKeyCascade: int
      readonly importedKeyRestrict: int
      readonly importedKeySetNull: int
      readonly importedKeyNoAction: int
      readonly importedKeySetDefault: int
      readonly importedKeyInitiallyDeferred: int
      readonly importedKeyInitiallyImmediate: int
      readonly importedKeyNotDeferrable: int
      readonly typeNoNulls: int
      readonly typeNullable: int
      readonly typeNullableUnknown: int
      readonly typePredNone: int
      readonly typePredChar: int
      readonly typePredBasic: int
      readonly typeSearchable: int
      readonly tableIndexStatistic: short
      readonly tableIndexClustered: short
      readonly tableIndexHashed: short
      readonly tableIndexOther: short
      readonly attributeNoNulls: short
      readonly attributeNullable: short
      readonly attributeNullableUnknown: short
      readonly sqlStateXOpen: int
      readonly sqlStateSQL: int
      readonly sqlStateSQL99: int
      readonly functionColumnUnknown: int
      readonly functionColumnIn: int
      readonly functionColumnInOut: int
      readonly functionColumnOut: int
      readonly functionReturn: int
      readonly functionColumnResult: int
      readonly functionNoNulls: int
      readonly functionNullable: int
      readonly functionNullableUnknown: int
      readonly functionResultUnknown: int
      readonly functionNoTable: int
      readonly functionReturnsTable: int
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
      getProcedures(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getProcedureColumns(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string
      ): java.sql.ResultSet
      getTables(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String[] | string[]
      ): java.sql.ResultSet
      getSchemas(): java.sql.ResultSet
      getCatalogs(): java.sql.ResultSet
      getTableTypes(): java.sql.ResultSet
      getColumns(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string
      ): java.sql.ResultSet
      getColumnPrivileges(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string
      ): java.sql.ResultSet
      getTablePrivileges(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getBestRowIdentifier(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: number | java.lang.Integer,
        arg4: boolean | java.lang.Boolean
      ): java.sql.ResultSet
      getVersionColumns(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getPrimaryKeys(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getImportedKeys(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getExportedKeys(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getCrossReference(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string,
        arg4: java.lang.String | string,
        arg5: java.lang.String | string
      ): java.sql.ResultSet
      getTypeInfo(): java.sql.ResultSet
      getIndexInfo(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: boolean | java.lang.Boolean,
        arg4: boolean | java.lang.Boolean
      ): java.sql.ResultSet
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
      getUDTs(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: number[] | java.lang.Integer[]
      ): java.sql.ResultSet
      getConnection(): java.sql.Connection
      supportsSavepoints(): boolean
      supportsNamedParameters(): boolean
      supportsMultipleOpenResults(): boolean
      supportsGetGeneratedKeys(): boolean
      getSuperTypes(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getSuperTables(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getAttributes(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string
      ): java.sql.ResultSet
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
      getFunctions(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.ResultSet
      getFunctionColumns(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string
      ): java.sql.ResultSet
      getPseudoColumns(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string
      ): java.sql.ResultSet
      generatedKeyAlwaysReturned(): boolean
      getMaxLogicalLobSize?(): number
      supportsRefCursors?(): boolean
      supportsSharding?(): boolean
    }
  }
}
