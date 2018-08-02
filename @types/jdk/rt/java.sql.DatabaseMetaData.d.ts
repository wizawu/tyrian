declare namespace java {
    namespace sql {
interface DatabaseMetaData extends java.sql.Wrapper {
    procedureResultUnknown: int
    procedureNoResult: int
    procedureReturnsResult: int
    procedureColumnUnknown: int
    procedureColumnIn: int
    procedureColumnInOut: int
    procedureColumnOut: int
    procedureColumnReturn: int
    procedureColumnResult: int
    procedureNoNulls: int
    procedureNullable: int
    procedureNullableUnknown: int
    columnNoNulls: int
    columnNullable: int
    columnNullableUnknown: int
    bestRowTemporary: int
    bestRowTransaction: int
    bestRowSession: int
    bestRowUnknown: int
    bestRowNotPseudo: int
    bestRowPseudo: int
    versionColumnUnknown: int
    versionColumnNotPseudo: int
    versionColumnPseudo: int
    importedKeyCascade: int
    importedKeyRestrict: int
    importedKeySetNull: int
    importedKeyNoAction: int
    importedKeySetDefault: int
    importedKeyInitiallyDeferred: int
    importedKeyInitiallyImmediate: int
    importedKeyNotDeferrable: int
    typeNoNulls: int
    typeNullable: int
    typeNullableUnknown: int
    typePredNone: int
    typePredChar: int
    typePredBasic: int
    typeSearchable: int
    tableIndexStatistic: short
    tableIndexClustered: short
    tableIndexHashed: short
    tableIndexOther: short
    attributeNoNulls: short
    attributeNullable: short
    attributeNullableUnknown: short
    sqlStateXOpen: int
    sqlStateSQL: int
    sqlStateSQL99: int
    functionColumnUnknown: int
    functionColumnIn: int
    functionColumnInOut: int
    functionColumnOut: int
    functionReturn: int
    functionColumnResult: int
    functionNoNulls: int
    functionNullable: int
    functionNullableUnknown: int
    functionResultUnknown: int
    functionNoTable: int
    functionReturnsTable: int
    allProceduresAreCallable(): boolean
    allTablesAreSelectable(): boolean
    getURL(): string
    getUserName(): string
    isReadOnly(): boolean
    nullsAreSortedHigh(): boolean
    nullsAreSortedLow(): boolean
    nullsAreSortedAtStart(): boolean
    nullsAreSortedAtEnd(): boolean
    getDatabaseProductName(): string
    getDatabaseProductVersion(): string
    getDriverName(): string
    getDriverVersion(): string
    getDriverMajorVersion(): int
    getDriverMinorVersion(): int
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
    getIdentifierQuoteString(): string
    getSQLKeywords(): string
    getNumericFunctions(): string
    getStringFunctions(): string
    getSystemFunctions(): string
    getTimeDateFunctions(): string
    getSearchStringEscape(): string
    getExtraNameCharacters(): string
    supportsAlterTableWithAddColumn(): boolean
    supportsAlterTableWithDropColumn(): boolean
    supportsColumnAliasing(): boolean
    nullPlusNonNullIsNull(): boolean
    supportsConvert(): boolean
    supportsConvert(arg0: int, arg1: int): boolean
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
    getSchemaTerm(): string
    getProcedureTerm(): string
    getCatalogTerm(): string
    isCatalogAtStart(): boolean
    getCatalogSeparator(): string
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
    getMaxBinaryLiteralLength(): int
    getMaxCharLiteralLength(): int
    getMaxColumnNameLength(): int
    getMaxColumnsInGroupBy(): int
    getMaxColumnsInIndex(): int
    getMaxColumnsInOrderBy(): int
    getMaxColumnsInSelect(): int
    getMaxColumnsInTable(): int
    getMaxConnections(): int
    getMaxCursorNameLength(): int
    getMaxIndexLength(): int
    getMaxSchemaNameLength(): int
    getMaxProcedureNameLength(): int
    getMaxCatalogNameLength(): int
    getMaxRowSize(): int
    doesMaxRowSizeIncludeBlobs(): boolean
    getMaxStatementLength(): int
    getMaxStatements(): int
    getMaxTableNameLength(): int
    getMaxTablesInSelect(): int
    getMaxUserNameLength(): int
    getDefaultTransactionIsolation(): int
    supportsTransactions(): boolean
    supportsTransactionIsolationLevel(arg0: int): boolean
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
    getBestRowIdentifier(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: boolean): java.sql.ResultSet
    getVersionColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
    getPrimaryKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
    getImportedKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
    getExportedKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
    getCrossReference(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): java.sql.ResultSet
    getTypeInfo(): java.sql.ResultSet
    getIndexInfo(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: boolean): java.sql.ResultSet
    supportsResultSetType(arg0: int): boolean
    supportsResultSetConcurrency(arg0: int, arg1: int): boolean
    ownUpdatesAreVisible(arg0: int): boolean
    ownDeletesAreVisible(arg0: int): boolean
    ownInsertsAreVisible(arg0: int): boolean
    othersUpdatesAreVisible(arg0: int): boolean
    othersDeletesAreVisible(arg0: int): boolean
    othersInsertsAreVisible(arg0: int): boolean
    updatesAreDetected(arg0: int): boolean
    deletesAreDetected(arg0: int): boolean
    insertsAreDetected(arg0: int): boolean
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
    supportsResultSetHoldability(arg0: int): boolean
    getResultSetHoldability(): int
    getDatabaseMajorVersion(): int
    getDatabaseMinorVersion(): int
    getJDBCMajorVersion(): int
    getJDBCMinorVersion(): int
    getSQLStateType(): int
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
    getMaxLogicalLobSize(): long
    supportsRefCursors(): boolean
}

    }
}